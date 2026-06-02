import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, ShieldCheck, Mail, Megaphone, Share2 } from 'lucide-react';

interface SopItem {
  judul: string;
  nomor: string;
  deskripsi: string;
  poin: string[];
  linkDownload: string;
}

interface SopCategory {
  id: string;
  nama: string;
  deskripsi: string;
  icon: any;
  warna: string;
  bgIcon: string;
  items: SopItem[];
}

const sopCategories: SopCategory[] = [
  {
    id: 'sop-administrasi',
    nama: 'SOP Administrasi',
    deskripsi: 'Panduan tata tertib administrasi surat-menyurat, pengajuan proposal kegiatan, laporan pertanggungjawaban (LPJ), serta peminjaman inventaris HIMATIKA.',
    icon: Mail,
    warna: 'text-unair-red',
    bgIcon: 'bg-unair-red/5',
    items: [
      {
        nomor: 'SOP/ADM/001',
        judul: 'Alur Pengajuan Surat Keluar',
        deskripsi: 'Prosedur pembuatan dan penandatanganan surat resmi keluar untuk pihak internal maupun eksternal kampus.',
        poin: [
          'Mengisi form permohonan nomor surat ke Sekretaris Umum.',
          'Draf surat harus disetujui (ACC) oleh Ketua Pelaksana / Kepala Divisi terkait.',
          'Penomoran surat dan stempel resmi dilakukan oleh Sekretaris Umum.',
          'Proses administrasi surat minimal dilakukan H-3 sebelum pengiriman.'
        ],
        linkDownload: '#'
      },
      {
        nomor: 'SOP/ADM/002',
        judul: 'Penyusunan Proposal & LPJ Kegiatan',
        deskripsi: 'Format standar penyusunan draf proposal anggaran belanja serta penyusunan laporan pertanggungjawaban kegiatan.',
        poin: [
          'Menggunakan template proposal resmi Kabinet Satya Adhikarta.',
          'Rincian anggaran harus dikoordinasikan dan disetujui oleh Bendahara Umum.',
          'LPJ wajib diserahkan maksimal H+14 setelah acara selesai.',
          'Menyertakan lampiran nota pembelian yang sah dan dokumentasi kegiatan.'
        ],
        linkDownload: '#'
      }
    ]
  },
  {
    id: 'sop-publikasi',
    nama: 'SOP Publikasi',
    deskripsi: 'Aturan standardisasi publikasi konten visual, branding media sosial resmi, bahasa penyampaian informasi, serta alur approval desain publikasi.',
    icon: Megaphone,
    warna: 'text-amber-600',
    bgIcon: 'bg-amber-50',
    items: [
      {
        nomor: 'SOP/PUB/001',
        judul: 'Standardisasi Visual & Co-Branding',
        deskripsi: 'Aturan penggunaan warna primer kabinet, font resmi, penempatan logo UNAIR dan HIMATIKA pada poster publikasi.',
        poin: [
          'Wajib menggunakan palet warna merah marun (#8B1411) dan emas (#A3752B).',
          'Penempatan logo UNAIR di pojok kiri atas dan logo HIMATIKA di pojok kanan atas poster.',
          'Menggunakan font sans-serif modern (misal: Outfit, Inter) agar mudah dibaca.',
          'Setiap poster wajib mencantumkan watermark nama kabinet di bagian bawah.'
        ],
        linkDownload: '#'
      },
      {
        nomor: 'SOP/PUB/002',
        judul: 'Alur Approval & Penjadwalan Konten',
        deskripsi: 'Langkah verifikasi draf desain sebelum diunggah ke media sosial resmi himpunan.',
        poin: [
          'Draf konten dikirim ke Divisi Media & Communications minimal H-2 publikasi.',
          'Pemeriksaan konten meliputi kebenaran teks, tata bahasa, dan estetika visual.',
          'Approval akhir dilakukan oleh Ketua / Wakil Ketua HIMATIKA.',
          'Konten diunggah pada jam tayang utama (prime time) pukul 16.00 atau 19.00 WIB.'
        ],
        linkDownload: '#'
      }
    ]
  },
  {
    id: 'sop-media-partner',
    nama: 'SOP Media Partner',
    deskripsi: 'Ketentuan dan alur kerja sama kemitraan media (media partner) bagi pihak luar yang ingin mempromosikan acaranya melalui kanal HIMATIKA.',
    icon: Share2,
    warna: 'text-blue-600',
    bgIcon: 'bg-blue-50',
    items: [
      {
        nomor: 'SOP/MEDPART/001',
        judul: 'Syarat & Ketentuan Pengajuan Media Partner',
        deskripsi: 'Kriteria acara luar dan timbal balik (feedback) yang wajib dipenuhi untuk kerja sama publikasi.',
        poin: [
          'Acara tidak mengandung unsur SARA, politik praktis, atau pornografi.',
          'Pihak pengaju wajib menyertakan logo HIMATIKA pada materi promosi mereka.',
          'Wajib melakukan follow akun Instagram resmi @himatika_unair.',
          'Mengirimkan berkas proposal kerja sama (MoU) ke email resmi himpunan.'
        ],
        linkDownload: '#'
      },
      {
        nomor: 'SOP/MEDPART/002',
        judul: 'Alur Upload Materi Kemitraan',
        deskripsi: 'Prosedur pengiriman berkas desain feed/story dan caption setelah kerja sama disetujui.',
        poin: [
          'Mengirimkan materi publikasi (foto + caption) melalui WhatsApp CP Media Relation.',
          'Format gambar harus beresolusi tinggi (rasio 1:1 untuk feed atau 9:16 untuk story).',
          'Caption promosi harus siap pakai dan mencantumkan tagar kerja sama.',
          'Proses unggah dilakukan maksimal 1x24 jam setelah MoU disepakati bersama.'
        ],
        linkDownload: '#'
      }
    ]
  }
];

export default function Sop({ activeTab, onChangeTab }: { activeTab: string; onChangeTab: (tab: string) => void }) {
  const currentCategory = sopCategories.find(c => c.id === activeTab) || sopCategories[0];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <ShieldCheck size={12} />
            Regulasi Resmi
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            SOP <span className="text-unair-red">HIMATIKA</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Standard Operating Procedure (SOP) resmi sebagai acuan pelaksanaan kegiatan, komunikasi, dan administrasi organisasi.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 md:gap-4 mb-16 flex-wrap">
          {sopCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = currentCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onChangeTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-white shadow-lg border-unair-red/30 -translate-y-0.5 text-[#191c1d]'
                    : 'bg-white/50 border-[#e2e8f0]/60 text-neutral-400 hover:bg-white hover:text-[#191c1d] hover:shadow-sm'
                }`}
              >
                <div className={`p-1 rounded-full ${cat.bgIcon} ${cat.warna}`}>
                  <Icon size={14} />
                </div>
                <span>{cat.nama}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description & Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-neutral-50/50 border border-[#e2e8f0]/40 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="font-display text-lg font-bold text-[#191c1d] mb-2">
                Deskripsi {currentCategory.nama}
              </h3>
              <p className="text-sm text-[#59413f] leading-relaxed">
                {currentCategory.deskripsi}
              </p>
            </div>

            <div className="space-y-8">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-50 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-unair-red tracking-widest uppercase block mb-1">
                        {item.nomor}
                      </span>
                      <h4 className="font-display text-lg font-bold text-[#191c1d]">
                        {item.judul}
                      </h4>
                    </div>
                    <a
                      href={item.linkDownload}
                      className="inline-flex items-center gap-1.5 self-start md:self-center bg-[#f0f1f2] hover:bg-[#e2e8f0] text-[#191c1d] text-xs font-bold px-4 py-2.5 rounded-lg transition-colors duration-300"
                    >
                      <Download size={14} />
                      Unduh Dokumen
                    </a>
                  </div>

                  <p className="text-sm text-[#59413f] leading-relaxed mb-6">
                    {item.deskripsi}
                  </p>

                  <div className="bg-neutral-50/30 border border-[#e2e8f0]/30 rounded-xl p-5 md:p-6">
                    <span className="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase block mb-3">
                      Poin-Poin Prosedur
                    </span>
                    <ul className="space-y-2.5">
                      {item.poin.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#59413f]">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${currentCategory.bgIcon} ${currentCategory.warna} mt-0.5`}>
                            {pIdx + 1}
                          </span>
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
