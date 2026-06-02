import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gfilled Group | Premium Real Estate Acquisition & Legal Advisory',
  description: 'Secure property purchases in Nigeria with absolute legal certainty. Specialized escrow, due-diligence, and title verification for Nigerians at home and abroad.',
  icons: {
    icon: 'https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-white font-sans antialiased text-zinc-900 selection:bg-amber-100 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
