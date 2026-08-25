import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">{t.labels.sectionProjects}</h2>

        <div className="projects-grid">
          {t.projects.map((proj) => (
            <article key={proj.id} className="project-card">
              <div className="project-header">
                <div>
                  <span className="project-type mono">{proj.type}</span>
                  <h3 className="project-title">{proj.title}</h3>
                </div>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link" title="Code GitHub">
                    <FaGithub size={18} />
                  </a>
                )}
              </div>

              <p className="project-desc">{proj.description}</p>
              
              <div className="project-learning">
                <span className="learning-label mono">{t.labels.learnings}</span>
                <p>{proj.learnings}</p>
              </div>

              <div className="project-techs">
                {proj.techs.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
