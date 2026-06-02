import { motion } from 'motion/react';
import { BookOpen, Download, Search, FileText } from 'lucide-react';
import { useState } from 'react';

interface MatkulSoal {
  kode: string;
  nama: string;
  semester: number;
  tipe: 'UTS' | 'UAS';
  tahun: string;
  link: string;
}

const bankSoalData: MatkulSoal[] = [
  { kode: 'MTD101', nama: 'Kalkulus I', semester: 1, tipe: 'UTS', tahun: '2024', link: '#' },
  { kode: 'MTD101', nama: 'Kalkulus I', semester: 1, tipe: 'UAS', tahun: '2024', link: '#' },
  { kode: 'MTD102', nama: 'Aljabar Linear Elementer', semester: 1, tipe: 'UTS', tahun: '2024', link: '#' },
  { kode: 'MTD201', nama: 'Kalkulus II', semester: 2, tipe: 'UTS', tahun: '2024', link: '#' },
  { kode: 'MTD201', nama: 'Kalkulus II', semester: 2, tipe: 'UAS', tahun: '2024', link: '#' },
  { kode: 'MTD301', nama: 'Persamaan Diferensial Biasa', semester: 3, tipe: 'UTS', tahun: '2023', link: '#' },
  { kode: 'MTD302', nama: 'Analisis Real I', semester: 3, tipe: 'UAS', tahun: '2023', link: '#' },
  { kode: 'MTD401', nama: 'Aljabar Abstrak I', semester: 4, tipe: 'UTS', tahun: '2023', link: '#' },
];

export default function BankSoal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');

  const filteredSoal = bankSoalData.filter((soal) => {
    const matchesSearch = soal.nama.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          soal.kode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === 'all' || soal.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <BookOpen size={12} />
            Akademik
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Bank <span className="text-unair-red">Soal</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Kumpulan berkas latihan soal ujian (UTS & UAS) semester terdahulu untuk membantu persiapan belajar mahasiswa.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Semester Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedSemester('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedSemester === 'all'
                  ? 'bg-unair-red text-white shadow-md'
                  : 'bg-white border border-[#e2e8f0] text-[#59413f] hover:bg-neutral-50'
              }`}
            >
              Semua Semester
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedSemester === sem
                    ? 'bg-unair-red text-white shadow-md'
                    : 'bg-white border border-[#e2e8f0] text-[#59413f] hover:bg-neutral-50'
                }`}
              >
                Sem. {sem}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-xs flex items-center bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm px-3">
            <Search size={16} className="text-neutral-400 mr-2" />
            <input
              type="text"
              placeholder="Cari mata kuliah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-[#191c1d] text-sm py-2.5 border-none focus:ring-0 outline-none"
            />
          </div>
        </div>

        {/* Soal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSoal.length > 0 ? (
            filteredSoal.map((soal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-[#8b7e7c] tracking-widest uppercase">
                    {soal.kode}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    soal.tipe === 'UTS' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {soal.tipe} {soal.tahun}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-[#191c1d] mb-2 leading-snug flex-1">
                  {soal.nama}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-50">
                  <span className="text-xs text-neutral-400 font-medium">
                    Semester {soal.semester}
                  </span>
                  <a
                    href={soal.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-unair-red hover:text-unair-gold transition-colors"
                  >
                    <Download size={14} />
                    Unduh Soal
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-[#59413f]">
              Tidak ada mata kuliah yang cocok ditemukan.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
