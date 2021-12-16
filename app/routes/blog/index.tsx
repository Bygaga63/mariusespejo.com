import { Link, useLoaderData } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';
import { getPosts, Post } from '~/post';

export let loader: LoaderFunction = () => {
  return getPosts();
};

export default function BlogIndex() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h2>Articles</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <span style={{marginRight: 10}}>{new Date(post.date).toUTCString().substring(0,16)}:</span>

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
