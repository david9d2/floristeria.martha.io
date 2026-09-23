import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Categoria from "./pages/Categoria";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import type { ProductItem } from "./data/catalog";

export type Page = "inicio" | "catalogo" | "nosotros" | "contacto";

export type CartLine = {
  key: string;
  name: string;
  img: string;
  price: string;
  priceNum: number;
  qty: number;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cartLines, setCartLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = (page: Page) => {
    setActiveCategory(null);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const openCategory = (category: string) => {
    setCurrentPage("catalogo");
    setActiveCategory(category);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setActiveCategory(null);
    setCurrentPage("catalogo");
    window.scrollTo(0, 0);
  };

  const addToCart = (item: ProductItem, category: string) => {
    const key = `${category}::${item.name}`;
    setCartLines((prev) => {
      const idx = prev.findIndex((l) => l.key === key);
      if (idx >= 0) {
        return prev.map((l, i) =>
          i === idx ? { ...l, qty: l.qty + 1 } : l,
        );
      }
      return [
        ...prev,
        {
          key,
          name: item.name,
          img: item.img,
          price: item.price,
          priceNum: item.priceNum,
          qty: 1,
        },
      ];
    });
    setCartOpen(true);
  };

  const incItem = (key: string) =>
    setCartLines((prev) =>
      prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l)),
    );

  const decItem = (key: string) =>
    setCartLines((prev) =>
      prev.map((l) => (l.key === key ? { ...l, qty: Math.max(1, l.qty - 1) } : l)),
    );

  const removeItem = (key: string) =>
    setCartLines((prev) => prev.filter((l) => l.key !== key));

  const clearCart = () => setCartLines([]);

  const cartCount = cartLines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbfa] text-[#2e1e1c]">
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === "inicio" && (
          <Inicio onNavigate={navigate} openCategory={openCategory} />
        )}
        {currentPage === "catalogo" &&
          (activeCategory ? (
            <Categoria
              category={activeCategory}
              onBack={goBack}
              onAddToCart={(item) => addToCart(item, activeCategory)}
            />
          ) : (
            <Catalogo openCategory={openCategory} />
          ))}
        {currentPage === "nosotros" && <Nosotros />}
        {currentPage === "contacto" && <Contacto />}
      </main>
      <Footer
        onNavigate={navigate}
        onCategorySelect={(c) => openCategory(c)}
      />
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#2e1e1c] text-white rounded-full size-14 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Abrir carrito"
      >
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path d="M16 6h-2a3 3 0 0 0-6 0H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2Zm-6-1a1 1 0 0 1 2 0h-2Zm6 2v11H6V7h12Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#e6b0b8] text-[#2e1e1c] text-xs font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
      <CartDrawer
        open={cartOpen}
        lines={cartLines}
        onClose={() => setCartOpen(false)}
        onInc={incItem}
        onDec={decItem}
        onRemove={removeItem}
        onClear={clearCart}
      />
      <a
        href="https://wa.me/50433805133"
        target="_blank"
        rel="noreferrer"
        aria-label="Chatea con nosotros por WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] text-white rounded-full size-14 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}