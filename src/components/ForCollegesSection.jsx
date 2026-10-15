import React from 'react';
import { ArrowRight, Check, MessageSquare, Building2 } from 'lucide-react';

export const ForCollegesSection = ({ onListCollege }) => {
  return (
    <section id="colleges" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0080FF] text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0080FF]" />
              <span>02 • FOR COLLEGES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Get Discovered<br />
              <span className="text-[#0080FF]">by Students and<br />Recruiters.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
            </p>

            <button
              onClick={onListCollege}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>List Your College</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0080FF] font-extrabold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                    01
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      VERIFIED PROFILE
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      Build your college profile
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md leading-relaxed">
                      Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>NAAC A++ Ready</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#0080FF] bg-blue-50 border border-blue-200">
                    98% Match
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0080FF] font-extrabold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                    02
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      DIRECT ENROLL
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      Students discover and connect
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md leading-relaxed">
                      Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Direct Enquiries</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>WHATSAPP / CHAT</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Avg. response: &lt;15 min</span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0080FF] font-extrabold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                    03
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      CAMPUS RECRUITING
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      Recruiters discover your College
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md leading-relaxed">
                      Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>500+ Hiring Partners</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200">
                    Connect Directly
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0080FF] font-extrabold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                    04
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      LIVE HUD
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      Track placements in real time
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md leading-relaxed">
                      Track students, interviews, offers and placements from one centralized dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>LIVE PLACEMENTS</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0080FF]">
                    Students • Interviews • Offers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};