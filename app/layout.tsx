import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Iheoma Oparaugo | B2B Email Conversion Strategist for HR & Health Tech',
  description: 'I help HR Tech and Health Tech companies plug the gaps between demo request and closed deal. Email conversion infrastructure built on real buyer psychology.',
  openGraph: {
    title: 'Plug the 40% Revenue Leak in Your Sales Pipeline',
    description: 'I help HR Tech and Health Tech companies stop losing qualified pipeline after the demo. Email sequences, deliverability, and conversion infrastructure.',
    images: ['/images/positive-silence-og.png'],
    url: 'https://www.iheomaoparaugo.com',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5N08Y0PTTC" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-5N08Y0PTTC');` }} />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}