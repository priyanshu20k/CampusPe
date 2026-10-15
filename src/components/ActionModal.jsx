import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const ActionModal = ({ type, onClose, initialItemTitle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  if (!type) return null;

  const getModalInfo = () => {
    switch (type) {
      case 'college_waitlist':
        return {
          tag: 'COLLEGE PARTNER WAITLIST',
          title: 'Join the College Waitlist',
          sub: 'Be the first to list your institution, digitize admissions, and connect with prospective students.',
        };
      case 'job_waitlist':
        return {
          tag: 'STUDENT EARLY ACCESS',
          title: 'Join Job Seeker Priority Queue',
          sub: 'Get early notifications and direct access to off-campus and on-campus recruitment drives.',
        };
      case 'hiring_waitlist':
      case 'post_job':
        return {
          tag: 'EMPLOYER TALENT NETWORK',
          title: 'Post a Role or Campus Drive',
          sub: 'Define your hiring needs and access pre-screened talent across 500+ Indian colleges.',
        };
      case 'list_college':
        return {
          tag: 'INSTITUTION ONBOARDING',
          title: 'List Your College on CampusPe',
          sub: 'Showcase your NAAC/NIRF accreditation, courses, placement statistics, and accept student enquiries.',
        };
      case 'contact_support':
        return {
          tag: 'CAMPUSPE SUPPORT',
          title: 'Contact CampusPe Support',
          sub: 'Our dedicated student advisors and university success team are here to help.',
        };
      case 'schedule_call':
        return {
          tag: 'INSTITUTIONAL ADVISORY',
          title: 'Schedule a 1-on-1 Discovery Call',
          sub: 'Book a 15-minute consultation with our campus partnerships director.',
        };
      case 'sign_in':
        return {
          tag: 'WELCOME BACK',
          title: 'Sign In to CampusPe',
          sub: 'Access your student dashboard, college profile, or employer hiring portal.',
        };
      case 'sign_up':
        return {
          tag: 'JOIN CAMPUSPE',
          title: 'Create Your Free Account',
          sub: 'Join over 800+ students and 130+ colleges on India’s next-gen campus platform.',
        };
      default:
        return { tag: 'CAMPUSPE', title: 'Get Started', sub: 'Fill in your details below.' };
    }
  };

  const info = getModalInfo();

  const checkForm = () => {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = 'Full name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (type !== 'sign_in') {
      const numbersOnly = phone.replace(/\D/g, '');
      if (!numbersOnly || numbersOnly.length < 10) {
        nextErrors.phone = 'Please provide a valid 10-digit mobile number';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      setDone(true);
    }
  };

  const handleClose = () => {
    setDone(false);
    setName('');
    setEmail('');
    setPhone('');
    setOrg('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!done ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0080FF] block mb-1">
                {info.tag}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {info.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                {info.sub}
              </p>
              {initialItemTitle && (
                <div className="mt-2 text-xs font-bold text-slate-800 bg-blue-50/70 border border-blue-100 px-3 py-1.5 rounded-lg inline-block">
                  Selected Item: {initialItemTitle}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amit Kumar"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden text-slate-900 ${
                    errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-[#0080FF]'
                  }`}
                />
                {errors.name && <p className="text-rose-500 text-[11px] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden text-slate-900 ${
                    errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-[#0080FF]'
                  }`}
                />
                {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
              </div>

              {type !== 'sign_in' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden text-slate-900 ${
                      errors.phone ? 'border-rose-500' : 'border-slate-200 focus:border-[#0080FF]'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              )}

              {type !== 'sign_in' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    College / Organization Name
                  </label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="e.g. RVCE Bangalore or Tech Corp"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#0080FF] text-slate-900"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400">
                Protected by CampusPe 100% Safe &amp; Trusted platform standards.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center animate-in fade-in duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Request Received
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              Thank You, {name}!
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed">
              Your details have been registered on the CampusPe network. Our team will contact you at <span className="font-semibold text-slate-900">{email}</span> shortly.
            </p>

            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Done &amp; Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
