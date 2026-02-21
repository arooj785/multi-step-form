import React, { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-10 font-sans">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-white min-h-[650px]">
        
        {/* LEFT SIDE: Minimalist Dark Panel */}
        <div className="hidden md:flex md:w-5/12 bg-zinc-950 relative flex-col justify-between p-12 text-white">
          
          {/* Background Decorative Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 mb-8 shadow-lg shadow-blue-500/20">
               <div className="w-6 h-6 border-2 border-white/30 rounded-full border-t-white animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight">
              Design <br />
              <span className="text-zinc-500 italic font-medium">Your</span> <br />
              Experience.
            </h2>
          </div>

          <div className="relative z-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-sm text-zinc-400 leading-relaxed">
                "Simple is the ultimate sophistication. Join us in creating something remarkable today."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-zinc-900 bg-zinc-800" />)}
                </div>
                <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Trusted by 10k+</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form Section */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col bg-white">
          
          {/* Progress Section */}
          <div className="w-full mb-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Get Started</h3>
                <p className="text-zinc-400 text-sm">Step {step} of 3</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className={`h-1 rounded-full transition-all duration-500 ${step >= num ? 'w-6 bg-blue-600' : 'w-2 bg-zinc-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="grow flex flex-col justify-center">
            <div className="transition-all duration-500 ease-in-out transform">
              {step === 1 && <Step1 nextStep={nextStep} updateData={updateData} savedData={formData} />}
              {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} updateData={updateData} savedData={formData} />}
              {step === 3 && <Step3 prevStep={prevStep} updateData={updateData} savedData={formData} />}
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-zinc-400">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-medium uppercase tracking-widest">System Online & Secure</span>
          </div>
        </div>
      </div>
    </div>
  )
}