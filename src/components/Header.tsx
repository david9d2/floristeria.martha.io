import { useState } from "react";
import type { Page } from "../App";

type Props = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
};

const navLinks: { label: string; page: Page }[] = [
  { label: "Inicio", page: "inicio" },
  { label: "Catálogo", page: "catalogo" },
  { label: "Nosotros", page: "nosotros" },
  { label: "Contacto", page: "contacto" },
];

function Header({ currentPage, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  const go = (page: Page) => {
    setOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#5f7d6b] text-white">
        <div className="max-w-6xl mx-auto px-4 h-10 flex items-center justify-between text-xs sm:text-sm">
          <p className="hidden sm:block">
            Tel: +504 3301-9083 · Lunes – Sábado 8:00 a.m. – 6:00 p.m.
          </p>
          <p className="sm:hidden">Tel: +504 3301-9083</p>
          <p className="hidden sm:block">Envíos a todo Honduras</p>
        </div>
      </div>
      <div className="bg-[#fdfbfa] border-b border-[#efebe9]">
        <div className="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go("inicio");
            }}
            className="flex flex-col leading-none font-serif text-[#2e1e1c]"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#5f7d6b]">
              Floristería
            </span>
            <span className="text-2xl sm:text-3xl">Martha</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.page}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  go(l.page);
                }}
                className={`text-sm font-medium pb-1 border-b-2 ${
                  currentPage === l.page
                    ? "text-[#5f7d6b] border-[#5f7d6b]"
                    : "text-[#6b5a58] border-transparent hover:text-[#2e1e1c]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span className="block h-0.5 w-6 bg-[#2e1e1c]" />
            <span className="block h-0.5 w-6 bg-[#2e1e1c]" />
            <span className="block h-0.5 w-6 bg-[#2e1e1c]" />
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-[#efebe9] flex flex-col px-6 pb-2">
            {navLinks.map((l) => (
              <a
                key={l.page}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  go(l.page);
                }}
                className={`py-3 text-sm font-medium border-b border-[#efebe9] last:border-0 ${
                  currentPage === l.page
                    ? "text-[#5f7d6b]"
                    : "text-[#6b5a58]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
