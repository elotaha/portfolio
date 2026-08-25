import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredExperiences = activeFilter === 'all' 
    ? t.experiences 
    : t.experiences.filter(exp => exp.subject === activeFilter);

  const filters = [
    { key: 'all', label: t.labels.filterAll },
    { key: 'data', label: t.labels.filterData },
    { key: 'genai', label: t.labels.filterGenAI },
    { key: 'realtime', label: t.labels.filterRealTime }
  ];

  return (
    <section id="experience" className="section section-alt experience-section">
      <div className="container">
        <h2 className="section-title">{t.labels.sectionExperience}</h2>

        {/* Subject Filter Bar */}
        <div className="filter-bar mono">
          <span className="filter-icon"><Filter size={14} /></span>
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Experiences List */}
        <div className="experiences-list">
          {filteredExperiences.map((exp) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <article key={exp.id} className={`exp-card ${isExpanded ? 'is-open' : ''}`}>
                <div className="exp-header" onClick={() => toggleExpand(exp.id)}>
                  <div>
                    <div className="exp-title-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="subject-badge tag">{exp.subjectLabel}</span>
                    </div>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <span className="exp-period mono">{exp.period}</span>
                </div>

                <div className="exp-body">
                  {/* Problem - Always Visible */}
                  <div className="story-item">
                    <span className="story-label mono">{t.labels.problem}</span>
                    <p className="story-text">{exp.problem}</p>
                  </div>

                  {/* Expand / Collapse Button */}
                  <button 
                    className="toggle-expand-btn mono"
                    onClick={() => toggleExpand(exp.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? t.labels.collapseDetails : t.labels.expandDetails}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className="expanded-content animate-fade-in">
                      {/* Action */}
                      <div className="story-item" style={{ marginTop: '1.25rem' }}>
                        <span className="story-label mono">{t.labels.action}</span>
                        <p className="story-text">{exp.action}</p>
                      </div>

                      {/* Result / Key Takeaway */}
                      <div className="takeaway-box" style={{ marginTop: '1.25rem' }}>
                        <span className="takeaway-label mono">{t.labels.takeaway}</span>
                        <p className="takeaway-text">"{exp.result}"</p>
                      </div>

                      {/* Techs */}
                      <div className="exp-techs" style={{ marginTop: '1.25rem' }}>
                        {exp.techs.map((tech, idx) => (
                          <span key={idx} className="tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Formation Académique */}
        <div className="education-block">
          <h3 className="sub-title mono">
            <GraduationCap size={18} /> {t.labels.education}
          </h3>
          <div className="education-grid">
            {t.education.map((edu) => (
              <div key={edu.id} className="edu-card">
                <div className="edu-header">
                  <h4 className="edu-school">{edu.school}</h4>
                  <span className="edu-period mono">{edu.period}</span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
