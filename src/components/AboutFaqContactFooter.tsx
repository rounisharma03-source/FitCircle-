import { useEffect, useState, type FormEvent } from 'react';
import { Check, CheckCircle2, ChevronDown, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/fitcircleData';
import {
  buildEnquiryFormWhatsAppUrl,
  buildWhatsAppUrl,
  type EnquiryFormValues,
  WHATSAPP_DISPLAY,
} from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { SOCIAL_PROFILES, SocialBrandIcon } from './SocialIcons';
import { WhatsAppIcon } from './WhatsAppIcon';

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaQi50abLG_qdoCWMGhI0SR6TSTiQNWKllE2Q6wYj8bU7WOq7Chh-t16KwaK1Xd2rQ/exec";

function AnimatedSuccessCheckmark() {
  return (
    <div className="relative w-11 h-11 flex items-center justify-center shrink-0" aria-hidden="true">
      {/* Soft expanding pulse ring */}
      <motion.span
        initial={{ scale: 0.65, opacity: 0.55 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-full bg-[#79BE43]/30"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        className="relative w-11 h-11 rounded-full bg-[#E9F6F4] flex items-center justify-center"
      >
        <svg viewBox="0 0 36 36" className="w-8 h-8">
          <motion.circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#0B8F86"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
          />
          <motion.path
            d="M11.5 18.5 L16 23 L24.5 13.5"
            fill="none"
            stroke="#4C8720"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.32, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

const INITIAL_FORM: EnquiryFormValues = {
  name: '',
  whatsappNumber: '',
  societyName: '',
  program: 'Kids Club',
  preferredTime: 'Evening (5:00 PM – 8:00 PM)',
  message: '',
};

export function AboutFaqContactFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [form, setForm] = useState<EnquiryFormValues>(INITIAL_FORM);
  const [honeypot, setHoneypot] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [generatedWhatsappUrl, setGeneratedWhatsappUrl] = useState<string>('');
  const [submissionCount, setSubmissionCount] = useState<number>(0);
  const [justSubmitted, setJustSubmitted] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterError, setNewsletterError] = useState<string>('');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');

  useEffect(() => {
    if (!justSubmitted) return;
    const timer = window.setTimeout(() => setJustSubmitted(false), 2600);
    return () => window.clearTimeout(timer);
  }, [justSubmitted]);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setFormError('');

    // Hidden honeypot check to silently block spam bots
    if (honeypot.trim() !== '') {
      setSubmittedSuccess(true);
      setSubmissionCount((prev) => prev + 1);
      setJustSubmitted(true);
      return;
    }

    if (!form.name.trim()) {
      setFormError('Please enter parent or your name.');
      return;
    }

    const digitsOnly = form.whatsappNumber.replace(/\D/g, '');
    if (!/^\d{10}$/.test(digitsOnly)) {
      setFormError('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    if (!form.societyName.trim()) {
      setFormError('Please enter your society or community name.');
      return;
    }

    setIsSubmitting(true);

    const formData: Record<string, string> = {
      name: form.name.trim(),
      whatsappNumber: digitsOnly,
      societyName: form.societyName.trim(),
      program: form.program,
      preferredTime: form.preferredTime,
      message: form.message.trim(),
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData),
      });

      const url = buildEnquiryFormWhatsAppUrl({
        ...form,
        whatsappNumber: digitsOnly,
      });
      setGeneratedWhatsappUrl(url);
      setSubmittedSuccess(true);
      setSubmissionCount((prev) => prev + 1);
      setJustSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setFormError(
        'Unable to submit right now. Please try again or use the WhatsApp enquiry button.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
              <p className="mt-5 w-full sm:w-auto sm:inline-block rounded-xl bg-[#E9F6F4] border border-[#0B8F86]/35 px-3.5 py-2.5 sm:px-4 font-display font-extrabold text-lg sm:text-2xl text-[#123047] uppercase tracking-tight">
                Move More · <span className="text-[#0B8F86]">Live Together</span>
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
                Our Mission: Make Every Society an Active, Healthy, Happy &amp; Connected Community
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
                    className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7FAF8]/70 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B8F86]"
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
                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-[#4A6072] leading-relaxed">
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
                  Fill out the enquiry form and our team will reach out shortly—or start a direct
                  WhatsApp chat with our Jaipur team.
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
                Privacy notice: We only collect your name, WhatsApp number, society name, preferred
                programme age group, and timing so our team can contact you. Nothing else about
                children is collected beyond age group.
              </p>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#F7FAF8] rounded-3xl border border-[#123047]/10 p-5 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Hidden honeypot field to block spam bots */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="enquiry-company">Leave this field empty</label>
                  <input
                    id="enquiry-company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Parent / Your Name <span className="text-[#C8641F]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Ananya Sharma"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-base sm:text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
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
                      name="whatsappNumber"
                      type="tel"
                      inputMode="numeric"
                      maxLength={14}
                      required
                      value={form.whatsappNumber}
                      onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                      placeholder="10-digit WhatsApp number"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-base sm:text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-society"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Society / Community Name <span className="text-[#C8641F]">*</span>
                    </label>
                    <input
                      id="enquiry-society"
                      name="societyName"
                      type="text"
                      required
                      value={form.societyName}
                      onChange={(e) => setForm({ ...form, societyName: e.target.value })}
                      placeholder="e.g., Rangoli Gardens, Vaishali Nagar"
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-base sm:text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-program"
                      className="block text-sm font-semibold text-[#123047] mb-1.5"
                    >
                      Program <span className="text-[#C8641F]">*</span>
                    </label>
                    <select
                      id="enquiry-program"
                      name="program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#123047]/15 px-3.5 py-2.5 text-base sm:text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                    >
                      <option value="Kids Club">Kids Club (Age 10–13 yrs)</option>
                      <option value="Teen Sports">Teen Sports (Age 14–18 yrs)</option>
                      <option value="Adult Workouts">Adult Workouts (Age 35–55 yrs)</option>
                      <option value="Family Sessions">Family Sessions (All Ages)</option>
                    </select>
                  </div>
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
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3.5 py-2.5 text-base sm:text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                  >
                    <option value="Morning (6:00 AM – 8:00 AM)">
                      Morning (6:00 AM – 8:00 AM)
                    </option>
                    <option value="Evening (5:00 PM – 8:00 PM)">
                      Evening (5:00 PM – 8:00 PM)
                    </option>
                    <option value="Flexible / Either Window">Flexible / Either Window</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-sm font-semibold text-[#123047] mb-1.5"
                  >
                    Message <span className="text-[#4A6072] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share any questions about demo sessions, batch timings, or society space..."
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-4 py-2.5 text-base sm:text-sm text-[#123047] placeholder:text-[#4A6072]/60 focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="rounded-xl bg-[#F28C45]/15 border border-[#F28C45]/40 px-4 py-2.5 text-sm font-medium text-[#123047]"
                  >
                    {formError}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base transition-colors ${
                      isSubmitting
                        ? 'bg-[#0B8F86]/70 text-white cursor-not-allowed'
                        : justSubmitted
                          ? 'bg-[#4C8720] text-white cursor-pointer'
                          : 'bg-[#0B8F86] text-white hover:bg-[#09766E] cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : justSubmitted ? (
                      <>
                        <motion.span
                          initial={{ scale: 0.5, rotate: -15 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 360, damping: 18 }}
                          className="inline-flex"
                        >
                          <Check className="w-5 h-5 shrink-0" aria-hidden="true" />
                        </motion.span>
                        <span>Enquiry Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </motion.button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#0B8F86]/35 text-[#0B8F86] font-semibold text-base hover:bg-[#E9F6F4] transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

                <AnimatePresence mode="wait">
                  {submittedSuccess && (
                    <motion.div
                      key={submissionCount}
                      role="status"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-2xl bg-white border border-[#0B8F86]/40 p-4 sm:p-5 flex items-start gap-3.5 text-sm text-[#123047] shadow-xs"
                    >
                      <AnimatedSuccessCheckmark />
                      <div className="space-y-1.5 min-w-0">
                        <p className="font-display font-bold text-base text-[#0B8F86]">
                          Thanks! We&apos;ll WhatsApp you shortly.
                        </p>
                        <p className="text-[#4A6072] leading-relaxed">
                          Your enquiry has been received by FitCircle Jaipur (
                          <span className="tabular-nums">{WHATSAPP_DISPLAY}</span>).
                        </p>
                        {generatedWhatsappUrl && (
                          <a
                            href={generatedWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 pt-0.5 font-semibold text-[#0B8F86] underline underline-offset-4"
                          >
                            <span>Send a copy directly on WhatsApp</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <div className="space-y-2 pt-1 max-w-full">
                <p className="w-full sm:w-auto sm:inline-block rounded-lg bg-[#0B8F86]/25 border border-[#0B8F86]/50 px-3 py-1.5 font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wide">
                  Fit Circle Delivers{' '}
                  <span className="text-[#45C4B9]">Fit Society, Fit Community</span>
                </p>
                <p className="text-[9px] min-[375px]:text-[10.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wide whitespace-nowrap">
                  <span className="text-[#45C4B9]">Expert Curated</span>
                  <span className="mx-1 sm:mx-1.5 text-white/40" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#96D863]">Community Driven</span>
                  <span className="mx-1 sm:mx-1.5 text-white/40" aria-hidden="true">
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
                Move More · Live Together
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
