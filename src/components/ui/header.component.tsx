"use client";

import Link from "next/link";
import { Logo } from "./logo.component";
import { NavLinks } from "@/constants";
import { useState } from "react";



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="shadow-md h-16 overflow-visible">
      <nav className="flex justify-between items-stretch px-4 py-2">
        <Link href="/" tabIndex={-1}>
          <Logo />
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
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
        <ul className={isMenuOpen ? "absolute inset-0 z-10 bg-background flex flex-col space-y-4 items-stretch justify-center" : "md:flex md:items-stretch hidden"}
          onClick={closeMenu}
        >
          <div className="md:hidden absolute right-8 top-8">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {NavLinks.map((link) => (
            <li key={link.href} className="text-center">
              <Link
                href={link.href}
                className="transition-all duration-300 hover:text-tertiary flex items-center justify-center h-full w-full px-4 py-2 text-nowrap text-xl md:text-base"
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
