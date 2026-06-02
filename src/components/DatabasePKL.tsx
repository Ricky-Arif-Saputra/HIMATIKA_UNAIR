import { motion } from 'motion/react';
import { Database, Search, Building2, User, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

interface PklItem {
  nama: string;
  nim: string;
  perusahaan: string;
  bidang: string;
  tahun: string;
  lokasi: string;
}

const pklData: PklItem[] = [
  { nama: 'Ricky Arif Saputra', nim: '181241002', perusahaan: 'Badan Pusat Statistik (BPS)', bidang: 'Data Science & Surveying', tahun: '2025', lokasi: 'Surabaya' },
  { nama: 'Fahmi Andhika Prasetya', nim: '181241010', perusahaan: 'PT. Bank Rakyat Indonesia (Persero) Tbk', bidang: 'Risk Analytics', tahun: '2025', lokasi: 'Jakarta' },
  { nama: 'Ahmad Fauzi', nim: '181241015', perusahaan: 'PT. Telkom Indonesia', bidang: 'Business Intelligence', tahun: '2024', lokasi: 'Bandung' },
  { nama: 'Siti Aminah', nim: '181241022', perusahaan: 'Lembaga Penerbangan dan Antariksa Nasional (LAPAN)', bidang: 'Mathematical Modeling', tahun: '2024', lokasi: 'Bogor' },
  { nama: 'Budi Santoso', nim: '181241031', perusahaan: 'PT. Toyota Astra Motor', bidang: 'Supply Chain & Operations Research', tahun: '2024', lokasi: 'Bekasi' },
];

export default function DatabasePKL() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPkl = pklData.filter((item) => {
    return (
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nim.includes(searchTerm) ||
      item.perusahaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bidang.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Database size={12} />
            Akademik
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Database <span className="text-unair-red">PKL</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Arsip riwayat Praktik Kerja Lapangan (PKL) mahasiswa Matematika Universitas Airlangga beserta instansi tempat magang.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full max-w-xs flex items-center bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm px-3">
            <Search size={16} className="text-neutral-400 mr-2" />
            <input
              type="text"
              placeholder="Cari mahasiswa atau perusahaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-[#191c1d] text-sm py-2.5 border-none focus:ring-0 outline-none"
            />
          </div>
        </div>

        {/* Database Table / Cards */}
        <div className="bg-white border border-[#e2e8f0]/60 rounded-2xl overflow-hidden shadow-xl shadow-neutral-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-[10px] font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-100">
                  <th className="py-4 px-6">Mahasiswa</th>
                  <th className="py-4 px-6">Instansi / Perusahaan</th>
                  <th className="py-4 px-6">Bidang Keahlian</th>
                  <th className="py-4 px-6">Tahun</th>
                  <th className="py-4 px-6">Lokasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50 text-sm text-[#191c1d]">
                {filteredPkl.length > 0 ? (
                  filteredPkl.map((item, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="hover:bg-neutral-50/50 transition-colors"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-unair-red/5 flex items-center justify-center text-unair-red font-bold text-xs">
                            {item.nama.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold">{item.nama}</div>
                            <div className="text-[11px] text-neutral-400">NIM. {item.nim}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-[#8b7e7c]" />
                          {item.perusahaan}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className="px-2.5 py-1 rounded bg-[#ffdad7]/30 text-unair-red text-[11px] font-bold uppercase tracking-wider">
                          {item.bidang}
                        </span>
                      </td>
                      <td className="py-5 px-6 font-semibold">
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <Calendar size={14} />
                          {item.tahun}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-[#59413f]">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-neutral-400" />
                          {item.lokasi}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-[#59413f]">
                      Data PKL tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
