import { CalendarClock, Sunrise, Sunset } from 'lucide-react';
import { ADULT_GROUP_ACTIVITIES, COMMUNITY_EXPERIENCES } from '../data/fitcircleData';
import { buildScheduleWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export function CommunityAndTimingsSections() {
  return (
    <>
      {/* Section 12: Community Events */}
      <section
        id="community-events"
        className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
            <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
              Community-Driven Experiences
            </p>
            <h2
              className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              A Fitness Routine That Feels Like Community Time.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A6072] leading-relaxed">
              FitCircle goes beyond solitary workouts. We celebrate consistency, teamwork, and
              everyday participation—never body appearance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Society-Wide Community Formats */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#123047]/10 p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl text-[#123047]">
                Neighbourhood Challenges & Community Formats
              </h3>
              <p className="mt-2 text-sm text-[#4A6072]">
                Designed to help residents meet neighbours, stay consistent, and share joyful
                milestones together.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-[#123047]/85">
                {COMMUNITY_EXPERIENCES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#0B8F86] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Enjoyable Adult Group Formats */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-[#123047]/10 p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl text-[#123047]">
                Social Group Activities for Adults
              </h3>
              <p className="mt-2 text-sm text-[#4A6072]">
                Variety-rich group sessions where men and women stay active side by side in a
                supportive atmosphere.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm text-[#123047]/85">
                {ADULT_GROUP_ACTIVITIES.map((activity) => (
                  <li key={activity} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#F28C45] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 13: Proposed Timings */}
      <section
        id="timings"
        className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B8F86]">
                <CalendarClock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Proposed Operating Times</span>
              </div>
              <h2
                className="font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Flexible Morning & Evening Batches
              </h2>
              <p className="text-base text-[#4A6072] leading-relaxed">
                Actual batch availability depends on your residential society’s approved timing
                slots, trainer availability, and resident enrolment.
              </p>
              <div className="pt-2">
                <a
                  href={buildScheduleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Ask Us For The Schedule In Your Society</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 p-6 sm:p-7">
                <div className="w-10 h-10 rounded-xl bg-[#79BE43]/15 text-[#4C8720] flex items-center justify-center">
                  <Sunrise className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#4A6072]">
                  Morning Window
                </p>
                <p className="mt-1 font-display font-bold text-2xl sm:text-3xl text-[#123047] tabular-nums">
                  6:00 AM – 8:00 AM
                </p>
                <p className="mt-2 text-sm text-[#4A6072]">
                  Ideal for working adults, morning walkers, and active family start-to-day batches.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 p-6 sm:p-7">
                <div className="w-10 h-10 rounded-xl bg-[#F28C45]/15 text-[#C8641F] flex items-center justify-center">
                  <Sunset className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#4A6072]">
                  Evening Window
                </p>
                <p className="mt-1 font-display font-bold text-2xl sm:text-3xl text-[#123047] tabular-nums">
                  5:00 PM – 8:00 PM
                </p>
                <p className="mt-2 text-sm text-[#4A6072]">
                  Ideal for after-school kids activity clubs, teen sports batches, and post-work adult
                  sessions.
                </p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
