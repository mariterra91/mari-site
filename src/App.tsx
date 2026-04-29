import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MothersNote } from './components/MothersNote';
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
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
