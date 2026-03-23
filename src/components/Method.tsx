import { FadeIn } from './FadeIn'

const PILLARS = [
  {
    num: '01',
    title: 'Investiga\u00e7\u00e3o Integral',
    text: 'Toda sess\u00e3o come\u00e7a com uma an\u00e1lise real de todas as \u00e1reas da sua vida: familiar, financeira, social, amorosa, espiritual. A ansiedade raramente vive em um \u00fanico lugar. O processo come\u00e7a por mapear onde ela se apoia.',
  },
  {
    num: '02',
    title: 'Identifica\u00e7\u00e3o das Ra\u00edzes',
    text: "Depois do mapa, identifico as cren\u00e7as nucleares e as distor\u00e7\u00f5es cognitivas que alimentam o que voc\u00ea sente. N\u00e3o s\u00e3o \u2018pensamentos negativos\u2019 gen\u00e9ricos. S\u00e3o interpreta\u00e7\u00f5es espec\u00edficas que voc\u00ea aprendeu sobre si mesmo e sobre o mundo.",
  },
  {
    num: '03',
    title: 'Reestrutura\u00e7\u00e3o Funcional',
    text: 'Com as ra\u00edzes identificadas, constru\u00edmos juntos interpreta\u00e7\u00f5es alternativas. N\u00e3o para fingir que est\u00e1 tudo bem, mas para produzir comportamentos funcionais a partir de uma leitura mais precisa da realidade.',
  },
]

export default function Method() {
  return (
    <section
      className="section-padding-lg relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A2E22 0%, rgba(45,95,63,0.15) 100%)',
      }}
    >
      <div className="container-ultra">
        {/* Title */}
        <FadeIn>
          <h2 className="font-display font-[800] text-3xl md:text-4xl lg:text-5xl text-bg-light leading-tight mb-4">
            TCC e Psicologia Positiva: Reestrutura&#231;&#227;o de Cren&#231;as
          </h2>
        </FadeIn>

        {/* Intro 1st person */}
        <FadeIn delay={0.1}>
          <p className="editorial-line-dark font-sans font-light text-lg text-bg-light/70 max-w-2xl leading-relaxed mb-16">
            Quando eu virei psic&#243;logo, sabia exatamente que tipo de trabalho queria fazer. N&#227;o o trabalho de quem estudou ansiedade em livro. O trabalho de quem viveu o estado que o paciente vive e foi buscar o que estava na raiz.
          </p>
        </FadeIn>

        {/* 3 Pillars - vertical list with decorative numbers */}
        <div className="space-y-16 md:space-y-20 mb-16">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Decorative number backdrop */}
                <span
                  className="absolute -top-8 -left-2 md:-left-6 font-display font-[800] text-[8rem] leading-none text-off-white/10 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>
                <div className="relative z-10 pl-4 md:pl-8">
                  <h3 className="font-display font-[800] text-xl md:text-2xl text-off-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-sans font-light text-base md:text-lg text-bg-light/70 max-w-xl leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* "Nao Prometo" */}
        <FadeIn delay={0.1}>
          <p className="font-sans italic text-base text-bg-light/50 max-w-xl leading-relaxed border-l-2 border-off-white/20 pl-5">
            N&#227;o prometo cura em 30 dias. N&#227;o trabalho com quem busca atalho ou resultado imediato. O processo &#233; real, leva tempo, e &#233; exatamente por isso que funciona.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
