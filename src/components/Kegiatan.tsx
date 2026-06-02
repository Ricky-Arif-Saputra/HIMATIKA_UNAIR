import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  Globe, 
  BookOpen, 
  Heart, 
  Trophy, 
  Tv, 
  TrendingUp, 
  Sparkles,
  Calendar,
  UserCheck
} from 'lucide-react';

interface ProkerData {
  nama: string;
  deskripsi: string;
  target: string;
  tanggal: string;
  foto: string;
}

interface BidangData {
  id: string;
  nama: string;
  singkatan: string;
  deskripsi: string;
  icon: any;
  warna: string;
  bgIcon: string;
  borderWarna: string;
  proker: ProkerData[];
}

const bidangList: BidangData[] = [
  {
    id: 'executive-committee',
    nama: 'Executive Committee',
    singkatan: 'EC',
    deskripsi: 'Bertanggung jawab atas koordinasi internal, administrasi keseluruhan, regulasi kebijakan, dan arah strategis seluruh fungsionaris HIMATIKA.',
    icon: Briefcase,
    warna: 'text-unair-red',
    bgIcon: 'bg-unair-red/5',
    borderWarna: 'hover:border-unair-red/40',
    proker: [
      {
        nama: 'Rapat Kerja Tahunan (Raker)',
        deskripsi: 'Pemaparan rancangan program kerja dan anggaran seluruh departemen selama satu periode kepengurusan.',
        target: 'Seluruh fungsionaris HIMATIKA',
        tanggal: '10 Juni 2026',
        foto: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'HIMATIKA Upgrading & Gathering',
        deskripsi: 'Kegiatan pengembangan kapasitas kepemimpinan, bonding anggota, dan evaluasi berkala kepengurusan.',
        target: 'Internal Pengurus',
        tanggal: '24 Juni 2026',
        foto: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Rapat Evaluasi Triwulan',
        deskripsi: 'Forum evaluasi program kerja tengah periode untuk mengukur pencapaian KPI tiap divisi.',
        target: 'Seluruh fungsionaris',
        tanggal: '15 September 2026',
        foto: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'student-resource-development',
    nama: 'Student Resource Development',
    singkatan: 'SRD',
    deskripsi: 'Fokus pada pengembangan karakter, pengaderan fungsionaris, pelatihan kepemimpinan, dan peningkatan solidaritas mahasiswa matematika.',
    icon: Users,
    warna: 'text-amber-600',
    bgIcon: 'bg-amber-50',
    borderWarna: 'hover:border-amber-400/40',
    proker: [
      {
        nama: 'LKMM-TD (Latihan Keterampilan Manajemen)',
        deskripsi: 'Membekali mahasiswa baru dengan wawasan kepemimpinan, manajemen organisasi, dan perumusan gagasan awal.',
        target: 'Mahasiswa Baru Matematika',
        tanggal: '05 September 2026',
        foto: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Math Camp & Outbound',
        deskripsi: 'Kegiatan integrasi dan makrab lapangan untuk membangun keakraban antar angkatan.',
        target: 'Seluruh Mahasiswa Matematika',
        tanggal: '15 Juli 2026',
        foto: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Fungsionaris Development Program (FDP)',
        deskripsi: 'Pelatihan soft skills khusus bagi pengurus aktif meliputi negosiasi, public speaking, dan problem solving.',
        target: 'Fungsionaris HIMATIKA',
        tanggal: '12 November 2026',
        foto: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'public-relations',
    nama: 'Public Relations',
    singkatan: 'PR',
    deskripsi: 'Membangun jejaring kolaborasi eksternal, kunjungan studi banding antar universitas, dan menjembatani relasi fungsional dengan alumni.',
    icon: Globe,
    warna: 'text-blue-600',
    bgIcon: 'bg-blue-50',
    borderWarna: 'hover:border-blue-400/40',
    proker: [
      {
        nama: 'Comparative Study (Studi Banding)',
        deskripsi: 'Melakukan kunjungan studi banding ke himpunan matematika universitas lain guna bertukar inovasi program kerja.',
        target: 'Himpunan Mitra Eksternal',
        tanggal: '18 Agustus 2026',
        foto: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'HIMATIKA Alumni Gathering',
        deskripsi: 'Forum sarasehan dan temu kangen antara mahasiswa aktif dengan alumni untuk sharing karir dan relasi profesional.',
        target: 'Alumni dan Mahasiswa Aktif',
        tanggal: '03 Oktober 2026',
        foto: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Company & Industrial Visit',
        deskripsi: 'Kunjungan industri ke perusahaan berbasis riset data dan aktuaria untuk melihat penerapan matematika di dunia kerja.',
        target: 'Mahasiswa Semester 4 & 6',
        tanggal: '22 Oktober 2026',
        foto: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'scientific-affairs',
    nama: 'Scientific Affairs',
    singkatan: 'SA',
    deskripsi: 'Mendorong peningkatan prestasi akademik, pembinaan olimpiade sains, pembuatan karya ilmiah, dan riset-riset berbasis komputasi.',
    icon: BookOpen,
    warna: 'text-emerald-600',
    bgIcon: 'bg-emerald-50',
    borderWarna: 'hover:border-emerald-400/40',
    proker: [
      {
        nama: 'Airlangga Mathematics Competition (AMC)',
        deskripsi: 'Olimpiade matematika nasional bergengsi tingkat SMA/MA sederajat untuk menjaring talenta terbaik.',
        target: 'Pelajar SMA Nasional',
        tanggal: '12 September 2026',
        foto: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Math-Club & Olimpiade Training',
        deskripsi: 'Kelas pendampingan intensif bagi mahasiswa untuk persiapan kompetisi ONMIPA-PT tingkat wilayah dan nasional.',
        target: 'Delegasi Lomba Universitas',
        tanggal: 'Mulai 01 September 2026',
        foto: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Webinar Riset & Jurnal Ilmiah',
        deskripsi: 'Pelatihan penulisan karya tulis ilmiah (KTI) dan pengenalan tools data science/computational software.',
        target: 'Seluruh Mahasiswa',
        tanggal: '28 Oktober 2026',
        foto: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'social-impact',
    nama: 'Social Impact',
    singkatan: 'SI',
    deskripsi: 'Menginisiasi aksi sosial kemasyarakatan, pengabdian desa binaan, tanggap bencana, dan penyebaran literasi matematika dasar.',
    icon: Heart,
    warna: 'text-red-500',
    bgIcon: 'bg-red-50',
    borderWarna: 'hover:border-red-400/40',
    proker: [
      {
        nama: 'HIMATIKA Mengabdi (Desa Binaan)',
        deskripsi: 'Pengabdian masyarakat berkelanjutan di desa mitra berupa bimbingan belajar, pembangunan fasilitas, dan sanitasi sehat.',
        target: 'Warga Desa Mitra',
        tanggal: '01 Juli 2026',
        foto: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Bakti Sosial & Donor Darah',
        deskripsi: 'Kegiatan kemanusiaan donor darah massal dan penyaluran sembako ke panti asuhan sekitar kampus.',
        target: 'Masyarakat Umum',
        tanggal: '10 November 2026',
        foto: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Math Care & Edu-Fun',
        deskripsi: 'Pemberian paket edukatif dan kelas berhitung asyik untuk anak-anak jalanan atau kurang mampu.',
        target: 'Anak-anak Area Surabaya',
        tanggal: '18 Desember 2026',
        foto: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'creative-sports',
    nama: 'Creative Sports',
    singkatan: 'CS',
    deskripsi: 'Mewadahi penyaluran bakat mahasiswa dalam bidang seni, olahraga, e-sports, guna membentuk kebugaran fisik dan kreativitas.',
    icon: Trophy,
    warna: 'text-purple-600',
    bgIcon: 'bg-purple-50',
    borderWarna: 'hover:border-purple-400/40',
    proker: [
      {
        nama: 'Math Cup (Turnamen Olahraga)',
        deskripsi: 'Kompetisi persahabatan futsal, basket, badminton antar angkatan aktif matematika.',
        target: 'Seluruh Angkatan Aktif',
        tanggal: '05 Oktober 2026',
        foto: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'HIMATIKA Art & Acoustic Night',
        deskripsi: 'Pentas seni akustik dan malam apresiasi budaya untuk menyalurkan minat bakat bermusik.',
        target: 'Warga Matematika',
        tanggal: '18 Desember 2026',
        foto: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'E-Sports League',
        deskripsi: 'Turnamen e-sport (Mobile Legends & PUBG Mobile) sebagai sarana rekreasi dan kompetisi strategis.',
        target: 'Mahasiswa dan Umum',
        tanggal: '12 November 2026',
        foto: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'media-communications',
    nama: 'Media Communications',
    singkatan: 'MC',
    deskripsi: 'Mengelola kanal informasi digital, desain grafis media sosial, publikasi prestasi, serta dokumentasi dokumenter seluruh kegiatan.',
    icon: Tv,
    warna: 'text-teal-600',
    bgIcon: 'bg-teal-50',
    borderWarna: 'hover:border-teal-400/40',
    proker: [
      {
        nama: 'Website & Digital Archiving',
        deskripsi: 'Pemeliharaan dan pembaharuan berkala website resmi sebagai portal transparansi profil himpunan.',
        target: 'Publik',
        tanggal: '15 Juni 2026',
        foto: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Content Creator & Medsos Branding',
        deskripsi: 'Pembuatan konten kreatif infografis mingguan, rangkuman info penting, dan perayaan hari besar.',
        target: 'Pengguna Instagram & TikTok',
        tanggal: 'Setiap Pekan',
        foto: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Math-Podcast & Talkshow',
        deskripsi: 'Serial podcast ringan membahas lika-liku kehidupan perkuliahan matematika dan bincang-bincang santai.',
        target: 'Masyarakat Digital',
        tanggal: '29 Juni 2026',
        foto: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'entrepreneurship',
    nama: 'Entrepreneurship',
    singkatan: 'EP',
    deskripsi: 'Mengasah mental wirausaha mandiri, memproduksi merchandise eksklusif, serta menggalang dana usaha alternatif fungsional.',
    icon: TrendingUp,
    warna: 'text-amber-500',
    bgIcon: 'bg-amber-50/50',
    borderWarna: 'hover:border-amber-500/40',
    proker: [
      {
        nama: 'HIMATIKA Official Merchandise',
        deskripsi: 'Pengadaan dan penjualan merchandise (jaket angkatan, lanyard, stiker, kaos) berkualitas tinggi.',
        target: 'Warga Matematika',
        tanggal: '20 Juni - 10 Juli 2026',
        foto: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Kewirausahaan Booth & Danus',
        deskripsi: 'Penyediaan lapak makanan ringkas (snack booth) di area kampus sebagai sarana belajar bisnis praktis.',
        target: 'Mahasiswa di Kampus',
        tanggal: 'Setiap Hari Efektif',
        foto: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600'
      },
      {
        nama: 'Enterpreneurship Webinar & Workshop',
        deskripsi: 'Workshop intensif menghadirkan wirausahawan muda sukses untuk mengajarkan taktik e-commerce awal.',
        target: 'Mahasiswa Umum',
        tanggal: '17 Oktober 2026',
        foto: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600'
      }
    ]
  }
];

export default function Kegiatan() {
  const [activeBidang, setActiveBidang] = useState<BidangData>(bidangList[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Sparkles size={12} className="animate-pulse" />
            Divisi & Departemen
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Bidang Kerja <span className="text-unair-red">HIMATIKA</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Delapan bidang strategis yang aktif menggerakkan roda kemajuan kepengurusan Kabinet Satya Adhikarta.
          </p>
        </div>

        {/* 8 Bidang Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {bidangList.map((bidang) => {
            const Icon = bidang.icon;
            const isActive = activeBidang.id === bidang.id;
            return (
              <button
                key={bidang.id}
                onClick={() => setActiveBidang(bidang)}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-white shadow-xl border-unair-red/30 -translate-y-1' 
                    : 'bg-white/50 border-[#e2e8f0]/60 hover:bg-white hover:shadow-md'
                } ${bidang.borderWarna}`}
              >
                <div className={`p-3.5 rounded-xl mb-4 ${bidang.bgIcon} ${bidang.warna}`}>
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase block mb-1">
                  {bidang.singkatan}
                </span>
                <span className="text-xs font-bold text-[#191c1d] text-center line-clamp-2 px-1">
                  {bidang.nama}
                </span>
              </button>
            );
          })}
        </div>

        {/* Proker & Agenda Details for Selected Bidang */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBidang.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100"
          >
            {/* Header Bidang */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-100 pb-8 mb-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest ${activeBidang.bgIcon} ${activeBidang.warna}`}>
                    {activeBidang.singkatan}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-[#191c1d]">
                    {activeBidang.nama}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-[#59413f] leading-relaxed">
                  {activeBidang.deskripsi}
                </p>
              </div>
            </div>

            {/* List Program Kerja with Photo Column */}
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-1.5 h-6 bg-unair-gold rounded-full"></span>
                <h4 className="font-display text-lg font-bold text-[#191c1d]">
                  Program Kerja & Kegiatan Utama
                </h4>
              </div>

              {/* Grid Layout of Proker with Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeBidang.proker.map((proker, idx) => (
                  <div 
                    key={idx}
                    className="group flex flex-col bg-white rounded-2xl border border-neutral-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Photo Container with Date Tag */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      <img 
                        src={proker.foto} 
                        alt={proker.nama} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Date Badge Overlay */}
                      <div className="absolute bottom-3 left-3 bg-[#191c1d]/85 text-white text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded shadow-md flex items-center gap-1.5 uppercase backdrop-blur-sm border border-white/10">
                        <Calendar size={10} className="text-unair-gold" />
                        {proker.tanggal}
                      </div>
                    </div>

                    {/* Proker Text Details */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h5 className="font-display text-base font-bold text-[#191c1d] mb-2 leading-snug group-hover:text-unair-red transition-colors duration-300">
                        {proker.nama}
                      </h5>
                      <p className="text-xs text-[#59413f] leading-relaxed mb-6 flex-1">
                        {proker.deskripsi}
                      </p>
                      
                      <div className="w-full h-[1px] bg-neutral-100 my-4"></div>

                      {/* Target Audience */}
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8b7e7c] uppercase tracking-wide">
                        <UserCheck size={12} className={`${activeBidang.warna}`} />
                        <span>Target:</span>
                        <span className="text-[#191c1d] font-semibold">{proker.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
