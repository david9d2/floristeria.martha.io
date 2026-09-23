import type { Page } from "../App";
import { categories } from "../data/catalog";

type Props = {
  onNavigate: (page: Page) => void;
  onCategorySelect: (category: string) => void;
};

const social = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/50433805133" },
];

function Footer({ onNavigate, onCategorySelect }: Props) {
  return (
    <footer>
      <div className="bg-[#5f7d6b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl">
              Suscríbete a nuestro boletín
            </h3>
            <p className="text-white/80 text-sm mt-2">
              Recibe ofertas exclusivas y novedades de la semana.
            </p>
          </div>
          <form
            className="flex w-full sm:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 sm:w-72 bg-white text-[#2e1e1c] px-4 py-2.5 rounded-sm text-sm placeholder-[#6b5a58] outline-none"
            />
            <button className="bg-[#2e1e1c] text-white px-5 py-2.5 rounded-sm text-sm font-semibold">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#2e1e1c] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="font-serif text-2xl mb-3">Martha</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Flores frescas importadas entregadas con amor en toda Honduras
              desde 2010.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#e6b0b8]">
              Navegación
            </h4>
            <ul className="text-sm text-white/80 space-y-2.5">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("inicio");
                  }}
                  className="hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("catalogo");
                  }}
                  className="hover:text-white"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("nosotros");
                  }}
                  className="hover:text-white"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("contacto");
                  }}
                  className="hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#e6b0b8]">
              Catálogo
            </h4>
            <ul className="text-sm text-white/80 space-y-2.5">
              {categories.map((c) => (
                <li key={c.name}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onCategorySelect(c.name);
                    }}
                    className="hover:text-white"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#e6b0b8]">
              Contacto
            </h4>
            <ul className="text-sm text-white/80 space-y-2.5">
              <li>Tel: +504 3301-9083</li>
              <li>WhatsApp: +504 3301-9083</li>
              <li>Tocoa, Colón Honduras</li>
              <li>Lun–Sab 8:00 a.m. – 6:00 p.m.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1d1513] text-white/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Floristería Martha. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
