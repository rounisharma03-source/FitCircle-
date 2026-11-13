import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { FitCircleMascot } from './FitCircleMascot';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroSection() {
  const whatsappHref = buildWhatsAppUrl();

  return (
    <section
      id="top"
      className="relative bg-white border-b border-[#123047]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Brand Message & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#0B8F86]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Jaipur, Rajasthan</span>
              </span>
              <span className="text-[#123047]/30" aria-hidden="true">
                ·
              </span>
              <span className="text-[#123047]/80">Residential Society Pilot Launch</span>
            </div>

            <h1
              className="font-display font-bold text-[#123047] tracking-tight leading-[1.08]"
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)',
                textWrap: 'balance',
              }}
            >
              A Fitter Society Starts Together.
            </h1>

            <p className="text-lg sm:text-xl text-[#123047]/80 leading-relaxed max-w-2xl">
              Fitness, Fun Activities and Community Experiences Delivered to Your Residential Society
              in Jaipur.
            </p>

            {/* Highlighted Tagline & Single-Line 3-Pillar Statement */}
            <div className="space-y-3 pt-1">
              <div className="inline-block rounded-xl bg-[#E9F6F4] border-l-4 border-[#0B8F86] px-4 py-3 shadow-xs">
                <p className="font-display font-extrabold text-base sm:text-lg text-[#123047] uppercase tracking-wide leading-snug">
                  Fit Circle Delivers{' '}
                  <span className="text-[#0B8F86]">Fit Society, Fit Community.</span>
                </p>
              </div>

              <div className="flex flex-nowrap items-center gap-1 sm:gap-2.5 text-[10.5px] min-[400px]:text-xs sm:text-sm font-bold uppercase tracking-normal sm:tracking-wider whitespace-nowrap">
                <span className="text-[#0B8F86]">Expert Curated</span>
                <span className="text-[#123047]/35" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#4C8720]">Community Driven</span>
                <span className="text-[#123047]/35" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#D97228]">Fun Powered</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B8F86] text-white font-semibold text-base hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123047]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#target-audience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F7FAF8] border border-[#123047]/15 text-[#123047] font-semibold text-base hover:border-[#0B8F86] hover:text-[#0B8F86] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B8F86]"
              >
                <span>Explore Our Programmes</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Big & Bold Move More. Live Together. + Highlighted Capitalised Welcome Statement */}
            <div className="pt-2 space-y-2.5">
              <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#123047] uppercase tracking-tight leading-tight">
                Move More. <span className="text-[#0B8F86]">Live Together.</span>
              </p>
              <p className="inline-block rounded-xl bg-[#FFF4E8] border border-[#F28C45]/45 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#123047] uppercase tracking-wide leading-snug">
                Welcoming Kids, Teens, Adults &amp; Families With Zero Gym Travel.
              </p>
            </div>
          </div>

          {/* Right Column: Official Uploaded FitCircle Logo & Animated Mascot */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            <div className="w-full max-w-md lg:max-w-lg rounded-3xl bg-[#F7FAF8] border border-[#123047]/10 p-5 sm:p-7 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
                transition={{
                  opacity: { duration: 0.45 },
                  scale: { duration: 0.45 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                whileHover={{ scale: 1.03 }}
                className="w-full flex justify-center"
              >
                <img
                  src="/assets/aistudio/FitCircle_Logo_Community_Garden_8ae436be.png"
                  alt="FitCircle official logo depicting kids, teens, adults, families and seniors exercising together in a residential society garden"
                  loading="lazy"
                  className="w-full h-auto max-w-[400px] rounded-2xl object-contain"
                />
              </motion.div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#4A6072] text-center">
                Organised Fitness, Outdoor Play &amp; Community Sessions in Your Society Garden
              </p>
            </div>

            <div className="w-full max-w-md lg:max-w-lg">
              <FitCircleMascot />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
