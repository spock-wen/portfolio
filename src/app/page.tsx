import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Talks } from '@/components/Talks';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Talks />
      <div id="about">
        <About />
        <Experience />
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
