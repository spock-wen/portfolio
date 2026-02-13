import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
}

export function Badge({ children, className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    outline: 'bg-transparent border border-slate-700 text-slate-300',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium font-mono',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
