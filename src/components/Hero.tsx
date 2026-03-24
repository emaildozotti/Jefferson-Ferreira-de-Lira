import { useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/5581995104226?text=Ol%C3%A1%2C%20Jeff.%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20como%20funciona%20a%20sess%C3%A3o%20inicial.%20Pode%20me%20passar%20os%20detalhes%3F'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-100"
          style={{
            background: 'radial-gradient(circle, #2D5F3F59 0%, transparent 70%)',
            animation: 'aurora-1 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-5%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-100"
          style={{
            background: 'radial-gradient(circle, #C8A86A40 0%, transparent 70%)',
            animation: 'aurora-2 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-100"
          style={{
            background: 'radial-gradient(circle, #EFF4F126 0%, transparent 70%)',
            animation: 'aurora-3 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* Header - desktop only */}
      <header className="hidden md:flex absolute top-0 left-0 right-0 z-30 items-center justify-between px-10 py-6">
        <span className="font-display text-2xl italic text-off-white">Jeff</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-sans text-bg-light/80 hover:text-off-white transition-colors"
        >
          Agendar sessão
        </a>
      </header>

      {/* Content: Split Layout 60/40 */}
      <div className="relative z-10 container-ultra min-h-screen flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-24 pb-16 md:pt-0 md:pb-0">
        {/* Left: Text 60% */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <p
            className="eyebrow-ultra text-off-white/70 mb-6"
            style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0s' }}
          >
            HOMENS NO LIMITE
          </p>
          <h1
            className="editorial-line-dark font-display font-[800] text-5xl md:text-6xl lg:text-7xl text-bg-light leading-[1.05] mb-6"
            style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0.15s', opacity: 0 }}
          >
            A armadura pesa mais do que voc&#234; admite.
          </h1>
          <p
            className="editorial-line-dark font-sans font-light text-lg md:text-xl text-bg-light/70 max-w-lg mb-10"
            style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0.30s', opacity: 0 }}
          >
            Pare de carregar o que n&#227;o precisa ser carregado sozinho.
          </p>
          <div style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0.45s', opacity: 0 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer bg-primary text-bg-light rounded-sm font-sans font-medium text-base tracking-wide hover:bg-dark transition-colors"
            >
              Entenda o que est&#225; acontecendo
            </a>
          </div>
        </div>

        {/* Right: Photo 40% */}
        <div className="w-full md:w-[40%] flex justify-center order-2 md:order-none">
          <div
            className="relative"
            style={{ transform: 'rotate(-2deg)', border: '2px solid #2D5F3F' }}
          >
            {!imgError ? (
              <img
                src="/foto-jefferson-hero.jpg"
                alt="Jefferson Ferreira de Lira, psic&#243;logo"
                className="w-full max-w-xs md:max-w-sm object-cover"
                style={{ transform: 'rotate(2deg)' }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full max-w-xs md:max-w-sm aspect-[3/4] bg-primary/20 flex items-center justify-center"
                style={{ transform: 'rotate(2deg)' }}
              >
                <svg
                  className="w-20 h-20 text-primary/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-bg-light/40">
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-bg-light/20" />
      </div>
    </section>
  )
}
