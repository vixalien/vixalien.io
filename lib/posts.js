import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

let postsDirectory = 'blog';

function getPosts() {
  let META = /export\s+(const|let)\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
  let DIR = path.join(process.cwd(), postsDirectory);
  if (!fs.readdirSync) return []
  let files = fs
      .readdirSync(DIR)
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  return files
    .map(file => getPostData(stripExt(file)))
    .filter((meta) => meta.published)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getAllPostIds() {
  return fs.readdirSync(postsDirectory).map(fileName => {
    return {
      params: {
        id: stripExt(fileName)
      }
    }
  })
}

function stripExt(file) {
  return file.replace(/\.mdx|.md$/, '')
}

async function getPostContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  console.log("yeah ",fullPath)
  return <div>works</div>
}

function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  let DIR = path.join(process.cwd(), postsDirectory);
    
  let name = fs
    .readdirSync(DIR)
    .find((file) => ((file.indexOf(id+".mdx")||file.indexOf(id+".md"))>-1));

  let link = path.join(DIR, name);

  let contents = fs.readFileSync(link, 'utf8').replace(/\r\n?|\n/gm, "\n");

  // Use META to parse the post metadata section
  let META = /export\s+(const|let)\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

  let match = META.exec(contents.toString());

  if (!match || typeof match[2] !== 'string')
    throw new Error(`${link} needs to export let meta = {}`);

  let meta = eval('(' + match[2] + ')');


  // Combine the data with the id
  return {
    id,
    href: '/blog/' + name.replace(/\.mdx$|\.md$/, ''),
    ...meta,
  }
}

export { getPostData, getPostContent };
    
export default getPosts();