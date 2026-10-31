import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 transition-colors font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top: Brand & Real SVG Social Logos */}
        <div className="space-y-4">
          <div className="flex items-center justify-start gap-2.5 text-base font-semibold text-black dark:text-white">
            <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold">
              R
            </span>
            <span className="font-bold tracking-tight">ReDevice</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-start gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Pinterest">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.491-.693-2.424-2.875-2.424-4.626 0-3.769 2.739-7.237 7.892-7.237 4.144 0 7.365 2.953 7.365 6.906 0 4.122-2.599 7.442-6.204 7.442-1.211 0-2.35-.629-2.739-1.369l-.748 2.85c-.271 1.042-1.002 2.349-1.492 3.146 1.124.347 2.317.535 3.545.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 text-sm font-light text-slate-700 dark:text-slate-300 text-left">
          <div className="space-y-3">
            <h4 className="font-semibold text-black dark:text-white text-xs uppercase tracking-wider">Shop by make</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/devices/apple" className="hover:text-black dark:hover:text-white">Apple devices</a></li>
              <li><a href="/devices/samsung" className="hover:text-black dark:hover:text-white">Samsung phones</a></li>
              <li><a href="/devices/google" className="hover:text-black dark:hover:text-white">Google phones</a></li>
              <li><a href="/devices/oneplus" className="hover:text-black dark:hover:text-white">OnePlus phones</a></li>
              <li><a href="/devices/ipad" className="hover:text-black dark:hover:text-white">iPad</a></li>
              <li><a href="/devices/macbook" className="hover:text-black dark:hover:text-white">MacBook</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-black dark:text-white text-xs uppercase tracking-wider">Selling</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/worth" className="hover:text-black dark:hover:text-white">What's my phone worth?</a></li>
              <li><a href="/sell/used" className="hover:text-black dark:hover:text-white">Where to sell a used phone</a></li>
              <li><a href="/sell/broken" className="hover:text-black dark:hover:text-white">Sell a broken phone</a></li>
              <li><a href="/sell/cracked" className="hover:text-black dark:hover:text-white">Sell a cracked phone</a></li>
              <li><a href="/sell/water-damaged" className="hover:text-black dark:hover:text-white">Sell a water-damaged phone</a></li>
              <li><a href="/sell/locked" className="hover:text-black dark:hover:text-white">Sell a locked phone</a></li>
              <li><a href="/sell/parts" className="hover:text-black dark:hover:text-white">Sell a phone for parts</a></li>
              <li><a href="/bulk-price-check" className="hover:text-black dark:hover:text-white">Bulk price check</a></li>
              <li><a href="/fees-payouts" className="hover:text-black dark:hover:text-white">Fees & payouts</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/80 space-y-3 text-xs text-slate-500 font-light text-left">
          <div>&copy; {new Date().getFullYear()} ReDevice LLC. All rights reserved.</div>
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-1">
            <a href="/about" className="hover:text-black dark:hover:text-white">About</a>
            <a href="/terms" className="hover:text-black dark:hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</a>
            <a href="/prohibited-items" className="hover:text-black dark:hover:text-white">Prohibited items</a>
            <a href="/returns" className="hover:text-black dark:hover:text-white">Returns</a>
            <a href="/copyright" className="hover:text-black dark:hover:text-white">Copyright</a>
          </div>
          <div className="text-slate-600 dark:text-slate-400 font-normal pt-1">
            Payments and escrow handled by Paystack.
          </div>
        </div>

      </div>
    </footer>
  );
}
