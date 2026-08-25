import React from 'react';

const DevAvatar = ({ size = 90, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`dev-avatar ${className}`}
    >
      {/* Head */}
      <circle cx="50" cy="24" r="14" />
      {/* Hair detail */}
      <path d="M 38 20 C 40 12, 60 12, 62 20" />
      {/* Eyes */}
      <circle cx="44" cy="23" r="1.5" fill="currentColor" />
      <circle cx="56" cy="23" r="1.5" fill="currentColor" />
      {/* Smile */}
      <path d="M 45 29 Q 50 33 55 29" />
      {/* Neck */}
      <path d="M 46 38 L 46 44 L 54 44 L 54 38" />
      
      {/* Laptop Base & Body */}
      <path d="M 30 46 C 30 46, 36 44, 50 44 C 64 44, 70 46, 70 46 L 75 52 L 25 52 Z" fill="var(--bg-secondary)" />
      
      {/* Laptop Screen Outer */}
      <rect x="18" y="52" width="64" height="38" rx="6" />
      {/* Laptop Base Lip */}
      <path d="M 12 90 L 88 90 L 84 95 L 16 95 Z" fill="var(--bg-secondary)" />
      <line x1="42" y1="92" x2="58" y2="92" strokeWidth="3" />
      
      {/* Code symbol </ > on screen */}
      {/* < */}
      <path d="M 33 65 L 26 71 L 33 77" strokeWidth="2.5" />
      {/* / */}
      <line x1="48" y1="63" x2="43" y2="79" strokeWidth="2.5" />
      {/* > */}
      <path d="M 57 65 L 64 71 L 57 77" strokeWidth="2.5" />
    </svg>
  );
};

export default DevAvatar;
