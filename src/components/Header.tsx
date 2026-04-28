import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="bg-[#080808]/80 backdrop-blur-xl text-white border-b border-white/5 flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="hover:opacity-80 transition-opacity active:scale-95 duration-100">
          <Menu className="w-6 h-6 text-[#d4af37]" />
        </button>
        <Link to="/" className="text-xl font-bold tracking-[0.2em] text-[#d4af37] uppercase">
          APEX ELITE
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="hover:opacity-80 transition-opacity active:scale-95 duration-100 relative">
          <ShoppingBag className="w-6 h-6 text-[#d4af37]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#d4af37] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
