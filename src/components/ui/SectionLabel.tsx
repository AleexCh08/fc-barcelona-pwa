import React from 'react';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, className = '' }) => {
  return (
    <span className={`section-label mb-2 ${className}`}>
      {text}
    </span>
  );
};