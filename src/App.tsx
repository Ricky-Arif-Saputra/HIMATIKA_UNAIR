import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import NewsSection from './components/NewsSection';
import VisiMisi from './components/VisiMisi';
import StrukturPengurus from './components/StrukturPengurus';
import Kegiatan from './components/Kegiatan';
import HimatikaStore from './components/HimatikaStore';
import Komunitas from './components/Komunitas';
import BankSoal from './components/BankSoal';
import InfoKarir from './components/InfoKarir';
import DatabasePKL from './components/DatabasePKL';
import Sop from './components/Sop';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import KritikSaran from './components/KritikSaran';

export type Page = 'home' | 'visi-misi' | 'struktur-pengurus' | 'kegiatan' | 'himatika-store' | 'komunitas' | 'bank-soal' | 'info-karir' | 'database-pkl' | 'sop' | 'news-detail' | 'kritik-saran';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeKomunitasId, setActiveKomunitasId] = useState<string>('sport');
  const [activeSopTab, setActiveSopTab] = useState<string>('sop-administrasi');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [selectedNewsId, setSelectedNewsId] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 10);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-surface-grey selection:bg-unair-red/10 selection:text-unair-red">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onSelectKomunitas={(id) => {
          setActiveKomunitasId(id);
          setCurrentPage('komunitas');
        }}
        onSelectSop={(tab) => {
          setActiveSopTab(tab);
          setCurrentPage('sop');
        }}
        currentLang={lang}
        onLanguageChange={setLang}
      />
      <main className="pb-16 md:pb-0">
        {currentPage === 'home' && (
          <>
            <Hero lang={lang} />
            <Services />
            <NewsSection onSelectNews={(id) => {
              setSelectedNewsId(id);
              setCurrentPage('news-detail');
            }} />
            <VisiMisi lang={lang} />
          </>
        )}
        {currentPage === 'visi-misi' && <VisiMisi lang={lang} />}
        {currentPage === 'struktur-pengurus' && <StrukturPengurus />}
        {currentPage === 'kegiatan' && <Kegiatan />}
        {currentPage === 'himatika-store' && <HimatikaStore />}
        {currentPage === 'komunitas' && (
          <Komunitas activeId={activeKomunitasId} onChangeActiveId={setActiveKomunitasId} />
        )}
        {currentPage === 'bank-soal' && <BankSoal />}
        {currentPage === 'info-karir' && <InfoKarir />}
        {currentPage === 'database-pkl' && <DatabasePKL />}
        {currentPage === 'sop' && (
          <Sop activeTab={activeSopTab} onChangeTab={setActiveSopTab} />
        )}
        {currentPage === 'news-detail' && (
          <NewsDetail newsId={selectedNewsId} onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'kritik-saran' && <KritikSaran />}
      </main>
      <Footer lang={lang} />
      <MobileNav />
    </div>
  );
}
