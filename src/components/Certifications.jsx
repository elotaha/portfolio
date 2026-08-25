import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">{t.certifications.title}</h2>
        
        <div className="certifications-grid">
          {t.certifications.list.map((cert) => (
            <div key={cert.id} className="cert-card glass">
              <div className="cert-header">
                <Award className="cert-icon" size={28} />
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-footer">
                <span className="cert-status">
                  <CheckCircle size={16} /> {cert.status}
                </span>
                {cert.badgeUrl && (
                  <a 
                    href={cert.badgeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="badge-link btn btn-outline"
                  >
                    Badge Officiel <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
