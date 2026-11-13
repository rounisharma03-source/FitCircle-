/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { AboutFaqContactFooter } from './components/AboutFaqContactFooter';
import { ApproachAndProcessSections } from './components/ApproachAndProcessSections';
import { CommunityAndTimingsSections } from './components/CommunityAndTimingsSections';
import { FloatingControls } from './components/FloatingControls';
import { HeroSection } from './components/HeroSection';
import { MeetTrainersSection } from './components/MeetTrainersSection';
import { Navbar } from './components/Navbar';
import { ProgrammesSection } from './components/ProgrammesSection';
import { SocietyAndFutureSections } from './components/SocietyAndFutureSections';
import { TestimonialsSliderSection } from './components/TestimonialsSliderSection';
import { WhyAndAudienceSections } from './components/WhyAndAudienceSections';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7FAF8] text-[#123047] overflow-x-clip">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Why FitCircle? & 4. Target Audience */}
        <WhyAndAudienceSections />

        {/* 5. Kids Activity Club, 6. Teen Fitness & Sports Club, 7. Adult Functional Fitness, 8. Family & Community Activities */}
        <ProgrammesSection />

        {/* Meet the Trainers Horizontal Bar */}
        <MeetTrainersSection />

        {/* 9. Expert-Curated Approach, 10. How FitCircle Works, 11. Equipment & Mobile Delivery */}
        <ApproachAndProcessSections />

        {/* 12. Community Events & 13. Proposed Timings */}
        <CommunityAndTimingsSections />

        {/* Community Voices / Testimonial Slider */}
        <TestimonialsSliderSection />

        {/* 14. Society / RWA Partnership & 15. Future Services */}
        <SocietyAndFutureSections />

        {/* 16. About FitCircle, 17. FAQs, 18. Contact & WhatsApp Enquiry, 19. Footer */}
        <AboutFaqContactFooter />
      </main>

      <FloatingControls />
      </div>
    </MotionConfig>
  );
}
