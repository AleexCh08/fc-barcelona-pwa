import React from 'react';

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`feature-card ${className}`}>
      {children}
    </div>
  );
};