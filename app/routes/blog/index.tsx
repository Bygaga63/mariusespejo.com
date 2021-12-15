import { Link } from 'remix';

export default function BlogIndex() {
  return (
    <div>
      <h2>I should probably list out the articles here eh?</h2>
      Here you go.
      <ul>
        <li>
          <Link to="first-post">First Post</Link>
        </li>
      </ul>
    </div>
  );
}
