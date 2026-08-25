import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">{t.labels.sectionContact}</h2>

        <div className="contact-box">
          <h3 className="contact-pitch">{t.contact.pitch}</h3>
          <p className="contact-subtext">{t.contact.subtext}</p>
          
          <div className="contact-actions">
            <a href={`mailto:${t.contact.email}`} className="btn btn-primary">
              <Mail size={16} /> {t.contact.email}
            </a>
          </div>

          <div className="contact-socials mono">
            <a href={t.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href={t.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
