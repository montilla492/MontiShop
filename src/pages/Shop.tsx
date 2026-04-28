import { PRODUCTS } from '../constants/products';
import { Link } from 'react-router-dom';
import { Bolt } from 'lucide-react';

export default function Shop() {
  return (
    <main className="px-margin-page pt-32 pb-40">
      {/* Hero Header */}
      <section className="mb-section-gap">
        <h1 className="text-display-xl text-white uppercase mb-stack-sm font-light italic">Recién Llegados</h1>
        <p className="text-[#8b8b8b] font-body-md max-w-md uppercase tracking-[0.1em] text-xs">Diseñado para el atleta de élite. Ropa de alto rendimiento que redefine los límites de la velocidad y la fuerza.</p>
      </section>

      {/* Category Filters */}
      <section className="flex gap-stack-sm mb-section-gap overflow-x-auto pb-2 hide-scrollbar">
        {['Todos', 'Calzado', 'Ropa', 'Relojes'].map((cat, idx) => (
          <button 
            key={cat}
            className={`px-6 py-2 ${idx === 0 ? 'bg-[#d4af37] text-black' : 'bg-[#0c0c0c] text-[#8b8b8b]'} font-bold rounded-full border ${idx === 0 ? 'border-[#d4af37]' : 'border-white/5 hover:border-[#d4af37]/40'} transition-all text-xs uppercase tracking-widest whitespace-nowrap`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-gutter md:gap-stack-lg">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group flex flex-col gap-unit">
            <Link to={`/product/${product.id}`}>
              <div className="aspect-[3/4] bg-[#0c0c0c] overflow-hidden relative rounded-2xl border border-white/5">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100" src={product.image} alt={product.name} />
                {product.isNew && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#d4af37] text-black px-2 py-1 text-[9px] font-black uppercase tracking-widest">Elite</span>
                  </div>
                )}
              </div>
              <div className="mt-stack-sm">
                <p className="text-[#8b8b8b] text-[9px] uppercase tracking-[0.2em] truncate">{product.category.split(' • ')[0]}</p>
                <h3 className="font-medium text-[11px] md:text-sm text-white truncate uppercase tracking-widest mt-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2 gap-2">
                  <p className="text-[#d4af37] font-mono text-xs md:text-sm tracking-tighter shrink-0">{product.price.toFixed(2)}€</p>
                  {product.isHot && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0"></div>}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="mt-section-gap grid grid-cols-1 md:grid-cols-3 gap-stack-md">
        <div className="md:col-span-2 bg-[#0c0c0c] p-10 border border-white/5 rounded-2xl flex flex-col justify-center">
          <h2 className="text-3xl italic text-[#d4af37] mb-4">Únete al Círculo Interno</h2>
          <p className="text-[#8b8b8b] text-[11px] tracking-[0.2em] uppercase mb-8 max-w-sm">Acceso anticipado a lanzamientos limitados y perfiles exclusivos de datos de atletas.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              className="bg-[#050505] border border-white/10 text-white focus:border-[#d4af37] uppercase text-[10px] tracking-widest px-6 py-4 flex-grow outline-none rounded-sm transition-all" 
              placeholder="CORREO ELECTRÓNICO" 
              type="email" 
            />
            <button className="bg-[#d4af37] text-black font-bold uppercase tracking-widest px-10 py-4 hover:brightness-110 transition-all text-xs rounded-sm">Acceso Seguro</button>
          </div>
        </div>
        <div className="bg-[#d4af37] p-10 rounded-2xl flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(212,175,55,0.1)]">
          <Bolt className="text-black w-10 h-10" />
          <div>
            <h3 className="text-black font-bold text-2xl uppercase tracking-tighter italic">Próximo Drop</h3>
            <p className="text-black font-mono text-lg mt-2">12:00:00:00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
