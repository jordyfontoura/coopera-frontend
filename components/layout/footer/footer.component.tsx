import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

import InstagramIcon from '@/public/icons/socials/instagram.svg';
import FacebookIcon from '@/public/icons/socials/facebook.svg';
import GEFLogo from '@/public/icons/GEFlogo.svg';

/**
 * Footer component
 * @return {JSX.Element}
 */
export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={'/icons/logo-variant2.svg'}
            alt="Logo Coopera Esportes"
            width={210}
            height={77}
          />
        </Link>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/cooperaesportes/">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="https://www.facebook.com/CooperaEsportes/">
            <Image
              src={FacebookIcon}
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
            <li>
              <Link href="/mentores">Mentores</Link>
            </li>
            <li>
              <Link href="/seja-bolsista">Seja um bolsista</Link>
            </li>
            <li>
              <Link href="/seja-mentor">Seja um mentor</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src={GEFLogo}
            alt="Logo GEF"
            width={210}
            height={57}
          />
        </div>
      </div>
      <p>&copy; Coopera Ltda. Todos os diretos reservados. </p>
    </footer>
  );
}
