import React, { useState, useRef } from 'react';
import { 
  Check, 
  Zap, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

export const ResumeUploadSection = ({ onSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInput = useRef(null);

  const uploadResume = (name) => {
    setFile(name);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess(name);
    }, 1200);
  };

  const onFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadResume(e.target.files[0].name);
    }
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadResume(e.dataTransfer.files[0].name);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0080FF] text-xs font-bold mb-5">
          <span className="w-2 h-2 rounded-full bg-[#0080FF]" />
          <span>TRY IT LIVE</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-medium">v2.4 AI Engine</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Upload your resume.<br />
          <span className="text-[#0080FF]">Find jobs that fit.</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.
        </p>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 relative max-w-3xl mx-auto my-6">
          <div className="absolute -top-4 left-4 sm:left-6 flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200/90 shadow-md rounded-2xl text-left z-20">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Zap className="w-3.5 h-3.5 fill-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-800 leading-none">98% Match Rate</p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">AI semantic rank</p>
            </div>
          </div>

          <div className="absolute -bottom-4 right-4 sm:right-6 flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200/90 shadow-md rounded-2xl text-left z-20">
            <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-800 leading-none">ATS Compliant</p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Standardized parser</p>
            </div>
          </div>

          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={onFileDrop}
            className={`border-2 border-dashed rounded-2xl p-8 sm:p-10 transition-all ${
              dragging ? 'border-[#0080FF] bg-blue-50/50' : 'border-blue-200/80 bg-blue-50/20'
            }`}
          >
            <input
              type="file"
              ref={fileInput}
              onChange={onFileSelect}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Upload your resume
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.
            </p>

            <button
              onClick={() => fileInput.current?.click()}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0080FF] hover:bg-[#0070E0] active:bg-[#0060C0] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer"
            >
              <span>{loading ? 'Analyzing Resume...' : file ? 'Upload Another Resume ↑' : 'Upload resume ↑'}</span>
            </button>

            <p className="text-xs text-slate-400 mt-4 mb-3">
              or drag and drop your file here
            </p>

            <div className="flex items-center justify-center gap-2">
              {['PDF', 'DOC', 'DOCX'].map((format) => (
                <span
                  key={format}
                  className="px-2.5 py-1 text-[11px] font-bold text-[#0080FF] bg-blue-50 border border-blue-200 rounded-md"
                >
                  {format}
                </span>
              ))}
            </div>

            {file && (
              <div className="mt-4 p-3 rounded-xl bg-white border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Uploaded: {file} (Analyzed Successfully)</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Resume analyzed</p>
              <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Ready in 4s</span>
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Skills matched</p>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">Deep taxonomy</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Experience matched</p>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">Contextual seniority</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0080FF] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">1,000+ sources searched</p>
              <p className="text-[10px] text-[#0080FF] font-medium mt-0.5">Real-time aggregators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
