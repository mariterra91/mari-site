import './App.css';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { MothersNote } from './components/MothersNote';
import { Specializations } from './components/Specializations';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <main>
      <Hero />
      <MothersNote />
      <Timeline />
      <Specializations />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
