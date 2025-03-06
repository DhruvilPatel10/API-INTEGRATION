import React, { useState } from 'react';
import VolunteerFormStep1 from './VolunteerFormStep1';
import VolunteerFormStep2 from './VolunteerFormStep2';
import VolunteerFormStep3 from './VolunteerFormStep3';
import VolunteerFormStep4 from './VolunteerFormStep4';
import VolunteerFormStep5 from './VolunteerFormStep5';
import { submitVolunteerForm } from './api';

const VolunteerApplication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
  first_name: '',
  middle_name: '',
  last_name: '',
  email: '',
  phoneNumber: '',
  address: '',
  city: '',
  state: '',
  country: '',
  gender: '',
  opt_support: [],
  visa_status: '',
  desired_start_date: '',
  why_kworks: '',
  application_status: 'pending',
  experiences: [{ jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: '' }],
  education: [{ schoolName: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }],
  linkedin: '',
  website: '',
  resume: null,
});

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const response = await submitVolunteerForm(formData);
      if (response.success) {
        alert('Application submitted successfully!');
      } else {
        alert('Error: ' + response.message);
      }
    } catch (error) {
      alert('Submission failed.');
    }
  };

  return (
    <div>
      {step === 1 && <VolunteerFormStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {step === 2 && <VolunteerFormStep2 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />}
      {step === 3 && <VolunteerFormStep3 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />}
      {step === 4 && <VolunteerFormStep4 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />}
      {step === 5 && <VolunteerFormStep5 formData={formData} setFormData={setFormData} onBack={handleBack} onSubmit={handleSubmit} />}
    </div>
  );
};

export default VolunteerApplication;
