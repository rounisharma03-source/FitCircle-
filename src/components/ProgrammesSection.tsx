import { Users } from 'lucide-react';
import kidsVectorImg from '../assets/images/vector_kids_club_1794562131704.jpg';
import teensVectorImg from '../assets/images/vector_teens_club_1794562132389.jpg';
import adultsVectorImg from '../assets/images/vector_adults_club_1794562132712.jpg';
import familyVectorImg from '../assets/images/vector_family_community_1794562133598.jpg';
import {
  ADULTS_ACTIVITIES,
  FAMILY_ACTIVITIES,
  KIDS_ACTIVITIES,
  TEENS_ACTIVITIES,
} from '../data/fitcircleData';
import { buildProgrammeWhatsAppUrl } from '../utils/whatsapp';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ProgrammesSection() {
  return (
    <div className="bg-[#F7FAF8] border-b border-[#123047]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16 sm:space-y-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
              Initial Pilot Services · Available Now in Jaipur
            </p>
            <h2
              className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Four Core Society Programmes Launching First
            </h2>
            <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
              Every pilot programme below is delivered directly inside participating residential
              societies with trained coaches and portable equipment.
            </p>
          </div>
        </Reveal>

        {/* Section 5: Kids Activity Club */}
        <section
          id="kids-club"
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden shadow-xs"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 bg-[#F7FAF8] p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#123047]/10">
                <ResilientImage
                  src={kidsVectorImg}
                  alt="Vector illustration of children aged 10 to 13 smiling while running through an agility ladder and cones with a coach on a residential society lawn"
                  fallbackTitle="FitCircle Kids Activity Club"
                  fallbackSubtitle="Screen-free outdoor obstacle games and agility ladders in your society garden"
                  containerClassName="w-full max-w-[460px] aspect-[4/3] rounded-2xl border border-[#123047]/10 bg-white"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    <span className="text-[#4C8720]">Initial Pilot Programme</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">Age 10–13 Years</span>
                    <span aria-hidden="true">·</span>
                    <span>Boys &amp; Girls</span>
                  </div>

                  <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#123047]">
                    FitCircle Kids Activity Club
                  </h3>

                  <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                    <strong className="font-semibold text-[#123047]">Main Objective:</strong> Help
                    children enjoy physical activity, develop coordination, teamwork, confidence,
                    and healthy offline habits in a safe residential setting.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-[#123047]">Included Activities</h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#123047]/80">
                      {KIDS_ACTIVITIES.map((activity) => (
                        <li key={activity} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#79BE43] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#123047]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    Held in Your Society Garden or Open Play Area
                  </span>
                  <a
                    href={buildProgrammeWhatsAppUrl('FitCircle Kids Activity Club (10–13 years)')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors sm:whitespace-nowrap shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Enquire for Kids Club</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 6: Teen Fitness & Sports Club */}
        <section
          id="teens-club"
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden shadow-xs"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    <span className="text-[#0B8F86]">Initial Pilot Programme</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">Age 14–18 Years</span>
                    <span aria-hidden="true">·</span>
                    <span>Boys &amp; Girls</span>
                  </div>

                  <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#123047]">
                    FitCircle Teen Fitness & Sports Club
                  </h3>

                  <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                    <strong className="font-semibold text-[#123047]">Main Objective:</strong>{' '}
                    Develop physical confidence, healthy routines, teamwork, strength foundations,
                    and active lifestyles through engaging sports-style movement.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-[#123047]">Included Activities</h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#123047]/80">
                      {TEENS_ACTIVITIES.map((activity) => (
                        <li key={activity} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#0B8F86] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#123047]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    Structured Speed, Agility &amp; Team Challenges
                  </span>
                  <a
                    href={buildProgrammeWhatsAppUrl(
                      'FitCircle Teen Fitness & Sports Club (14–18 years)'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors sm:whitespace-nowrap shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Enquire for Teen Club</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F7FAF8] p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-l border-[#123047]/10 order-1 lg:order-2">
                <ResilientImage
                  src={teensVectorImg}
                  alt="Vector illustration of teenagers aged 14 to 18 doing agility cone drills, resistance band warmups, and outdoor sports on a society court"
                  fallbackTitle="FitCircle Teen Fitness & Sports Club"
                  fallbackSubtitle="Agility drills, strength foundations, and team sports right inside your society"
                  containerClassName="w-full max-w-[460px] aspect-[4/3] rounded-2xl border border-[#123047]/10 bg-white"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 7: Adult Functional Fitness */}
        <section
          id="adults-club"
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden shadow-xs"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 bg-[#F7FAF8] p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#123047]/10">
                <ResilientImage
                  src={adultsVectorImg}
                  alt="Vector illustration of adult men and women exercising together with light dumbbells, resistance bands, and mats on a residential society lawn"
                  fallbackTitle="FitCircle Adult Fitness Club"
                  fallbackSubtitle="Beginner-friendly functional strength and mobility workouts in your society lawn"
                  containerClassName="w-full max-w-[460px] aspect-[4/3] rounded-2xl border border-[#123047]/10 bg-white"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    <span className="text-[#D97228]">Initial Pilot Programme</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">Age 35–55 Years</span>
                    <span aria-hidden="true">·</span>
                    <span>Men &amp; Women · Beginner-Friendly</span>
                  </div>

                  <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#123047]">
                    FitCircle Adult Fitness Club
                  </h3>

                  <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                    <strong className="font-semibold text-[#123047]">Main Objective:</strong> Help
                    working adults overcome sedentary lifestyles, improve functional fitness, and
                    build workout consistency without travelling to a gym.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#F7FAF8] border border-[#123047]/10 px-4 py-3 text-sm text-[#123047]/85">
                    Every session includes suitable exercise modifications for beginners, returning
                    exercisers, and varied fitness levels—no heavy bodybuilding intimidation.
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-[#123047]">Included Activities</h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#123047]/80">
                      {ADULTS_ACTIVITIES.map((activity) => (
                        <li key={activity} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#F28C45] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#123047]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#4A6072]">
                    Morning &amp; Evening Batches Right Downstairs
                  </span>
                  <a
                    href={buildProgrammeWhatsAppUrl('FitCircle Adult Fitness Club (35–55 years)')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors sm:whitespace-nowrap shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Enquire for Adult Fitness</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 8: Family & Community Activities */}
        <section
          id="family-community"
          className="bg-[#123047] text-white rounded-3xl p-5 sm:p-8 lg:p-10 overflow-hidden"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#96D863]">
                    <span>Key FitCircle Differentiator</span>
                    <span className="text-white/30" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-white/80">All Suitable Age Groups</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    FitCircle Family &amp; Community Activities
                  </h3>

                  <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                    Unlike conventional fitness classes where everyone trains alone in headphones,
                    FitCircle turns movement into shared neighbourhood moments—bringing parents,
                    children, and neighbours together on the society lawn.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/15 rounded-2xl p-5">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                    <Users className="w-5 h-5 text-[#F28C45] shrink-0" aria-hidden="true" />
                    <h4 className="font-display font-semibold text-base text-white">
                      Shared Neighbourhood Experiences
                    </h4>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/90">
                    {FAMILY_ACTIVITIES.map((activity) => (
                      <li key={activity} className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#F28C45] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <a
                    href={buildProgrammeWhatsAppUrl(
                      'FitCircle Family & Community Activities (Society Events)'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors sm:whitespace-nowrap shrink-0 text-center"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Enquire for Family &amp; Community Events</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <ResilientImage
                  src={familyVectorImg}
                  alt="Vector illustration of parents, grandparents, teens and kids participating together in weekend relay games and stretches on a society garden"
                  fallbackTitle="FitCircle Family & Community Activities"
                  fallbackSubtitle="Multi-generational weekend fitness mornings and society festivals"
                  containerClassName="w-full max-w-[460px] aspect-[4/3] rounded-2xl border border-white/20 bg-[#F7FAF8]"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
