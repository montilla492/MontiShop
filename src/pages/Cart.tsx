import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingCart, Droplet, Watch, TrendingUp } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
}

export default function Cart({ items, onUpdateQuantity, onRemove }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-margin-page pt-32 pb-44">
      {/* Cart Header */}
      <div className="mb-8 md:mb-stack-lg">
        <h1 className="font-display-xl text-display-xl text-primary mb-2 uppercase">MI CARRITO</h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          {items.length} ARTÍCULOS SELECCIONADOS PARA EL RENDIMIENTO
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-[#262626]">
          <p className="text-zinc-500 uppercase tracking-widest mb-6">Tu equipo está vacío</p>
          <Link to="/shop" className="bg-primary-container text-on-primary-container px-8 py-3 font-label-bold uppercase">Empezar a Comprar</Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="group relative bg-[#0c0c0c] border border-white/5 p-3 md:p-4 flex gap-3 md:gap-4 overflow-hidden transition-all hover:bg-white/[0.02] rounded-xl">
              <div className="w-20 h-28 md:w-24 md:h-32 flex-shrink-0 bg-[#080808] overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-transform duration-500 group-hover:scale-110" src={item.image} alt={item.name} />
              </div>
              <div className="flex flex-col justify-between flex-grow py-0.5 min-w-0">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[11px] md:text-sm font-bold text-white leading-tight uppercase truncate">{item.name}</h3>
                    <button onClick={() => onRemove(item.id)} className="text-zinc-500 hover:text-white transition-colors shrink-0">
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-[#8b8b8b] uppercase tracking-widest mt-1 truncate">
                    {item.selectedSize ? `Talla: ${item.selectedSize} | ` : ''}{item.category}
                  </p>
                </div>
                <div className="flex justify-between items-end gap-2 mt-2">
                  <div className="flex items-center border border-white/10 bg-black rounded-sm h-8">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-2 h-full hover:bg-white/5 transition-colors border-r border-white/10">
                      <Minus className="w-3 h-3 text-[#d4af37]" />
                    </button>
                    <span className="px-3 text-[10px] md:text-xs font-bold text-white font-mono">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-2 h-full hover:bg-white/5 transition-colors border-l border-white/10">
                      <Plus className="w-3 h-3 text-[#d4af37]" />
                    </button>
                  </div>
                  <span className="text-sm md:text-lg text-[#d4af37] font-mono tracking-tighter shrink-0 font-bold">{(item.price * item.quantity).toFixed(2)}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recommended bento */}
      <div className="mt-section-gap">
        <h2 className="font-label-bold text-label-bold text-primary uppercase tracking-[0.3em] mb-stack-md">COMPLETA EL KIT</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 bg-surface-container-low border border-[#262626] p-4 flex flex-col justify-between min-h-[200px]">
            <span className="font-label-sm text-label-sm text-[#d4af37] uppercase font-bold">Recomendado</span>
            <div className="flex justify-between items-end">
              <div className="max-w-[140px]">
                <h4 className="font-headline-md text-headline-md text-primary leading-none mb-2">CALCETINES TÉRMICOS</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">18.00€</p>
              </div>
              <button className="bg-[#d4af37] text-black p-2 rounded-full hover:scale-110 transition-transform">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-surface-container-low border border-[#262626] flex items-center justify-center relative overflow-hidden group">
            <div className="relative z-10 p-4 text-center">
              <Droplet className="w-6 h-6 text-[#d4af37] mx-auto" />
              <p className="font-label-bold text-primary text-[10px] mt-1">HIDRATACIÓN ÉLITE</p>
            </div>
          </div>
          <div className="bg-surface-container-low border border-[#262626] flex items-center justify-center relative overflow-hidden group">
            <div className="relative z-10 p-4 text-center">
              <Watch className="w-6 h-6 text-[#d4af37] mx-auto" />
              <p className="font-label-bold text-primary text-[10px] mt-1">TRACKER DE RENDIMIENTO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {items.length > 0 && (
        <div className="mt-section-gap border-t border-white/5 pt-stack-lg">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm tracking-[0.2em]">
              <span className="text-[#8b8b8b] uppercase">SUBTOTAL</span>
              <span className="text-white font-mono">{subtotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center text-sm tracking-[0.2em]">
              <span className="text-[#8b8b8b] uppercase">ENVÍO</span>
              <span className="text-white font-mono">{shipping.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center pt-6 mt-2 border-t border-white/10">
              <span className="text-3xl italic text-white">Total</span>
              <span className="text-3xl text-[#d4af37] font-mono">{total.toFixed(2)}€</span>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#050505]/95 backdrop-blur-2xl border-t border-white/5 px-6 py-8 pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/checkout" 
            className="w-full bg-[#d4af37] text-black font-bold py-6 px-10 uppercase tracking-[0.3em] flex items-center justify-center gap-4 active:scale-[0.98] transition-all group rounded-sm shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]"
          >
            PAGO SEGURO
            <TrendingUp className="w-5 h-5 rotate-90 transition-transform group-hover:translate-x-2" />
          </Link>
          <p className="text-center mt-5 text-[9px] uppercase tracking-[0.25em] text-[#8b8b8b]">Cifrado SSL de 256 bits de grado bóveda</p>
        </div>
      </div>
    </main>
  );
}
