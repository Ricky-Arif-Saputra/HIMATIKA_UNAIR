import { useEffect } from 'react';
import { ArrowLeft, Play, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsDetailProps {
  newsId: string;
  onBack: () => void;
}

const NEWS_DETAILS_MAP: Record<string, {
  title: string;
  date: string;
  category: string;
  author: string;
  videoEmbedUrl?: string;
  coverImage: string;
  content: string[];
}> = {
  posture: {
    title: "[ POSTURE Eps. 4 ] Maksimalin Nilai atau Ekspansi Relasi ?",
    date: "19 Mei 2026",
    category: "Podcast",
    author: "Bidang Media Communications",
    videoEmbedUrl: "https://www.youtube.com/embed/O3tD7nQbI2k",
    coverImage: "https://img.youtube.com/vi/O3tD7nQbI2k/maxresdefault.jpg",
    content: [
      "Himpunan Mahasiswa Matematika (HIMATIKA) Universitas Airlangga kembali meluncurkan episode terbaru dari program podcast unggulan kami, POSTURE (Podcast Sabtu Sore) dengan tema yang sangat menarik bagi mahasiswa baru maupun tingkat akhir: 'Maksimalin Nilai atau Ekspansi Relasi?'.",
      "Pada episode kali ini, POSTURE mengundang dua narasumber luar biasa, yaitu Kak Fariel Nurdiyansyah dan Kak Ageng, yang akan membagikan sudut pandang, pengalaman, dan kiat-kiat praktis dalam mengarungi kehidupan perkuliahan.",
      "Apakah kita harus fokus mengejar indeks prestasi (IPK) setinggi-tingginya, ataukah memperluas jaringan pertemanan dan relasi organisasi jauh lebih penting untuk masa depan? Kedua narasumber mengupas tuntas pro dan kontra dari masing-masing pilihan, cara menyeimbangkan keduanya, serta bagaimana menyikapi dinamika perkuliahan di Departemen Matematika FST UNAIR secara bijak.",
      "Tonton tayangan lengkapnya langsung pada pemutar video di atas, dan jangan lupa untuk menyukai, mengomentari, dan berlangganan ke saluran YouTube resmi HIMATIKA UNAIR untuk konten edukasi dan informasi menarik lainnya!"
    ]
  }
};

export default function NewsDetail({ newsId, onBack }: NewsDetailProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    return () => clearTimeout(timer);
  }, [newsId]);

  const news = NEWS_DETAILS_MAP[newsId];

  if (!news) {
    return (
      <div className="py-24 text-center">
        <p className="text-[#59413f] mb-4">Detail berita tidak ditemukan.</p>
        <button onClick={onBack} className="text-unair-red font-bold hover:underline flex items-center gap-1 mx-auto">
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-unair-red transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Title */}
        <h1 className="font-display text-2xl md:text-4xl font-extrabold text-[#191c1d] leading-tight mb-6">
          {news.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-neutral-400 font-semibold mb-8 pb-6 border-b border-neutral-100">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-neutral-300" />
            {news.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-neutral-300" />
            {news.author}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ffdad7]/50 text-unair-red font-bold uppercase tracking-wider">
            <Tag size={12} />
            {news.category}
          </span>
        </div>

        {/* Video or Image Header */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-xl mb-12 border border-neutral-100">
          {news.videoEmbedUrl ? (
            <iframe
              src={news.videoEmbedUrl}
              title={news.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <img 
              src={news.coverImage} 
              alt={news.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Article Content */}
        <div className="prose max-w-none text-[#59413f] space-y-6 text-sm md:text-base leading-relaxed">
          {news.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
