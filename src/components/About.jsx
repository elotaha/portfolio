import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">{t.labels.sectionAbout}</h2>
        <p className="about-text">{t.about.text}</p>
      </div>
    </section>
  );
};

export default About;
