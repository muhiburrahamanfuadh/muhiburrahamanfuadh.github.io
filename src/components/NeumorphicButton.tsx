import React from 'react';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function NeumorphicButton({ children, onClick, className = '', type = 'button' }: NeumorphicButtonProps) {
  return <button type={type} onClick={onClick} className={`editorial-button ${className}`}>{children}</button>;
}
