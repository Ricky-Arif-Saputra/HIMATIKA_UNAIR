import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

interface Produk {
  id: string;
  nama: string;
  harga: string;
  deskripsi: string;
  foto: string;
  waLink: string;
}

const produkList: Produk[] = [
  {
    id: '1',
    nama: 'Kertas A5',
    harga: 'Rp 9.000',
    deskripsi: 'Kertas catatan A5 berkualitas tinggi untuk latihan pengerjaan soal, tugas, maupun ringkasan kuliah.',
    foto: '/buku.jpg',
    waLink: 'https://wa.me/6281241002?text=Halo%20Admin%20HIMATIKA%20Store%2C%20saya%20tertarik%20untuk%20membeli%20Kertas%20A5.'
  },
  {
    id: '2',
    nama: 'Kertas Folio (5 Lembar)',
    harga: 'Rp 2.000',
    deskripsi: 'Kertas double folio bergaris isi 5 lembar untuk penulisan laporan praktikum, tugas terstruktur, dan ujian.',
    foto: '/folio.avif',
    waLink: 'https://wa.me/6281241002?text=Halo%20Admin%20HIMATIKA%20Store%2C%20saya%20tertarik%20untuk%20membeli%20Kertas%20Folio%20(5%20Lembar).'
  },
  {
    id: '3',
    nama: 'Kertas B5',
    harga: 'Rp 7.500',
    deskripsi: 'Kertas binder berukuran B5 kualitas premium, cocok untuk catatan kuliah harian yang rapi dan ringkas.',
    foto: '/B5.jpg',
    waLink: 'https://wa.me/6281241002?text=Halo%20Admin%20HIMATIKA%20Store%2C%20saya%20tertarik%20untuk%20membeli%20Kertas%20B5.'
  },
  {
    id: '4',
    nama: 'Penggaris',
    harga: 'Rp 2.000',
    deskripsi: 'Penggaris plastik transparan ukuran standar, praktis digunakan untuk pengerjaan gambar grafik fungsi matematika dan geometri.',
    foto: '/penggaris.jpg',
    waLink: 'https://wa.me/6281241002?text=Halo%20Admin%20HIMATIKA%20Store%2C%20saya%20tertarik%20untuk%20membeli%20Penggaris.'
  }
];

export default function HimatikaStore() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fbfbfc] via-white to-[#fbfbfc] border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Store */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-[#ffdad7] text-unair-red font-bold text-[11px] px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <ShoppingBag size={12} />
            Official Merchandise
          </span>
          <h2 className="font-display text-4xl font-bold text-[#191c1d] tracking-tight">
            HIMATIKA <span className="text-unair-red">Store</span>
          </h2>
          <p className="text-[#59413f] mt-4 max-w-xl mx-auto text-sm md:text-base">
            Dapatkan koleksi cinderamata resmi dan perlengkapan akademik orisinil berkualitas tinggi dari Himpunan Mahasiswa Matematika Universitas Airlangga.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produkList.map((produk, idx) => (
            <motion.div
              key={produk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl border border-neutral-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <img 
                  src={produk.foto} 
                  alt={produk.nama} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Price Badge Overlay */}
                <div className="absolute top-4 right-4 bg-unair-red text-white text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {produk.harga}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-base font-bold text-[#191c1d] mb-2 group-hover:text-unair-red transition-colors duration-300">
                  {produk.nama}
                </h3>
                
                <p className="text-xs text-[#59413f] leading-relaxed mb-6 flex-1">
                  {produk.deskripsi}
                </p>

                <div className="w-full h-[1px] bg-neutral-100 my-4"></div>

                {/* WhatsApp CP Button */}
                <a
                  href={produk.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/25 transition-all duration-300 text-center uppercase tracking-wider"
                >
                  {/* WhatsApp Mini SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.489 5.357 1.49 5.348 0 9.703-4.321 9.706-9.639.002-2.577-1.002-5.001-2.828-6.83-1.826-1.83-4.25-2.836-6.831-2.837-5.354 0-9.712 4.326-9.715 9.648-.001 2.13.568 4.208 1.649 5.992l-1.082 3.95 4.09-1.077zm11.302-6.52c-.296-.147-1.747-.862-2.019-.961-.272-.099-.47-.148-.667.147-.197.296-.766.962-.939 1.16-.173.197-.347.222-.643.074-.295-.147-1.249-.46-2.38-1.467-.88-.785-1.474-1.755-1.647-2.051-.173-.296-.018-.456.13-.603.133-.133.296-.346.444-.519.148-.173.197-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.667-1.605-.914-2.197-.24-.579-.48-.5-.667-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.748-.715 1.995-1.4.247-.687.247-1.277.173-1.4-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  <span>Beli via WhatsApp</span>
                  <ArrowUpRight size={14} className="opacity-80" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
