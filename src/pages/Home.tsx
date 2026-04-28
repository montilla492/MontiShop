import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { PRODUCTS } from '../constants/products';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="pb-40 pt-12">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <img 
          className="w-full h-full object-cover grayscale brightness-75" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnHVA8sQNfhBdQ7Ct-tjv9RPAQbjI8sf3HJledCOpsIe7dbsAFGdSgN_7hx7Z8IrVF5EPfN2uchDYUyhZyY3Az6YsTNlMxFK5g_QYGzIHVyK5p5SrGFsdYU8WentJ-CLLZUCQ1UevH6HLL0PUikR9TBDiI1ih5_yVnfsCwj0kD7eGFbuoKVa0LMbR6Ss8u40n0eNjGsUiH1QPRl54bA_A4tCr0coXand2uFHYHYovnYfs-1TV62aEjRqUOsGvN3HNgSZn0Vv2nI3Bn" 
          alt="Athlete sprinting" 
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-margin-page pb-20 max-w-screen-xl mx-auto w-full">
          <span className="text-[#d4af37] font-semibold text-[10px] md:text-xs tracking-[0.3em] mb-4 uppercase">COLECCIÓN PRIMAVERA 2024</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl max-w-4xl mb-8 md:mb-12 leading-[0.9] uppercase font-light italic">DOMINA EL CIRCUITO</h1>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link 
              to="/shop" 
              className="bg-[#d4af37] text-black px-8 py-4 font-semibold uppercase tracking-[0.2em] hover:opacity-90 active:scale-95 transition-all text-center text-[10px] md:text-xs"
            >
              Nueva Temporada
            </Link>
            <Link 
              to="/shop" 
              className="border border-white/20 text-white px-8 py-4 font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black active:scale-95 transition-all text-center text-[10px] md:text-xs"
            >
              Explorar
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-margin-page mt-section-gap max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-stack-md">
          <h2 className="font-headline-md text-headline-md uppercase italic tracking-tighter">Categorías</h2>
          <span className="text-zinc-500 font-label-sm text-label-sm">VER TODO</span>
        </div>
        <div className="grid grid-cols-3 gap-stack-md">
          {['Calzado', 'Ropa', 'Relojes'].map((cat) => (
            <div key={cat} className="bg-surface-container-low border border-[#262626] p-stack-md flex flex-col items-center gap-stack-sm hover:border-[#d4af37] transition-colors cursor-pointer group">
              <span className="font-label-bold text-label-sm uppercase tracking-widest group-hover:text-[#d4af37] transition-colors">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-margin-page mt-section-gap max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-stack-md">
          <h2 className="font-headline-md text-headline-md uppercase italic tracking-tighter">Productos Destacados</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-[#262626] hover:bg-white/10">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#262626] hover:bg-white/10">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-[#111111] mb-stack-md overflow-hidden border border-white/5 rounded-2xl">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100" 
                    src={product.image} 
                    alt={product.name} 
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-black font-bold text-[10px] px-3 py-1 tracking-widest uppercase">Elite</div>
                  )}
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <h3 className="font-medium text-[11px] md:text-sm tracking-widest uppercase text-white/90 truncate">{product.name}</h3>
                    <p className="text-[9px] text-[#8b8b8b] uppercase tracking-[0.2em] mt-1 truncate">{product.category}</p>
                  </div>
                  <span className="text-sm md:text-body-lg text-[#d4af37] font-mono tracking-tighter shrink-0">{product.price}€</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Content */}
      <section className="px-margin-page mt-section-gap max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="relative h-64 md:h-96 flex flex-col justify-end p-8 overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAytkS05_guhDxzvYY-qszbv45ZadjjBsuBcewXQgep-B3q_2tLybZ9bYZ7tfjL0LZCoDk8MMm75RQ5yaI8T2mhCxngObnk-vpQrxeVMQfdrYSl_ZgsCq3P_UQK8DPOQRERfxzTEdOmlNJf9-qcLBzK-IAU8zA9Syje3ctn1Wy5pxoAqP3Zsb0gTYzNherioPiv46Vm7VpL2YnKbUz6sVAk4OWAKPW3oGdXJJKNv6U-NXIi7sgAHi-2Y0PDrE9t4nc7cnqSQd0DOz9m" 
              alt="The Lab" 
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10">
              <h4 className="font-display-xl text-headline-lg uppercase italic leading-none mb-2">El Lab</h4>
              <p className="text-zinc-300 font-label-sm tracking-widest uppercase mb-4">Detrás del proceso de diseño</p>
              <button className="text-white border-b border-white pb-1 font-label-bold tracking-widest uppercase text-[10px] hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">Leer Historia</button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 flex flex-col justify-end p-8 overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_XgGSz2ToVN1prX1LUitQTpGWB3KAilvIMVuKNm_CLPMZY1B4fgFR2HHWu0j12mHSAkSh3heqyYHFrcfI0wZMPrw6xlkbb4od7T86tL4vmrJWXFRODav8id3D6jx80ib7WgpoWU1SXIXCi_ts02CHdtQI1Xwxfg3Nsm-htji1GUvU9ZJJf9moQukNsGCOIEMVHFQJDvP0qrglkyWc4krEs-Uz27M86x3D6pkCUFhhIjMlB34xlQmZJzmWq4Psn-_OavbXxMC3GxXa" 
              alt="Membership" 
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10">
              <h4 className="font-display-xl text-headline-lg uppercase italic leading-none mb-2">Membresía</h4>
              <p className="text-zinc-300 font-label-sm tracking-widest uppercase mb-4">Únete a la red élite</p>
              <button className="text-white border-b border-white pb-1 font-label-bold tracking-widest uppercase text-[10px] hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">Aplicar Ahora</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
