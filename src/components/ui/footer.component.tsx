import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import gefLogo from "@/assets/gef-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";
import { Logo } from "./logo.component";

export function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-6 py-8">
      <nav className="flex flex-col space-y-6 items-center w-full md:flex-row md:justify-evenly md:items-center md:space-y-0">
        <Logo className="h-20" />
        <div className="flex space-x-3 md:flex-col md:space-y-3">
          <Link href="https://www.instagram.com/cooperaesportes" target="_blank">
            <Image src={instagramLogo} alt="Instagram" width={26} height={26} className="dark:invert"/>
          </Link>
        </div>
        <ul className="flex flex-col items-center space-y-3 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-0 md:space-y-0">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:underline hover:underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-xs">Apoio:</p>
          <Link href="https://gefcapital.com/" target="_blank">
            <Image src={gefLogo} alt="Logo" width={150} height={150}  className="dark:invert"/>
          </Link>
        </div>
      </nav>
      <p>
        © {new Date().getFullYear()} Coopera LTDA. Todos direitos reservados.
      </p>
    </footer>
  );
}
