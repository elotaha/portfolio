import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import DevAvatar from './DevAvatar';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Status Line */}
        <div className="hero-status-bar mono">
          <span className="status-dot"></span>
          <span>{t.profile.status}</span>
        </div>

        {/* Developer Header: Avatar + Name + Role */}
        <div className="hero-identity">
          <DevAvatar size={80} className="hero-avatar" />
          <div>
            <h1 className="hero-name">{t.hero.name}</h1>
            <h2 className="hero-role">{t.hero.role}</h2>
          </div>
        </div>

        {/* Level 1 Feature: PROMINENT SIGNATURE BOX */}
        <div className="hero-signature-box mono">
          <p className="signature-quote">
            "{t.hero.signature}"
          </p>
        </div>

        {/* Short Pitch */}
        <p className="hero-description">{t.hero.description}</p>

        {/* Actions */}
        <div className="hero-actions">
          <a href="#experience" className="btn btn-primary">
            {t.hero.ctaPrimary} <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.ctaSecondary} <Mail size={16} />
          </a>
          <a 
            href={t.profile.snowflakeBadge} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="snowflake-link mono"
          >
            {t.labels.snowflakeBadge} <ExternalLink size={12} />
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-socials mono">
          <a href={t.profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} /> github.com/elotaha
          </a>
          <a href={t.profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={16} /> linkedin/taha-el-allem
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
