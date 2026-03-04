'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoNavy from './LogoNavy';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', height: '72px' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        <Link href="/"><LogoNavy /></Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-montserrat transition-colors pb-1 ${
                pathname === link.href
                  ? 'text-[#003366] font-bold border-b-2 border-[#003366]'
                  : 'text-[#003366] font-medium hover:font-bold'
              }`}
              style={{ fontSize: '15px' }}>
              {link.label}
            </Link>
          ))}
          <Link href="https://calendly.com/fixyouremailmarketing/30mins" target="_blank" rel="noopener noreferrer"
            className="bg-[#b34d19] text-white font-montserrat font-semibold px-6 py-3 rounded hover:opacity-90 transition-all ml-4"
            style={{ fontSize: '16px' }}>
            Book a Call
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 justify-center" onClick={() => setMenuOpen(!menuOpen)} style={{ minHeight: '44px', minWidth: '44px' }}>
          <span className={`block w-6 h-0.5 bg-[#003366] transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#003366] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#003366] transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`font-montserrat py-3 ${
                pathname === link.href
                  ? 'text-[#003366] font-bold underline'
                  : 'text-[#003366] font-medium'
              }`}
              style={{ fontSize: '15px', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
              {link.label}
            </Link>
          ))}
          <Link href="https://calendly.com/fixyouremailmarketing/30mins" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-[#b34d19] text-white font-montserrat font-semibold px-6 py-3 rounded text-center mt-2 hover:opacity-90"
            style={{ fontSize: '16px' }}>
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}