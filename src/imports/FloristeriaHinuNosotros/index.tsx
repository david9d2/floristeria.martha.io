import svgPaths from "./svg-n9o7ojjqwr";
import imgStoreImage from "./eb111d3d0a49fe9f3648e541948ba7b65c962fd3.png";

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p2bb6eb80} fill="#2E1E1C" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p646c5c0} fill="#2E1E1C" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 28 20" width="28">
        <g id="ios-battery-full">
          <path d={svgPaths.p66c9640} fill="#2E1E1C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="status-icons">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-name="status-bar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[14px] whitespace-nowrap">9:41</p>
      <StatusIcons />
    </div>
  );
}

function AboutHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full" data-name="about-header">
      <p className="font-['Instrument_Serif:Regular',sans-serif] relative shrink-0 text-[#2e1e1c] text-[36px] whitespace-nowrap">Sobre Nosotros</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6b5a58] text-[14px] w-[min-content]">El arte de contar historias a través de las flores.</p>
    </div>
  );
}

function StoreImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative shrink-0 w-full" data-name="store-image-container">
      <div className="h-[220px] relative rounded-[20px] shrink-0 w-full" data-name="store-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgStoreImage} />
      </div>
    </div>
  );
}

function StoryCopyBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start not-italic pt-[16px] px-[24px] relative shrink-0 w-full" data-name="story-copy-block">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#2e1e1c] text-[26px] w-full">Atención Personalizada y Cuidado en Cada Detalle</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5a58] text-[14px] w-full">En Floristería Martha creemos que cada arreglo cuenta una historia única. Nos especializamos en brindar una atención cercana y detallada, ayudándote a seleccionar la combinación perfecta para cada espacio y sentimiento.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5a58] text-[14px] w-full">Nuestro servicio de entrega a domicilio garantiza que las flores lleguen con la frescura intacta y una presentación impecable directo a la puerta de ese ser querido.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#eff2f0] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[12px] whitespace-nowrap">100% Frescas</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8ebef] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e1e1c] text-[12px] whitespace-nowrap">Hecho a Mano</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ece9f0] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a195b8] text-[12px] whitespace-nowrap">Fabricado con amor</p>
    </div>
  );
}

function ValueBadges() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start p-[24px] relative shrink-0 w-full" data-name="value-badges">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function ScreenContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="screen-content">
      <StatusBar />
      <AboutHeader />
      <StoreImageContainer />
      <StoryCopyBlock />
      <ValueBadges />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="home">
          <path d={svgPaths.p1e6ad500} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabInicio() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Inicio">
      <Home />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Inicio</p>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="grid">
          <path d={svgPaths.p10635e00} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabCatalogo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Catálogo">
      <Grid />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Catálogo</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="heart">
          <path d={svgPaths.p7608100} id="Vector" stroke="#5F7D6B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TabNosotros() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Nosotros">
      <Heart />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5f7d6b] text-[11px] whitespace-nowrap">Nosotros</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g clipPath="url(#clip0_0_4)" id="phone">
          <path d={svgPaths.p28009a00} id="Vector" stroke="#6B5A58" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabContacto() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="tab-Contacto">
      <Phone />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b5a58] text-[11px] whitespace-nowrap">Contacto</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full" data-name="bottom-nav">
      <TabInicio />
      <TabCatalogo />
      <TabNosotros />
      <TabContacto />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-name="home-indicator">
      <div className="bg-[#2e1e1c] h-[5px] relative rounded-[100px] shrink-0 w-[139px]" data-name="indicator-bar" />
    </div>
  );
}

function BottomNavContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bottom-nav-container">
      <div aria-hidden className="absolute border-[#efebe9] border-solid border-t inset-0 pointer-events-none" />
      <BottomNav />
      <HomeIndicator />
    </div>
  );
}

export default function FloristeriaHinuNosotros() {
  return (
    <div className="bg-[#fdfbfa] content-stretch flex flex-col items-start justify-between relative size-full" data-name="floristeria-hinu-nosotros">
      <ScreenContent />
      <BottomNavContainer />
    </div>
  );
}
