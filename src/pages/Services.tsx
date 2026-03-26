import React from 'react';
import { Activity, Shield, Heart, Users, Clock, MapPin, Phone, ChevronRight, ArrowRight, Star, CheckCircle2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const departments = [
  { name: 'Cardiology', icon: Activity, color: 'bg-blue-50', text: 'Heart health and diagnostics.' },
  { name: 'Neurology', icon: Shield, color: 'bg-purple-50', text: 'Brain and nervous system care.' },
  { name: 'Oncology', icon: Heart, color: 'bg-red-50', text: 'Comprehensive cancer treatment.' },
  { name: 'Pediatrics', icon: Users, color: 'bg-green-50', text: 'Specialized care for children.' },
  { name: 'Orthopedics', icon: Activity, color: 'bg-orange-50', text: 'Bone and joint specialists.' },
  { name: 'Dermatology', icon: Shield, color: 'bg-pink-50', text: 'Skin health and aesthetics.' },
];

const faqs = [
  { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans including Blue Cross, Aetna, and UnitedHealthcare. Please contact our billing department for specific inquiries.' },
  { question: 'How can I access my medical records?', answer: 'Medical records can be accessed through our secure patient portal or by requesting a physical copy from our records department.' },
  { question: 'Do you offer virtual consultations?', answer: 'Yes, we offer telemedicine services for many of our departments. You can book a virtual appointment through our website.' },
  { question: 'What are your visiting hours?', answer: 'General visiting hours are from 8:00 AM to 8:00 PM daily. Specialized units may have different hours.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
              The Future of <br />
              <span className="italic text-blue-600">Empathetic</span> <br />
              Healthcare.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge medical technology with a deeply human approach to care, ensuring every patient feels seen, heard, and supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialized Departments */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-5xl font-display font-bold leading-tight mb-6">
                Specialized <br />
                <span className="italic text-blue-600">Departments</span>
              </h2>
              <p className="text-gray-600">
                Our multidisciplinary teams work together to provide comprehensive care tailored to your unique needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-10 rounded-[40px] border border-gray-100 flex flex-col justify-between h-[400px] transition-all hover:shadow-xl group",
                  dept.color
                )}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <dept.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">{dept.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{dept.text}</p>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Resources & Planning */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-display font-bold leading-tight mb-12">
                Patient Resources <br />
                & <span className="italic text-blue-400">Planning</span>
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-800 pb-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex justify-between items-center py-4 text-left hover:text-blue-400 transition-colors"
                    >
                      <span className="text-lg font-display font-bold italic">{faq.question}</span>
                      {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 text-sm leading-relaxed pb-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/resources/800/1000"
                  alt="Patient Planning"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white text-black p-10 rounded-[40px] shadow-2xl max-w-xs border border-gray-100">
                <h4 className="text-2xl font-display font-bold mb-4 italic">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Our patient coordinators are available 24/7 to assist you with any questions.</p>
                <button className="w-full bg-black text-white py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
                  Contact Coordinator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Advanced Diagnostics', text: 'Utilizing the latest imaging and laboratory technology for precise results.' },
              { title: 'Personalized Care Plans', text: 'Every treatment plan is tailored to the specific needs and goals of the patient.' },
              { title: 'Collaborative Teams', text: 'Our specialists work together across departments for holistic care.' },
            ].map((feature) => (
              <div key={feature.title}>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 italic">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
