import React, { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Har step se data update karne ka function
  const updateData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      
      <div className="w-full max-w-lg mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((num) => (
            <span key={num} className={`text-xs font-bold uppercase ${step >= num ? 'text-black' : 'text-slate-400'}`}>
              Step {num}
            </span>
          ))}
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-500 ease-in-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full transition-all duration-300">
        {step === 1 && (
          <Step1 
            nextStep={nextStep} 
            updateData={updateData} 
            savedData={formData} 
          />
        )}
        {step === 2 && (
          <Step2 
            nextStep={nextStep} 
            prevStep={prevStep} 
            updateData={updateData} 
            savedData={formData} 
          />
        )}
        {step === 3 && (
          <Step3 
            prevStep={prevStep} 
            updateData={updateData} 
            savedData={formData} 
          />
        )}
      </div>
    </div>
  )
}