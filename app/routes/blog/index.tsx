import { Link, useLoaderData } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';
import path from 'path';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';

export let loader: LoaderFunction = (whatthis) => {
  return getPosts();
};

export type Post = {
  slug: string;
  title: string;
  date: string;
};

const postsPath = path.join(__dirname, '../..', 'app/routes/blog');

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

export default function BlogIndex() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h2>I should probably list out the articles here eh?</h2>
      Here you go.
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            {new Date(post.date).toDateString()}:

            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export let meta: MetaFunction = () => {
  return {
    title: "Blog | Marius Espejo",
    description: "Blog posts by Marius Espejo"
  };
};
