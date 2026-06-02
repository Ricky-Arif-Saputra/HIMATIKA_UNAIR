import { motion } from 'motion/react';
import { User, Award, Users } from 'lucide-react';

export default function StrukturPengurus() {
  const ketua = {
    nama: "Ricky Arif Saputra",
    nim: "181241002",
    jabatan: "Ketua HIMATIKA",
    periode: "2026/2027",
    deskripsi: "Memimpin, mengoordinasikan, dan bertanggung jawab penuh atas seluruh jalannya roda organisasi HIMATIKA Universitas Airlangga.",
  };

  const wakilKetua = {
    nama: "Fahmi Andhika Prasetya",
    nim: "181241010",
    jabatan: "Wakil Ketua HIMATIKA",
    periode: "2026/2027",
    deskripsi: "Membantu Ketua dalam mengoordinasikan seluruh divisi, mengawasi program kerja, and mewakili Ketua apabila berhalangan hadir.",
  };

  return (
    <section className="py-24 bg-surface-grey border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#ffdad7] text-unair-red font-bold text-[12px] px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
            Struktur Organisasi
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            Kepengurusan <span className="text-unair-red">SATYA ADHIKARTA</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto">
            Struktur organisasi Himpunan Mahasiswa Matematika (HIMATIKA) Universitas Airlangga periode saat ini.
          </p>
        </motion.div>

        {/* Tree flow container */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Connector Line */}
          <div className="absolute top-20 bottom-0 w-0.5 bg-unair-red/20 -z-10"></div>

          {/* Ketua Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-unair-red/10 p-8 max-w-md w-full relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-16"
          >
            {/* Gold Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-unair-gold text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5 border border-white/20">
              <Award size={14} />
              {ketua.jabatan}
            </div>

            {/* Avatar placeholder */}
            <div className="w-24 h-24 bg-unair-red/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-unair-red/20 shadow-inner">
              <User size={48} className="text-unair-red" />
            </div>

            {/* Ketua Details */}
            <h3 className="font-display text-2xl font-bold text-[#191c1d] mb-1">
              {ketua.nama}
            </h3>
            <p className="text-sm font-semibold text-unair-red/80 tracking-wider mb-4">
              NIM: {ketua.nim}
            </p>

            <div className="h-px bg-border-subtle w-full my-4"></div>

            <p className="text-sm text-[#59413f] leading-relaxed italic">
              "{ketua.deskripsi}"
            </p>

            <div className="mt-6 text-[10px] font-bold text-[#a0827d] uppercase tracking-widest">
              Periode {ketua.periode}
            </div>
          </motion.div>

          {/* Wakil Ketua Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-unair-red/10 p-8 max-w-md w-full relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Red Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-unair-red text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5 border border-white/20">
              <Users size={14} />
              {wakilKetua.jabatan}
            </div>

            {/* Avatar placeholder */}
            <div className="w-24 h-24 bg-unair-red/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-unair-red/20 shadow-inner">
              <User size={48} className="text-unair-red" />
            </div>

            {/* Wakil Ketua Details */}
            <h3 className="font-display text-2xl font-bold text-[#191c1d] mb-1">
              {wakilKetua.nama}
            </h3>
            <p className="text-sm font-semibold text-unair-red/80 tracking-wider mb-4">
              NIM: {wakilKetua.nim}
            </p>

            <div className="h-px bg-border-subtle w-full my-4"></div>

            <p className="text-sm text-[#59413f] leading-relaxed italic">
              "{wakilKetua.deskripsi}"
            </p>

            <div className="mt-6 text-[10px] font-bold text-[#a0827d] uppercase tracking-widest">
              Periode {wakilKetua.periode}
            </div>
          </motion.div>

          {/* Placeholder for future divisions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-white/40 border border-dashed border-border-subtle px-8 py-4 rounded-xl text-xs font-medium tracking-wide text-[#59413f] max-w-xs"
          >
            Divisi dan Pengurus Lainnya Menyusul
          </motion.div>
        </div>
      </div>
    </section>
  );
}
