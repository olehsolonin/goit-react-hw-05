import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Oops! No page was found! Please <Link to="/">back to main page</Link>
      </p>
    </div>
  );
}
