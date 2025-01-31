import { stringify } from 'yaml';
import { listContent } from '../lib/content.js';
import { writeFile, mkdir } from 'node:fs/promises';
import { createWriteStream, existsSync } from 'node:fs';
import fetch from "node-fetch";
import {fileTypeFromBuffer} from "file-type";

const OUTPUT_DIR = '/src/content';

let blogposts = await listContent();

function toFrontmatter(p) {
	let frontmatter = { ...p.frontmatter };
	frontmatter.created_at = p.ghMetadata.created_at;
	frontmatter.updated_at = p.ghMetadata.updated_at;
	frontmatter.date = p.date ?? p.ghMetadata.created_at;
	frontmatter.title = p.ghMetadata.title;
	frontmatter.slug = p.slug;
	frontmatter.category = p.category;
	frontmatter.description = p.description;
	frontmatter.tags = p.tags;

	return frontmatter;
}


async function savePhotoFromAPI(url, filename, slug) {
  console.log("downloding " + url);

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileType = await fileTypeFromBuffer(buffer);

  if (!existsSync(`${OUTPUT_DIR}/${slug}`)){
    await mkdir(`${OUTPUT_DIR}/${slug}`);
}

  if (fileType.ext) {
      const outputFileName = `${OUTPUT_DIR}/${slug}/${filename}.${fileType.ext}`
      createWriteStream(outputFileName).write(buffer)
      return [url, outputFileName];
  } else {
      console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
  }
}


console.log(blogposts[0]);

blogposts.forEach(async (entry) => {

  // let entry = blogposts[0];
  let frontMatter = toFrontmatter(entry);

  let imagePromises = [];
  {
    const rex = /https:\/\/github\.com\/user\-attachments\/assets\/([\w|-]*)/gi;
    let matches = entry.content.matchAll(rex);
    for(let image of matches) {
      imagePromises.push(savePhotoFromAPI(image[0], image[1], entry.slug));
    }
  }

  {
    const rex = /https:\/\/user-images\.githubusercontent\.com\/465547\/([\w|-]*[\.|\w]+)/gi;
    let matches = entry.content.matchAll(rex);
    for(let image of matches) {
      imagePromises.push(savePhotoFromAPI(image[0], image[1], entry.slug));
    }
  }

  let imageFiles = await Promise.all(imagePromises);
  imageFiles.forEach(file => {
    entry.content = entry.content.replace(file[0], file[1]);
  })

  await writeFile(`./${OUTPUT_DIR}/${frontMatter.slug}.md`, `---\n${stringify(frontMatter)}---\n\n${entry.content}`);
})
