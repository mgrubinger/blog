import { readFile, writeFile } from "fs/promises";

let template = await readFile("./src/content/blog/__template", {
  encoding: "utf-8",
});

const date = new Date();
date.toISOString();

template = template.replaceAll("2024-10-03T14:22:34Z", date);

writeFile(
  `./src/content/blog/${date.getFullYear()}-${date.getMonth()+1}--title.md`,
  template
);
