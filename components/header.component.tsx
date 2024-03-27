import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';

/**
 * Header component
 * @return {JSX.Element}
 */
export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Logo Coopera Esportes"
          width={60}
          height={60}
        />
      </Link>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/about">Quem Somos</Link>
          </li>
          <li>
            <Link href="/events">Eventos</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuIcon}>
        <Image src="/menu.svg" alt="Ícone do menu" width={60} height={60} />
      </div>
    </header>
  );
}
