import React, { useState } from 'react';
import { Logo } from './Logo.jsx';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ onSignIn, onSignUp, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Colleges', id: 'colleges' },
    { label: 'Employers', id: 'employers' },
    { label: 'Jobs', id: 'opportunity' },
    { label: 'Blogs', id: 'app-interface' },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
          >
            <Logo size="md" />
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="hover:text-[#0080FF] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onSignIn}
              className="text-sm font-semibold text-slate-700 hover:text-[#0080FF] px-4 py-2 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={onSignUp}
              className="text-sm font-semibold text-white bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] px-6 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onSignUp}
              className="text-xs font-semibold text-white bg-[#0080FF] px-3.5 py-1.5 rounded-lg"
            >
              Sign Up
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-[#0080FF]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                onSignIn();
                setIsOpen(false);
              }}
              className="flex-1 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg text-center"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                onSignUp();
                setIsOpen(false);
              }}
              className="flex-1 py-2 text-sm font-semibold text-white bg-[#0080FF] rounded-lg text-center"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
