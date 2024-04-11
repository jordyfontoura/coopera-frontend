import type {Metadata} from 'next';
import '@/styles/globals.scss';
import {Roboto} from 'next/font/google';
import {Header} from '@/components/layout/header/header.component';
import {Footer} from '@/components/layout/footer/footer.component';

/**
 * The Inter font.
 */
// eslint-disable-next-line new-cap
const inter = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '500'],
});

export const metadata: Metadata = {
  title: 'Coopera Esportes',
  description: 'ONG de apoio à prática esportiva e à educação',
};

/**
 * The main layout of the application.
 * @return {JSX.Element} The main layout of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
