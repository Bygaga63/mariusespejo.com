import styles from 'highlight.js/styles/github-dark-dimmed.css';
import type { LinksFunction, LoaderFunction } from 'remix';
import { MetaFunction, Outlet } from "remix";

export let loader: LoaderFunction = (whatthis) => {
  return null;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export default function Blog() {
  return (
    <Outlet />
  );
}

export let meta: MetaFunction = () => {
  return {
    title: "Blog | Marius Espejo",
    description: "Blog posts by Marius Espejo"
  };
};