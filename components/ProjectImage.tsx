
import React, { useState } from 'react';
import { Logo } from './Logo';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gray-50 flex flex-col items-center justify-center p-12 text-center border vogue-border ${className}`}>
        <Logo className="scale-150 mb-4" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Image Unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  );
};
