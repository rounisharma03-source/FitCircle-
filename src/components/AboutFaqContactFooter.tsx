import { useState, type FormEvent } from 'react';
import { CheckCircle2, ChevronDown, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { FAQ_ITEMS, JAIPUR_LOCALITIES } from '../data/fitcircleData';
import {
  buildEnquiryFormWhatsAppUrl,
  buildWhatsAppUrl,
  type EnquiryFormValues,
  WHATSAPP_DISPLAY,
} from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { SOCIAL_PROFILES, SocialBrandIcon } from './SocialIcons';
import { WhatsAppIcon } from './WhatsAppIcon';

const INITIAL_FORM: EnquiryFormValues = {
  name: '',
  whatsappNumber: '',
  societyName: '',
  locality: '',
  programme: 'Kids Activity Club (10–13 years)',
  ageCategory: '10–13 years (Child)',
  preferredTime: 'Evening (5:00 PM – 8:00 PM)',
  message: '',
  consent: false,
};

export function AboutFaqContactFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [form, setForm] = useState<EnquiryFormValues>(INITIAL_FORM);
  const [formError, setFormError] = useState<string>('');
  const [generatedWhatsappUrl, setGeneratedWhatsappUrl] = useState<string>('');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterError, setNewsletterError] = useState<string>('');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');

  function handleNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterError('');

    const trimmed = newsletterEmail.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setSubscribedEmail(trimmed);
    setNewsletterEmail('');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');

    if (!form.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    const digitsOnly = form.whatsappNumber.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setFormError('Please enter a valid 10-digit WhatsApp mobile number.');
      return;
    }

    if (!form.societyName.trim()) {
      setFormError('Please enter your residential society or apartment name.');
      return;
    }

    if (!form.locality.trim()) {
      setFormError('Please select or enter your locality in Jaipur.');
      return;
    }

    if (!form.consent) {
      setFormError('Please tick the consent box to prepare your WhatsApp enquiry.');
      return;
    }

    const url = buildEnquiryFormWhatsAppUrl(form);
    setGeneratedWhatsappUrl(url);

    // Trigger click-to-chat in a new tab using a transient anchor (avoiding window.alert)
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {/* Section 16: About FitCircle */}
      <section
        id="about"
        className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                About FitCircle
              </p>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Making Fitness a Shared Community Experience in Jaipur
              </h2>
              <p className="mt-5 inline-block rounded-xl bg-[#E9F6F4] border-l-4 border-[#0B8F86] px-4 py-2.5 font-display font-extrabold text-xl sm:text-2xl text-[#123047] uppercase tracking-tight">
                Move More. <span className="text-[#0B8F86]">Live Together.</span>
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#4A6072] leading-relaxed">
              <p>
                FitCircle brings professionally curated fitness, physical activities, sports, and
                recreational experiences directly to residential communities.
              </p>
              <p>
                Our programmes are designed in collaboration with qualified fitness trainers,
                doctors, physical education teachers, sports coaches, yoga instructors, and other
                relevant experts.
              </p>
              <p>
                From helping children spend less time on screens and more time playing, to helping
                teenagers develop fitness and confidence, and enabling adults to overcome sedentary
                lifestyles, FitCircle makes physical activity accessible, enjoyable, and consistent.
              </p>
              <p>
                We believe fitness should not be restricted to gyms. It should become a shared
                community experience.
              </p>
              <p className="mt-2 inline-block rounded-xl bg-[#F7FAF8] border border-[#0B8F86]/25 px-4 py-3 font-bold text-sm text-[#123047] uppercase tracking-wide">
                Our Mission: Make Every Society an Active, Healthy, Happy &amp; Connected Community.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 17: Frequently Asked Questions */}
      <section
        id="faqs"
        className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
              Common Questions
            </p>
            <h2
              className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#123047]/10 bg-white rounded-3xl border border-[#123047]/10 overflow-hidden">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7FAF8]/70 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B8F86]"
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-[#123047]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0B8F86] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-[#4A6072] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 18: Contact and WhatsApp Enquiry */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                  Start the Conversation
                </p>
                <h2
                  className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Enquire About Your Jaipur Society
                </h2>
                <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                  Fill out the enquiry form to generate a ready-to-send WhatsApp message—or start a
                  direct chat with our pilot team.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0B8F86] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm text-[#123047]">Service City</p>
                    <p className="text-sm text-[#4A6072]">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0B8F86] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm text-[#123047]">Official WhatsApp</p>
                    <p className="text-sm text-[#4A6072] tabular-nums">{WHATSAPP_DISPLAY}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Open Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Social Profiles (Instagram, YouTube, LinkedIn) */}
              <div className="rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 p-5 space-y-3">
                <p className="font-display font-semibold text-sm text-[#123047]">
                  Connect With FitCircle Online
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SOCIAL_PROFILES.map((profile) => (
                    <a
                      key={profile.id}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow FitCircle on ${profile.name} (${profile.handle})`}
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-[#123047]/15 text-xs font-semibold text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] transition-colors whitespace-nowrap"
                    >
                      <SocialBrandIcon id={profile.id} className="w-4 h-4 shrink-0" />
                      <span>{profile.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#4A6072] leading-relaxed">
                Privacy notice: This pilot launch website does not store form submissions in a
                database. Submitting the form prepares a pre-filled WhatsApp message directly in
                your WhatsApp app, where you press Send.
              </p>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#F7FAF8] rounded-3xl border border-[#123047]/10 p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Your Name <span className="text-[#C8641F]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Ananya Sharma"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-whatsapp"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      WhatsApp Number <span className="text-[#C8641F]">*</span>
                    </label>
                    <input
                      id="enquiry-whatsapp"
                      type="tel"
                      required
                      value={form.whatsappNumber}
                      onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-society"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Society / Apartment Name <span className="text-[#C8641F]">*</span>
                    </label>
                    <input
                      id="enquiry-society"
                      type="text"
                      required
                      value={form.societyName}
                      onChange={(e) => setForm({ ...form, societyName: e.target.value })}
                      placeholder="e.g., Rangoli Gardens"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-locality"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Jaipur Locality <span className="text-[#C8641F]">*</span>
                    </label>
                    <select
                      id="enquiry-locality"
                      required
                      value={form.locality}
                      onChange={(e) => setForm({ ...form, locality: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                    >
                      <option value="">Select locality</option>
                      {JAIPUR_LOCALITIES.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-programme"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Programme of Interest
                    </label>
                    <select
                      id="enquiry-programme"
                      value={form.programme}
                      onChange={(e) => setForm({ ...form, programme: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2.5 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                    >
                      <option value="Kids Activity Club (10–13 years)">
                        Kids Activity Club (10–13 yrs)
                      </option>
                      <option value="Teen Fitness & Sports Club (14–18 years)">
                        Teen Fitness & Sports (14–18 yrs)
                      </option>
                      <option value="Adult Functional Fitness (35–55 years)">
                        Adult Functional Fitness (35–55 yrs)
                      </option>
                      <option value="Family & Community Activities">
                        Family & Community Events
                      </option>
                      <option value="Society / RWA Partnership & Demo">
                        Society / RWA Partnership
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-age"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Age Category
                    </label>
                    <select
                      id="enquiry-age"
                      value={form.ageCategory}
                      onChange={(e) => setForm({ ...form, ageCategory: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2.5 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                    >
                      <option value="10–13 years (Child)">10–13 years (Child)</option>
                      <option value="14–18 years (Teen)">14–18 years (Teen)</option>
                      <option value="35–55 years (Adult)">35–55 years (Adult)</option>
                      <option value="Family / Multiple Age Groups">
                        Family / Multiple Ages
                      </option>
                      <option value="RWA / Society Management">RWA / Management</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-time"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="enquiry-time"
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2.5 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                    >
                      <option value="Morning (6:00 AM – 8:00 AM)">
                        Morning (6:00 AM – 8:00 AM)
                      </option>
                      <option value="Evening (5:00 PM – 8:00 PM)">
                        Evening (5:00 PM – 8:00 PM)
                      </option>
                      <option value="Flexible / Either Window">Flexible / Either</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-sm font-semibold text-[#123047] mb-1.5"
                  >
                    Optional Enquiry Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share any questions about demo sessions, batch interest, or society space..."
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer text-sm text-[#4A6072]">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-[#123047]/30 text-[#0B8F86] focus:ring-[#0B8F86]"
                  />
                  <span>
                    I understand this prepares a WhatsApp message to FitCircle ({WHATSAPP_DISPLAY})
                    and that I need to press Send inside WhatsApp to complete my enquiry.
                  </span>
                </label>

                {formError && (
                  <p
                    role="alert"
                    className="rounded-xl bg-[#F28C45]/15 border border-[#F28C45]/40 px-4 py-2.5 text-sm font-medium text-[#123047]"
                  >
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B8F86] text-white font-semibold text-base hover:bg-[#09766E] transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Continue to WhatsApp Enquiry</span>
                </button>

                {generatedWhatsappUrl && (
                  <div
                    role="status"
                    className="rounded-xl bg-white border border-[#0B8F86]/40 p-4 space-y-2 text-sm text-[#123047]"
                  >
                    <p className="font-semibold text-[#0B8F86]">
                      Your WhatsApp message is ready!
                    </p>
                    <p className="text-[#4A6072]">
                      Please press <strong>Send</strong> inside WhatsApp to deliver your enquiry to{' '}
                      <span className="tabular-nums">{WHATSAPP_DISPLAY}</span>. (No information was
                      stored in any website database.)
                    </p>
                    <a
                      href={generatedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#0B8F86] underline underline-offset-4"
                    >
                      <span>Open WhatsApp chat again if it did not launch</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Section 19: Footer */}
      <footer className="bg-[#123047] text-white/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stay Updated Newsletter Signup */}
          <div className="pb-10 mb-10 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#79BE43]">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Stay Updated</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Get Notified About New Jaipur Society Launches &amp; Community Events
              </h3>
              <p className="text-sm text-white/70">
                Receive updates when FitCircle opens new residential batches, weekend family
                mornings, or Kids Mini Olympics near your area.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribedEmail ? (
                <div
                  role="status"
                  className="rounded-2xl bg-white/5 border border-[#79BE43]/40 p-4 space-y-2 text-sm"
                >
                  <div className="flex items-center gap-2 font-semibold text-[#79BE43]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Thanks for signing up ({subscribedEmail})!</span>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">
                    As this is our pilot showcase site with no server database yet, tap below if you
                    would also like to send your email directly to our WhatsApp pilot list.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={buildWhatsAppUrl(
                        `Hi FitCircle! Please add my email (${subscribedEmail}) to your Jaipur society launch and community event updates list.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B8F86] text-white text-xs font-semibold hover:bg-[#09766E] transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Send Email on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubscribedEmail('')}
                      className="text-xs text-white/70 hover:text-white underline underline-offset-4 cursor-pointer"
                    >
                      Use another email
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address for FitCircle updates
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#0B8F86] focus:bg-white/15 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Notify Me
                    </button>
                  </div>
                  {newsletterError && (
                    <p role="alert" className="text-xs font-medium text-[#F28C45]">
                      {newsletterError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5 text-white font-display font-bold text-xl">
                <img
                  src="/assets/aistudio/FitCircle_Logo_Community_Garden_8ae436be.png"
                  alt="FitCircle logo"
                  loading="lazy"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>FitCircle</span>
              </div>
              <div className="space-y-2 pt-1">
                <p className="inline-block rounded-lg bg-[#0B8F86]/25 border border-[#0B8F86]/50 px-3 py-1.5 font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wide">
                  Fit Circle Delivers{' '}
                  <span className="text-[#45C4B9]">Fit Society, Fit Community.</span>
                </p>
                <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                  <span className="text-[#45C4B9]">Expert Curated</span>
                  <span className="mx-1.5 text-white/40" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#96D863]">Community Driven</span>
                  <span className="mx-1.5 text-white/40" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#F7A76C]">Fun Powered</span>
                </p>
              </div>
              <p className="text-xs text-white/60">Jaipur, Rajasthan, India · WhatsApp {WHATSAPP_DISPLAY}</p>
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                {SOCIAL_PROFILES.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`FitCircle on ${profile.name}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-medium text-white hover:bg-[#0B8F86] hover:border-[#0B8F86] transition-colors whitespace-nowrap"
                  >
                    <SocialBrandIcon id={profile.id} className="w-3.5 h-3.5 shrink-0" />
                    <span>{profile.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 space-y-2 text-sm">
              <p className="font-display font-semibold text-white">Pilot Sections</p>
              <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-white/75">
                <li>
                  <a href="#why-fitcircle" className="hover:text-white transition-colors">
                    Why FitCircle
                  </a>
                </li>
                <li>
                  <a href="#kids-club" className="hover:text-white transition-colors">
                    Kids Club
                  </a>
                </li>
                <li>
                  <a href="#teens-club" className="hover:text-white transition-colors">
                    Teen Sports
                  </a>
                </li>
                <li>
                  <a href="#adults-club" className="hover:text-white transition-colors">
                    Adult Fitness
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#society-partnership" className="hover:text-white transition-colors">
                    RWA Partners
                  </a>
                </li>
                <li>
                  <a href="#future-services" className="hover:text-white transition-colors">
                    What&apos;s Next
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3 text-sm">
              <p className="font-display font-semibold text-white">Enquiries</p>
              <p className="text-xs text-white/70 leading-relaxed">
                WhatsApp links open a pre-filled draft message in your WhatsApp client; please
                press Send to message our team.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B8F86] text-white text-xs font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60">
            <p>
              © {new Date().getFullYear()} FitCircle Jaipur.{' '}
              <span className="font-bold text-white uppercase tracking-wide">
                Move More. Live Together.
              </span>
            </p>
            <p>
              Activities are recreational fitness programmes and do not constitute medical treatment
              or clinical physiotherapy.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
