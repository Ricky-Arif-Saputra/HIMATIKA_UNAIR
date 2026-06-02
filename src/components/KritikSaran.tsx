import { motion } from 'motion/react';
import { ExternalLink, MessageSquareQuote } from 'lucide-react';

export default function KritikSaran() {
  return (
    <div className="min-h-screen bg-surface-grey pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-unair-red/10 text-unair-red mb-6">
            <MessageSquareQuote size={32} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#191c1d] mb-4">
            Kritik & Saran
          </h1>
          <p className="text-[#59413f] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Aspirasi, kritik, dan saran Anda sangat berharga bagi kami. 
            Mari bersama-sama membangun HIMATIKA UNAIR yang lebih baik melalui masukan yang konstruktif.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border-subtle text-center"
        >
          <h2 className="font-display text-xl font-bold text-[#191c1d] mb-4">
            Formulir Aspirasi
          </h2>
          <p className="text-[#59413f] text-sm md:text-base mb-8 max-w-xl mx-auto">
            Silakan sampaikan kritik, saran, maupun aspirasi Anda melalui formulir yang telah kami sediakan. 
            Setiap masukan akan kami evaluasi untuk kemajuan himpunan.
          </p>
          
          <a
            href="https://bit.ly/HaloHIMA_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-unair-red text-white px-8 py-4 rounded-full font-bold hover:bg-unair-red/90 transition-colors shadow-lg shadow-unair-red/20 group"
          >
            <span>Isi Formulir Sekarang</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
