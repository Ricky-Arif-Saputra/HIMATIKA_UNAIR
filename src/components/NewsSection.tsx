import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const NEWS_DATA = [
  {
    id: "posture",
    image: "https://img.youtube.com/vi/O3tD7nQbI2k/maxresdefault.jpg",
    category: "Podcast",
    date: "19 Mei 2026",
    title: "[ POSTURE Eps. 4 ] Maksimalin Nilai atau Ekspansi Relasi ?"
  }
];

interface NewsSectionProps {
  onSelectNews: (id: string) => void;
}

export default function NewsSection({ onSelectNews }: NewsSectionProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold text-[#191c1d] mb-4">Berita Terbaru</h2>
            <div className="h-1 w-16 bg-unair-red rounded-full"></div>
          </div>
          <button className="text-unair-red font-bold text-sm flex items-center gap-2 hover:underline group">
            Lihat Semua <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-10 hide-scrollbar snap-x cursor-grab active:cursor-grabbing">
          {NEWS_DATA.map((news, i) => {
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  if (news.id === 'posture') {
                    onSelectNews(news.id);
                  }
                }}
                className={`min-w-[320px] md:min-w-[400px] snap-start group ${news.id === 'posture' ? 'cursor-pointer' : ''}`}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-border-subtle shadow-sm">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-lg text-[11px] font-extrabold text-unair-red uppercase tracking-widest shadow-lg">
                    {news.category}
                  </span>
                </div>
                <p className="text-[12px] font-bold text-[#59413f] mb-3 uppercase tracking-wider">{news.date}</p>
                <h4 className="font-display text-xl font-bold text-[#191c1d] group-hover:text-unair-red transition-colors line-clamp-2 leading-snug">
                  {news.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
