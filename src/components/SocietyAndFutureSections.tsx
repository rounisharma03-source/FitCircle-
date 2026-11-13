import { Building2, Check, Clock } from 'lucide-react';
import { FUTURE_SERVICES, SOCIETY_PARTNER_BENEFITS } from '../data/fitcircleData';
import { buildSocietyPartnerWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export function SocietyAndFutureSections() {
  return (
    <>
      {/* Section 14: Society / RWA Partnership */}
      <section
        id="society-partnership"
        className="py-16 sm:py-20 bg-[#123047] text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#79BE43]">
                <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>For RWAs, Apartment Associations &amp; Society Management</span>
              </div>

              <h2
                className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Make Your Society a More Active Community
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Bring structured physical activity for children, teens, and adults into your
                residential complex without building a gym. The society provides an approved open
                activity space subject to mutually agreed terms and permissions.
              </p>

              <div className="pt-2">
                <a
                  href={buildSocietyPartnerWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B8F86] text-white font-semibold text-base hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Partner With FitCircle</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8">
              <h3 className="font-display font-semibold text-lg text-white pb-4 border-b border-white/10">
                Benefits for Your Residential Society
              </h3>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm text-white/90">
                {SOCIETY_PARTNER_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#79BE43] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 15: Future Services */}
      <section
        id="future-services"
        className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8641F]">
                <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Planned After Pilot Validation · Not Currently Launched</span>
              </div>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                What&apos;s Next for FitCircle?
              </h2>
            </div>
          </div>

          <p className="mt-3 text-base text-[#4A6072] max-w-3xl leading-relaxed">
            Our current focus in Jaipur is our society-based pilot programmes. The services below
            are planned future additions that will be introduced gradually according to customer
            demand and suitable professional partnerships.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FUTURE_SERVICES.map((service, idx) => (
              <div
                key={service}
                className="rounded-xl bg-white border border-dashed border-[#123047]/20 px-4 py-3.5 flex items-start gap-3"
              >
                <span className="font-display font-semibold text-xs text-[#C8641F] tabular-nums mt-0.5 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#123047]">{service}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#4A6072] mt-0.5">
                    Planned Future Service
                  </p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
