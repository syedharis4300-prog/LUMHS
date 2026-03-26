import React from 'react';
import { Phone, MapPin, Clock, Mail, ChevronRight, ArrowRight, Star, CheckCircle2, Plus, Minus, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const contactMethods = [
  { icon: Phone, title: 'Direct Lines', text: 'Main Campus: +1 (555) 000-0000', subtext: 'Emergency: +1 (555) 911-0000' },
  { icon: Mail, title: 'Email Support', text: 'General: info@sanctuary.com', subtext: 'Appointments: book@sanctuary.com' },
  { icon: MapPin, title: 'Main Campus', text: 'LUMHS University', subtext: 'Jamshoro Sindh' },
];

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add success message or logic here
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-12">
              Experience Care <br />
              <span className="italic text-blue-600">Without</span> <br />
              Boundaries.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our team is here to support you at every step of your health journey. Reach out to us for any inquiries, feedback, or assistance.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <method.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 italic">{method.title}</h3>
                <p className="text-sm text-gray-900 font-bold mb-1">{method.text}</p>
                <p className="text-sm text-gray-500">{method.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Send a Message Form */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-display font-bold leading-tight mb-8">
                Send a <br />
                <span className="italic text-blue-600">Message</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Have a specific question or feedback? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-display font-bold mb-6 italic">Visiting Hours</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">General Ward</p>
                      <p className="text-sm font-bold">8:00 AM — 8:00 PM</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">ICU / Specialized</p>
                      <p className="text-sm font-bold">10:00 AM — 4:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-display font-bold mb-6 italic">Parking & Access</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Valet parking is available at the main entrance. Free parking for patients is located in the North Garage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl border border-gray-100 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment Help">Appointment Help</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-[60px] overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl relative">
            <img
              src="https://picsum.photos/seed/hospital-location/1920/1080"
              alt="Hospital Location"
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-2 italic">Main Campus</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">LUMHS University, Jamshoro Sindh</p>
                <button className="w-full bg-black text-white py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
