import { FadeIn } from './FadeIn'

const STEPS = [
  {
    num: '1',
    text: 'Come\u00e7amos com uma sess\u00e3o de apresenta\u00e7\u00e3o, sem compromisso e sem julgamento. Voc\u00ea me conta o que est\u00e1 vivendo. Eu escuto, fa\u00e7o perguntas, e no final voc\u00ea decide se quer continuar. Sem press\u00e3o. Sem vendas. S\u00f3 uma conversa honesta de homem para homem.',
  },
  {
    num: '2',
    text: 'As sess\u00f5es s\u00e3o semanais, online, via videochamada, com total privacidade. Cada encontro tem estrutura e prop\u00f3sito: investigamos uma \u00e1rea da vida, identificamos uma cren\u00e7a, constru\u00edmos uma interpreta\u00e7\u00e3o alternativa. O trabalho \u00e9 real. A evolu\u00e7\u00e3o \u00e9 mensur\u00e1vel.',
  },
  {
    num: '3',
    text: 'Com o tempo, o estado muda. N\u00e3o \u00e9 que a ansiedade desaparece. \u00c9 que voc\u00ea para de ser dominado por ela. Voc\u00ea retoma a clareza para tomar decis\u00f5es, a presen\u00e7a com quem voc\u00ea ama, e o controle que sentiu que estava perdendo.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-bg-light section-padding">
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display font-[800] text-3xl md:text-4xl text-heading leading-tight mb-14">
            Tr&#234;s passos para o processo come&#231;ar.
          </h2>
        </FadeIn>

        {/* Steps - vertical timeline layout */}
        <div className="space-y-12 md:space-y-16 mb-14">
          {STEPS.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex gap-6 md:gap-10 items-start">
                {/* Number */}
                <span className="font-display font-[800] text-4xl md:text-5xl text-primary leading-none shrink-0 mt-1">
                  {step.num}
                </span>
                {/* Vertical line + text */}
                <div className="border-l-2 border-primary/20 pl-6 md:pl-8">
                  <p className="font-sans font-light text-base md:text-lg text-text-main/80 leading-relaxed max-w-xl">
                    {step.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Remove anxiety about logistics */}
        <FadeIn delay={0.1}>
          <p className="font-sans text-sm md:text-base text-text-main/60 leading-relaxed max-w-xl border-l-2 border-secondary pl-4 italic">
            As sess&#245;es s&#227;o online porque privacidade &#233; inegoci&#225;vel. Voc&#234; n&#227;o precisa sair de casa, explicar pra ningu&#233;m onde vai, nem reservar hor&#225;rio de deslocamento.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
