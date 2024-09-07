import Link from "next/link";
import { Logo } from "./logo.component";
import { NavLinks } from "@/constants";



export function Header() {
  return (
    <header className="relative shadow-md h-16">
      <nav className="flex justify-between items-stretch px-4 py-2">
        <Link href="/">
          <Logo />
        </Link>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul className="md:flex md:items-stretch hidden">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-all duration-300 hover:text-tertiary flex items-center h-full w-full px-4 text-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
