import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Dribbble, Music, Compass, GraduationCap, ArrowUpRight } from 'lucide-react';

interface KomunitasData {
  id: string;
  nama: string;
  singkatan: string;
  deskripsi: string;
  kegiatanRutin: string;
  foto: string;
  grupWa: string;
  icon: any;
  warna: string;
  bgIcon: string;
}

const komunitasList: KomunitasData[] = [
  {
    id: 'sport',
    nama: 'Komunitas Sport',
    singkatan: 'SPORT',
    deskripsi: 'Wadah bagi mahasiswa matematika yang gemar berolahraga untuk menyalurkan energi, menjaga kebugaran, dan melatih kerja sama tim melalui latihan futsal, badminton, dan basket secara rutin.',
    kegiatanRutin: 'Latihan rutin setiap hari Selasa dan Jumat malam di Gor Fakultas.',
    foto: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200',
    grupWa: 'https://chat.whatsapp.com/L1nKSportHimatikaUnair',
    icon: Dribbble,
    warna: 'text-orange-600',
    bgIcon: 'bg-orange-50'
  },
  {
    id: 'e-sport',
    nama: 'Komunitas E-Sport',
    singkatan: 'E-SPORT',
    deskripsi: 'Komunitas peminat game kompetitif strategis seperti Mobile Legends, PUBG Mobile, dan Valorant. Kami berfokus pada turnamen persahabatan, asah taktik, dan persiapan delegasi kompetisi e-sport kampus.',
    kegiatanRutin: 'Mabar (Main Bareng) dan coaching clinic taktis setiap Sabtu malam via Discord.',
    foto: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200',
    grupWa: 'https://chat.whatsapp.com/J3nKEsportHimatikaUnair',
    icon: Trophy,
    warna: 'text-purple-600',
    bgIcon: 'bg-purple-50'
  },
  {
    id: 'tari',
    nama: 'Komunitas Seni Tari',
    singkatan: 'TARI',
    deskripsi: 'Menyediakan ruang ekspresi bagi pencinta seni tari tradisional maupun modern. Komunitas ini aktif berlatih koreografi indah untuk tampil pada acara-acara besar fakultas dan wisuda.',
    kegiatanRutin: 'Latihan rutin koreografi setiap hari Rabu sore di Selasar FST.',
    foto: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
    grupWa: 'https://chat.whatsapp.com/K5nKTariHimatikaUnair',
    icon: Compass,
    warna: 'text-rose-600',
    bgIcon: 'bg-rose-50'
  },
  {
    id: 'musik',
    nama: 'Komunitas Musik',
    singkatan: 'MUSIK',
    deskripsi: 'Wadah bagi mahasiswa yang tertarik dalam olah vokal, instrumen musik, band, maupun akustik santai. Kami aktif mengisi panggung-panggung ekspresi seni dan jamming session bersama.',
    kegiatanRutin: 'Jamming session dan latihan akustik berkala setiap hari Kamis sore di Gazebo Kampus.',
    foto: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
    grupWa: 'https://chat.whatsapp.com/M7nKMusikHimatikaUnair',
    icon: Music,
    warna: 'text-blue-600',
    bgIcon: 'bg-blue-50'
  },
  {
    id: 'keilmiahan',
    nama: 'Komunitas Keilmiahan',
    singkatan: 'KEILMIAHAN',
    deskripsi: 'Kelompok studi khusus mahasiswa yang gemar mendalami logika matematika, riset data, pemrograman komputer, serta persiapan intensif karya tulis ilmiah dan olimpiade ONMIPA.',
    kegiatanRutin: 'Mentoring riset, bedah soal olimpiade, dan forum diskusi ilmiah setiap hari Senin sore.',
    foto: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    grupWa: 'https://chat.whatsapp.com/S9nKIlmiahHimatikaUnair',
    icon: GraduationCap,
    warna: 'text-emerald-600',
    bgIcon: 'bg-emerald-50'
  }
];

export default function Komunitas({ activeId }: { activeId: string; onChangeActiveId: (id: string) => void }) {
  const activeKomunitas = komunitasList.find(k => k.id === activeId) || komunitasList[0];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <div className="mb-16">
          <span className="inline-block bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Detail Komunitas
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Komunitas <span className="text-unair-red">{activeKomunitas.singkatan}</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Informasi lengkap, dokumentasi kegiatan, serta akses grup koordinasi komunitas pilihan Anda.
          </p>
        </div>

        {/* Selected Community Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKomunitas.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 text-left items-center"
          >
            
            {/* Foto Komunitas Column */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-50 shadow-md group">
              <img 
                src={activeKomunitas.foto} 
                alt={activeKomunitas.nama} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Profile & WA Link Column */}
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest ${activeKomunitas.bgIcon} ${activeKomunitas.warna}`}>
                  {activeKomunitas.singkatan}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#191c1d]">
                  {activeKomunitas.nama}
                </h3>
              </div>

              <p className="text-sm md:text-base text-[#59413f] leading-relaxed mb-6">
                {activeKomunitas.deskripsi}
              </p>

              {/* Routine Practice */}
              <div className="bg-neutral-50 border border-[#e2e8f0]/40 p-4 rounded-xl mb-8">
                <span className="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase block mb-1">
                  Kegiatan Rutin
                </span>
                <p className="text-xs md:text-sm font-semibold text-[#191c1d]">
                  {activeKomunitas.kegiatanRutin}
                </p>
              </div>

              <div className="w-full h-[1px] bg-neutral-100 mb-6"></div>

              {/* Join WA Group Button */}
              <a
                href={activeKomunitas.grupWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 self-start bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/25 transition-all duration-300 uppercase tracking-wider"
              >
                {/* WhatsApp Mini SVG Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.489 5.357 1.49 5.348 0 9.703-4.321 9.706-9.639.002-2.577-1.002-5.001-2.828-6.83-1.826-1.83-4.25-2.836-6.831-2.837-5.354 0-9.712 4.326-9.715 9.648-.001 2.13.568 4.208 1.649 5.992l-1.082 3.95 4.09-1.077zm11.302-6.52c-.296-.147-1.747-.862-2.019-.961-.272-.099-.47-.148-.667.147-.197.296-.766.962-.939 1.16-.173.197-.347.222-.643.074-.295-.147-1.249-.46-2.38-1.467-.88-.785-1.474-1.755-1.647-2.051-.173-.296-.018-.456.13-.603.133-.133.296-.346.444-.519.148-.173.197-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.667-1.605-.914-2.197-.24-.579-.48-.5-.667-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.748-.715 1.995-1.4.247-.687.247-1.277.173-1.4-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <span>Gabung Grup WA</span>
              <ArrowUpRight size={14} className="opacity-80" />
            </a>
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  </section>
  );
}
