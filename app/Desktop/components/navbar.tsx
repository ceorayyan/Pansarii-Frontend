import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg" // replace with your logo
            alt="Pansari Inn"
            width={36}
            height={36}
          />
          <span className="text-lg font-semibold text-zinc-900 dark:text-white">
            Pansari Inn
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Rooms
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
