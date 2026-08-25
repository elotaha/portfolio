import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';

const SectionDivider = ({ text = "///" }) => (
  <div className="section-divider">
    <span className="divider-badge mono">{text}</span>
  </div>
);

function App() {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider text="01. about" />
        <About />
        <SectionDivider text="02. experience" />
        <Experience />
        <SectionDivider text="03. projects" />
        <Projects />
        <SectionDivider text="04. skills" />
        <Skills />
        <SectionDivider text="05. contact" />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2.5rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }} className="mono">
        <p>{t.footer.text}</p>
      </footer>
    </div>
  );
}

export default App;
