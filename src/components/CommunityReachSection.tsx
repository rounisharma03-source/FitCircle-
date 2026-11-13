import { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Compass, MapPin, Users } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export type ReachStage =
  | 'High Resident Interest'
  | 'Pilot Outreach Zone'
  | 'Society Enquiries Open';

interface JaipurLocalityNode {
  id: string;
  name: string;
  coords: [number, number]; // [lon, lat]
  stage: ReachStage;
  zoneLabel: string;
  description: string;
  topInterests: string[];
}

const JAIPUR_LOCALITIES_DATA: JaipurLocalityNode[] = [
  {
    id: 'vaishali-nagar',
    name: 'Vaishali Nagar',
    coords: [75.744, 26.912],
    stage: 'High Resident Interest',
    zoneLabel: 'West Jaipur Corridor',
    description:
      'Strong early interest from gated residential societies and multi-tower family communities seeking after-school kids clubs and morning adult batches.',
    topInterests: ['Kids Activity Club', 'Adult Functional Fitness', 'Family Mornings'],
  },
  {
    id: 'malviya-nagar',
    name: 'Malviya Nagar',
    coords: [75.815, 26.854],
    stage: 'High Resident Interest',
    zoneLabel: 'South-Central Jaipur',
    description:
      'Active enquiries from apartment complexes and neighbourhood parks looking for convenient, gym-free morning and evening routines.',
    topInterests: ['Adult Functional Fitness', 'Teen Sports Drills', 'Walking Challenges'],
  },
  {
    id: 'mansarovar',
    name: 'Mansarovar',
    coords: [75.764, 26.858],
    stage: 'High Resident Interest',
    zoneLabel: 'South-West Jaipur',
    description:
      'Growing family interest in screen-free outdoor play, kids agility obstacle sessions, and weekend community fitness mornings.',
    topInterests: ['Kids Activity Club', 'Mini Olympics', 'Adult Group Circuits'],
  },
  {
    id: 'jagatpura',
    name: 'Jagatpura',
    coords: [75.862, 26.828],
    stage: 'High Resident Interest',
    zoneLabel: 'South-East Residential Belt',
    description:
      'High concentration of modern residential townships with spacious lawns ideal for portable obstacle courses and multi-age group sessions.',
    topInterests: ['Kids Activity Club', 'Teen Fitness & Sports', 'Society Events'],
  },
  {
    id: 'ajmer-road',
    name: 'Ajmer Road',
    coords: [75.698, 26.885],
    stage: 'Pilot Outreach Zone',
    zoneLabel: 'West Growth Corridor',
    description:
      'Expanding residential enclaves where residents want fitness programmes brought inside society gates without long city commutes.',
    topInterests: ['Adult Functional Fitness', 'Kids Activity Club', 'Weekend Relays'],
  },
  {
    id: 'tonk-road',
    name: 'Tonk Road',
    coords: [75.803, 26.815],
    stage: 'Pilot Outreach Zone',
    zoneLabel: 'Central-South Axis',
    description:
      'Working professionals and families exploring beginner-friendly evening strength, mobility, and teen conditioning batches.',
    topInterests: ['Adult Functional Fitness', 'Teen Fitness & Sports', 'Partner Workouts'],
  },
  {
    id: 'c-scheme',
    name: 'C-Scheme',
    coords: [75.798, 26.905],
    stage: 'Society Enquiries Open',
    zoneLabel: 'Central Jaipur',
    description:
      'Boutique residential blocks and green pockets open for small-group functional mobility and guided community sessions.',
    topInterests: ['Adult Mobility & Core', 'Yoga & Stretching', 'Family Challenges'],
  },
  {
    id: 'raja-park',
    name: 'Raja Park',
    coords: [75.829, 26.898],
    stage: 'Society Enquiries Open',
    zoneLabel: 'East-Central Jaipur',
    description:
      'Vibrant family neighbourhoods ideal for energetic kids evening clubs, dance fitness, and community activity days.',
    topInterests: ['Kids Activity Club', 'Dance & Group Fitness', 'Family Mornings'],
  },
  {
    id: 'vidhyadhar-nagar',
    name: 'Vidhyadhar Nagar',
    coords: [75.78, 26.96],
    stage: 'Pilot Outreach Zone',
    zoneLabel: 'North Jaipur',
    description:
      'Well-planned residential sectors and community parks welcoming introductory demonstrations for multi-generational fitness.',
    topInterests: ['Adult Functional Fitness', 'Kids Obstacle Play', 'Walking Clubs'],
  },
  {
    id: 'pratap-nagar',
    name: 'Pratap Nagar',
    coords: [75.824, 26.798],
    stage: 'Society Enquiries Open',
    zoneLabel: 'South Jaipur',
    description:
      'Growing apartment clusters and student-family hubs exploring structured teen sports and evening adult group batches.',
    topInterests: ['Teen Fitness & Sports', 'Kids Activity Club', 'Group Circuits'],
  },
];

// Geographic footprint and major corridors of Jaipur for D3 projection
const JAIPUR_URBAN_BOUNDARY: GeoJSON.Feature<GeoJSON.Polygon> = {
  type: 'Feature',
  properties: { name: 'Jaipur Urban Footprint' },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [75.675, 26.905],
        [75.735, 26.972],
        [75.835, 26.982],
        [75.888, 26.915],
        [75.892, 26.815],
        [75.835, 26.775],
        [75.742, 26.792],
        [75.682, 26.845],
        [75.675, 26.905],
      ],
    ],
  },
};

const JAIPUR_CORRIDORS: GeoJSON.Feature<GeoJSON.LineString>[] = [
  {
    type: 'Feature',
    properties: { name: 'Ajmer Road – MI Road' },
    geometry: {
      type: 'LineString',
      coordinates: [
        [75.68, 26.878],
        [75.744, 26.906],
        [75.802, 26.912],
        [75.84, 26.902],
      ],
    },
  },
  {
    type: 'Feature',
    properties: { name: 'Tonk Road Axis' },
    geometry: {
      type: 'LineString',
      coordinates: [
        [75.805, 26.925],
        [75.803, 26.865],
        [75.804, 26.812],
        [75.818, 26.78],
      ],
    },
  },
  {
    type: 'Feature',
    properties: { name: 'JLN Marg – Jagatpura' },
    geometry: {
      type: 'LineString',
      coordinates: [
        [75.806, 26.912],
        [75.816, 26.854],
        [75.862, 26.828],
      ],
    },
  },
  {
    type: 'Feature',
    properties: { name: 'Sikar Road – Vidhyadhar Nagar' },
    geometry: {
      type: 'LineString',
      coordinates: [
        [75.788, 26.918],
        [75.78, 26.96],
        [75.774, 26.982],
      ],
    },
  },
];

const STAGE_STYLES: Record<ReachStage, { color: string; shortLabel: string }> = {
  'High Resident Interest': { color: '#0B8F86', shortLabel: 'High Interest' },
  'Pilot Outreach Zone': { color: '#79BE43', shortLabel: 'Pilot Outreach' },
  'Society Enquiries Open': { color: '#F28C45', shortLabel: 'Enquiries Open' },
};

type StageFilter = 'All' | ReachStage;

export function CommunityReachSection() {
  const [stageFilter, setStageFilter] = useState<StageFilter>('All');
  const [selectedId, setSelectedId] = useState<string>('vaishali-nagar');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const visibleLocalities = useMemo(() => {
    if (stageFilter === 'All') return JAIPUR_LOCALITIES_DATA;
    return JAIPUR_LOCALITIES_DATA.filter((item) => item.stage === stageFilter);
  }, [stageFilter]);

  const selectedLocality = useMemo(() => {
    const found = JAIPUR_LOCALITIES_DATA.find((item) => item.id === selectedId);
    return found ?? JAIPUR_LOCALITIES_DATA[0];
  }, [selectedId]);

  // Compute D3 GeoMercator projection & path generator
  const { boundaryPath, corridorPaths, projectedPoints } = useMemo(() => {
    const width = 720;
    const height = 500;
    const projection = d3
      .geoMercator()
      .fitExtent(
        [
          [48, 38],
          [width - 48, height - 38],
        ],
        JAIPUR_URBAN_BOUNDARY
      );

    const pathGen = d3.geoPath(projection);

    const boundary = pathGen(JAIPUR_URBAN_BOUNDARY) ?? '';
    const corridors = JAIPUR_CORRIDORS.map((corridor) => ({
      name: String(corridor.properties?.name ?? ''),
      d: pathGen(corridor) ?? '',
    }));

    const points = JAIPUR_LOCALITIES_DATA.map((node) => {
      const projected = projection(node.coords) ?? [width / 2, height / 2];
      return {
        ...node,
        x: projected[0],
        y: projected[1],
      };
    });

    return {
      boundaryPath: boundary,
      corridorPaths: corridors,
      projectedPoints: points,
    };
  }, []);

  // Subtle D3 transition for active selection ring
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    svg
      .selectAll<SVGCircleElement, unknown>('.reach-pulse-ring')
      .transition()
      .duration(300)
      .attr('r', function () {
        const id = this.getAttribute('data-id');
        if (id === selectedId) return 24;
        if (id === hoveredId) return 20;
        return 15;
      })
      .attr('stroke-opacity', function () {
        const id = this.getAttribute('data-id');
        if (id === selectedId) return 0.7;
        if (id === hoveredId) return 0.5;
        return 0.28;
      });
  }, [selectedId, hoveredId, stageFilter]);

  function handleSelectFilter(filter: StageFilter) {
    setStageFilter(filter);
    if (filter !== 'All') {
      const firstMatch = JAIPUR_LOCALITIES_DATA.find((item) => item.stage === filter);
      if (firstMatch) setSelectedId(firstMatch.id);
    }
  }

  const localityWhatsappUrl = buildWhatsAppUrl(
    `Hi FitCircle! I am enquiring about FitCircle community fitness sessions in ${selectedLocality.name}, Jaipur.\n\nMy Society/Complex Name:\nProgramme of Interest:\nPreferred Time:\n\nPlease share pilot demo availability.`
  );

  return (
    <section
      id="community-reach"
      className="py-16 sm:py-20 bg-[#F7FAF8] border-b border-[#123047]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B8F86]">
                <Compass className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Community Reach · Jaipur Pilot Footprint</span>
              </div>
              <h2
                className="mt-2 font-display font-bold text-3xl sm:text-4xl text-[#123047] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Where Jaipur Societies Are Showing Interest
              </h2>
              <p className="mt-3 text-base text-[#4A6072] leading-relaxed">
                Explore the Jaipur residential corridors where FitCircle is actively engaging
                residents and RWA communities for pilot launches. Select any locality on the map
                to inspect programme interest.
              </p>
            </div>

            {/* Stage Filter Buttons */}
            <div
              role="group"
              aria-label="Filter Jaipur localities by pilot outreach stage"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#123047]/10 rounded-xl self-start lg:self-auto"
            >
              {(
                [
                  'All',
                  'High Resident Interest',
                  'Pilot Outreach Zone',
                  'Society Enquiries Open',
                ] as StageFilter[]
              ).map((tab) => {
                const isActive = stageFilter === tab;
                const label = tab === 'All' ? 'All Localities' : STAGE_STYLES[tab].shortLabel;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleSelectFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#123047] text-white'
                        : 'text-[#4A6072] hover:text-[#123047]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive D3 Map + Locality Spotlight */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: D3.js Geographic Locality Map */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#123047]/10 p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#123047]/10 text-xs text-[#4A6072]">
                <span className="font-semibold text-[#123047]">
                  Interactive Jaipur Neighbourhood Map
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  {(Object.keys(STAGE_STYLES) as ReachStage[]).map((stage) => (
                    <span key={stage} className="inline-flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: STAGE_STYLES[stage].color }}
                        aria-hidden="true"
                      />
                      <span>{STAGE_STYLES[stage].shortLabel}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative w-full mt-3 rounded-2xl bg-[#F7FAF8] border border-[#123047]/10 overflow-hidden">
                <svg
                  ref={svgRef}
                  viewBox="0 0 720 500"
                  className="w-full h-auto block select-none"
                  role="img"
                  aria-label="D3.js map of Jaipur localities where FitCircle is building community interest"
                >
                  {/* Subtle coordinate grid backdrop */}
                  <defs>
                    <pattern
                      id="jaipur-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#123047"
                        strokeOpacity="0.04"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="720" height="500" fill="url(#jaipur-grid)" />

                  {/* Urban Jaipur Footprint Polygon rendered via D3 GeoPath */}
                  <path
                    d={boundaryPath}
                    fill="#EBF5F2"
                    stroke="#0B8F86"
                    strokeOpacity="0.28"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />

                  {/* Major Jaipur Arterial Corridors rendered via D3 GeoPath */}
                  {corridorPaths.map((corridor) => (
                    <path
                      key={corridor.name}
                      d={corridor.d}
                      fill="none"
                      stroke="#123047"
                      strokeOpacity="0.14"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  ))}

                  {/* Central Jaipur Anchor Label */}
                  <text
                    x="398"
                    y="198"
                    textAnchor="middle"
                    className="fill-[#123047]/35 text-[11px] font-semibold tracking-widest uppercase"
                  >
                    JAIPUR CITY
                  </text>

                  {/* Projected Locality Nodes */}
                  {projectedPoints.map((node) => {
                    const isVisible =
                      stageFilter === 'All' || node.stage === stageFilter;
                    const isSelected = node.id === selectedLocality.id;
                    const isHovered = node.id === hoveredId;
                    const style = STAGE_STYLES[node.stage];

                    // Slight label placement adjustment to prevent overlap in dense central cluster
                    const labelDy =
                      node.id === 'c-scheme'
                        ? -16
                        : node.id === 'mansarovar'
                        ? 22
                        : node.id === 'malviya-nagar'
                        ? 22
                        : -15;

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${node.x}, ${node.y})`}
                        opacity={isVisible ? 1 : 0.22}
                        className="cursor-pointer focus:outline-none"
                        tabIndex={0}
                        role="button"
                        aria-label={`${node.name} — ${node.stage}`}
                        aria-pressed={isSelected}
                        onClick={() => setSelectedId(node.id)}
                        onMouseEnter={() => setHoveredId(node.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedId(node.id);
                          }
                        }}
                      >
                        {/* Concentric Reach Ring managed by D3 transitions */}
                        <circle
                          className="reach-pulse-ring"
                          data-id={node.id}
                          r={isSelected ? 24 : 15}
                          fill={style.color}
                          fillOpacity={isSelected ? 0.14 : 0.06}
                          stroke={style.color}
                          strokeOpacity={isSelected ? 0.7 : 0.28}
                          strokeWidth={isSelected ? 2 : 1.25}
                        />

                        {/* Pin Core */}
                        <circle
                          r={isSelected || isHovered ? 8.5 : 6.5}
                          fill={style.color}
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                        />

                        {/* Locality Label */}
                        <text
                          y={labelDy}
                          textAnchor="middle"
                          className={`text-[11px] font-semibold pointer-events-none ${
                            isSelected ? 'fill-[#123047]' : 'fill-[#123047]/80'
                          }`}
                          style={{
                            paintOrder: 'stroke',
                            stroke: '#F7FAF8',
                            strokeWidth: '3.5px',
                            strokeLinejoin: 'round',
                          }}
                        >
                          {node.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <p className="mt-3 text-xs text-[#4A6072]">
                Schematic geographic projection of Jaipur residential corridors. Tap or click any
                locality pin to view details.
              </p>
            </div>

            {/* Right: Selected Locality Inspector & Quick Locality Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5">
              {/* Spotlight Card */}
              <div className="bg-white rounded-3xl border border-[#123047]/10 p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#123047]/10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6072]">
                      <MapPin className="w-3.5 h-3.5 text-[#0B8F86]" aria-hidden="true" />
                      <span>{selectedLocality.zoneLabel}</span>
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: STAGE_STYLES[selectedLocality.stage].color }}
                    >
                      {selectedLocality.stage}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display font-bold text-2xl text-[#123047]">
                    {selectedLocality.name}, Jaipur
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#4A6072] leading-relaxed">
                    {selectedLocality.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold text-[#123047] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0B8F86]" aria-hidden="true" />
                      <span>Most Requested Programmes Here</span>
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-[#123047]/85">
                      {selectedLocality.topInterests.map((interest, idx) => (
                        <li key={interest} className="inline-flex items-center gap-2">
                          {idx > 0 && (
                            <span className="text-[#123047]/25" aria-hidden="true">
                              ·
                            </span>
                          )}
                          <span>{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#123047]/10 space-y-3">
                  <a
                    href={localityWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B8F86] text-white text-sm font-semibold hover:bg-[#09766E] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Enquire for {selectedLocality.name} on WhatsApp</span>
                  </a>
                  <p className="text-xs text-[#4A6072] text-center">
                    In another Jaipur area? Message us to bring an introductory demo to your
                    society.
                  </p>
                </div>
              </div>

              {/* Quick Locality Switcher List */}
              <div className="bg-white rounded-2xl border border-[#123047]/10 p-4">
                <p className="text-xs font-semibold text-[#123047] mb-2.5">
                  Highlighted Localities ({visibleLocalities.length})
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {visibleLocalities.map((loc) => {
                    const active = loc.id === selectedLocality.id;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setSelectedId(loc.id)}
                        className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors truncate cursor-pointer ${
                          active
                            ? 'bg-[#123047] text-white'
                            : 'bg-[#F7FAF8] text-[#123047]/80 hover:text-[#0B8F86]'
                        }`}
                      >
                        {loc.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
