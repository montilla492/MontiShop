import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Truck, CreditCard as CardIcon, Apple as AppleIcon, Bitcoin, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
}

export default function Checkout({ items }: CheckoutProps) {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 bg-[#080808]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#d4af37] hover:opacity-80 transition-opacity active:scale-95 duration-100">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-[0.2em] text-[#d4af37] uppercase">APEX ELITE</h1>
        </div>
        <div className="flex items-center gap-4">
          <Lock className="text-[#d4af37] w-5 h-5" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-margin-page pt-32 pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          {/* Checkout Forms */}
          <div className="lg:col-span-7 flex flex-col gap-section-gap">
            {/* Shipping */}
            <section>
              <div className="flex items-center gap-stack-sm mb-stack-md">
                <Truck className="w-6 h-6 text-[#d4af37]" />
                <h2 className="text-2xl font-light italic text-white uppercase">Dirección de Envío</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-unit md:col-span-2">
                  <label className="text-[10px] tracking-[0.2em] text-[#8b8b8b] uppercase">NOMBRE COMPLETO</label>
                  <input className="bg-transparent border-b border-white/10 py-3 text-body-md text-white focus:border-[#d4af37] outline-none transition-colors" placeholder="Introduce tu nombre completo" type="text" />
                </div>
                <div className="flex flex-col gap-unit md:col-span-2">
                  <label className="text-[10px] tracking-[0.2em] text-[#8b8b8b] uppercase">DIRECCIÓN</label>
                  <input className="bg-transparent border-b border-white/10 py-3 text-body-md text-white focus:border-[#d4af37] outline-none transition-colors" placeholder="Calle Ejemplo 123" type="text" />
                </div>
                <div className="flex flex-col gap-unit">
                  <label className="text-[10px] tracking-[0.2em] text-[#8b8b8b] uppercase">CIUDAD</label>
                  <input className="bg-transparent border-b border-white/10 py-3 text-body-md text-white focus:border-[#d4af37] outline-none transition-colors" placeholder="Madrid" type="text" />
                </div>
                <div className="flex flex-col gap-unit">
                  <label className="text-[10px] tracking-[0.2em] text-[#8b8b8b] uppercase">CÓDIGO POSTAL</label>
                  <input className="bg-transparent border-b border-white/10 py-3 text-body-md text-white focus:border-[#d4af37] outline-none transition-colors" placeholder="28001" type="text" />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <div className="flex items-center gap-stack-sm mb-stack-md">
                <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
                <h2 className="text-2xl font-light italic text-white uppercase">Método de Pago</h2>
              </div>
              <div className="grid grid-cols-1 gap-stack-sm">
                <div className="group flex items-center justify-between p-stack-md bg-[#0c0c0c] border border-[#d4af37] rounded-xl cursor-pointer">
                  <div className="flex items-center gap-stack-md">
                    <AppleIcon className="w-5 h-5 text-white" />
                    <span className="text-sm tracking-[0.1em] text-white uppercase">Apple Pay</span>
                  </div>
                  <div className="w-4 h-4 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-stack-md bg-[#0c0c0c] border border-white/5 rounded-xl cursor-pointer hover:border-[#d4af37]/40 transition-all">
                  <div className="flex items-center gap-stack-md">
                    <CardIcon className="w-5 h-5 text-[#8b8b8b]" />
                    <div className="flex flex-col">
                      <span className="text-sm tracking-[0.1em] text-white uppercase">Tarjeta de Crédito</span>
                      <span className="text-[10px] tracking-[0.1em] text-[#8b8b8b] uppercase">Visa terminada en 4242</span>
                    </div>
                  </div>
                  <div className="w-4 h-4 border border-white/10 rounded-full"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Summary */}
          <div className="lg:col-span-5">
            <div className="tonal-layer p-stack-lg rounded-2xl border border-white/5 sticky top-24">
              <h2 className="text-2xl font-light italic text-white mb-8">Resumen</h2>
              <div className="flex flex-col gap-stack-md pb-stack-lg border-b border-white/10">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-stack-md">
                    <div className="w-20 h-24 bg-[#111111] border border-white/5 overflow-hidden rounded-xl">
                      <img className="w-full h-full object-cover grayscale brightness-75" src={item.image} alt={item.name} />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <p className="text-xs font-bold tracking-widest text-white uppercase">{item.name}</p>
                        <p className="text-[9px] tracking-[0.2em] text-[#8b8b8b] uppercase mt-1">TALLA: {item.selectedSize || 'TU'}</p>
                      </div>
                      <p className="text-[#d4af37] font-mono text-sm tracking-tighter">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-stack-sm py-stack-lg">
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-[#8b8b8b]">Subtotal</span>
                  <span className="text-white font-mono">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-[#8b8b8b]">Envío</span>
                  <span className="text-white font-mono">Gratis</span>
                </div>
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-[#8b8b8b]">Impuestos</span>
                  <span className="text-white font-mono">{tax.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center mt-stack-md pt-stack-md border-t border-white/10">
                  <span className="text-3xl italic text-white leading-none">Total</span>
                  <span className="text-3xl text-[#d4af37] font-mono leading-none">{total.toFixed(2)}€</span>
                </div>
              </div>
              <button className="w-full py-5 bg-[#d4af37] text-black font-bold uppercase tracking-[0.3em] rounded-sm transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                Realizar Pedido
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="md:hidden fixed bottom-6 left-0 w-full p-gutter bg-[#050505]/95 backdrop-blur-lg border-t border-white/10 z-50">
        <button className="w-full py-5 bg-[#d4af37] text-black font-bold uppercase tracking-[0.2em] rounded-sm active:scale-95 transition-transform shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
          Realizar Pedido • {total.toFixed(2)}€
        </button>
      </div>
    </div>
  );
}
