import React from 'react';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassmorphicCard({ children, className = '' }: GlassmorphicCardProps) {
  return <div className={`editorial-panel ${className}`}>{children}</div>;
}
