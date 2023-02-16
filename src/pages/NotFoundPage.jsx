import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl">404</h1>
      <p className="text-lg">Page not found</p>
      <Link className="mt-4 rounded-lg border-2 p-4" to="/home">
        Go back to home
      </Link>
    </section>
  );
}
