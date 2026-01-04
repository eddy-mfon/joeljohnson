
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`jj-logo ${className}`}>
      <span className="j1">J</span>
      <span className="j2">J</span>
      <span className="dot">.</span>
    </div>
  );
};
