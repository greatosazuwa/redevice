import React, { useState } from 'react';

export default function Login({ darkMode, toggleTheme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('redevice_token', 'mock_session_token_123');
    window.navigate('/account');
  };

  const handleNav = (e, path) => {
    e.preventDefault();
    window.navigate(path);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-4 pb-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
        
        <div className="space-y-2 mb-8 text-left">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
            New to ReDevice? <a href="/register" onClick={(e) => handleNav(e, '/register')} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Create a free account</a> in 30 seconds.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Email
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-3 px-3.5 text-sm font-light text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-3 px-3.5 text-sm font-light text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all flex items-center justify-center mt-2"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center justify-between text-xs font-light mt-6 pt-6 border-t border-slate-100 dark:border-slate-900 text-slate-500">
          <a href="/register" onClick={(e) => handleNav(e, '/register')} className="hover:text-black dark:hover:text-white">
            No account yet? <span className="text-blue-600 dark:text-blue-400 font-medium">Create one</span>
          </a>
          <a href="/forgot-password" onClick={(e) => handleNav(e, '/forgot-password')} className="hover:text-black dark:hover:text-white">
            Forgot password?
          </a>
        </div>

      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-light mt-6">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <span>Payments and escrow are handled by Paystack.</span>
      </div>
    </main>
  );
}
