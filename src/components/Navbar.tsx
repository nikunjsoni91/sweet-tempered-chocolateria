import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-black/80 backdrop-blur px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-xl">
            Sweet Tempered Chocolateria
          </h1>
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}