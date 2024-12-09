---
date: 2019-11-07T08:00:00.000Z
short: "When the `download` attribute on an HTML anchor is not enough. Also: how
  to zip on the fly with Next.js API routes."
tags: []
created_at: 2022-09-13T15:51:11Z
updated_at: 2024-03-05T18:38:47Z
title: Trigger download of remote images with Next.js
slug: trigger-download-of-remote-images-with-nextjs
category: blog
description: "> 👉 **Heads-up:** This post is probably outdated! Proceed with care.\r"
---


> 👉 **Heads-up:** This post is probably outdated! Proceed with care.

Recently I needed to create a component in a Next.js app that triggers a fiel download prompt. Typically, using the `download` attribute on the link to the file would be enough to trigger a download instead of opening the file directly in the browser.

This would be an example to ask the browser to open the download dialog for the file (instead of opening it):
```html
<a href="/path/to/my/file.jpg" download>Download file.jpg</a>
```
(additionally you could provide a custom filename, like this: `download="othername.jpg"`)

## "download" attribute does not work for images on a different origin

As it turns out, the `download` attribute only works for same-origin resources. In my application the images are living on a different server, therefore this approach fails (i.e. the browser ignores `download` attribute and simply opens the file directly).

## The solution

I decided to use a fairly new feature of Next.js: [API routes](https://nextjs.org/docs#api-routes)

The aim is to create an API endpoint that takes the URL to the file as a parameter and acts as a simple proxy to the target server. Before sending it back to the user the proxy sets the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header, in order to trigger a download.

Here's what the final function looks like: 
```javascript
const request = require("request");

export default (req, res) => {
  // path to file
  const filePath = req.query.filename;     

  // filename only
  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

  // set header
  res.setHeader("content-disposition", "attachment; filename=" + fileName);

  // send request to the original file
  request
    .get(process.env.REMOTE_URL + filePath) // download original image
    .on("error", function(err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
      return;
    })
    .pipe(res); // pipe converted image to HTTP response
};
```

Now, I can link to `/api/proxy?filename=public/mybeautifulpicture.jpg` to trigger a download prompt in the browser, even if the file is on a different domain.

> Be aware of potential [Server Side Request Forgery (SSRF)](https://en.wikipedia.org/wiki/Server-side_request_forgery) vulnerability when using the url to the file directly. Thanks to [Thomas Konrad](https://twitter.com/_thomaskonrad) for pointing this out! 🙏

## Bonus: zip multiple files on the fly before downloading

As an addition to above solution, I implemented a way to request multiple files from the remote server, which are zipped up on the fly before delivered to the user. Using this approach, there's no need to do a cleanup job to remove generated zips from the server after the user has downloaded them. 

Using the following script, I can request a zip of multiple files by sending a POST request e.g. to /api/zip with a body of `{files: ["file1.jpg", "file2.jpg"]}`. 

> This is a proof of concept implementation. You might want to add some checks like an allow-list and limits to prevent potential malicious usage.

```javascript
// file: api/zip.js
var async = require("async");
var request = require("request");
var archiver = require("archiver");

export default (req, res) => {
  
  // name of final zip file
  const zipFileName = "downloads.zip";

  // check for "files" in request body
  if (req.body.files == undefined || req.body.files == "") {
    outputError(res);
    return;
  }

  // split up files
  let filesArray = req.body.files.split(",");

  // check if files is an array
  if (!Array.isArray(filesArray)) {
    outputError(res);
    return;
  }

  // prepend every file with the base url of the remote server
  // this assumes REMOTE_URL is set as an environment variable
  filesArray = filesArray.map(f => process.env.REMOTE_URL + f);

  // set content-disposition header
  res.setHeader("content-disposition", "attachment; filename=" + zipFileName);

  // zip them files
  zipURLs(filesArray, res);
};

/**
 * Zip files and send it as response
 * @param urls {array} files to zip
 * @param outStream the response object
 */
function zipURLs(urls, outStream) {
  var zipArchive = archiver.create("zip");

  async.eachLimit(urls, 3,
    function(url, done) {
      try {
        var stream = request.get(url);
      } catch (error) {
        outputError(outStream);
        return;
      }

      stream
        .on("error", function(err) {
          return done(err);
        })
        .on("end", function() {
          return done();
        });

      // Use the last part of the URL as a filename within the ZIP archive.
      zipArchive.append(stream, { name: url.replace(/^.*\//, "") });
    },
    function(err) {
      if (err) throw err;
      zipArchive.pipe(outStream);
      zipArchive.finalize();
    }
  );
}

/**
 * Output 404 Error
 * @param res 
 */
function outputError(res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("<h1>Whoops, something went wrong</h1>");
  res.end();
}
```

Let me know what you think about this approach by leaving a comment below.