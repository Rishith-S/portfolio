'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeToggle = () => {
    if (isSwitching) {
      return;
    }

    setIsSwitching(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');

    window.setTimeout(() => {
      setIsSwitching(false);
    }, 800);
  };

  return (
    <div className='pl-4'>
      <button
        onClick={handleThemeToggle}
        disabled={isSwitching}
        className={`p-1.5 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors disabled:opacity-70 ${className}`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>

      {isSwitching && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/45 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-4 text-neutral-900 dark:text-neutral-100 shadow-2xl">
            <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <span className="text-base font-semibold">Switching theme...</span>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default ThemeToggle;