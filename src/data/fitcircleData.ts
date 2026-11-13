export interface WhyProblemGroup {
  id: string;
  audience: string;
  ageNote: string;
  points: string[];
  accentHex: string;
}

export const WHY_PROBLEMS: WhyProblemGroup[] = [
  {
    id: 'children',
    audience: 'For Children',
    ageNote: '10–13 Years',
    points: [
      'Increasing screen-based leisure time after school hours.',
      'Lack of enjoyable, structured outdoor physical activities nearby.',
      'Limited opportunities for neighbourhood teamwork and social interaction.',
      'Need for engaging movement, coordination, and active offline play.',
    ],
    accentHex: '#79BE43',
  },
  {
    id: 'teenagers',
    audience: 'For Teenagers',
    ageNote: '14–18 Years',
    points: [
      'Need for structured, age-appropriate physical activity outside academics.',
      'Opportunities to build physical confidence, coordination, and stamina.',
      'Growing interest in sports-inspired drills, friendly competition, and group challenges.',
    ],
    accentHex: '#0B8F86',
  },
  {
    id: 'adults',
    audience: 'For Adults',
    ageNote: '35–55 Years · Men & Women',
    points: [
      'Sedentary workdays and long hours indoors.',
      'Busy working and family schedules with minimal personal time.',
      'Difficulty finding time or motivation to commute to a commercial gym.',
      'Inconsistent exercise routines and preference for approachable group fitness.',
    ],
    accentHex: '#F28C45',
  },
  {
    id: 'families',
    audience: 'For Families & Societies',
    ageNote: 'Whole Community',
    points: [
      'Limited shared recreational experiences across age groups.',
      'Residents wanting genuine ways to connect with neighbours.',
      'Need for organised, safe community activities inside the premises.',
      'Opportunities to build healthier, happier, and more active residential environments.',
    ],
    accentHex: '#123047',
  },
];

export interface AudienceOverview {
  id: string;
  targetId: string;
  title: string;
  ageRange: string;
  status: 'Pilot Launch' | 'Planned Future Programme';
  summary: string;
  forWhom: string;
}

export const TARGET_AUDIENCES: AudienceOverview[] = [
  {
    id: 'kids',
    targetId: 'kids-club',
    title: 'Kids Activity Club',
    ageRange: '10–13 years',
    status: 'Pilot Launch',
    summary:
      'Screen-free outdoor obstacle courses, agility games, and team play that help children love movement and build offline friendships.',
    forWhom: 'Boys & girls · All activity levels',
  },
  {
    id: 'teens',
    targetId: 'teens-club',
    title: 'Teen Fitness & Sports Club',
    ageRange: '14–18 years',
    status: 'Pilot Launch',
    summary:
      'Structured speed, agility, bodyweight foundations, and sports-inspired group challenges designed to build confidence and healthy routines.',
    forWhom: 'Teen boys & girls · Beginner to active',
  },
  {
    id: 'adults',
    targetId: 'adults-club',
    title: 'Adult Functional Fitness',
    ageRange: '35–55 years',
    status: 'Pilot Launch',
    summary:
      'Beginner-friendly strength, mobility, core, and low-impact group sessions right in your society lawn—zero gym commute required.',
    forWhom: 'Men & women · Modified for all fitness levels',
  },
  {
    id: 'family',
    targetId: 'family-community',
    title: 'Family Fitness & Community Events',
    ageRange: 'All suitable age groups',
    status: 'Pilot Launch',
    summary:
      'Shared weekend mornings, parents-versus-kids relays, Mini Olympics, and neighbourhood fitness days that bring neighbours together.',
    forWhom: 'Parents, children, teens & neighbours',
  },
  {
    id: 'ageing',
    targetId: 'future-services',
    title: 'Active Ageing Club',
    ageRange: '55+ years',
    status: 'Planned Future Programme',
    summary:
      'Gentle mobility, balance, walking clubs, and social movement sessions planned for introduction after pilot validation and expert alignment.',
    forWhom: 'Senior residents · Planned expansion',
  },
];

export const KIDS_ACTIVITIES: string[] = [
  'Obstacle courses',
  'Agility ladder',
  'Cone races',
  'Relay races',
  'Skipping challenges',
  'Balance games',
  'Coordination activities',
  'Treasure hunts',
  'Team-building activities',
  'Mini Olympics',
  'Fun movement challenges',
  'Screen-free outdoor activity sessions',
];

export const TEENS_ACTIVITIES: string[] = [
  'Fitness foundations',
  'Bodyweight exercise',
  'Resistance band training',
  'Agility and speed drills',
  'Sports-inspired movement',
  'Coordination',
  'Team competitions',
  'Functional fitness',
  'Strength foundations',
  'Recreational games',
];

export const ADULTS_ACTIVITIES: string[] = [
  'Functional strength training',
  'Resistance band exercises',
  'Light dumbbell workouts',
  'Mobility and flexibility',
  'Core strengthening',
  'Low-impact cardio',
  'Balance exercises',
  'Bodyweight circuits',
  'Stretching',
  'Group fitness challenges',
  'Partner exercises',
  'Beginner-friendly workouts',
];

export const FAMILY_ACTIVITIES: string[] = [
  'Family fitness mornings',
  'Parents versus kids challenges',
  'Family relay races',
  'Community fitness days',
  'Neighbourhood games',
  'Mini Olympics',
  'Group challenges',
  'Society activity events',
];

export const EXPERT_COLLABORATORS: { role: string; focus: string }[] = [
  {
    role: 'Certified Fitness Trainers',
    focus: 'Structured session delivery, proper movement form, and scalable beginner progressions.',
  },
  {
    role: 'Physical Education Teachers',
    focus: 'School-age play pedagogy, motor coordination, and inclusive group game formats.',
  },
  {
    role: 'Sports Coaches',
    focus: 'Agility, speed mechanics, team sportsmanship, and recreational drills for teens.',
  },
  {
    role: 'Doctors (Health-Awareness Inputs)',
    focus: 'General preventive wellness awareness and safe physical activity screening guidelines.',
  },
  {
    role: 'Physiotherapists (Movement Education)',
    focus: 'Joint-friendly mobility principles and posture-conscious warm-ups and cooldowns.',
  },
  {
    role: 'Yoga Instructors',
    focus: 'Breathing awareness, guided stretching, balance, and recovery routines.',
  },
  {
    role: 'Child Development Experts',
    focus: 'Age-appropriate engagement, confidence building, and screen-free social play.',
  },
  {
    role: 'Experienced Army Personnel',
    focus: 'Constructive discipline, teamwork spirit, and structured obstacle-style activities.',
  },
];

export const SAFETY_PRACTICES: string[] = [
  'Appropriate trainer qualifications and background screening before leading society batches.',
  'Written parental consent required for all participating children and teenagers.',
  'On-site first-aid kit arrangements and clear emergency response protocols during sessions.',
  'Strict child-safety practices in open, visible residential society common spaces.',
];

export const HOW_IT_WORKS_STEPS: { step: string; title: string; description: string }[] = [
  {
    step: '01',
    title: 'Society Approach or Enquiry',
    description:
      'FitCircle connects with a residential society in Jaipur—or receives an enquiry from residents or RWA members.',
  },
  {
    step: '02',
    title: 'Space & Timing Approval',
    description:
      'Society management approves an appropriate open lawn, courtyard, or activity space along with convenient morning or evening timings.',
  },
  {
    step: '03',
    title: 'Introductory Demo or Trial',
    description:
      'FitCircle organises an engaging introductory demonstration or trial session so families and residents can experience the format first-hand.',
  },
  {
    step: '04',
    title: 'Resident Registration',
    description:
      'Interested residents register and select suitable programmes for their kids, teens, adults, or family.',
  },
  {
    step: '05',
    title: 'Regular Sessions Delivered',
    description:
      'Trained instructors arrive on schedule with all portable fitness equipment and conduct energetic group sessions right inside your society.',
  },
];

export const PORTABLE_EQUIPMENT: string[] = [
  'Resistance bands',
  'Light dumbbells',
  'Kettlebells where appropriate',
  'Exercise mats',
  'Agility ladders',
  'Cones',
  'Skipping ropes',
  'Soft balls',
  'Medicine balls where appropriate',
  'Obstacle-course equipment',
  'Balance equipment',
];

export const COMMUNITY_EXPERIENCES: string[] = [
  'Weekly activity themes',
  'Monthly fitness challenges',
  'Kids Mini Olympics',
  'Adult group challenges',
  'Family fitness days',
  'Walking clubs',
  'Partner fitness activities',
  'Friendly team competitions',
  'Community fitness carnivals',
  'Bring-a-neighbour sessions',
  'Society-versus-society events (planned for expansion)',
  'Participation recognition',
  'Community fitness ambassadors',
];

export const ADULT_GROUP_ACTIVITIES: string[] = [
  'Partner resistance-band workouts',
  'Group circuits',
  'Walking challenges',
  'Dance fitness with qualified instructors',
  'Friendly relay competitions',
  'Mobility challenges',
  'Balance challenges',
  'Team fitness games',
  'Weekend recreational sports',
];

export const SOCIETY_PARTNER_BENEFITS: string[] = [
  'Organised fitness programmes for children, teens, and adults.',
  'All portable fitness and game equipment supplied by FitCircle.',
  'Vetted, organised trainers and structured session formats.',
  'No capital expense or space needed to establish a conventional gym.',
  'Convenient morning and evening batch options.',
  'Engaging community events, Mini Olympics, and family fitness challenges.',
  'Complimentary introductory demonstration for residents.',
  'Flexible batch planning tailored to actual resident interest.',
];

export const FUTURE_SERVICES: string[] = [
  'Home personal training',
  'Corporate wellness',
  'Employee fitness programmes',
  'Birthday fitness parties',
  'Summer and winter activity camps',
  'Inter-society sports competitions',
  'Active Ageing Club for 55+',
  'Expert-led workshops',
  'Nutrition-awareness sessions',
  'Healthy food and refreshment partnerships',
  'Preordered fruit bowls, salads, juices and healthy snacks',
  'Fitness merchandise',
  'Family fitness carnivals',
  'Wellness and telemedicine referral partnerships through authorised healthcare providers',
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is FitCircle?',
    answer:
      'FitCircle is a Jaipur-based community fitness and recreational activity startup that brings structured workouts, kids obstacle and agility games, teen sports drills, and family community events directly to residential societies.',
  },
  {
    question: 'Which age groups can participate?',
    answer:
      'Our initial pilot programmes cover Kids Activity Club (10–13 years), Teen Fitness & Sports Club (14–18 years), Adult Functional Fitness (35–55 years for men and women), and Family & Community Activities across suitable age groups. An Active Ageing Club for 55+ is planned as a future expansion after pilot validation.',
  },
  {
    question: 'Does FitCircle come to residential societies?',
    answer:
      'Yes. FitCircle operates on a society-based group fitness model. Our trainers travel directly to participating residential societies in Jaipur with portable equipment so residents can stay active steps from home.',
  },
  {
    question: 'Do I need to travel to a gym?',
    answer:
      'No. That is one of FitCircle’s core conveniences—you do not need to commute through traffic or join an intimidating gym. Sessions take place within an approved open lawn, park, or activity area in your own residential society.',
  },
  {
    question: 'What equipment is required?',
    answer:
      'The residential society does not need to buy or install any gym machines. FitCircle brings portable equipment such as resistance bands, light dumbbells, mats, agility ladders, cones, skipping ropes, soft balls, balance gear, and obstacle-course kits. Participants only need comfortable activewear, sports shoes, and a water bottle.',
  },
  {
    question: 'What are the session timings?',
    answer:
      'Our proposed operating windows are Morning (6:00 AM – 8:00 AM) and Evening (5:00 PM – 8:00 PM). Exact batch schedules depend on each residential society’s permissions, resident enrolment, and trainer availability.',
  },
  {
    question: 'How can I book a trial?',
    answer:
      'You can enquire via WhatsApp (+91 97848 85291) or fill out the enquiry form below with your society name and locality in Jaipur. We coordinate with interested residents and society management to organise an introductory demonstration or trial session.',
  },
  {
    question: 'How can my society partner with FitCircle?',
    answer:
      'RWA representatives, apartment association members, or active residents can reach out on WhatsApp using the "Partner With FitCircle" option. After reviewing an approved open activity space and mutually agreed terms and permissions, we can plan an introductory demo for your community.',
  },
  {
    question: 'What are the membership prices?',
    answer:
      'Pilot plans and session charges are shared directly on WhatsApp after confirming your residential society, selected programme, and batch size.',
  },
  {
    question: 'Are corporate programmes available?',
    answer:
      'Corporate wellness and employee fitness programmes are part of our planned future services to be introduced after pilot validation, based on customer demand and capacity.',
  },
  {
    question: 'Are all the future services currently available?',
    answer:
      'No. Our initial Jaipur pilot focuses on society-based Kids, Teens, Adults, and Family & Community programmes. Items listed under "What’s Next for FitCircle?" (such as home personal training, corporate wellness, Active Ageing 55+, camps, nutrition workshops, and telemedicine referrals) are planned future offerings that will roll out based on demand and suitable professional partnerships.',
  },
];

export const JAIPUR_LOCALITIES: string[] = [
  'Vaishali Nagar',
  'Malviya Nagar',
  'Mansarovar',
  'Jagatpura',
  'C-Scheme',
  'Raja Park',
  'Tonk Road',
  'Ajmer Road',
  'Bani Park',
  'Jhotwara',
  'Vidhyadhar Nagar',
  'Sodala',
  'Pratap Nagar',
  'Other Jaipur Locality',
];
