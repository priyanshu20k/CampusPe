import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Bell } from 'lucide-react';

export const AppInterfaceLook = () => {
  const [current, setCurrent] = useState(2);

  const screens = [
    {
      id: 0,
      title: 'Student Job Discovery',
      badge: 'Student View',
      content: (
        <div className="bg-white h-full flex flex-col justify-between text-left text-slate-800 p-4 select-none">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <div>
                <p className="text-[10px] text-slate-400">Discover</p>
                <h5 className="text-xs font-extrabold text-slate-900">Hi, Amit Kumar</h5>
              </div>
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                <Bell className="w-3 h-3 text-slate-600" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-3 text-white mb-3 shadow-xs">
              <p className="text-[11px] font-bold leading-tight">See how you can find a job quickly!</p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-white text-[#0080FF] font-bold text-[9px] rounded-md">
                Read more
              </span>
            </div>

            <div className="bg-slate-50 rounded-lg p-2 border border-slate-200 flex items-center gap-1.5 mb-3">
              <Search className="w-3 h-3 text-slate-400" />
              <span className="text-[10px] text-slate-400">Search jobs, internships...</span>
            </div>

            <p className="text-[10px] font-bold text-slate-800 mb-2">Recommended Jobs</p>

            <div className="border border-slate-200 rounded-xl p-2.5 bg-white shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[10px] text-blue-600">
                    G
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-none">Software Engineer</p>
                    <p className="text-[9px] text-slate-400">Google Inc • Bangalore</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  95% Match
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 text-[9px]">
                <span className="font-bold text-slate-700">₹4-6 LPA</span>
                <span className="px-2 py-0.5 bg-[#0080FF] text-white rounded font-bold">
                  Apply Now
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Recruiter Job Posting',
      badge: 'Recruiter View',
      content: (
        <div className="bg-white h-full flex flex-col justify-between text-left text-slate-800 p-4 select-none">
          <div>
            <div className="flex items-center gap-1 pb-2 mb-2 border-b border-slate-100 text-[11px] font-bold text-slate-700">
              <span>‹</span>
              <span>Post a Job</span>
            </div>

            <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-2 mb-3">
              <p className="text-[10px] font-bold text-blue-700">Hot Vacancy</p>
              <p className="text-[9px] text-slate-500">Post job to hire best talent for your company</p>
            </div>

            <div className="space-y-2 text-[10px]">
              <div>
                <label className="font-bold text-slate-600 block mb-0.5">Job Title*</label>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-slate-400 text-[9px]">
                  Enter clear job title
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-600 block mb-0.5">Job Type*</label>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-slate-700 text-[9px] flex justify-between">
                  <span>Full-Time</span>
                  <span>▾</span>
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-600 block mb-0.5">Work Mode*</label>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-slate-700 text-[9px] flex justify-between">
                  <span>Hybrid / In-Office</span>
                  <span>▾</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full py-1.5 bg-[#0080FF] text-white text-[10px] font-bold rounded-lg mt-2">
            Publish Campus Drive
          </button>
        </div>
      ),
    },
    {
      id: 2,
      title: 'CampusPe Central Dashboard',
      badge: 'Primary Ecosystem',
      content: (
        <div className="bg-white h-full flex flex-col text-left text-slate-800 p-3.5 select-none overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2">
            <div>
              <p className="text-[9px] text-slate-400">Discover</p>
              <h5 className="text-xs font-black text-slate-900 leading-none">Hi, Amit Kumar</h5>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                <Bell className="w-3 h-3 text-slate-600" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#0080FF] text-white font-bold text-[9px] flex items-center justify-center">
                AK
              </div>
            </div>
          </div>

          <div className="flex gap-1.5 mb-2.5">
            <span className="px-2.5 py-0.5 bg-[#0080FF] text-white text-[9px] font-bold rounded-full">
              Colleges
            </span>
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-semibold rounded-full">
              Job / Internship
            </span>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl p-2.5 text-white mb-2.5 shadow-xs relative">
            <p className="text-[8px] uppercase tracking-wider text-indigo-300 font-bold">XYZ University</p>
            <p className="text-[10px] font-bold leading-tight mt-0.5 text-slate-100">
              The best education you can get is investing in yourself
            </p>
            <button className="mt-2 px-2.5 py-0.5 bg-[#0080FF] text-white text-[8px] font-bold rounded">
              Explore
            </button>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-center text-[10px] font-bold mb-1.5">
              <span className="text-slate-800">Top Courses</span>
              <span className="text-[#0080FF] text-[9px]">View all</span>
            </div>
            <div className="flex justify-between text-center text-[8px] font-medium text-slate-600">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-0.5">
                  🎓
                </div>
                <span>B.Tech</span>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center mx-auto mb-0.5">
                  🎨
                </div>
                <span>Arts</span>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-0.5">
                  🩺
                </div>
                <span>MBBS</span>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-0.5">
                  📊
                </div>
                <span>B.Com</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-[10px] font-bold mb-1">
              <span className="text-slate-800">Trending Colleges</span>
              <span className="text-[#0080FF] text-[9px]">View More</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 space-y-1">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-900 leading-none">Victory College</p>
                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">4 years</span>
              </div>
              <p className="text-[8px] text-slate-500">Studying how CBD awareness and availability...</p>
              <button className="w-full py-1 bg-[#0080FF] text-white text-[9px] font-bold rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Application Pipeline Tracker',
      badge: 'Applications',
      content: (
        <div className="bg-white h-full flex flex-col text-left text-slate-800 p-4 select-none">
          <div className="flex items-center gap-1 pb-2 mb-2 border-b border-slate-100 text-[11px] font-bold text-slate-700">
            <span>‹</span>
            <span>My Application</span>
          </div>

          <div className="flex gap-1 mb-3 text-[9px]">
            <span className="px-2 py-0.5 bg-[#0080FF] text-white font-bold rounded">Applied(5)</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-semibold rounded">Shortlisted(2)</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-semibold rounded">Rejected(1)</span>
          </div>

          <div className="space-y-2 overflow-y-auto pr-1">
            <div className="p-2 border border-slate-200 rounded-lg bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-900">Software Engineer</span>
                <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1 rounded">95% Match</span>
              </div>
              <p className="text-[9px] text-slate-400">Google Inc • Bangalore</p>
            </div>

            <div className="p-2 border border-slate-200 rounded-lg bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-900">Full Stack Web Dev</span>
                <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1 rounded">91% Match</span>
              </div>
              <p className="text-[9px] text-slate-400">Flipkart • Mumbai</p>
            </div>

            <div className="p-2 border border-slate-200 rounded-lg bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-900">Backend Developer</span>
                <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1 rounded">94% Match</span>
              </div>
              <p className="text-[9px] text-slate-400">Tokopedia • New Delhi</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'College Courses & Fee Portal',
      badge: 'Institution View',
      content: (
        <div className="bg-white h-full flex flex-col text-left text-slate-800 p-4 select-none">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <div>
              <p className="text-[9px] text-slate-400">Discover</p>
              <h5 className="text-xs font-bold text-slate-900">XYZ College</h5>
            </div>
            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
              <Bell className="w-3 h-3 text-slate-600" />
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-slate-800">Courses</span>
            <span className="text-[9px] font-bold text-[#0080FF] bg-blue-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
              + Add Courses
            </span>
          </div>

          <div className="border border-slate-200 rounded-xl p-2.5 bg-slate-50/60 space-y-1.5">
            <p className="text-[10px] font-bold text-slate-900">B.Tech Computer Science</p>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-slate-500">
              <div>Total Seats: 60</div>
              <div>Available: 08</div>
              <div>Total Fee: ₹3,50,000</div>
              <div>Semester: ₹58,000</div>
            </div>
            <div className="flex gap-1 pt-1">
              <button className="flex-1 py-0.5 bg-[#0080FF] text-white text-[8px] font-bold rounded">
                View Details
              </button>
              <button className="flex-1 py-0.5 bg-slate-200 text-slate-700 text-[8px] font-bold rounded">
                Edit
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const onPrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  const onNext = () => {
    setCurrent((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="app-interface" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0080FF] tracking-tight mb-4">
          Checkout Our App Interface Look
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto mb-14 leading-relaxed">
          Experience the power of a unified campus ecosystem right in your pocket. <strong className="text-slate-800">CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
        </p>

        <div className="relative flex items-center justify-center min-h-[560px] py-6">
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-30 w-11 h-11 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0080FF] hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0080FF] hover:scale-105 transition-all cursor-pointer"
            aria-label="Next screen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 perspective-1000">
            {screens.map((screen, idx) => {
              const distance = idx - current;
              const isCenter = distance === 0;

              return (
                <div
                  key={screen.id}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isCenter
                      ? 'scale-105 sm:scale-110 z-20 opacity-100 shadow-2xl'
                      : Math.abs(distance) === 1
                      ? 'scale-90 opacity-70 hidden sm:block z-10 hover:opacity-90'
                      : 'scale-75 opacity-40 hidden md:block z-0 hover:opacity-70'
                  }`}
                  style={{
                    transform: `translateY(${Math.abs(distance) * 16}px) rotateY(${distance * -6}deg)`,
                  }}
                >
                  <div className="w-[240px] sm:w-[260px] h-[480px] sm:h-[510px] rounded-[42px] p-2.5 bg-gradient-to-b from-amber-600 via-orange-500 to-amber-700 shadow-2xl relative border-4 border-slate-800">
                    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col relative border border-slate-900/10">
                      <div className="h-6 w-full bg-white flex items-center justify-between px-5 pt-1 select-none">
                        <span className="text-[10px] font-bold text-slate-800">9:41</span>
                        <div className="w-16 h-3 bg-black rounded-full" />
                        <div className="flex items-center gap-1 text-[9px] font-bold text-slate-700">
                          <span>5G</span>
                        </div>
                      </div>

                      <div className="flex-1 overflow-hidden">
                        {screen.content}
                      </div>

                      <div className="h-4 w-full bg-white flex items-center justify-center pb-1">
                        <div className="w-24 h-1 bg-slate-300 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-700 mt-3">
                    {screen.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {screens.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrent(dotIdx)}
              className={`rounded-full transition-all cursor-pointer ${
                current === dotIdx
                  ? 'w-7 h-2.5 bg-[#0080FF]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
