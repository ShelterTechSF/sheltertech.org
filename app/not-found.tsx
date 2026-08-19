import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="container"><p className="eyebrow">Page not found</p><h1 className="display">404</h1><p>That page has moved or no longer exists.</p><Link className="button button-blue" href="/">Return home</Link></div></section>;
}
