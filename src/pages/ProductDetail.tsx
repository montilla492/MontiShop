import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronDown, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants/products';
import { useState } from 'react';

interface ProductDetailProps {
  onAddToCart: (productId: string, size?: string) => void;
}

export default function ProductDetail({ onAddToCart }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return <div className="p-20 text-center">Producto no encontrado</div>;

  return (
    <main className="pb-40 pt-20 max-w-screen-xl mx-auto px-margin-page">
      <section className="md:grid md:grid-cols-2 md:gap-stack-lg">
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-lowest">
          <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
          <div className="absolute bottom-6 left-6 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-container"></div>
            <div className="w-2 h-2 rounded-full bg-surface-variant"></div>
            <div className="w-2 h-2 rounded-full bg-surface-variant"></div>
          </div>
          <div className="absolute top-6 right-6">
            <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-[#262626]">
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="px-margin-page py-stack-lg md:pt-12">
          <div className="mb-stack-md">
            <span className="font-label-bold text-label-sm text-primary-container uppercase tracking-widest">{product.category}</span>
            <h1 className="font-display-xl text-display-xl uppercase mt-2 leading-none">{product.name}</h1>
          </div>

          <div className="flex items-baseline gap-4 mb-stack-lg">
            <span className="text-headline-lg text-[#d4af37] font-mono">{product.price.toFixed(2)}€</span>
            {product.oldPrice && (
              <span className="font-label-bold text-label-sm text-zinc-600 line-through">{product.oldPrice.toFixed(2)}€</span>
            )}
          </div>

          <div className="mb-stack-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-bold text-label-bold uppercase">Seleccionar Talla (US)</span>
              <button className="font-label-bold text-label-sm text-primary-container underline">Guía de Tallas</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes?.map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border font-label-bold transition-all ${
                    selectedSize === size 
                      ? 'border-primary-container text-primary-container bg-primary-container/10' 
                      : 'border-[#262626] text-white hover:border-primary-container'
                  }`}
                >
                  {size}
                </button>
              )) || (
                <div className="col-span-4 text-zinc-500 text-sm italic">Talla Única</div>
              )}
            </div>
          </div>

          <div className="mb-section-gap">
            <button 
              onClick={() => {
                onAddToCart(product.id, selectedSize || undefined);
                navigate('/cart');
              }}
              className="w-full bg-[#d4af37] text-black py-5 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <ShoppingCart className="w-5 h-5" />
              Añadir a la Colección
            </button>
          </div>

          <div className="space-y-stack-lg">
            <div className="border-t border-[#262626] pt-stack-md">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-label-bold text-label-bold uppercase">Ingeniería del Producto</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              <div className="mt-4 font-body-md text-body-md text-zinc-400">
                {product.description}
              </div>
            </div>
            <div className="border-t border-[#262626] pt-stack-md">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-label-bold text-label-bold uppercase">Especificaciones Técnicas</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              {product.specs && (
                <ul className="mt-4 grid grid-cols-2 gap-y-4 font-body-md text-body-md text-zinc-400">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <li key={key}>
                      <span className="block font-label-bold text-white text-label-sm uppercase">{key}</span> {val}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Details - Sub-images */}
      {product.id === 'velocity-carbon-x1' && (
        <section className="mt-section-gap px-margin-page">
          <h2 className="font-headline-md text-headline-md uppercase mb-8">Detalle de Rendimiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDOjFFS8XTZhAvmYjfJ6nPiATn7agyVDn3iKYUCbNgAq0TdOccDV9HmpILbl2xKcltJww3VUjuEiXmK6sy8MYNKiMCRWAR4v-agOW_g4QAqpBw3iaTOa_lHq9m_kuvMRDi5ecP4zoCfTiKal_CVada_ORpfgGKW93OW-TK7hCQnrIE1pwR1FV3w9S9Rp8qbFkH0WoV2bTjdfRjOX4tXoYdcQmCg0Z-boYsoPWwvZPA5BkpD_33WI11-tsP1rfmN4tz5mk5Lq-Jik7OQ',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCy0gN-e4KvDVVEaW1PsLVzcZ22kO1KHazeTbneyxVyiF-VBtYjMtWZjWGbfTqzsglesJ_wt2oKdL3iuFej57ZCzt6GMfMzg6q2Ae3CEJhTeeu5HiONXy9Bg4E5OS6cB2ogW1eicJNqN0n-hfXtsrIODrGp1wqhAe3fTCmVY2fBsfMtb2vL089agcqaZPP4AhbWK-Aze_t_7qOQMLrRPPFLUVopP9fBq0qLL5czfxJwL9otaSvZhkJIFCGlYOX3Ow3RTRjfKnPP4xG4',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqzBxYQSQvTWUidxl-pBymioCVzKzrOmLYWv62UjyYC3xY7-8B7Wg9i7uNh86LvG40DkhYQXrI53HwbIxBRu-wvLK1nkbs4_PGYfiunKkcMjQpnFdUstxFMnJbOMybwjymPz7sTjMAP0Xqhnb6p79ev8psPq5GiRs0NTp1PFAaEPOkGHVMwGNWSUMAg7bJ-LxzQgDyN2Y3ikJK1fOqwXCwdwy6M3v1c-4SiySlK1cWjfDfGqYlS93Uk2DqV1jvb28EnXdGzC8J9Sx'
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={img} alt={`Detail ${i}`} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
