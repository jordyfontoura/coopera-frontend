"use client";

import Link from "next/link";
import { Logo } from "./logo.component";
import { NavLinks } from "@/constants";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Previne o scroll da página quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function para restaurar o scroll quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="shadow-md h-16 overflow-visible dark:bg-neutral-900">
      <nav className="flex justify-between items-stretch px-4 py-2">
        <Link href="/" tabIndex={-1}>
          <Logo />
        </Link>
        <button className="md:hidden" name="menu-hamburguer" title="Clique para abrir o menu" onClick={toggleMenu}>
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
        <ul className={isMenuOpen ? "fixed inset-0 z-50 bg-background flex flex-col space-y-4 items-stretch justify-center" : "md:flex md:items-stretch hidden"}
          onClick={closeMenu}
        >
          <button 
            className="md:hidden absolute right-8 top-8 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {NavLinks.map((link) => (
            <li key={link.href} className="text-center">
              <Link
                href={link.href}
                target={link.target}
                className={`transition-all duration-300 hover:text-tertiary flex items-center justify-center h-full w-full px-4 py-4 text-nowrap text-xl md:text-base font-medium ${
                  link.href === pathname ? 'text-tertiary' : 'text-neutral-700 dark:text-neutral-300'
                }`}
                onClick={closeMenu}
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

