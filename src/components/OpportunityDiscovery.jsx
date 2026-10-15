import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  GraduationCap, 
  MapPin, 
  IndianRupee, 
  Building2, 
  Briefcase, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export const OpportunityDiscovery = ({ 
  onExplore,
  onApplyItem 
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const opportunities = [
    {
      id: '1',
      type: 'Colleges',
      logoType: 'iimb',
      title: 'IIM Bangalore',
      badge: 'Top College',
      badgeColor: 'bg-purple-100 text-purple-700',
      specs: [
        { icon: 'degree', text: 'MBA' },
        { icon: 'location', text: 'Bengaluru' },
        { icon: 'fee', text: '₹ 3L+' },
      ],
      description: "India's premier management institute with global exposure...",
      buttonText: 'View Details',
    },
    {
      id: '2',
      type: 'Internships',
      logoType: 'google',
      title: 'Product Intern',
      badge: 'Internship',
      badgeColor: 'bg-blue-100 text-[#0080FF]',
      specs: [
        { icon: 'location', text: 'Bengaluru' },
        { icon: 'mode', text: 'Hybrid' },
        { icon: 'stipend', text: '₹ 35K/mo' },
      ],
      description: 'Work on real products, learn from top engineers and build...',
      buttonText: 'Apply Now',
    },
    {
      id: '3',
      type: 'Freelance',
      logoType: 'notion',
      title: 'Marketing Gig',
      badge: 'Freelance',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      specs: [
        { icon: 'remote', text: 'Remote' },
        { icon: 'type', text: 'Freelance' },
        { icon: 'stipend', text: '₹ 10K - 25K' },
      ],
      description: 'Create content and help with social media campaigns for...',
      buttonText: 'View Details',
    },
    {
      id: '4',
      type: 'Jobs',
      logoType: 'cisco',
      title: 'Associate Software Engineer',
      badge: 'Full-Time Job',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      specs: [
        { icon: 'location', text: 'Bengaluru' },
        { icon: 'mode', text: 'On-Site' },
        { icon: 'stipend', text: '₹ 14.5 LPA' },
      ],
      description: 'Develop next-gen networking cloud APIs with our systems engineering team...',
      buttonText: 'Apply Now',
    },
  ];

  const categories = ['All', 'Colleges', 'Jobs', 'Internships', 'Freelance', 'Part-time'];

  const visibleItems = selectedFilter === 'All' 
    ? opportunities.slice(0, 3) 
    : opportunities.filter((item) => item.type === selectedFilter);

  return (
    <section id="opportunity" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0080FF] text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0080FF]" />
              <span>01 • OPPORTUNITY DISCOVERY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Stop searching.<br />
              <span className="text-[#0080FF]">Start getting matched.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0080FF] font-bold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                  01
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">Set your preferences</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0080FF] border border-blue-100">
                      Smart Profile
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Tell us what you&apos;re looking for, from colleges and courses to jobs, internships and gigs.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                  02
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">Discover relevant opportunities</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                      AI Ranked
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Explore colleges and career opportunities matched to your profile, interests and goals
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                  03
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">Get notified when something fits</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Instant Alerts
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get notified when a relevant college or new opportunity is found, so you can act early.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>Explore opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-7 relative z-10">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0080FF] text-white flex items-center justify-center shadow-xs">
                    <Zap className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-xs text-slate-500">Colleges &amp; opportunities matched to you</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>12 new matches today</span>
                </div>
              </div>

              <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-none">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedFilter(item)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                      selectedFilter === item
                        ? 'bg-[#0080FF] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="space-y-3.5">
                {visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      {item.logoType === 'iimb' && (
                        <div className="w-10 h-10 rounded-full border border-amber-300 bg-amber-50 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-5 h-5 text-amber-700" />
                        </div>
                      )}
                      {item.logoType === 'google' && (
                        <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0 shadow-2xs">
                          <span className="text-base font-extrabold text-blue-600">G</span>
                        </div>
                      )}
                      {item.logoType === 'notion' && (
                        <div className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-900 text-white flex items-center justify-center font-bold text-base shrink-0">
                          N
                        </div>
                      )}
                      {item.logoType === 'cisco' && (
                        <div className="w-10 h-10 rounded-xl border border-slate-200 bg-blue-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          CISCO
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium my-1 flex-wrap">
                          {item.specs.map((spec, sIdx) => (
                            <span key={sIdx} className="flex items-center gap-1">
                              {spec.icon === 'location' && <MapPin className="w-3 h-3 text-slate-400" />}
                              {spec.icon === 'degree' && <GraduationCap className="w-3 h-3 text-slate-400" />}
                              {spec.text}
                            </span>
                          ))}
                        </div>

                        <p className="text-xs text-slate-500 leading-snug line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onApplyItem(item.title)}
                      className="sm:self-center px-4 py-2 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer whitespace-nowrap self-start"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <button
                  onClick={onExplore}
                  className="font-bold text-[#0080FF] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View all matched opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400">Curated for you • Updated daily</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 justify-center lg:justify-start pl-6">
              <svg className="w-8 h-8 text-indigo-500 -rotate-12" viewBox="0 0 40 40" fill="none">
                <path
                  d="M10 30 C 15 10, 25 15, 30 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline points="25,5 30,5 30,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-serif italic text-sm text-indigo-700 font-medium">
                A mix of colleges, jobs, internships and gigs — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};