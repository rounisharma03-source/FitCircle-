import { useState } from 'react';
import { motion } from 'motion/react';

const MASCOT_LINES = [
  'Fit Circle Delivers Fit Society, Fit Community.',
  'Move More. Live Together.',
  'Expert Curated. Community Driven. Fun Powered.',
];

export function FitCircleMascot() {
  const [lineIndex, setLineIndex] = useState(0);

  function cycleLine() {
    setLineIndex((prev) => (prev + 1) % MASCOT_LINES.length);
  }

  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white border border-[#123047]/10 p-4">
      {/* Previous Circlo Mascot with Teal, Deep Navy, Green & Orange Colour Scheme */}
      <button
        type="button"
        onClick={cycleLine}
        aria-label="FitCircle Mascot — click to cycle tagline"
        className="relative shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B8F86] rounded-full"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20"
        >
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full"
            role="img"
            aria-label="Animated FitCircle Mascot waving"
          >
            {/* Soft ground shadow */}
            <ellipse cx="60" cy="110" rx="28" ry="5" fill="#123047" fillOpacity="0.1" />

            {/* Waving Left Arm */}
            <motion.g
              style={{ originX: '34px', originY: '68px' }}
              animate={{ rotate: [0, -18, 6, -14, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M34 68 C20 60, 16 46, 20 36"
                stroke="#123047"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Orange wristband */}
              <circle cx="20" cy="37" r="6" fill="#F28C45" />
            </motion.g>

            {/* Right Arm */}
            <path
              d="M86 68 C98 74, 102 82, 97 90"
              stroke="#123047"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="97" cy="90" r="6" fill="#79BE43" />

            {/* Legs */}
            <path
              d="M48 92 L45 105"
              stroke="#123047"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M72 92 L75 105"
              stroke="#123047"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Main FitCircle Torso/Head */}
            <circle cx="60" cy="60" r="32" fill="#0B8F86" />
            <circle cx="60" cy="60" r="32" fill="none" stroke="#123047" strokeWidth="3" />

            {/* Sporty Navy & Green Headband */}
            <path
              d="M31 48 C42 40, 78 40, 89 48"
              stroke="#123047"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="60" cy="36" r="6" fill="#79BE43" stroke="#FFFFFF" strokeWidth="2" />

            {/* Blinking Eyes */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.46, 0.5, 0.54, 1],
              }}
              style={{ originY: '58px' }}
            >
              <circle cx="49" cy="58" r="3.6" fill="#FFFFFF" />
              <circle cx="71" cy="58" r="3.6" fill="#FFFFFF" />
              <circle cx="50" cy="58" r="1.8" fill="#123047" />
              <circle cx="72" cy="58" r="1.8" fill="#123047" />
            </motion.g>

            {/* Rosy cheeks */}
            <circle cx="42" cy="65" r="3.5" fill="#F28C45" fillOpacity="0.6" />
            <circle cx="78" cy="65" r="3.5" fill="#F28C45" fillOpacity="0.6" />

            {/* Happy Smile */}
            <path
              d="M49 68 Q60 78 71 68"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>
      </button>

      {/* Speech Bubble */}
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0B8F86]">
          Circlo · FitCircle Community Mascot
        </p>
        <motion.p
          key={lineIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 font-display font-bold text-sm sm:text-base text-[#123047] uppercase tracking-wide leading-snug"
        >
          &ldquo;{MASCOT_LINES[lineIndex]}&rdquo;
        </motion.p>
        <button
          type="button"
          onClick={cycleLine}
          className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4A6072] hover:text-[#0B8F86] underline underline-offset-4 cursor-pointer"
        >
          Next brand cheer
        </button>
      </div>
    </div>
  );
}
