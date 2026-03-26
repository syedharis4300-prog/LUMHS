import React from 'react';
import { Phone, MapPin, Clock, Shield, Activity, Heart, Users, ArrowRight, AlertTriangle, Ambulance, Map as MapIcon, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const emergencySigns = [
  { title: 'Chest Pain', text: 'Sudden or intense pressure, tightness, or squeezing in the chest.' },
  { title: 'Difficulty Breathing', text: 'Shortness of breath, gasping, or inability to speak in full sentences.' },
  { title: 'Severe Bleeding', text: 'Uncontrolled bleeding from a deep wound or injury.' },
  { title: 'Loss of Consciousness', text: 'Fainting, seizures, or sudden confusion and disorientation.' },
  { title: 'Sudden Weakness', text: 'Numbness or weakness on one side of the body (signs of stroke).' },
  { title: 'Severe Allergic Reaction', text: 'Swelling of the throat, difficulty swallowing, or hives.' },
];

export default function Emergency() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-red-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-8">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Available 24/7</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-12">
              Critical Care <br />
              <span className="italic text-red-600">Right Now.</span>
            </h1>
            
            <div className="flex flex-col sm:row justify-center gap-6">
              <a
                href="tel:+15550000000"
                className="bg-red-600 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-200"
              >
                <Phone className="w-6 h-6" />
                Call Emergency
              </a>
              <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 border border-red-100">
                <Ambulance className="w-6 h-6 text-red-600" />
                Request Ambulance
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Emergency Entrance Map */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold leading-tight mb-8">
                Emergency <br />
                <span className="italic text-red-600">Entrance Map</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our emergency department is located on the North side of the main campus. Follow the red signs for immediate access to critical care.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Main Entrance', text: '123 Sanctuary Way, North Wing' },
                  { icon: Clock, title: 'Wait Times', text: 'Current average wait time: 12 minutes' },
                  { icon: Shield, title: 'Specialized Units', text: 'Trauma Level 1, Pediatric ER, Cardiac ER' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-1 italic">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/hospital-map/1000/1000"
                  alt="Hospital Map"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                    <MapIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display font-bold italic">Get Directions</h4>
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Open in your preferred navigation app for real-time traffic updates.</p>
                <button className="w-full bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
                  Open Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Emergency Care? */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold leading-tight mb-6">
              When to Seek <br />
              <span className="italic text-red-600">Emergency Care?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you or someone else is experiencing any of the following symptoms, call emergency services or visit the ER immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencySigns.map((sign, idx) => (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 italic">{sign.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{sign.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Triage Process */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-[60px] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-display font-bold leading-tight mb-8">
                  Our Triage <br />
                  <span className="italic text-blue-400">Process</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  We prioritize patients based on the severity of their condition. This ensures that those with life-threatening issues receive immediate attention.
                </p>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Initial Assessment', text: 'A nurse evaluates your symptoms and vital signs.' },
                    { step: '02', title: 'Prioritization', text: 'Patients are categorized based on clinical urgency.' },
                    { step: '03', title: 'Specialized Care', text: 'Immediate treatment by our emergency specialists.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6 items-start">
                      <span className="text-2xl font-display font-bold italic text-blue-400">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-display font-bold mb-1 italic">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="aspect-square rounded-[40px] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/triage/800/800"
                  alt="Emergency Team"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
