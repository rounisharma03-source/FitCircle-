import { ShieldCheck } from 'lucide-react';
import equipmentImg from '../assets/images/portable_equipment_kit_1794512360706.jpg';
import {
  EXPERT_COLLABORATORS,
  HOW_IT_WORKS_STEPS,
  PORTABLE_EQUIPMENT,
  SAFETY_PRACTICES,
} from '../data/fitcircleData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

export function ApproachAndProcessSections() {
  return (
    <>
      {/* Section 9: Expert-Curated Approach */}
      <section
        id="expert-approach"
        className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-5xl">
            <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
              Safety &amp; Programme Design
            </p>
            <h2
              className="mt-2 font-display font-bold text-[11px] min-[380px]:text-[13px] sm:text-2xl lg:text-3xl text-[#123047] uppercase tracking-tight whitespace-nowrap"
            >
              Expert Curated · Community Driven · Fun Powered
            </h2>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-[#4A6072] leading-relaxed">
              FitCircle programmes are intended to be designed and curated in collaboration with
              appropriately qualified professionals—focusing on age appropriateness, safety,
              engagement, skill development, and community participation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXPERT_COLLABORATORS.map((collab) => (
              <div
                key={collab.role}
                className="rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 p-5"
              >
                <h3 className="font-display font-semibold text-base text-[#123047]">
                  {collab.role}
                </h3>
                <p className="mt-2 text-sm text-[#4A6072] leading-relaxed">{collab.focus}</p>
              </div>
            ))}
          </div>

          {/* Safety, Consent & Honest Scope Disclosure */}
          <div className="mt-8 rounded-2xl border border-[#123047]/15 bg-[#F7FAF8] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0B8F86] shrink-0" aria-hidden="true" />
                <h3 className="font-display font-bold text-lg text-[#123047]">
                  Child Safety, Trainer Qualifications & First-Aid Readiness
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#123047]/85">
                {SAFETY_PRACTICES.map((item) => (
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

            <div className="lg:col-span-5 bg-white rounded-xl border border-[#123047]/10 p-5 text-sm text-[#4A6072] leading-relaxed space-y-2">
              <p className="font-semibold text-[#123047]">Transparent Pilot Commitment</p>
              <p>
                FitCircle sessions are recreational fitness and physical activity programmes—they are
                not medical treatment or clinical physiotherapy. Individual collaborator
                partnerships and certifications are shared transparently as they are formalised
                during our Jaipur pilot rollout.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 10: How FitCircle Works */}
      <section
        id="how-it-works"
        className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 max-w-4xl">
            <div>
              <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                Five-Step Process
              </p>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                How FitCircle Works in Your Society
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-[#123047]/10 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-bold text-2xl text-[#0B8F86] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-lg text-[#123047] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4A6072] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white border border-[#123047]/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-[#123047]/85">
            <p>
              <strong className="font-semibold text-[#123047]">Primary Operating Model:</strong>{' '}
              Society-based group fitness. Your residential society does not need to build or
              maintain a conventional gym.
            </p>
            <span className="text-xs font-bold text-[#4A6072] uppercase tracking-wide whitespace-nowrap shrink-0">
              Home Personal Training Planned Later by Demand
            </span>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 11: Equipment & Mobile Delivery */}
      <section
        id="equipment"
        className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <ResilientImage
                src={equipmentImg}
                alt="Portable fitness equipment including agility ladder, orange cones, skipping ropes, resistance bands, exercise mats, light dumbbells, kettlebell, balance pad and soft medicine balls arranged on a green residential society lawn"
                fallbackTitle="FitCircle Portable Equipment Kit"
                fallbackSubtitle="Mobile agility, strength, and balance gear brought directly to your society lawn"
                containerClassName="rounded-3xl border border-[#123047]/10 aspect-video"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div>
                <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                  Mobile &amp; Convenient
                </p>
                <h2
                  className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#123047] uppercase tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  We Bring the Equipment. You Bring the Energy.
                </h2>
                <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                  No heavy gym machines or permanent installations required. Our trainers bring a
                  complete portable kit to every session and pack it away cleanly afterward.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#123047]">
                {PORTABLE_EQUIPMENT.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#79BE43] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
