import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
