import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

const NAV_LINKS = [
  { label: 'Programmes', href: '#target-audience' },
  { label: 'Meet the Trainers', href: '#meet-the-trainers' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Community', href: '#community-events' },
  { label: 'For Societies', href: '#society-partnership' },
  { label: 'FAQs', href: '#faqs' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappHref = buildWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#123047]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#123047] font-display font-bold text-xl tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B8F86] rounded-md"
        >
          <motion.img
            src="/assets/aistudio/FitCircle_Logo_Community_Garden_8ae436be.png"
            alt="FitCircle logo"
            loading="lazy"
            whileHover={{ scale: 1.1, rotate: 6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            className="w-9 h-9 rounded-full object-cover border border-[#123047]/10 shrink-0"
          />
          <span>
            Fit<span className="text-[#0B8F86]">Circle</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#123047]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#0B8F86] transition-colors py-1 border-b-2 border-transparent hover:border-[#0B8F86] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B8F86]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + Mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123047]"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#123047]/15 text-[#123047] hover:bg-[#F7FAF8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B8F86]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-t border-[#123047]/10 px-4 py-4 space-y-1"
        >
          <a
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-3 rounded-lg text-base font-medium text-[#123047] hover:bg-[#F7FAF8]"
          >
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-[#123047] hover:bg-[#F7FAF8]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B8F86] text-white text-base font-semibold hover:bg-[#09766E] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
