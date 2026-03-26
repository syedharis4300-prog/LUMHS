import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Activity, Shield, Users, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const specializations = [
  { name: 'Cardiology', icon: Activity, color: 'bg-blue-50', text: 'Heart health and diagnostics.' },
  { name: 'Neurology', icon: Shield, color: 'bg-purple-50', text: 'Brain and nervous system care.' },
  { name: 'Oncology', icon: Heart, color: 'bg-red-50', text: 'Comprehensive cancer treatment.' },
  { name: 'Pediatrics', icon: Users, color: 'bg-green-50', text: 'Specialized care for children.' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/doc${i}/100/100`} alt="Doctor" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-600">Trusted by 50k+ patients</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
                A Sanctuary for <br />
                <span className="italic text-blue-600">Healing</span> and <br />
                Growth.
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Experience world-class healthcare where empathy meets precision. Our specialists are dedicated to your holistic well-being.
              </p>
              
              <div className="flex flex-col sm:row gap-4">
                <Link
                  to="/appointment"
                  className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border border-gray-200 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/hospital-hero/800/1000"
                  alt="Modern Hospital Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold">4.9/5</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Patient Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 bg-black text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-display font-bold mb-1">30+</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
            {['HealthCare Pro', 'MediTrust', 'Global Health', 'SafeCare', 'BioLife'].map((brand) => (
              <span key={brand} className="text-xl font-display font-bold tracking-widest uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Bento Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-5xl font-display font-bold leading-tight mb-6">
                World-Class <br />
                <span className="italic text-blue-600">Specializations</span>
              </h2>
              <p className="text-gray-600">
                Our departments are equipped with the latest technology and staffed by world-renowned experts to provide the best care possible.
              </p>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-blue-600 transition-colors">
              View All Departments
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {specializations.map((spec, idx) => (
              <motion.div
                key={spec.name}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-8 rounded-3xl border border-gray-100 flex flex-col justify-between h-80",
                  spec.color
                )}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <spec.icon className="w-7 h-7 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{spec.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{spec.text}</p>
                  <Link to="/services" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[20px] border-gray-50">
                <img
                  src="https://picsum.photos/seed/patient-care/800/800"
                  alt="Patient Care"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm italic text-gray-700 leading-relaxed mb-4">
                  "The level of care and empathy I received at Sanctuary was beyond anything I've experienced. They truly prioritize the patient."
                </p>
                <p className="text-xs font-bold uppercase tracking-widest">— Sarah Jenkins</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl font-display font-bold leading-tight mb-8">
                Trusted by Families <br />
                for Over <span className="italic text-blue-600">Three Decades.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Patient-First Philosophy', text: 'We believe in treating the person, not just the symptoms.' },
                  { title: 'Advanced Technology', text: 'State-of-the-art diagnostic and treatment equipment.' },
                  { title: 'Holistic Approach', text: 'Integrating mental and physical well-being for complete recovery.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-black rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to Prioritize <br />
              Your <span className="italic text-blue-400">Health Journey?</span>
            </h2>
            <div className="flex flex-col sm:row justify-center gap-4">
              <Link
                to="/appointment"
                className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Book Your Visit
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </div>
  );
}
