import React, { useState } from 'react';
import { ArrowUpRight, PhoneCall, Check } from 'lucide-react';

export const DownloadAppSection = ({
  onContactSupport,
  onScheduleCall,
}) => {
  const [chosenStore, setChosenStore] = useState(null);

  const onDownload = (storeName) => {
    setChosenStore(storeName);
    setTimeout(() => setChosenStore(null), 3500);
  };

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0080FF] tracking-tight mb-6">
              Download App Now
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onDownload('Google Play Store')}
                className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-slate-800 text-white rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 1.7l10.9 10.9L10.9 16.2 1.4 3.9C2 2.7 2.8 1.9 3.6 1.7z" />
                  <path fill="#FBBC04" d="M19.1 10.6L14.5 7.9 11.2 11.2l3.3 3.3 4.6-2.6c1.1-.6 1.1-1.6 0-2.3z" />
                  <path fill="#EA4335" d="M3.6 22.3c-.8-.2-1.6-1-2.2-2.2l9.5-12.3 3.6 3.6-10.9 10.9z" />
                  <path fill="#34A853" d="M14.5 16.1l4.6-2.6c1.1-.6 1.1-1.6 0-2.3L14.5 7.9 11.2 11.2l3.3 4.9z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider block text-slate-300">GET IT ON</span>
                  <span className="text-sm font-bold text-white tracking-tight">Google Play</span>
                </div>
              </button>

              <button
                onClick={() => onDownload('Apple App Store')}
                className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-slate-800 text-white rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.79 1.1-1.9 0.98-3-.95.04-2.1 0.64-2.77 1.42-.59.68-1.11 1.79-0.97 2.87 1.07.08 2.15-.55 2.76-1.29z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider block text-slate-300">Download on the</span>
                  <span className="text-sm font-bold text-white tracking-tight">App Store</span>
                </div>
              </button>
            </div>

            {chosenStore && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Redirecting to {chosenStore} — CampusPe App v2.4 (Android / iOS)</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px]">
            <div 
              className="w-[220px] sm:w-[240px] h-[420px] rounded-[36px] p-2 bg-gradient-to-tr from-slate-900 to-indigo-900 shadow-2xl border-4 border-slate-700 absolute -left-4 sm:left-4 top-2 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-10"
            >
              <div className="w-full h-full bg-white rounded-[28px] overflow-hidden p-3 text-left text-[9px] space-y-2 select-none">
                <div className="flex justify-between items-center text-slate-700 font-bold border-b pb-1">
                  <span>‹ My Application</span>
                  <span>9:41</span>
                </div>
                <div className="flex gap-1 text-[8px]">
                  <span className="bg-[#0080FF] text-white px-1.5 py-0.5 rounded font-bold">Applied(5)</span>
                  <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Shortlisted(2)</span>
                </div>
                <div className="p-2 border rounded-lg bg-blue-50/40">
                  <span className="font-bold text-slate-900 block">Software Engineer</span>
                  <span className="text-slate-400">Google Inc • Bangalore</span>
                </div>
                <div className="p-2 border rounded-lg bg-slate-50">
                  <span className="font-bold text-slate-900 block">Frontend Developer</span>
                  <span className="text-slate-400">Rukita • Bangalore</span>
                </div>
              </div>
            </div>

            <div 
              className="w-[230px] sm:w-[250px] h-[440px] rounded-[38px] p-2 bg-gradient-to-tr from-slate-950 to-slate-800 shadow-2xl border-4 border-slate-700 absolute right-0 sm:right-10 top-0 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20"
            >
              <div className="w-full h-full bg-white rounded-[30px] overflow-hidden p-3.5 text-left text-[9px] select-none flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-1 mb-2 border-b">
                    <span className="font-black text-slate-900 text-[10px]">Hi, Amit Kumar</span>
                    <span>🔔</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-2 rounded-lg mb-2">
                    <span className="font-bold block text-[10px]">XYZ University</span>
                    <span className="text-[8px] opacity-90">Discover top programs</span>
                  </div>
                  <p className="font-bold text-slate-800 text-[9px] mb-1">Top Courses</p>
                  <div className="flex justify-between text-[8px] text-center mb-2">
                    <span>🎓 B.Tech</span>
                    <span>🎨 Arts</span>
                    <span>🩺 MBBS</span>
                    <span>📊 B.Com</span>
                  </div>
                  <div className="border rounded-lg p-2 bg-slate-50">
                    <span className="font-bold text-slate-900 block text-[9px]">Victory College</span>
                    <span className="text-emerald-600 font-semibold text-[8px]">B.Tech Mechanical</span>
                  </div>
                </div>
                <button className="w-full py-1.5 bg-[#0080FF] text-white font-bold rounded-lg text-[9px]">
                  Explore CampusPe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50/70 via-blue-50/40 to-white rounded-3xl border border-blue-100 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContactSupport}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-full shadow-md shadow-blue-500/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Contact Support</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScheduleCall}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-[#0080FF] border-2 border-[#0080FF] font-bold text-sm rounded-full transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Schedule a Call</span>
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0080FF] flex items-center justify-center">
                <PhoneCall className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
