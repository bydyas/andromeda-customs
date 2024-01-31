import '@/app/ui/globals.css';

import type { Metadata } from 'next';
import { cn } from '@/app/lib/utils';
import { Header } from '@/app/ui/header';
import { inter } from '@/app/ui/fonts';
import { Footer } from './ui/footer';

export const metadata: Metadata = {
  title: 'Andromeda Customs',
  description: 'Stars adorn your ship',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-full font-sans antialiased')}>
        <Header />
        <div className="h-[calc(100vh_-_112px)] lg:h-[calc(100vh_-_136px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
