import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section section-alt skills-section">
      <div className="container">
        <h2 className="section-title">{t.labels.sectionSkills}</h2>

        <div className="skills-grouped-list">
          {t.skillsGrouped.map((group, idx) => (
            <div key={idx} className="skill-group-row">
              <span className="group-name mono">{group.category} :</span>
              <div className="group-tags">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications simples */}
        <div className="certs-simple-block">
          <h3 className="sub-title mono" style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>
            <Award size={16} /> {t.labels.certifications}
          </h3>
          <div className="certs-simple-list">
            {t.certifications.map((cert, idx) => (
              <div key={idx} className="cert-simple-item">
                <span className="cert-title-text">{cert.name}</span>
                <span className="cert-issuer-badge mono">{cert.issuer}</span>
                {cert.badgeUrl && (
                  <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer" className="badge-link-mini mono">
                    {t.labels.officialBadge} <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
