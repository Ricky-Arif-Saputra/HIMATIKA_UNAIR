import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface KarirItem {
  id: string;
  posisi: string;
  perusahaan: string;
  tipe: 'Penuh Waktu' | 'Magang' | 'Paruh Waktu';
  lokasi: string;
  deadline: string;
  foto: string;
  link: string;
}

const karirData: KarirItem[] = [
  {
    id: '1',
    posisi: 'Data Analyst Intern',
    perusahaan: 'Telkom Indonesia',
    tipe: 'Magang',
    lokasi: 'Jakarta (Hybrid)',
    deadline: '30 Juni 2026',
    foto: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: '2',
    posisi: 'Actuarial Associate',
    perusahaan: 'Prudential Indonesia',
    tipe: 'Penuh Waktu',
    lokasi: 'Jakarta (On-site)',
    deadline: '15 Juli 2026',
    foto: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: '3',
    posisi: 'Junior Quantitative Researcher',
    perusahaan: 'Trading Firm Asia',
    tipe: 'Penuh Waktu',
    lokasi: 'Singapore / Remote',
    deadline: '05 Agustus 2026',
    foto: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: '4',
    posisi: 'Business Intelligence Intern',
    perusahaan: 'Gojek Tokopedia (GoTo)',
    tipe: 'Magang',
    lokasi: 'Jakarta (Hybrid)',
    deadline: '20 Juni 2026',
    foto: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
];

export default function InfoKarir() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Briefcase size={12} />
            Akademik
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Info <span className="text-unair-red">Karir</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Informasi peluang karir, program magang, dan lowongan kerja terbaru yang relevan untuk lulusan Matematika.
          </p>
        </div>

        {/* Karir Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {karirData.map((karir, idx) => (
            <motion.div
              key={karir.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl border border-neutral-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                <img 
                  src={karir.foto} 
                  alt={karir.posisi} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-unair-red text-white text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase shadow-md border border-white/10">
                  {karir.tipe}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-base font-bold text-[#191c1d] mb-1 leading-snug group-hover:text-unair-red transition-colors duration-300">
                  {karir.posisi}
                </h3>
                
                <div className="flex items-center gap-1 text-xs text-neutral-400 font-semibold mb-4">
                  <Building2 size={12} />
                  <span>{karir.perusahaan}</span>
                </div>

                <div className="space-y-2 text-xs text-[#59413f] mb-6 flex-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#8b7e7c]" />
                    <span>{karir.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#8b7e7c]" />
                    <span>Deadline: <strong className="text-unair-red">{karir.deadline}</strong></span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-neutral-100 my-4"></div>

                {/* Apply Button */}
                <a
                  href={karir.link}
                  className="flex items-center justify-center gap-2 w-full bg-unair-red hover:bg-[#8b1411] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/10 hover:shadow-red-500/25 transition-all duration-300 text-center uppercase tracking-wider"
                >
                  <span>Lamar Sekarang</span>
                  <ArrowUpRight size={14} className="opacity-80" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
