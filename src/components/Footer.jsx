import React from 'react';
import { Logo } from './Logo.jsx';
import { Mail, Phone } from 'lucide-react';

export const Footer = ({
  onExploreColleges,
  onFindOpportunities,
  onListCollege,
  onPostJob,
  onNavigate,
}) => {
  return (
    <footer className="relative bg-white pt-16 pb-14 text-slate-700 text-sm sm:text-base overflow-hidden border-t border-slate-100">
      <div className="absolute -bottom-16 -right-16 w-[600px] h-[500px] bg-gradient-to-tl from-sky-100/70 via-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 -left-16 w-[500px] h-[420px] bg-gradient-to-tr from-blue-100/50 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-slate-200/90 shadow-2xs p-8 sm:p-10 lg:p-12 mb-16 sm:mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="text-left max-w-lg shrink-0">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
              Ready for what&apos;s next?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onExploreColleges}
              className="px-6 py-3 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Explore Colleges →
            </button>

            <button
              onClick={onFindOpportunities}
              className="px-6 py-3 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Find Opportunities →
            </button>

            <button
              onClick={onListCollege}
              className="px-6 py-3 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm sm:text-base rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              List Your College →
            </button>

            <button
              onClick={onPostJob}
              className="px-6 py-3 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm sm:text-base rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Post a Job →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between items-start gap-8 sm:gap-10 lg:gap-6 xl:gap-8 mb-18 text-left">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:w-[310px] xl:w-[340px] shrink-0 space-y-6">
            <Logo size="lg" />

            <div className="space-y-4 pt-2">
              <h4 className="font-black text-slate-900 text-2xl sm:text-3xl leading-snug tracking-tight">
                From choosing a college to finding your next opportunity.
              </h4>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                CampusPe connects students, colleges and employers in one place.
              </p>
            </div>
          </div>

          <div className="space-y-4 shrink-0">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              For Students
            </h4>
            <ul className="space-y-3.5 text-base sm:text-lg text-slate-600">
              <li><button onClick={onExploreColleges} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Explore Colleges</button></li>
              <li><button onClick={onFindOpportunities} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Find Opportunities</button></li>
              <li><button onClick={onFindOpportunities} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Internships</button></li>
              <li><button onClick={onFindOpportunities} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Full-time Jobs</button></li>
              <li><button onClick={onFindOpportunities} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Part-time &amp; Gig</button></li>
              <li><button onClick={onFindOpportunities} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Application Tracker</button></li>
            </ul>
          </div>

          <div className="space-y-4 shrink-0">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              For Colleges
            </h4>
            <ul className="space-y-3.5 text-base sm:text-lg text-slate-600">
              <li><button onClick={onListCollege} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">List Your College</button></li>
              <li><button onClick={onListCollege} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Admissions</button></li>
              <li><button onClick={onListCollege} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Fee Collection</button></li>
              <li><button onClick={onListCollege} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Placements</button></li>
            </ul>
          </div>

          <div className="space-y-4 shrink-0">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              For Employers
            </h4>
            <ul className="space-y-3.5 text-base sm:text-lg text-slate-600">
              <li><button onClick={onPostJob} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Post a Job</button></li>
              <li><button onClick={onPostJob} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Find Talent</button></li>
              <li><button onClick={onPostJob} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Campus Hiring</button></li>
            </ul>
          </div>

          <div className="space-y-4 shrink-0">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              Company
            </h4>
            <ul className="space-y-3.5 text-base sm:text-lg text-slate-600">
              <li><button onClick={() => onNavigate('app-interface')} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">About Us</button></li>
              <li><button onClick={() => onNavigate('app-interface')} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Contact Us</button></li>
              <li><button onClick={() => onNavigate('app-interface')} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Blogs</button></li>
              <li><button onClick={() => onNavigate('app-interface')} className="hover:text-[#0080FF] transition-colors cursor-pointer text-left font-medium">Careers</button></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4 shrink-0 w-full sm:w-[240px] lg:w-[260px]">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-3 text-base sm:text-lg text-slate-600">
              <li><a href="#privacy" className="hover:text-[#0080FF] transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#0080FF] transition-colors font-medium">Terms &amp; Conditions</a></li>
              <li><a href="#refund" className="hover:text-[#0080FF] transition-colors font-medium">Refund &amp; Cancellation Policy</a></li>
              <li><a href="#cookie" className="hover:text-[#0080FF] transition-colors font-medium">Cookie Policy</a></li>
              <li><a href="#grievance" className="hover:text-[#0080FF] transition-colors font-medium">Grievance Redressal</a></li>
              <li><a href="#disclaimer" className="hover:text-[#0080FF] transition-colors font-medium">Job &amp; Internship Disclaimer</a></li>
              <li><a href="#policies" className="text-[#0080FF] font-bold text-base sm:text-lg hover:underline block pt-1">View all policies →</a></li>
            </ul>

            <div className="p-4 sm:p-5 bg-sky-50/90 border border-sky-100 rounded-2xl text-sm sm:text-base text-slate-700 leading-relaxed mt-4 shadow-2xs font-medium">
              Separate user, institution and employer terms can live inside the full Policies page.
            </div>
          </div>
        </div>

        <div className="pt-8 pb-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-base sm:text-lg">
          <div className="flex flex-wrap items-center gap-4 text-slate-800 font-bold">
            <a
              href="mailto:contactus@campuspe.com"
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 hover:border-slate-300 hover:text-[#0080FF] shadow-2xs transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0080FF] flex items-center justify-center">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <span>contactus@campuspe.com</span>
            </a>

            <a
              href="tel:+916362606464"
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 hover:border-slate-300 hover:text-[#0080FF] shadow-2xs transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0080FF] flex items-center justify-center">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <span>+91 6362606464</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-slate-800">
            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        <div className="pt-7 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-base sm:text-lg text-slate-700">
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 font-medium">
            <span className="text-slate-950 font-bold">2026 CampusPe Technologies Pvt. Ltd.</span>
            <a href="#privacy" className="hover:text-[#0080FF] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#0080FF] transition-colors">Terms</a>
            <a href="#grievance" className="hover:text-[#0080FF] transition-colors">Grievance</a>
          </div>

          <div className="flex items-center gap-5 text-slate-800">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0080FF] transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0080FF] transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0080FF] transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#0080FF] transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors" aria-label="WhatsApp">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};