export interface SocialProfile {
  id: 'instagram' | 'youtube' | 'linkedin';
  name: string;
  handle: string;
  url: string;
  accentBg: string;
  description: string;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@fitcircle.jaipur',
    url: 'https://www.instagram.com/fitcircle.jaipur/',
    accentBg: 'bg-[#E1306C]',
    description: 'Daily society session clips, kids obstacle reels & Jaipur community updates',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'FitCircle Jaipur',
    url: 'https://www.youtube.com/@fitcirclejaipur',
    accentBg: 'bg-[#FF0000]',
    description: 'Demo highlights, family fitness mornings & movement warm-up guides',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'FitCircle Community Wellness',
    url: 'https://www.linkedin.com/company/fitcircle-jaipur/',
    accentBg: 'bg-[#0A66C2]',
    description: 'RWA partnerships, trainer collaborations & startup pilot updates',
  },
];

export function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function YouTubeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function SocialBrandIcon({
  id,
  className = 'w-5 h-5',
}: {
  id: SocialProfile['id'];
  className?: string;
}) {
  if (id === 'instagram') return <InstagramIcon className={className} />;
  if (id === 'youtube') return <YouTubeIcon className={className} />;
  return <LinkedInIcon className={className} />;
}
