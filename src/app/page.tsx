import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
