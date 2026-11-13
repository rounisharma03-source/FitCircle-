import { Users } from 'lucide-react';
import kidsImg from '../assets/images/kids_garden_agility_1794512358834.jpg';
import teensImg from '../assets/images/teens_sports_drills_1794512360066.jpg';
import adultsImg from '../assets/images/adults_group_fitness_1794512360017.jpg';
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
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[260px] lg:min-h-full">
              <ResilientImage
                src={kidsImg}
                alt="Children aged 10 to 13 smiling while running through an agility ladder and cones with a coach on a residential society lawn in Jaipur"
                fallbackTitle="FitCircle Kids Activity Club"
                fallbackSubtitle="Screen-free outdoor obstacle games and agility ladders in your society garden"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
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
                  children enjoy physical activity, develop coordination, teamwork, confidence, and
                  healthy offline habits in a safe residential setting.
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
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
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
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
                  <strong className="font-semibold text-[#123047]">Main Objective:</strong> Develop
                  physical confidence, healthy routines, teamwork, strength foundations, and active
                  lifestyles through engaging sports-style movement.
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
                  href={buildProgrammeWhatsAppUrl('FitCircle Teen Fitness & Sports Club (14–18 years)')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Enquire for Teen Club</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[260px] lg:min-h-full order-1 lg:order-2">
              <ResilientImage
                src={teensImg}
                alt="Teenagers aged 14 to 18 performing agility cone drills, resistance band warmups, and outdoor team games on a residential society court"
                fallbackTitle="FitCircle Teen Fitness & Sports Club"
                fallbackSubtitle="Agility drills, strength foundations, and team sports right inside your society"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>
          </div>
          </Reveal>
        </section>

        {/* Section 7: Adult Functional Fitness */}
        <section
          id="adults-club"
          className="bg-white rounded-3xl border border-[#123047]/10 overflow-hidden"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[260px] lg:min-h-full">
              <ResilientImage
                src={adultsImg}
                alt="Adult men and women exercising together with light dumbbells, resistance bands, and mats on a residential society lawn"
                fallbackTitle="FitCircle Adult Fitness Club"
                fallbackSubtitle="Beginner-friendly functional strength and mobility workouts in your society lawn"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
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
          className="bg-[#123047] text-white rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#79BE43]">
                <span>Key FitCircle Differentiator</span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="text-white/80">All Suitable Age Groups</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                FitCircle Family & Community Activities
              </h3>

              <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                Unlike conventional fitness classes where everyone trains alone in headphones,
                FitCircle turns movement into shared neighbourhood moments—bringing parents,
                children, and neighbours together on the society lawn.
              </p>

              <div className="pt-2">
                <a
                  href={buildProgrammeWhatsAppUrl(
                    'FitCircle Family & Community Activities (Society Events)'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Enquire for Family & Community Events</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6">
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
          </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
