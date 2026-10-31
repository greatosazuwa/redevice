import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global client-side navigation helper (no page reloads!)
  window.navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Route handling: /login view without footer
  if (currentPath === '/login') {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200 flex flex-col justify-between">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Login darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>
    );
  }

  // Default Home view with footer
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200 flex flex-col justify-between">
      
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1">
        <span className="inline-block text-xs font-light uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 mb-4 border border-slate-200 dark:border-slate-800">
          Live on VPS Server
        </span>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight mb-4">
          Any condition, honestly graded.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light max-w-xl mx-auto mb-8">
          Every IMEI is checked, and your payment is held until you accept the phone.
        </p>
      </main>

      <Footer />

    </div>
  );
}
