import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { ClassPillarsSection } from './components/ClassPillarsSection';
import { AllianceEssenceSection } from './components/AllianceEssenceSection';
import { AllianceTriangleSection } from './components/AllianceTriangleSection';
import { DirectionsSection } from './components/DirectionsSection';
import { QuizArenaSection } from './components/QuizArenaSection';
import { QrExperienceSection } from './components/QrExperienceSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Fixed Header Navbar spanning full width */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main style={{ flex: 1 }}>
        <HeroSection onScrollToQuiz={scrollToQuiz} />

        <OverviewSection />

        <ClassPillarsSection />

        <AllianceEssenceSection />

        <AllianceTriangleSection />

        <DirectionsSection />

        <QuizArenaSection />

        <QrExperienceSection url="https://mln131-gamma.vercel.app/" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
