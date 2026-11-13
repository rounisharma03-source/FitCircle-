import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import trainerKidsImg from '../assets/images/vector_trainer_kids_1794564594837.jpg';
import trainerTeenImg from '../assets/images/vector_trainer_teen_1794564596312.jpg';
import trainerAdultImg from '../assets/images/vector_trainer_adult_1794564595745.jpg';
import trainerYogaImg from '../assets/images/vector_trainer_yoga_1794564597367.jpg';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  focusGroup: string;
  bio: string;
  photo: string;
  accentHex: string;
}

const INITIAL_TRAINERS: TrainerProfile[] = [
  {
    id: 'kids-lead',
    name: 'Kids Activity Coach',
    role: 'Play, Agility & Coordination Lead',
    focusGroup: 'Kids Activity Club · 10–13 Years',
    bio: 'Leads screen-free obstacle courses, ladder drills, relay races, and confidence-building team games for boys and girls.',
    photo: trainerKidsImg,
    accentHex: '#79BE43',
  },
  {
    id: 'teen-lead',
    name: 'Teen Sports & Agility Coach',
    role: 'Speed, Conditioning & Games Lead',
    focusGroup: 'Teen Fitness & Sports · 14–18 Years',
    bio: 'Guides bodyweight foundations, speed mechanics, resistance band drills, and friendly sports competitions for teenagers.',
    photo: trainerTeenImg,
    accentHex: '#0B8F86',
  },
  {
    id: 'adult-lead',
    name: 'Adult Functional Trainer',
    role: 'Strength, Mobility & Circuit Lead',
    focusGroup: 'Adult Fitness Club · 35–55 Years',
    bio: 'Coaches beginner-friendly resistance band, light dumbbell, core, and low-impact workouts with modifications for every pace.',
    photo: trainerAdultImg,
    accentHex: '#F28C45',
  },
  {
    id: 'community-lead',
    name: 'Yoga & Movement Coach',
    role: 'Flexibility, Balance & Community Lead',
    focusGroup: 'Adults & Family Mornings',
    bio: 'Supports guided stretching, breath-led recovery, balance challenges, and inclusive weekend family fitness mornings.',
    photo: trainerYogaImg,
    accentHex: '#123047',
  },
];

export function MeetTrainersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [trainers, setTrainers] = useState<TrainerProfile[]>(INITIAL_TRAINERS);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newFocus, setNewFocus] = useState('Kids Activity Club · 10–13 Years');
  const [newBio, setNewBio] = useState('');
  const [newPhotoPreview, setNewPhotoPreview] = useState('');
  const [formError, setFormError] = useState('');

  function scrollBar(direction: 'left' | 'right') {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distance = direction === 'left' ? -340 : 340;
    el.scrollBy({ left: distance, behavior: 'smooth' });
  }

  function handlePhotoUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setNewPhotoPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  function handleAddTrainer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');

    if (!newName.trim() || !newRole.trim() || !newBio.trim()) {
      setFormError('Please fill in trainer name, specialty role, and short bio.');
      return;
    }

    const added: TrainerProfile = {
      id: `custom-${Date.now()}`,
      name: newName.trim(),
      role: newRole.trim(),
      focusGroup: newFocus,
      bio: newBio.trim(),
      photo: newPhotoPreview || trainerAdultImg,
      accentHex: '#0B8F86',
    };

    setTrainers((prev) => [...prev, added]);
    setNewName('');
    setNewRole('');
    setNewBio('');
    setNewPhotoPreview('');
    setShowAddForm(false);

    setTimeout(() => {
      scrollContainerRef.current?.scrollTo({
        left: scrollContainerRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }, 100);
  }

  return (
    <section
      id="meet-the-trainers"
      className="py-16 sm:py-20 bg-white border-b border-[#123047]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-[#0B8F86] uppercase tracking-wider">
                Meet the Trainers
              </p>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Approachable Coaches Who Come to Your Society
              </h2>
              <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                Explore our Jaipur pilot coaching roles below. Assigned trainer details for your
                specific residential society batch are shared prior to launch, and qualified coaches
                can also connect with us to join.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => setShowAddForm((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#123047]/15 bg-[#F7FAF8] text-sm font-semibold text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {showAddForm ? (
                  <>
                    <X className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Close Form</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Add Trainer Info</span>
                  </>
                )}
              </button>

              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollBar('left')}
                  aria-label="Scroll trainers bar left"
                  className="w-10 h-10 rounded-xl border border-[#123047]/15 bg-white text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBar('right')}
                  aria-label="Scroll trainers bar right"
                  className="w-10 h-10 rounded-xl border border-[#123047]/15 bg-white text-[#123047] hover:border-[#0B8F86] hover:text-[#0B8F86] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Optional Add Trainer Drawer */}
          {showAddForm && (
            <form
              onSubmit={handleAddTrainer}
              className="mt-6 rounded-2xl bg-[#F7FAF8] border border-[#123047]/15 p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display font-bold text-lg text-[#123047]">
                  Add Trainer Profile
                </h3>
                <span className="text-xs text-[#4A6072]">Live preview in current session</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label
                    htmlFor="trainer-name"
                    className="block text-xs font-semibold text-[#123047] mb-1"
                  >
                    Trainer Name *
                  </label>
                  <input
                    id="trainer-name"
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g., Coach Aarav"
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="trainer-role"
                    className="block text-xs font-semibold text-[#123047] mb-1"
                  >
                    Specialty Role *
                  </label>
                  <input
                    id="trainer-role"
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g., Functional & Mobility Coach"
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="trainer-focus"
                    className="block text-xs font-semibold text-[#123047] mb-1"
                  >
                    Programme Focus
                  </label>
                  <select
                    id="trainer-focus"
                    value={newFocus}
                    onChange={(e) => setNewFocus(e.target.value)}
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                  >
                    <option value="Kids Activity Club · 10–13 Years">
                      Kids Activity Club · 10–13 Years
                    </option>
                    <option value="Teen Fitness & Sports · 14–18 Years">
                      Teen Fitness & Sports · 14–18 Years
                    </option>
                    <option value="Adult Fitness Club · 35–55 Years">
                      Adult Fitness Club · 35–55 Years
                    </option>
                    <option value="Family & Community Events">Family & Community Events</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="trainer-photo"
                    className="block text-xs font-semibold text-[#123047] mb-1"
                  >
                    Trainer Photo (Upload)
                  </label>
                  <input
                    id="trainer-photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-1.5 text-xs text-[#4A6072] file:mr-2 file:rounded-lg file:border-0 file:bg-[#0B8F86]/10 file:px-2.5 file:py-1 file:text-xs file:font-semibold file:text-[#0B8F86]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="trainer-bio"
                  className="block text-xs font-semibold text-[#123047] mb-1"
                >
                  Short Trainer Bio / Experience Focus *
                </label>
                <input
                  id="trainer-bio"
                  type="text"
                  value={newBio}
                  onChange={(e) => setNewBio(e.target.value)}
                  placeholder="Describe coaching style, session focus, and community approach..."
                  className="w-full rounded-xl bg-white border border-[#123047]/15 px-3 py-2 text-sm text-[#123047] focus:border-[#0B8F86] focus:outline-none"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-semibold text-[#C8641F]">
                  {formError}
                </p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors cursor-pointer"
                >
                  Add Trainer
                </button>
              </div>
            </form>
          )}

          {/* Horizontal Trainers Bar */}
          <div
            ref={scrollContainerRef}
            className="mt-8 flex items-stretch gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            role="region"
            aria-label="Meet the Trainers horizontal bar"
          >
            {trainers.map((trainer) => (
              <article
                key={trainer.id}
                className="snap-start shrink-0 w-[260px] min-[380px]:w-[290px] sm:w-[310px] bg-[#F7FAF8] rounded-3xl border border-[#123047]/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square w-full bg-[#F7FAF8]">
                    <ResilientImage
                      src={trainer.photo}
                      alt={`Vector illustration of ${trainer.name} — ${trainer.role}`}
                      fallbackTitle={trainer.name}
                      fallbackSubtitle={trainer.role}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <p
                      className="text-xs font-bold uppercase tracking-wide"
                      style={{ color: trainer.accentHex }}
                    >
                      {trainer.focusGroup}
                    </p>
                    <h3 className="mt-1 font-display font-bold text-lg text-[#123047]">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-medium text-[#4A6072]">{trainer.role}</p>
                    <p className="mt-3 text-sm text-[#123047]/80 leading-relaxed">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trainer Join / Enquiry Bar Footer */}
          <div className="mt-4 rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#4A6072]">
              Are you a certified fitness trainer, PE teacher, yoga instructor, or sports coach in
              Jaipur looking to collaborate with FitCircle?
            </p>
            <a
              href={buildWhatsAppUrl(
                'Hi FitCircle! I am a trainer/coach in Jaipur and would like to connect regarding coaching opportunities with FitCircle.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors sm:whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Collaborate on WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
