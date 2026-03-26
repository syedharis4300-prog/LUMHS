import React from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, ChevronRight, ArrowRight, CheckCircle2, Shield, Heart, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const steps = ['Personal Information', 'Select Specialist', 'Appointment Time'];

const specialists = [
  { id: 1, name: 'Dr. Muhammad Ali', specialty: 'Orthopedic', image: 'https://picsum.photos/seed/doc1/100/100' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', image: 'https://picsum.photos/seed/doc2/100/100' },
  { id: 3, name: 'Dr. Elena Rodriguez', specialty: 'Oncology', image: 'https://picsum.photos/seed/doc3/100/100' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Pediatrics', image: 'https://picsum.photos/seed/doc4/100/100' },
];

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

export default function Appointment() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialistId: null as number | null,
    date: '',
    time: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h1 className="text-5xl font-display font-bold leading-tight mb-8">
                  Book Your <br />
                  <span className="italic text-blue-600">Appointment</span>
                </h1>
                
                {/* Progress Bar */}
                <div className="flex items-center gap-4 mb-12">
                  {steps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                          currentStep >= idx ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-400"
                        )}>
                          {currentStep > idx ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                        </div>
                        <span className={cn(
                          "text-xs font-bold uppercase tracking-widest hidden md:block",
                          currentStep >= idx ? "text-black" : "text-gray-400"
                        )}>
                          {step}
                        </span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className={cn(
                          "flex-grow h-px max-w-[40px] md:max-w-none",
                          currentStep > idx ? "bg-black" : "bg-gray-100"
                        )} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              placeholder="John"
                              className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Doe"
                              className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specialists.map((spec) => (
                          <button
                            key={spec.id}
                            onClick={() => setFormData({ ...formData, specialistId: spec.id })}
                            className={cn(
                              "p-6 rounded-3xl border transition-all flex items-center gap-6 text-left",
                              formData.specialistId === spec.id
                                ? "bg-black text-white border-black shadow-xl"
                                : "bg-white border-gray-100 hover:border-blue-600"
                            )}
                          >
                            <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                              <img src={spec.image} alt={spec.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-lg">{spec.name}</h4>
                              <p className={cn(
                                "text-xs font-bold uppercase tracking-widest",
                                formData.specialistId === spec.id ? "text-blue-400" : "text-blue-600"
                              )}>{spec.specialty}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Date</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Time Slot</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setFormData({ ...formData, time })}
                              className={cn(
                                "py-4 rounded-2xl text-sm font-bold transition-all",
                                formData.time === time
                                  ? "bg-black text-white shadow-lg"
                                  : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 flex justify-between gap-4">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="px-10 py-4 rounded-full font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="flex-grow bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                  >
                    {currentStep === steps.length - 1 ? 'Confirm Appointment' : 'Next Step'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-12">
              <div className="p-10 bg-black text-white rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-6 italic">Patient-First <br /> Philosophy</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    We believe in treating the person, not just the symptoms. Your comfort and well-being are our top priorities.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: Shield, title: 'Secure Data', text: 'Your medical records are encrypted and safe.' },
                      { icon: Activity, title: 'Real-time Updates', text: 'Get instant notifications for your visits.' },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-500">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className="p-10 bg-blue-50 rounded-[40px] border border-blue-100">
                <h3 className="text-2xl font-display font-bold mb-4 italic">Need Immediate Help?</h3>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  If you are experiencing a medical emergency, please call our emergency line immediately.
                </p>
                <a
                  href="tel:+15550000000"
                  className="w-full bg-white text-red-600 py-4 rounded-full font-bold text-sm hover:bg-red-50 transition-all flex items-center justify-center gap-2 border border-red-100"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
