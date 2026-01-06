'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isDark?: boolean;
  variant?: 'default' | 'active' | 'gradient' | 'icon' | 'divider';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  disabled = false,
  isDark = true,
  variant = 'default',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'transition-all duration-300 cursor-pointer';
  
  const variantClasses = {
    default: `
      rounded-lg font-medium border text-center
      ${isDark
        ? 'border-cyan-500/20 bg-transparent text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10'
        : 'border-blue-500/20 bg-transparent text-blue-700 hover:border-blue-500/40 hover:bg-blue-500/10'
      }
    `,
    active: `
      rounded-lg font-medium border text-center
      ${isDark
        ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-100'
        : 'border-blue-500/60 bg-blue-500/15 text-blue-900'
      }
    `,
    gradient: `
  px-6 py-2 rounded-lg font-medium text-white
  bg-gradient-to-r from-cyan-500 to-blue-600
  hover:from-cyan-400 hover:to-blue-700
  shadow-lg shadow-cyan-500/20 hover:shadow-blue-500/30
`,

    icon: `
      w-10 h-10 rounded-lg flex items-center justify-center text-2xl
      ${isDark
        ? 'bg-gray-800 hover:bg-gray-700 border-2 border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20'
        : 'bg-white hover:bg-gray-50 border-2 border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
      }
    `,
    divider: `
      relative flex items-center justify-center my-8 w-full group
    `,
  };

  const disabledClasses = disabled
    ? 'bg-gray-700 text-gray-500 border border-gray-600 cursor-not-allowed opacity-50'
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${variant === 'divider' ? variantClasses.divider : variantClasses[variant]}
    ${disabled && variant !== 'divider' ? disabledClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (variant === 'divider') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}


