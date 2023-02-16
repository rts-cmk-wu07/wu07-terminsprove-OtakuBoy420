import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center pt-12">
      <h1 className="text-2xl">404</h1>
      <p className="text-lg">Page not found</p>
      <Link className="mt-4 rounded-lg border-2 p-4" to="/">
        Go back to home
      </Link>
    </section>
  );
}
