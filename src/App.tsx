import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MothersNote } from './components/MothersNote';
import { Philosophy } from './components/Philosophy';
import { Pricing } from './components/Pricing';
import { Specializations } from './components/Specializations';
import { Timeline } from './components/Timeline';

const App = () => {
  return (
    <main>
      <Hero />
      <MothersNote />
      <Timeline />
      <Specializations />
      <Philosophy />
      <Pricing />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;
