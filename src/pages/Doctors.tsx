import React from 'react';
import { Search, Filter, Star, MapPin, Clock, Phone, ChevronRight, ArrowRight, Activity, Shield, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const doctors = [
  { id: 1, name: 'Dr. Muhammad Ali', specialty: 'Orthopedic', rating: 4.9, reviews: 124, image: 'https://picsum.photos/seed/doc1/400/400', availability: 'Available Today' },
  { id: 2, name: 'Dr. Adeeb Rizvi', specialty: 'Neurology', rating: 4.8, reviews: 98, image: 'https://picsum.photos/seed/doc2/400/400', availability: 'Next Available: Mon' },
  { id: 3, name: 'Dr. Ghani Soomro', specialty: 'Oncology', rating: 5.0, reviews: 156, image: 'https://picsum.photos/seed/doc3/400/400', availability: 'Available Today' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Pediatrics', rating: 4.7, reviews: 82, image: 'https://picsum.photos/seed/doc4/400/400', availability: 'Available Tomorrow' },
  { id: 5, name: 'Dr. Lisa Thompson', specialty: 'Orthopedics', rating: 4.9, reviews: 112, image: 'https://picsum.photos/seed/doc5/400/400', availability: 'Next Available: Tue' },
  { id: 6, name: 'Dr. David Miller', specialty: 'Dermatology', rating: 4.8, reviews: 75, image: 'https://picsum.photos/seed/doc6/400/400', availability: 'Available Today' },
];

const specializations = ['All Specialists', 'Orthopedic', 'Neurology', 'Oncology', 'Pediatrics', 'Orthopedics', 'Dermatology'];

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('All Specialists');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredDoctors = doctors.filter(doc => {
    const matchesSpecialty = selectedSpecialty === 'All Specialists' || doc.specialty === selectedSpecialty;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

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
              Find the Right <br />
              <span className="italic text-blue-600">Specialist</span> for <br />
              Your Journey.
            </h1>
            
            <div className="max-w-3xl mx-auto relative group">
              <div className="absolute inset-0 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
              <div className="relative bg-white p-4 rounded-[32px] shadow-2xl flex flex-col md:row items-center gap-4 border border-gray-100">
                <div className="flex-grow flex items-center gap-4 px-4 w-full">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, specialty, or condition..."
                    className="w-full border-none focus:ring-0 text-lg font-medium"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-[24px] font-bold hover:bg-gray-800 transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-12 sticky top-32">
              <div>
                <h3 className="text-2xl font-display font-bold mb-8 italic">Specializations</h3>
                <div className="space-y-3">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialty(spec)}
                      className={cn(
                        "w-full text-left px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all",
                        selectedSpecialty === spec
                          ? "bg-black text-white shadow-xl"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                      )}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100">
                <h4 className="text-xl font-display font-bold mb-4 italic">Need Guidance?</h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Not sure which specialist is right for you? Our care team can help you decide.</p>
                <button className="w-full bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Care Team
                </button>
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-12">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Showing {filteredDoctors.length} Specialists
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                  <Filter className="w-4 h-4" />
                  Sort By
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDoctors.map((doc, idx) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold">{doc.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-10">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-display font-bold mb-1">{doc.name}</h3>
                          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">{doc.specialty}</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {doc.availability}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          LUMHS Jamshoro
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="flex-grow bg-black text-white py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
                          Book Visit
                        </button>
                        <button className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all">
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredDoctors.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2 italic">No Specialists Found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
