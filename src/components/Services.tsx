import { BookOpen, GitBranch, ShoppingBag, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section className="py-20 bg-surface-grey">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-[#191c1d] mb-4">Layanan Utama</h2>
          <div className="h-1 w-20 bg-unair-gold rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px]">
          {/* Bank Materi */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-white p-10 rounded-2xl border border-border-subtle group hover:shadow-xl transition-all cursor-pointer relative overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 p-8 text-unair-red/5">
              <BookOpen size={200} />
            </div>
            <div className="relative z-10">
              <div className="bg-unair-red/5 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                <BookOpen className="text-unair-red" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#191c1d] mb-3">Bank Materi</h3>
              <p className="text-[#59413f] max-w-md leading-relaxed text-balance">
                Kumpulan arsip soal, diktat kuliah, dan referensi akademik matematika terlengkap untuk menunjang studi Anda.
              </p>
            </div>
          </motion.div>

          {/* Program Kerja */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-2 bg-unair-red p-10 rounded-2xl group hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between text-white"
          >
            <div>
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-full mb-8">
                <GitBranch className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6">Program Kerja</h3>
              <ul className="space-y-5">
                {[
                  'OMITS 17th Edition',
                  'Math Action',
                  'Himatika Internal League',
                  'Gathering Day'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-sm">
                    <span className="w-1.5 h-1.5 bg-unair-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
              Lihat Semua <ArrowRight size={18} />
            </div>
          </motion.div>

          {/* Himatika Store */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-white p-8 rounded-2xl border border-border-subtle group hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="bg-unair-gold/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <ShoppingBag className="text-unair-gold" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#191c1d] mb-3">Himatika Store</h3>
            <p className="text-[#59413f] leading-relaxed">
              Merchandise eksklusif Himatika: PDH, Jaket, hingga alat tulis matematika berkualitas tinggi.
            </p>
          </motion.div>

          {/* Ksatria HIMATIKA */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#e1e3e4] p-8 rounded-2xl group hover:shadow-xl transition-all cursor-pointer border border-border-subtle"
          >
            <div className="bg-unair-red/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <Shield className="text-unair-red" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#191c1d] mb-3">Ksatria HIMATIKA</h3>
            <p className="text-[#59413f] leading-relaxed">
              Apresiasi dan dokumentasi prestasi mahasiswa Matematika UNAIR di kancah nasional maupun internasional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
