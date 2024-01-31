import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const star_jedi = localFont({ src: '../../public/fonts/Starjedi.ttf' });
