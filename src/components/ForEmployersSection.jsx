import React from 'react';
import { ArrowRight, Zap, Target, Calendar } from 'lucide-react';

export const ForEmployersSection = ({ onPostJob }) => {
  return (
    <section id="employers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0080FF] text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0080FF]" />
              <span>03 • FOR EMPLOYERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Stop running<br />
              campus drives.<br />
              <span className="text-[#0080FF]">Start hiring the right people.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
            </p>

            <button
              onClick={onPostJob}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>Post a Job</span>
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
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        Post a role in minutes
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        INSTANT SETUP
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                      Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-emerald-600" />
                    <span>5 Min Deployment</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200">
                    500+ Campus Network
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
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        Receive a matched shortlist
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        INSTANT SETUP
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                      Get candidates matched to your role by skills, experience, location and hiring requirements.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Zero CV Clutter</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200">
                    Tier 1–Tier 3 Parity
                  </span>
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
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        Connect with candidates directly
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        INSTANT SETUP
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                      Message, schedule interviews, and move candidates through your pipeline — all in one place.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#0080FF] bg-blue-50 border border-blue-200 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>In-App Scheduling</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200">
                    1-Click Video / Chat
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
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        Reduce your time-to-hire
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        INSTANT SETUP
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                      Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold text-white bg-[#0080FF]">
                    &lt;2 DAYS
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300">
                    57% Faster Hiring
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
