import { motion } from 'motion/react';
import { translations } from '@/src/lib/translations';

export default function Hero({ lang }: { lang: 'id' | 'en' }) {
  const t = translations[lang].hero;

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="inline-block bg-[#ffdad7] text-unair-red font-bold text-[12px] px-4 py-1 rounded-full mb-6 uppercase tracking-wider">
            {t.tag}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#191c1d] mb-6 leading-[1.1] tracking-tight">
            {t.title1}<span className="text-unair-red">{t.title2}</span>
          </h1>
          <p className="text-lg text-[#59413f] mb-10 max-w-lg leading-relaxed">
            {t.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-unair-red text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-unair-red/90 transition-all active:scale-95 shadow-lg shadow-unair-red/20 text-center">
              {t.btnExplore}
            </button>
            <button className="border border-unair-red text-unair-red px-8 py-3 rounded-lg font-bold text-sm hover:bg-surface-grey transition-all active:scale-95 text-center">
              {t.btnAbout}
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-unair-red/5 rounded-full blur-[80px] -z-0"></div>
          <img 
            src="/logo_hima.jpeg" 
            alt="HIMATIKA Logo" 
            className="w-full max-w-[400px] aspect-square object-contain z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
