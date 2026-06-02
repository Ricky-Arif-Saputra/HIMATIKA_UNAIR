import type { ReactNode } from 'react';
import { Instagram, Globe, Twitter, Mail, MapPin } from 'lucide-react';
import { translations } from '@/src/lib/translations';

export default function Footer({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="bg-white border-t border-border-subtle pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h3 className="font-display text-2xl font-bold text-unair-red mb-6">HIMATIKA UNAIR</h3>
          <p className="text-[#59413f] max-w-sm mb-8 leading-relaxed">
            {t.desc}
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Globe size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Mail size={20} />} />
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[13px] font-bold text-[#191c1d] uppercase tracking-widest mb-8">{t.navTitle}</h4>
          <ul className="space-y-4">
            <FooterLink label={lang === 'id' ? 'Beranda' : 'Home'} />
            <FooterLink label={nav.store} />
            <FooterLink label={nav.akademik} />
            <FooterLink label={lang === 'id' ? 'Kontak' : 'Contact'} />
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[13px] font-bold text-[#191c1d] uppercase tracking-widest mb-8">{lang === 'id' ? 'Organisasi' : 'Organization'}</h4>
          <ul className="space-y-4">
            <FooterLink label={nav.pengurus} />
            <FooterLink label={lang === 'id' ? 'Komunitas' : 'Community'} />
            <FooterLink label="SOP" />
            <FooterLink label={nav.kritikSaran} />
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[13px] font-bold text-[#191c1d] uppercase tracking-widest mb-8">{t.contactTitle}</h4>
          <div className="space-y-6">
            <div className="flex gap-3 text-[#59413f] items-start">
              <MapPin size={20} className="text-unair-red shrink-0" />
              <p className="text-sm leading-relaxed">
                {t.address}
              </p>
            </div>
            <div className="flex gap-3 text-[#59413f] items-center">
              <Mail size={18} className="text-unair-red shrink-0" />
              <p className="text-sm">himatika@fst.unair.ac.id</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 border-t border-border-subtle pt-10 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium text-[#59413f]">
            {t.rights}
          </p>
          <div className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-[#59413f]">
            <a href="#" className="hover:text-unair-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-unair-red transition-colors">Twitter</a>
            <a href="#" className="hover:text-unair-red transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-grey border border-border-subtle text-unair-red hover:bg-unair-red hover:text-white transition-all transform hover:-translate-y-1">
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-sm text-[#59413f] hover:text-unair-red transition-colors font-medium">
        {label}
      </a>
    </li>
  );
}
