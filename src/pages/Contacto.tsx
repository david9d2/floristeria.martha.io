const mapImg =
  "https://images.unsplash.com/photo-1615488913817-095134dfeb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800";

const rows = [
  {
    label: "Dirección",
    value: "Tocoa Colón, Barrio el Centro en la CA-13, en Floristería Martha",
    cls: "bg-[#eff2f0]",
    iconCls: "text-[#5f7d6b]",
  },
  {
    label: "Horario de Atención",
    value: "Lunes a Sábado: 8:00 AM – 6:00 PM,
    cls: "bg-[#f8ebef]",
    iconCls: "text-[#2e1e1c]",
  },
  {
    label: "Facebook",
    value: "/floristeriaMartha",
    cls: "bg-[#ece9f0]",
    iconCls: "text-[#a195b8]",
  },
];

export default function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2e1e1c]">
          Contacto
        </h1>
        <p className="text-[#6b5a58] text-sm sm:text-base mt-2">
          Estamos encantados de atenderte y hacer realidad tus ideas florales.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="rounded-2xl overflow-hidden aspect-[16/10] relative">
          <img
            alt="Ubicación de la floristería"
            className="absolute inset-0 size-full object-cover"
            src={mapImg}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-[#efebe9] p-6 space-y-5">
            {rows.map((r) => (
              <div key={r.label}>
                <div className="flex gap-3">
                  <span
                    className={`${r.cls} ${r.iconCls} size-9 rounded-xl flex items-center justify-center shrink-0`}
                    aria-hidden
                  >
                    <svg className="size-4" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 4.5V8L10 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-[#2e1e1c] text-xs uppercase">
                      {r.label}
                    </p>
                    <p className="text-[#6b5a58] text-sm mt-0.5">{r.value}</p>
                  </div>
                </div>
                {r.label !== "Facebook" && (
                  <div className="h-px bg-[#EFEBE9] mt-5" />
                )}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/50433019083"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25d366] text-white font-bold text-base h-14 rounded-full flex items-center justify-center gap-2.5 hover:bg-[#1fb254] transition-colors"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
          <p className="text-[#6b5a58] text-xs text-center">
            Consulta inmediata sobre arreglos personalizados y envíos.
          </p>
        </div>
      </div>
    </div>
  );
}
