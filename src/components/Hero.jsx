import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Check, 
  Bell, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Zap, 
  Search
} from 'lucide-react';

export const Hero = ({ onSelectOption, onExploreJobs }) => {
  return (
    <section className="relative pt-6 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-100/40 via-indigo-100/30 to-purple-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-8">
          <div className="md:col-span-4 flex justify-start">
            <div className="bg-white/95 backdrop-blur-xs border border-indigo-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow max-w-xs w-full text-left">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-amber-600">WhatsApp Alert</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Get notified on whatsapp
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                You&apos;ll get all important updates on your whatsapp
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 shadow-2xs">
              <Bot className="w-4 h-4 text-[#0080FF]" />
              <span className="text-xs font-bold text-[#0080FF] tracking-tight">
                AI-Powered Campus Assistant
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-end">
            <div className="bg-white/90 backdrop-blur-xs border border-indigo-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow max-w-xs w-full text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                  <Zap className="w-3 h-3 fill-violet-600" />
                </div>
                <span className="text-xs font-bold text-violet-700">Resume Builder</span>
              </div>
              <p className="text-xs font-bold text-slate-800 leading-tight">
                Build Your Resume
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mt-6 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Connect <span className="text-[#0080FF]">10X Faster.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium mt-3">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 px-2">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="bg-white/95 border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-xs flex items-center gap-3">
              <div className="flex -space-x-1.5 shrink-0">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                  AK
                </div>
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                  PR
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                  SN
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>🔥 142 students matched today</span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium">Just now • IIT, BITS, VIT</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 shrink-0 my-2 lg:my-0">
            <Sparkles className="w-5 h-5 text-[#0080FF] shrink-0" />
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold text-[#0080FF] tracking-tight whitespace-nowrap">
              What are you looking for?
            </h2>
            <Sparkles className="w-5 h-5 text-[#0080FF] shrink-0" />
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="bg-white/95 border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <Briefcase className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  <span className="text-[#0080FF]">Radiant Info</span> shortlisted 8 interns
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Verified recruiter • 2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-blue-100/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0080FF] flex items-center justify-center shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 text-xs font-semibold text-[#0080FF] bg-blue-50/70 border border-blue-200 rounded-full">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">College</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Explore colleges, courses,fees, placements &amp; more
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Search by course, location, fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Connect directly with colleges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Improve student placements</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 relative z-10 flex flex-col items-stretch">
              <button
                onClick={() => onSelectOption('college')}
                className="w-full py-3.5 px-4 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Waitlist</span>
                <Bell className="w-4 h-4 fill-white/80" />
              </button>
            </div>

            <div className="absolute right-2 -bottom-2 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Building2 className="w-32 h-32 text-[#0080FF]" />
            </div>
          </div>

          <div className="bg-white rounded-3xl border-2 border-blue-400/80 shadow-md hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0080FF] flex items-center justify-center shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 text-xs font-semibold text-[#0080FF] bg-blue-50 border border-blue-200 rounded-full">
                  Available Now
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">I&apos;m Looking for a Job</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Upload your resume. We&apos;ll find jobs that fit you.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 font-bold" />
                  <span>Jobs from 1000+ sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 font-bold" />
                  <span>AI powered matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 font-bold" />
                  <span>WhatsApp &amp; email alerts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 relative z-10">
              <button
                onClick={onExploreJobs}
                className="w-full py-3.5 px-4 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute right-4 bottom-14 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
              <div className="w-16 h-20 bg-blue-50 border-2 border-blue-300 rounded-lg p-2 shadow-sm relative">
                <div className="h-1.5 bg-blue-300 rounded w-8 mb-1" />
                <div className="h-1 bg-slate-300 rounded w-10 mb-1" />
                <div className="h-1 bg-slate-300 rounded w-7 mb-1" />
                <Search className="w-5 h-5 text-[#0080FF] absolute bottom-1 right-1" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-blue-100/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0080FF] flex items-center justify-center shadow-2xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 text-xs font-semibold text-[#0080FF] bg-blue-50/70 border border-blue-200 rounded-full">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">I&apos;m Hiring</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Connect with colleges and find candidates — from students to graduates.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Connect directly with colleges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Find the right candidates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" />
                  <span>Simplify your hiring</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onSelectOption('hiring')}
                className="w-full py-3.5 px-4 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Waitlist</span>
                <Bell className="w-4 h-4 fill-white/80" />
              </button>
            </div>

            <div className="absolute right-4 bottom-14 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
              <div className="w-16 h-14 bg-slate-100 border border-slate-300 rounded-lg p-1.5 flex items-center justify-center">
                <span className="text-[#0080FF] font-mono font-bold text-sm">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
