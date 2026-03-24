import { useState } from 'react'
import { FadeIn } from './FadeIn'

const CREDENTIALS = [
  'Psic\u00f3logo | CRP ativo',
  'Especializa\u00e7\u00e3o em TCC',
  'Forma\u00e7\u00e3o em Psicologia Positiva',
]

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-ultra">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text - order-1 (mobile first) */}
          <div className="w-full md:w-[55%] order-1">
            <FadeIn>
              <h2 className="font-display font-[800] text-3xl md:text-4xl text-heading leading-tight mb-8">
                O psic&#243;logo que j&#225; foi o paciente.
              </h2>
            </FadeIn>

            {/* Bio: Antes */}
            <FadeIn delay={0.1}>
              <div className="mb-8">
                <p className="font-sans font-light text-base md:text-lg text-text-main/80 leading-relaxed">
                  Tinha cargos, responsabilidades, pessoas que dependiam de mim. Por fora, estava dando conta. Por dentro, acordava com p&#226;nico no peito sem conseguir explicar pra ningu&#233;m. Tinha medo de morrer nos momentos mais comuns: numa reuni&#227;o, no mercado, no carro parado no sinal. Aprendi a controlar a express&#227;o antes de controlar o que estava acontecendo dentro de mim.
                </p>
              </div>
            </FadeIn>

            {/* Bio: Virada - blockquote editorial */}
            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-secondary pl-4 italic font-sans text-base md:text-lg text-text-main/70 leading-relaxed mb-8">
                O momento que mudou tudo n&#227;o foi quando eu finalmente pedi ajuda. Foi quando entendi que o problema n&#227;o era falta de for&#231;a de vontade: eram as cren&#231;as que eu tinha constru&#237;do sobre quem eu deveria ser. Quando identifiquei essas cren&#231;as e comecei a question&#225;-las, o estado mudou.
              </blockquote>
            </FadeIn>

            {/* Bio: Hoje */}
            <FadeIn delay={0.3}>
              <p className="font-sans font-light text-base md:text-lg text-text-main/80 leading-relaxed mb-8">
                Hoje sou psic&#243;logo especializado em sa&#250;de mental masculina. Trabalho online com homens que vivem o estado que eu j&#225; vivi. Trago para cada sess&#227;o n&#227;o s&#243; o m&#233;todo, mas a mem&#243;ria de como &#233; estar daquele lado.
              </p>
            </FadeIn>

            {/* Credentials badges */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {CREDENTIALS.map((cred, i) => (
                  <span
                    key={i}
                    className="font-sans text-xs font-medium tracking-wide text-primary bg-primary/10 border border-primary/20 rounded-sm px-4 py-2"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Photo - order-2 (mobile), order-none (desktop) */}
          <div className="w-full md:w-[45%] order-2 md:order-none flex justify-center">
            <FadeIn delay={0.2}>
              <div
                className="relative"
                style={{ transform: 'rotate(-2deg)', border: '2px solid #2D5F3F' }}
              >
                {!imgError ? (
                  <img
                    src="/foto-jefferson-sobre.jpg"
                    alt="Jefferson Ferreira de Lira"
                    className="w-full max-w-xs md:max-w-sm object-cover"
                    style={{ transform: 'rotate(2deg)' }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="w-full max-w-xs md:max-w-sm aspect-[3/4] bg-primary/10 flex items-center justify-center"
                    style={{ transform: 'rotate(2deg)' }}
                  >
                    <svg
                      className="w-20 h-20 text-primary/30"
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
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
