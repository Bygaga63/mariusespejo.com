import styles from 'highlight.js/styles/github-dark-dimmed.css';
import type { LinksFunction, LoaderFunction } from 'remix';
import { Outlet } from "remix";

export let loader: LoaderFunction = () => {
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

