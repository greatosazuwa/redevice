import React, { useState } from 'react';

export default function Header({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    window.navigate(path);
    setMobileMenuOpen(false);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    const activeSession = localStorage.getItem('redevice_token'); 
    if (activeSession) {
      window.navigate('/account');
    } else {
      window.navigate('/login');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 transition-colors font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-1 text-slate-500 hover:text-black dark:hover:text-white rounded-lg md:hidden"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center gap-2.5 text-base sm:text-xl tracking-tight text-black dark:text-white">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 dark:bg-slate-800 text-white shadow-sm font-semibold text-sm">
              R
            </span>
            <span className="font-bold tracking-tight">ReDevice</span>
          </a>
        </div>

        {/* MIDDLE: Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search make, model, IMEI or fault..." 
              className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full py-2.5 pl-4 pr-12 text-sm font-light text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-sm transition-colors" aria-label="Search">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M21.71 20.29l-5.0007-5.0007c-.9473.7434-2.1332 1.2107-3.4193 1.2107-3.1421 0-5.7-2.5579-5.7-5.7s2.5579-5.7 5.7-5.7 5.7 2.5579 5.7 5.7c0 1.2861-.4673 2.472-1.2107 3.4193l5.0007 5.0007c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0zM13.29 14.29c1.6542 0 3-1.3458 3-3s-1.3458-3-3-3-3 1.3458-3 3 1.3458 3 3 3z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.061 0zM21.75 11.25a.75.75 0 010 1.5h-2.25a.75.75 0 010-1.5h2.25zM17.303 17.303a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.061zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.697 17.303a.75.75 0 010 1.06l-1.59 1.591a.75.75 0 11-1.061-1.06l1.59-1.591a.75.75 0 011.061 0zM3 11.25a.75.75 0 010 1.5H.75a.75.75 0 010-1.5H3zM6.106 6.106a.75.75 0 011.06 0l1.59 1.591a.75.75 0 11-1.06 1.06L5.046 7.167a.75.75 0 011.06-1.061z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
              </svg>
            )}
          </button>

          <a href="/login" onClick={(e) => handleNavigation(e, '/login')} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors">
            Sign in
          </a>

          <a href="/register" onClick={(e) => handleNavigation(e, '/register')} className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all">
            Create account
          </a>
        </div>

        {/* RIGHT: Mobile Profile Icon */}
        <div className="flex md:hidden items-center gap-1">
          <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <a 
            href="/account" 
            onClick={handleProfileClick} 
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors" 
            aria-label="Account Profile"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </a>
        </div>

      </div>

      {/* SECONDARY NAVIGATION BAR (Desktop Horizontal Row) */}
      <nav className="hidden md:block border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-black py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-6 text-xs font-light text-slate-600 dark:text-slate-400 overflow-x-auto">
          <a href="/devices/all" className="hover:text-black dark:hover:text-white font-normal text-black dark:text-white">All devices</a>
          <a href="/devices/apple" className="hover:text-black dark:hover:text-white">Apple</a>
          <a href="/devices/samsung" className="hover:text-black dark:hover:text-white">Samsung</a>
          <a href="/devices/google" className="hover:text-black dark:hover:text-white">Google</a>
          <a href="/devices/oneplus" className="hover:text-black dark:hover:text-white">OnePlus</a>
          <a href="/devices/motorola" className="hover:text-black dark:hover:text-white">Motorola</a>
          <a href="/devices/xiaomi" className="hover:text-black dark:hover:text-white">Xiaomi</a>
          <a href="/devices/lg" className="hover:text-black dark:hover:text-white">LG</a>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <a href="/damaged-parts" className="hover:text-black dark:hover:text-white">Damaged & parts</a>
          <a href="/auctions" className="hover:text-black dark:hover:text-white">Auctions</a>
          <a href="/price-guide" className="hover:text-black dark:hover:text-white">Price guide</a>
        </div>
      </nav>

      {/* MOBILE SLIDE-OUT MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/40 transition-opacity" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="relative w-4/5 max-w-sm bg-white dark:bg-black h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-900">
              <span className="font-medium text-xs uppercase tracking-wider text-slate-400">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-500 hover:text-black dark:hover:text-white">✕</button>
            </div>

            <div className="px-6 py-4 flex-1 space-y-4 text-slate-700 dark:text-slate-300 text-sm font-light">
              <a href="/devices/all" className="block text-left py-1">All devices</a>
              {['Apple', 'Samsung', 'Google', 'OnePlus', 'Motorola', 'Xiaomi', 'LG'].map((brand) => (
                <a key={brand} href={`/devices/${brand.toLowerCase()}`} className="flex items-center justify-between py-1 text-left">
                  <span>{brand}</span>
                  <span className="text-slate-400 text-sm px-2">⌄</span>
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-900 space-y-3">
                <a href="/damaged-parts" className="block text-left py-1">Damaged & parts</a>
                <a href="/auctions" className="block text-left py-1">Auctions</a>
                <a href="/price-guide" className="block text-left py-1">Price guide</a>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-900 space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
              <button 
                onClick={toggleTheme}
                className="w-full py-2.5 px-4 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs font-light text-slate-700 dark:text-slate-300"
              >
                <span>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              </button>
              <a href="/register" className="w-full py-3 rounded-full bg-blue-600 text-white font-medium text-sm flex items-center justify-center shadow-sm">
                Create account
              </a>
              <a href="/login" className="w-full py-3 rounded-full border border-slate-300 dark:border-slate-700 text-black dark:text-white font-medium text-sm flex items-center justify-center">
                Sign in
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
