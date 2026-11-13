import { useMemo, useState } from 'react';
import { Calculator, Clock, Droplets, Flame, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

type ParticipantTrack = 'kids' | 'teens' | 'adults';

const TRACK_DETAILS: Record<
  ParticipantTrack,
  {
    label: string;
    programmeName: string;
    defaultAge: number;
    minAge: number;
    maxAge: number;
    defaultWeight: number;
    defaultHeight: number;
    recommendedMinutes: number;
    sessionDuration: number;
    kcalPerSessionRange: [number, number];
    guideLabel: string;
  }
> = {
  kids: {
    label: 'Kids (10–13 yrs)',
    programmeName: 'FitCircle Kids Activity Club (10–13 years)',
    defaultAge: 11,
    minAge: 8,
    maxAge: 13,
    defaultWeight: 36,
    defaultHeight: 142,
    recommendedMinutes: 420, // 60 mins/day active play benchmark
    sessionDuration: 50,
    kcalPerSessionRange: [180, 260],
    guideLabel: 'Youth active-play benchmark (60 min/day across games & sports)',
  },
  teens: {
    label: 'Teens (14–18 yrs)',
    programmeName: 'FitCircle Teen Fitness & Sports Club (14–18 years)',
    defaultAge: 16,
    minAge: 14,
    maxAge: 18,
    defaultWeight: 54,
    defaultHeight: 164,
    recommendedMinutes: 420,
    sessionDuration: 55,
    kcalPerSessionRange: [240, 350],
    guideLabel: 'Teen active-sport benchmark (60 min/day varied movement)',
  },
  adults: {
    label: 'Adults (35–55 yrs)',
    programmeName: 'FitCircle Adult Fitness Club (35–55 years)',
    defaultAge: 42,
    minAge: 19,
    maxAge: 65,
    defaultWeight: 72,
    defaultHeight: 168,
    recommendedMinutes: 150, // WHO 150–300 min/week moderate activity
    sessionDuration: 50,
    kcalPerSessionRange: [220, 320],
    guideLabel: 'Adult moderate-activity benchmark (150+ min/week)',
  },
};

export function FitnessCalculatorSection() {
  const [track, setTrack] = useState<ParticipantTrack>('adults');
  const [age, setAge] = useState<number>(TRACK_DETAILS.adults.defaultAge);
  const [weightKg, setWeightKg] = useState<number>(TRACK_DETAILS.adults.defaultWeight);
  const [heightCm, setHeightCm] = useState<number>(TRACK_DETAILS.adults.defaultHeight);
  const [currentActiveMins, setCurrentActiveMins] = useState<number>(60);
  const [plannedSessions, setPlannedSessions] = useState<number>(4);

  function handleTrackChange(nextTrack: ParticipantTrack) {
    setTrack(nextTrack);
    const cfg = TRACK_DETAILS[nextTrack];
    setAge(cfg.defaultAge);
    setWeightKg(cfg.defaultWeight);
    setHeightCm(cfg.defaultHeight);
  }

  const metrics = useMemo(() => {
    const cfg = TRACK_DETAILS[track];
    const safeHeightM = Math.max(heightCm, 90) / 100;
    const safeWeight = Math.max(weightKg, 18);

    const bmi = safeWeight / (safeHeightM * safeHeightM);
    const bmiRounded = Number(bmi.toFixed(1));

    let bmiContext = 'Balanced general reference range';
    if (track !== 'adults') {
      bmiContext = 'Youth growth varies by age; use for general awareness only';
    } else if (bmiRounded < 18.5) {
      bmiContext = 'Lighter build — focus on strength foundations & nourishment';
    } else if (bmiRounded < 23) {
      bmiContext = 'Healthy adult reference band — great base for functional fitness';
    } else if (bmiRounded < 27.5) {
      bmiContext = 'Slightly elevated — regular low-impact strength & cardio helps';
    } else {
      bmiContext = 'Start gently with beginner-modified mobility & steady consistency';
    }

    const addedWeeklyMins = plannedSessions * cfg.sessionDuration;
    const projectedWeeklyMins = currentActiveMins + addedWeeklyMins;
    const goalProgressPct = Math.min(
      100,
      Math.round((projectedWeeklyMins / cfg.recommendedMinutes) * 100)
    );

    // Commute time saved vs travelling 35 mins round-trip to an external gym
    const monthlyCommuteSavedHours = Number(((plannedSessions * 4 * 35) / 60).toFixed(1));

    // General hydration target (~35 ml per kg, capped sensibly for youth/adults)
    const hydrationLitres = Number(
      Math.min(3.8, Math.max(1.4, safeWeight * 0.033)).toFixed(1)
    );

    const weeklyKcalMin = plannedSessions * cfg.kcalPerSessionRange[0];
    const weeklyKcalMax = plannedSessions * cfg.kcalPerSessionRange[1];

    return {
      cfg,
      bmiRounded,
      bmiContext,
      addedWeeklyMins,
      projectedWeeklyMins,
      goalProgressPct,
      monthlyCommuteSavedHours,
      hydrationLitres,
      weeklyKcalMin,
      weeklyKcalMax,
    };
  }, [track, weightKg, heightCm, currentActiveMins, plannedSessions]);

  const calculatorWhatsappUrl = buildWhatsAppUrl(
    `Hi FitCircle! I used the FitCircle Activity Calculator for ${TRACK_DETAILS[track].label} (Age: ${age}) and would like to explore ${metrics.cfg.programmeName}.\n\nPlanned Sessions/Week: ${plannedSessions}\nMy Society/Area in Jaipur:\nPreferred Time (Morning 6–8 AM / Evening 5–8 PM):\n\nPlease share pilot batch details.`
  );

  return (
    <section
      id="fitness-calculator"
      className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B8F86]">
                <Calculator className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Interactive Wellness Planner</span>
              </div>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                FitCircle Activity & Routine Calculator
              </h2>
              <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                Estimate how joining FitCircle sessions inside your society boosts your weekly
                active minutes, saves gym commute time, and matches your age group.
              </p>
            </div>

            {/* Track Switcher */}
            <div
              role="group"
              aria-label="Select participant age group"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F7FAF8] border border-[#123047]/10 rounded-xl self-start lg:self-auto"
            >
              {(Object.keys(TRACK_DETAILS) as ParticipantTrack[]).map((key) => {
                const active = track === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTrackChange(key)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#123047] text-white'
                        : 'text-[#4A6072] hover:text-[#123047]'
                    }`}
                  >
                    {TRACK_DETAILS[key].label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Interactive Inputs */}
            <div className="lg:col-span-5 bg-[#F7FAF8] rounded-3xl border border-[#123047]/10 p-6 sm:p-8 space-y-5">
              <h3 className="font-display font-bold text-lg text-[#123047]">
                Your Profile & Weekly Routine
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label
                    htmlFor="calc-age"
                    className="block text-xs font-semibold text-[#123047] mb-1.5"
                  >
                    Age (yrs)
                  </label>
                  <input
                    id="calc-age"
                    type="number"
                    min={metrics.cfg.minAge}
                    max={metrics.cfg.maxAge}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value) || metrics.cfg.defaultAge)}
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm font-semibold text-[#123047] tabular-nums focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="calc-weight"
                    className="block text-xs font-semibold text-[#123047] mb-1.5"
                  >
                    Weight (kg)
                  </label>
                  <input
                    id="calc-weight"
                    type="number"
                    min={20}
                    max={160}
                    value={weightKg}
                    onChange={(e) =>
                      setWeightKg(Number(e.target.value) || metrics.cfg.defaultWeight)
                    }
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm font-semibold text-[#123047] tabular-nums focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="calc-height"
                    className="block text-xs font-semibold text-[#123047] mb-1.5"
                  >
                    Height (cm)
                  </label>
                  <input
                    id="calc-height"
                    type="number"
                    min={100}
                    max={220}
                    value={heightCm}
                    onChange={(e) =>
                      setHeightCm(Number(e.target.value) || metrics.cfg.defaultHeight)
                    }
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm font-semibold text-[#123047] tabular-nums focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#123047] mb-1.5">
                  <label htmlFor="calc-active-mins">Current Weekly Active Minutes</label>
                  <span className="text-[#0B8F86] tabular-nums">{currentActiveMins} mins/wk</span>
                </div>
                <input
                  id="calc-active-mins"
                  type="range"
                  min={0}
                  max={360}
                  step={15}
                  value={currentActiveMins}
                  onChange={(e) => setCurrentActiveMins(Number(e.target.value))}
                  className="w-full accent-[#0B8F86] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#4A6072] tabular-nums">
                  <span>0 min</span>
                  <span>180 min</span>
                  <span>360 min</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#123047] mb-1.5">
                  <label htmlFor="calc-sessions">Planned FitCircle Sessions / Week</label>
                  <span className="text-[#F28C45] tabular-nums">
                    {plannedSessions} sessions/wk
                  </span>
                </div>
                <input
                  id="calc-sessions"
                  type="range"
                  min={2}
                  max={6}
                  step={1}
                  value={plannedSessions}
                  onChange={(e) => setPlannedSessions(Number(e.target.value))}
                  className="w-full accent-[#F28C45] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#4A6072] tabular-nums">
                  <span>2/wk</span>
                  <span>4/wk</span>
                  <span>6/wk</span>
                </div>
              </div>

              <p className="text-xs text-[#4A6072] leading-relaxed pt-1">
                Note: Calculations offer general movement and hydration awareness only and are not
                medical advice or clinical assessment.
              </p>
            </div>

            {/* Right: Calculated Community Fitness Insights */}
            <div className="lg:col-span-7 bg-[#123047] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#79BE43]">
                    Recommended Pilot Match
                  </span>
                  <span className="text-xs text-white/75">{metrics.cfg.guideLabel}</span>
                </div>

                <h3 className="mt-3 font-display font-bold text-2xl text-white">
                  {metrics.cfg.programmeName}
                </h3>

                {/* 4 KPI Summary Blocks */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-xs text-white/75">
                      <span>Projected Weekly Activity</span>
                      <Sparkles className="w-4 h-4 text-[#79BE43]" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display font-bold text-2xl text-white tabular-nums">
                      {metrics.projectedWeeklyMins} mins/wk
                    </p>
                    <p className="mt-1 text-xs text-white/70 tabular-nums">
                      +{metrics.addedWeeklyMins} mins from FitCircle ({metrics.goalProgressPct}% of
                      target)
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-xs text-white/75">
                      <span>Gym Commute Time Saved</span>
                      <Clock className="w-4 h-4 text-[#F28C45]" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display font-bold text-2xl text-white tabular-nums">
                      ~{metrics.monthlyCommuteSavedHours} hrs/mo
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Sessions happen right inside your society
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-xs text-white/75">
                      <span>Estimated Session Energy</span>
                      <Flame className="w-4 h-4 text-[#F28C45]" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display font-bold text-2xl text-white tabular-nums">
                      {metrics.weeklyKcalMin}–{metrics.weeklyKcalMax} kcal/wk
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Approximate active movement output
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-xs text-white/75">
                      <span>BMI & Daily Water Guide</span>
                      <Droplets className="w-4 h-4 text-[#0B8F86]" aria-hidden="true" />
                    </div>
                    <p className="mt-2 font-display font-bold text-2xl text-white tabular-nums">
                      {metrics.bmiRounded} BMI · {metrics.hydrationLitres} L/day
                    </p>
                    <p className="mt-1 text-xs text-white/70">{metrics.bmiContext}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-white/75">
                  Share this routine estimate with our Jaipur coaching team for batch guidance.
                </p>
                <a
                  href={calculatorWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors whitespace-nowrap shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Discuss Plan on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
