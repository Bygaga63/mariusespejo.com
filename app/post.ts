import path from 'path';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
};

const postsPath = path.join(__dirname, '../..', 'build/routes/blog');

export async function getPosts(): Promise<Post[]> {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir
      .filter((filename) => filename.includes('.mdx'))
      .map(async (filename) => {
        const file = await fs.readFile(path.join(postsPath, filename));
        const { attributes } = parseFrontMatter<Record<string, any>>(
          file.toString()
        );
        return {
          slug: filename.replace(/\.mdx$/, ''),
          title: attributes.title,
          date: attributes.date,
        };
      })
  );
}
