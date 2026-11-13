import { useState } from 'react';
import { ArrowDownRight, Check } from 'lucide-react';
import { TARGET_AUDIENCES, WHY_PROBLEMS } from '../data/fitcircleData';
import { Reveal } from './Reveal';

type AudienceFilter = 'all' | 'pilot' | 'future';

export function WhyAndAudienceSections() {
  const [audienceFilter, setAudienceFilter] = useState<AudienceFilter>('all');

  const filteredAudiences = TARGET_AUDIENCES.filter((item) => {
    if (audienceFilter === 'pilot') return item.status === 'Pilot Launch';
    if (audienceFilter === 'future') return item.status === 'Planned Future Programme';
    return true;
  });

  return (
    <>
      {/* Section 3: Why FitCircle? */}
      <section
        id="why-fitcircle"
        className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
            <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
              Why FitCircle Exists
            </p>
            <h2
              className="mt-2 font-display font-bold text-2xl sm:text-4xl text-[#123047] uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Fitness Comes to Your Society · Your Community · Your Convenience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A6072] leading-relaxed">
              Modern residential routines leave children drawn to screens, teenagers short on
              structured play, and working adults too busy to commute to commercial gyms. FitCircle
              brings qualified trainers, portable gear, and organised group activities right to your
              society premises—supporting healthier screen-life balance and active everyday living.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_PROBLEMS.map((group) => (
              <article
                key={group.id}
                className="bg-white rounded-2xl border border-[#123047]/10 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#123047]/10">
                    <h3 className="font-display font-bold text-xl text-[#123047]">
                      {group.audience}
                    </h3>
                    <span
                      className="text-xs font-bold uppercase tracking-wide whitespace-nowrap shrink-0"
                      style={{ color: group.accentHex }}
                    >
                      {group.ageNote}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {group.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-[#123047]/80 leading-relaxed"
                      >
                        <Check
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: group.accentHex }}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 4: Target Audience */}
      <section
        id="target-audience"
        className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                Who We Serve
              </p>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Programmes for Every Generation in Your Society
              </h2>
              <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                Designed for both men and women, boys and girls—welcoming complete beginners rather
                than promoting intimidating bodybuilding culture.
              </p>
            </div>

            {/* Interactive Filter Control */}
            <div
              role="group"
              aria-label="Filter programmes by launch phase"
              className="inline-flex items-center gap-1 p-1 bg-[#F7FAF8] border border-[#123047]/10 rounded-xl self-start lg:self-auto"
            >
              <button
                type="button"
                onClick={() => setAudienceFilter('all')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  audienceFilter === 'all'
                    ? 'bg-[#123047] text-white'
                    : 'text-[#4A6072] hover:text-[#123047]'
                }`}
              >
                All Groups
              </button>
              <button
                type="button"
                onClick={() => setAudienceFilter('pilot')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  audienceFilter === 'pilot'
                    ? 'bg-[#0B8F86] text-white'
                    : 'text-[#4A6072] hover:text-[#123047]'
                }`}
              >
                Initial Pilot
              </button>
              <button
                type="button"
                onClick={() => setAudienceFilter('future')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  audienceFilter === 'future'
                    ? 'bg-[#F28C45] text-white'
                    : 'text-[#4A6072] hover:text-[#123047]'
                }`}
              >
                Future Planned
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAudiences.map((item) => {
              const isFuture = item.status === 'Planned Future Programme';
              return (
                <a
                  key={item.id}
                  href={`#${item.targetId}`}
                  className={`group rounded-2xl border p-6 flex flex-col justify-between transition-colors ${
                    isFuture
                      ? 'bg-[#F7FAF8] border-dashed border-[#123047]/20 hover:border-[#F28C45]'
                      : 'bg-white border-[#123047]/10 hover:border-[#0B8F86]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                      <span
                        className={
                          isFuture ? 'text-[#C8641F] font-bold' : 'text-[#0B8F86] font-bold'
                        }
                      >
                        {item.status}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{item.ageRange}</span>
                    </div>

                    <h3 className="mt-2.5 font-display font-bold text-xl text-[#123047] group-hover:text-[#0B8F86] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[#4A6072] leading-relaxed">{item.summary}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#123047]/10 flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-[#123047]/75">
                    <span>{item.forWhom}</span>
                    <ArrowDownRight
                      className="w-4 h-4 text-[#0B8F86] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              );
            })}
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
