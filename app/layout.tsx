import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

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

const siteUrl = process.env.APP_URL || 'https://GfilledGroup.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gfilled Group | Premium Real Estate Acquisition & Legal Advisory',
    template: '%s | Gfilled Group',
  },
  description: 'Secure property purchases in Nigeria with absolute legal certainty. Specialized escrow, due-diligence, and title verification for Nigerians at home and abroad.',
  keywords: ['Nigeria real estate', 'property verification Nigeria', 'land title search', 'escrow service Nigeria', 'property lawyer Abuja', 'real estate due diligence', 'diaspora property buying Nigeria'],
  authors: [{name: 'Gfilled Group'}],
  creator: 'Gfilled Group',
  publisher: 'Gfilled Group',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png',
    apple: 'https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Gfilled Group',
    title: 'Gfilled Group | Premium Real Estate Acquisition & Legal Advisory',
    description: 'Secure property purchases in Nigeria with absolute legal certainty. Specialized escrow, due-diligence, and title verification for Nigerians at home and abroad.',
    url: '/',
    images: [{
      url: 'https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png',
      width: 1200,
      height: 630,
      alt: 'Gfilled Group - Realty & Legal Practice',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gfilled Group | Premium Real Estate Acquisition & Legal Advisory',
    description: 'Secure property purchases in Nigeria with absolute legal certainty. Specialized escrow, due-diligence, and title verification for Nigerians at home and abroad.',
    images: ['https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png'],
  },
  category: 'legal services',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body suppressHydrationWarning className="bg-white font-sans antialiased text-zinc-900 selection:bg-amber-100 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
