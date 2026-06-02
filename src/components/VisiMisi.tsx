import { motion } from 'motion/react';
import { translations } from '@/src/lib/translations';

export default function VisiMisi({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = translations[lang].visiMisi;

  return (
    <section className="py-24 bg-surface-grey border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold text-[#191c1d] mb-10">{t.visiTitle}</h2>
            <div className="relative">
              <span className="absolute -top-12 -left-8 text-9xl text-unair-red/5 font-serif font-black select-none pointer-events-none">"</span>
              <p className="font-display text-xl md:text-2xl italic text-unair-red leading-relaxed font-semibold relative z-10">
                "{t.visiText}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold text-[#191c1d] mb-10">{t.misiTitle}</h2>
            <div className="space-y-10">
              {t.misiItems.map((misi, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-unair-gold font-bold text-3xl leading-none mt-1">{misi.num}</span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#191c1d] mb-2">{misi.title}</h4>
                    <p className="text-[#59413f] leading-relaxed">{misi.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
