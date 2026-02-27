import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import Footer from '../components/Footer';
import { ArrowLeft, Check } from 'lucide-react';

const Registration = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    teamName: '',
    teamMembers: ['', '', ''],
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="mb-6">The event you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleTeamMemberChange = (index: number, value: string) => {
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index] = value;
    
    setFormData(prev => ({
      ...prev,
      teamMembers: newTeamMembers
    }));
    
    // Clear error
    if (errors[`teamMember${index}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`teamMember${index}`];
        return newErrors;
      });
    }
  };
  
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.college.trim()) newErrors.college = 'College name is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.year.trim()) newErrors.year = 'Year of study is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }
    
    // Only validate first team member if it's not empty
    if (formData.teamMembers[0].trim() && !/\S+@\S+\.\S+/.test(formData.teamMembers[0])) {
      newErrors.teamMember0 = 'Email is invalid';
    }
    
    if (formData.teamMembers[1].trim() && !/\S+@\S+\.\S+/.test(formData.teamMembers[1])) {
      newErrors.teamMember1 = 'Email is invalid';
    }
    
    if (formData.teamMembers[2].trim() && !/\S+@\S+\.\S+/.test(formData.teamMembers[2])) {
      newErrors.teamMember2 = 'Email is invalid';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };
  
  const handleBack = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      handleNext();
      return;
    }
    
    if (validateStep2()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };
  
  if (isSuccess) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={40} />
              </div>
              
              <h1 className="text-3xl font-bold mb-4 gradient-text">Registration Successful!</h1>
              <p className="text-gray-700 mb-8">
                Thank you for registering for {event.name}. We have sent a confirmation email to {formData.email} with all the details.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate(`/event/${event.id}`)}
                  className="btn bg-white text-indigo-600 hover:bg-gray-100"
                >
                  Back to Event
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="btn btn-primary"
                >
                  Go to Home
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-6">
              <h1 className="text-2xl font-bold">Register for {event.name}</h1>
              <p className="text-indigo-100">Fill out the form below to register for this event</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between mb-8">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    1
                  </div>
                  <div className={`ml-2 ${step >= 1 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    Personal Info
                  </div>
                </div>
                
                <div className="flex-1 flex items-center mx-4">
                  <div className={`h-1 w-full ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                </div>
                
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    2
                  </div>
                  <div className={`ml-2 ${step >= 2 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    Team Details
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                        College/University *
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.college ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your college/university name"
                      />
                      {errors.college && <p className="mt-1 text-sm text-red-500">{errors.college}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department *
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.department ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="E.g., Computer Science, Electrical Engineering"
                      />
                      {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Year of Study *
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.year ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="5">5th Year</option>
                        <option value="pg">Postgraduate</option>
                      </select>
                      {errors.year && <p className="mt-1 text-sm text-red-500">{errors.year}</p>}
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary w-full"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
                        Team Name *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.teamName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your team name"
                      />
                      {errors.teamName && <p className="mt-1 text-sm text-red-500">{errors.teamName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Team Members (Optional)
                      </label>
                      <p className="text-sm text-gray-500 mb-3">
                        Add email addresses of your team members. They will receive an invitation to join your team.
                      </p>
                      
                      {[0, 1, 2].map((index) => (
                        <div key={index} className="mb-3">
                          <input
                            type="email"
                            value={formData.teamMembers[index]}
                            onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                              errors[`teamMember${index}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder={`Team member ${index + 1} email (optional)`}
                          />
                          {errors[`teamMember${index}`] && (
                            <p className="mt-1 text-sm text-red-500">{errors[`teamMember${index}`]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-indigo-600 hover:underline">terms and conditions</a> and <a href="#" className="text-indigo-600 hover:underline">privacy policy</a>. *
                        </span>
                      </label>
                      {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
                    </div>
                    
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="btn bg-white text-indigo-600 hover:bg-gray-100 border border-gray-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Registration;