import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingControls() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setCanScrollUp(scrollY > 220);
      setNearBottom(maxScroll - scrollY < 160);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollDown() {
    const step = Math.round(window.innerHeight * 0.85);
    window.scrollBy({ top: step, behavior: 'smooth' });
  }

  return (
    <div
      aria-label="Page navigation and WhatsApp enquiry controls"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex flex-col items-end gap-2 sm:gap-2.5"
    >
      {/* Compact Scroll Up & Scroll Down Controls */}
      <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#123047]/15 p-1 shadow-md">
        <button
          type="button"
          onClick={scrollUp}
          disabled={!canScrollUp}
          aria-label="Scroll to top of page"
          title="Scroll up"
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full inline-flex items-center justify-center transition-colors ${
            canScrollUp
              ? 'text-[#123047] hover:bg-[#0B8F86] hover:text-white cursor-pointer'
              : 'text-[#123047]/30 cursor-not-allowed'
          }`}
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={scrollDown}
          disabled={nearBottom}
          aria-label="Scroll down page"
          title="Scroll down"
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full inline-flex items-center justify-center transition-colors ${
            !nearBottom
              ? 'text-[#123047] hover:bg-[#0B8F86] hover:text-white cursor-pointer'
              : 'text-[#123047]/30 cursor-not-allowed'
          }`}
        >
          <ArrowDown className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* WhatsApp Logo Enquiry Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp (+91 97848 85291)"
        className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#128C7E] text-white text-xs sm:text-sm font-semibold shadow-lg hover:bg-[#0B8F86] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123047]"
      >
        <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        <span className="whitespace-nowrap">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
