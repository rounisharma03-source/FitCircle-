import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CommunityVoiceSlide {
  id: string;
  perspective: string;
  locality: string;
  programmeFocus: string;
  quote: string;
  highlight: string;
}

const COMMUNITY_VOICES: CommunityVoiceSlide[] = [
  {
    id: 'parent-voice',
    perspective: 'Parent of a 11-Year-Old · Pilot Interest',
    locality: 'Vaishali Nagar, Jaipur',
    programmeFocus: 'Kids Activity Club (10–13 yrs)',
    quote:
      'Having an organised obstacle course and agility session right inside our society lawn gives children something genuinely exciting to look forward to after school instead of screens.',
    highlight: 'Screen-free evening play inside society gates',
  },
  {
    id: 'adult-voice',
    perspective: 'Working Professional · Pilot Interest',
    locality: 'Malviya Nagar, Jaipur',
    programmeFocus: 'Adult Functional Fitness (35–55 yrs)',
    quote:
      'Between office traffic and family responsibilities, driving 30 minutes to a gym never lasted past two weeks. Stepping downstairs at 6:30 AM with neighbours makes staying consistent realistic.',
    highlight: 'Zero gym commute · Beginner-friendly pace',
  },
  {
    id: 'rwa-voice',
    perspective: 'Residential Community Coordinator · RWA Perspective',
    locality: 'Mansarovar, Jaipur',
    programmeFocus: 'Society / RWA Partnership',
    quote:
      'Our society doesn’t have space or budget for heavy gym equipment. A structured partner who brings portable gear, vetted coaches, and weekend family games keeps our common lawns active.',
    highlight: 'No permanent gym setup required',
  },
  {
    id: 'teen-voice',
    perspective: 'Teen & Family Perspective · Pilot Interest',
    locality: 'Jagatpura, Jaipur',
    programmeFocus: 'Teen Sports & Family Mornings',
    quote:
      'Speed ladders, resistance bands, and parents-versus-kids relays turn fitness into something social and fun rather than a solo chore.',
    highlight: 'Shared neighbourhood energy across ages',
  },
];

export function TestimonialsSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const current = COMMUNITY_VOICES[activeIndex];

  function goPrev() {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + COMMUNITY_VOICES.length) % COMMUNITY_VOICES.length);
  }

  function goNext() {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % COMMUNITY_VOICES.length);
  }

  function goToSlide(index: number) {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  return (
    <section
      id="community-voices"
      className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                Community Voices · Jaipur Pilot Perspectives
              </p>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Why Residents &amp; Families Want FitCircle in Their Society
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4A6072] leading-relaxed">
                Representative perspectives from Jaipur parents, working adults, and society
                coordinators shaping our initial pilot rollout.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <span className="text-xs font-semibold text-[#4A6072] tabular-nums mr-1">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(COMMUNITY_VOICES.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial slide"
                className="w-11 h-11 rounded-xl border border-[#123047]/15 bg-white text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial slide"
                className="w-11 h-11 rounded-xl border border-[#123047]/15 bg-white text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Interactive Slider Viewport */}
          <div className="mt-8 bg-white rounded-3xl border border-[#123047]/10 p-5 sm:p-8 md:p-10 overflow-hidden">
            <div className="min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -28 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0B8F86]">
                      <Quote className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{current.programmeFocus}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                      {current.highlight}
                    </span>
                  </div>

                  <blockquote className="font-display font-medium text-lg sm:text-xl md:text-2xl text-[#123047] leading-relaxed max-w-4xl">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-[#123047]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-[#123047]">
                        {current.perspective}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4A6072]">{current.locality}</p>
                    </div>

                    <a
                      href={buildWhatsAppUrl(
                        `Hi FitCircle! I would like to share feedback or request a pilot session for my society in Jaipur.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7FAF8] border border-[#123047]/15 text-xs sm:text-sm font-semibold text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] transition-colors sm:whitespace-nowrap shrink-0"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#0B8F86]" />
                      <span>Share Your Society Needs</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicator Bar */}
            <div
              className="mt-8 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Choose testimonial slide"
            >
              {COMMUNITY_VOICES.map((voice, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={voice.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slide ${idx + 1}: ${voice.locality}`}
                    onClick={() => goToSlide(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'w-8 bg-[#0B8F86]'
                        : 'w-2.5 bg-[#123047]/20 hover:bg-[#123047]/40'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
