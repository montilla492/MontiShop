import { Home, Grid, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-[#080808]/90 backdrop-blur-lg border-t border-white/5 md:hidden">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-[#d4af37] scale-110' : 'text-zinc-500 hover:text-white'}`}
      >
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Inicio</span>
      </NavLink>
      <NavLink 
        to="/shop" 
        className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-[#d4af37] scale-110' : 'text-zinc-500 hover:text-white'}`}
      >
        <Grid className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Tienda</span>
      </NavLink>
      <NavLink 
        to="/cart" 
        className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-[#d4af37] scale-110' : 'text-zinc-500 hover:text-white'}`}
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Carrito</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-[#d4af37] scale-110' : 'text-zinc-500 hover:text-white'}`}
      >
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Perfil</span>
      </NavLink>
    </nav>
  );
}
