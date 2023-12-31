import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';
import Providers from '@/lib/providers';

// const spaceMono = Space_Mono({weights: {400,700}, subsets: ['latin'] });
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});
1;

export const metadata: Metadata = {
  title: 'GitHub users search',
  description: 'Crated by Dada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={spaceMono.className}>
        <Providers>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
