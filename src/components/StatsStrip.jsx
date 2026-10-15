import React from 'react';
import { Users, Building2, Briefcase, ShieldCheck } from 'lucide-react';

export const StatsStrip = () => {
  const partners = [
    {
      id: 'ginserv',
      render: () => (
        <div className="flex items-center gap-4 shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <div className="flex items-center -space-x-3">
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#00A3E0] relative flex items-center justify-center shadow-xs">
              <div className="w-6 h-6 rounded-full bg-white/35" />
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#38BDF8]" />
          </div>
          <div className="text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00A3E0] leading-none tracking-tight">
              GINSERV
            </p>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-400 tracking-tight mt-1">
              Nurturing Ventures
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'startup-karnataka',
      render: () => (
        <div className="flex items-center gap-4 sm:gap-5 shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <div className="w-20 sm:w-24 md:w-28 h-14 sm:h-16 md:h-18 text-[#E03A1E] shrink-0">
            <svg viewBox="0 0 36 26" fill="currentColor" className="w-full h-full text-[#E03A1E]">
              <polygon points="0,13 13,0 20,13 36,8 22,26 12,19" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-[#1E2958] uppercase leading-none">
              STARTUP
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-[#1E2958] uppercase leading-none mt-1">
              KARNATAKA
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'vtu',
      render: () => (
        <div className="flex items-center justify-center shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <img
            src="/vtu_logo.png"
            alt="Visvesvaraya Technological University (VTU) Logo"
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform hover:scale-105 drop-shadow-sm"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: 'talentspotify',
      render: () => (
        <div className="flex flex-col items-center justify-center shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <div className="w-14 sm:w-16 md:w-18 h-14 sm:h-16 md:h-18 flex items-center justify-center text-[#266348] mb-2">
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full text-[#266348]">
              <circle cx="16" cy="16" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="16" cy="16" r="2" />
              <rect x="15" y="2" width="2" height="7" rx="1" />
              <circle cx="16" cy="3" r="2.5" />
              <rect x="15" y="23" width="2" height="7" rx="1" />
              <circle cx="16" cy="29" r="2.5" />
              <rect x="2" y="15" width="7" height="2" rx="1" />
              <circle cx="3" cy="16" r="2.5" />
              <rect x="23" y="15" width="7" height="2" rx="1" />
              <circle cx="29" cy="16" r="2.5" />
              <circle cx="7" cy="7" r="2.2" />
              <circle cx="25" cy="25" r="2.2" />
              <circle cx="7" cy="25" r="2.2" />
              <circle cx="25" cy="7" r="2.2" />
            </svg>
          </div>
          <span className="text-sm sm:text-base md:text-lg font-black text-[#1E293B] tracking-wider uppercase leading-none">
            TALENTSPOTIFY
          </span>
        </div>
      ),
    },
    {
      id: 'radiant',
      render: () => (
        <div className="flex items-center gap-4 shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <div className="flex flex-col items-center justify-center text-right leading-none">
            <span className="text-sm sm:text-base md:text-lg font-black text-[#E11D48] tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
              RADIANT
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1">Info</span>
          </div>
          <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-20 md:h-22 text-[#E11D48] shrink-0">
            <svg viewBox="0 0 28 32" fill="currentColor" className="w-full h-full text-[#E11D48]">
              <path d="M14 0C8.5 6 2 12.5 2 19.5C2 26.4 7.4 32 14 32C20.6 32 26 26.4 26 19.5C26 12.5 19.5 6 14 0ZM14 26.5C10.5 26.5 8 23.5 8 20C8 15.5 12 13 14 13C16 13 20 15.5 20 20C20 23.5 17.5 26.5 14 26.5Z" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 'dpiit',
      render: () => (
        <div className="flex items-center gap-4 shrink-0 px-12 sm:px-16 md:px-20 select-none">
          <div className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center text-slate-800">
            <svg className="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="7" r="5" />
              <rect x="9" y="13" width="6" height="8" rx="1" />
            </svg>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-none">
              DPIIT
            </p>
            <p className="text-sm sm:text-base font-bold text-orange-500 leading-tight mt-0.5">
              #<span className="text-orange-500">startup</span><span className="text-emerald-600">india</span>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-0 pb-16 border-b border-slate-100">
          <div className="flex items-center gap-4 justify-center sm:justify-start md:px-6 md:border-r border-slate-200/80">
            <div className="w-14 h-14 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                800+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">Students</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start md:px-6 md:border-r border-slate-200/80">
            <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                130+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">colleges</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start md:px-6 md:border-r border-slate-200/80">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                100+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">jobs &amp; internships</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start md:px-6">
            <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                100%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">Safe &amp; Trusted</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-18">
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight mb-12">
          Trusted by partners across India
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-52 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-36 sm:w-52 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee items-center py-6 sm:py-8 md:py-10">
            {partners.map((item, idx) => (
              <React.Fragment key={`set1-${idx}`}>
                {item.render()}
              </React.Fragment>
            ))}

            {partners.map((item, idx) => (
              <React.Fragment key={`set2-${idx}`}>
                {item.render()}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
