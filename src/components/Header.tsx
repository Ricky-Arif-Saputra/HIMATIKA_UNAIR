import { Search, Menu, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import type { Page } from '@/src/App';
import { translations } from '@/src/lib/translations';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onSelectKomunitas: (id: string) => void;
  onSelectSop: (tab: string) => void;
  currentLang: 'id' | 'en';
  onLanguageChange: (lang: 'id' | 'en') => void;
}

export default function Header({ onNavigate, currentPage, onSelectKomunitas, onSelectSop, currentLang, onLanguageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const t = translations[currentLang].nav;

  return (
    <header className="w-full z-50 sticky top-0 shadow-md">
      <div className="bg-unair-red text-white py-2 px-4 md:px-12 border-b border-white/10 flex items-center justify-between">
        {/* Cabinet placeholder on the left */}
        <div className="flex items-center space-x-2">
          <button className="p-1 text-white hover:text-unair-gold transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </button>
        </div>
        {/* Search expands to fill remaining width */}
        <div className="relative flex-1 max-w-[200px] md:max-w-[180px] ml-2 flex items-center bg-[#f0f1f2] rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent text-[#191c1d] text-[11px] py-1.5 pl-3 pr-8 border-none focus:ring-0 outline-none"
          />
          <button className="absolute right-0 px-2 text-[#191c1d] hover:text-unair-red transition-colors">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* Main Brand Section */}
      <div className="bg-white py-4 px-4 md:px-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-nowrap">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div 
              className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onNavigate('home')}
            >
              <img 
                src="/logo_unair.png" 
                alt="UNAIR Logo" 
                className="h-8 md:h-16 w-auto flex-shrink-0"
              />
              <div className="flex items-center divide-x-2 divide-unair-red/30 h-8 md:h-12">
                <div className="pr-1.5 md:pr-4">
                  <h2 className="font-display text-[7px] md:text-[18px] font-bold leading-tight text-unair-red tracking-wider uppercase">
                    UNIVERSITAS<br />AIRLANGGA
                  </h2>
                </div>
                <div className="pl-1.5 md:pl-4">
                  <h3 className="font-display text-[7px] md:text-[18px] font-medium leading-tight text-unair-red uppercase">
                    FAKULTAS<br />SAINS DAN TEKNOLOGI
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end border-l-2 border-unair-red/20 pl-2 md:pl-6 flex-shrink-0">
            <span className="font-display text-[9px] md:text-xl font-extrabold text-unair-red tracking-tight leading-none">SATYA ADHIKARTA</span>
            <span className="text-[5px] md:text-[9px] font-bold text-[#59413f] uppercase tracking-[0.05em] md:tracking-[0.2em] mt-0.5">Himpunan Mahasiswa Matematika</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-unair-red text-white py-2 md:py-3 px-4 md:px-12 overflow-x-auto hide-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full min-w-max gap-6">
          <div className="flex gap-4 md:gap-6 text-[11px] md:text-[13px] font-bold uppercase tracking-wide">
            <NavItem label={t.pengurus} hasDropdown dropdownItems={[t.visiMisi, t.struktur, t.kegiatan]} onItemClick={(item) => {
              if (item === t.visiMisi) onNavigate('visi-misi');
              if (item === t.struktur) onNavigate('struktur-pengurus');
              if (item === t.kegiatan) onNavigate('kegiatan');
            }} />
            <NavItem label={t.store} onClick={() => onNavigate('himatika-store')} />
            <NavItem label={t.ksatria} />
            <NavItem
              label={t.komunitas}
              hasDropdown
              dropdownItems={['SPORT', 'E-SPORT', 'TARI', 'MUSIK', 'KEILMIAHAN']}
              onItemClick={(item) => {
                onSelectKomunitas(item.toLowerCase());
              }}
            />
            <NavItem
              label={t.akademik}
              hasDropdown
              dropdownItems={[t.bankSoal, t.infoKarir, t.pkl]}
              onItemClick={(item) => {
                if (item === t.bankSoal) onNavigate('bank-soal');
                if (item === t.infoKarir) onNavigate('info-karir');
                if (item === t.pkl) onNavigate('database-pkl');
              }}
            />
            <NavItem
              label={t.sop}
              hasDropdown
              dropdownItems={[t.sopAdm, t.sopPub, t.sopMed]}
              onItemClick={(item) => {
                if (item === t.sopAdm) onSelectSop('sop-administrasi');
                if (item === t.sopPub) onSelectSop('sop-publikasi');
                if (item === t.sopMed) onSelectSop('sop-media-partner');
              }}
            />
            <NavItem label={t.kritikSaran} onClick={() => onNavigate('kritik-saran')} />
          </div>
          {/* Language dropdown remains on the right */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 hover:text-unair-gold transition-colors focus:outline-none py-1"
            >
              <img
                src={currentLang === 'id' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'}
                alt={currentLang === 'id' ? 'ID' : 'EN'}
                className="h-3.5 w-5 object-cover rounded-sm shadow-sm"
              />
              <span className="text-[12px] font-bold uppercase">{currentLang}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <>
                {/* Backdrop overlay to close when clicking outside */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[150px] border border-border-subtle z-50">
                  <button
                    onClick={() => {
                      onLanguageChange('id');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-left text-[13px] font-medium transition-colors hover:bg-surface-grey ${currentLang === 'id' ? 'text-unair-red bg-surface-grey/50' : 'text-[#191c1d]'}`}
                  >
                    <img src="https://flagcdn.com/w40/id.png" alt="ID Flag" className="h-3 w-4.5 object-cover rounded-sm shadow-sm" />
                    <span>Indonesia</span>
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-left text-[13px] font-medium transition-colors hover:bg-surface-grey ${currentLang === 'en' ? 'text-unair-red bg-surface-grey/50' : 'text-[#191c1d]'}`}
                  >
                    <img src="https://flagcdn.com/w40/gb.png" alt="EN Flag" className="h-3 w-4.5 object-cover rounded-sm shadow-sm" />
                    <span>English</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[300px] bg-white z-[101] shadow-2xl overflow-y-auto"
            >
              <div className="bg-unair-red p-6 flex justify-between items-center text-white">
                <h2 className="font-bold uppercase tracking-widest">MENU HIMATIKA</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <Check size={24} className="rotate-45" /> {/* Close icon workaround if X not imported */}
                </button>
              </div>
              {/* Add mobile navigation items here */}
              <div className="p-6 space-y-4">
                <p className="text-xs font-bold text-[#59413f] uppercase mb-4">Navigation</p>
                <div className="flex flex-col gap-4 font-semibold text-[#191c1d]">
                  <a href="#">Beranda</a>
                  <a href="#">Pengurus</a>
                  <a href="#">HIMATIKA Store</a>
                  <a href="#">Akademik</a>
                  <a href="#">SOP</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('kritik-saran'); setIsMobileMenuOpen(false); }}>Kritik & Saran</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ label, hasDropdown = false, dropdownItems, onItemClick, onClick, href }: { label: string; hasDropdown?: boolean; dropdownItems?: string[]; onItemClick?: (item: string) => void; onClick?: () => void; href?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer py-1" 
      onClick={(e) => { 
        if (!hasDropdown) {
          onClick?.();
        } else {
          setIsOpen(!isOpen);
        }
      }}
      onMouseEnter={() => hasDropdown && setIsOpen(true)}
      onMouseLeave={() => hasDropdown && setIsOpen(false)}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-unair-gold transition-colors flex items-center gap-1">
          {label} {hasDropdown && <ChevronDown size={14} />}
        </a>
      ) : (
        <a className="hover:text-unair-gold transition-colors flex items-center gap-1">
          {label} {hasDropdown && <ChevronDown size={14} />}
        </a>
      )}
      {hasDropdown && (
        <div className={cn(
          "absolute top-full left-0 pt-2 transition-all z-50",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        )}>
          <div className="bg-white rounded-sm shadow-xl py-2 min-w-[220px] border border-border-subtle">
            {(dropdownItems ?? ['Link 1', 'Link 2']).map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => { 
                  e.preventDefault(); 
                  e.stopPropagation();
                  onItemClick?.(item); 
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-[#191c1d] hover:bg-surface-grey hover:text-unair-red text-[13px] font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
