import { type ReactNode } from 'react';
import { Home, Menu, ShoppingBag, Mail } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-subtle z-50 flex justify-around items-center h-18 pb-safe shadow-2xl">
      <NavItem icon={<Home size={22} />} label="Beranda" active />
      <NavItem icon={<Menu size={22} />} label="Menu" />
      <NavItem icon={<ShoppingBag size={22} />} label="Store" />
      <NavItem icon={<Mail size={22} />} label="Kontak" />
    </nav>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <a href="#" className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-unair-red' : 'text-[#59413f]'}`}>
      <div className={`p-1 ${active ? 'bg-unair-red/5 rounded-lg' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}
