import { ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <div className={`card-zoom ${className}`}>
      {children}
    </div>
  );
}
