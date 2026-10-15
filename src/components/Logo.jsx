import React from 'react';

export const Logo = ({ className = '', size = 'md' }) => {
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-1">
        <div className="relative flex items-center">
          <svg
            className={`absolute -top-3 -left-1 text-[#0080FF] ${
              size === 'sm' ? 'w-4 h-4 -top-2.5' : size === 'lg' ? 'w-7 h-7 -top-4.5' : 'w-5 h-5'
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18C5 19.94 8.13 22 12 22C15.87 22 19 19.94 19 17.18V13.18L12 17L5 13.18Z" />
          </svg>
          <span
            className={`font-extrabold tracking-tight text-[#0080FF] font-sans ${
              size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'
            }`}
          >
            Campus<span className="text-[#0080FF]">Pe</span>
          </span>
          <span className="text-[10px] text-slate-400 font-bold ml-0.5 -mt-2">®</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 w-full">
        <span className="h-[1px] bg-slate-300 w-3" />
        <span className="text-[8.5px] font-medium text-slate-500 whitespace-nowrap tracking-tight">
          Connecting Students, Institutions &amp; Companies
        </span>
        <span className="h-[1px] bg-slate-300 w-3" />
      </div>
    </div>
  );
};
