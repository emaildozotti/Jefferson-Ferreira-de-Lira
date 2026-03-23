import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

interface FAQItem {
  q: string
  a: string
}

const FAQS: FAQItem[] = [
  {
    q: 'J\u00e1 tentei resolver sozinho e n\u00e3o funcionou.',
    a: 'Faz sentido. Tentativas anteriores n\u00e3o falharam por falta de esfor\u00e7o: falharam porque o pensamento que criou o problema n\u00e3o consegue criar a solu\u00e7\u00e3o. A reestrutura\u00e7\u00e3o de cren\u00e7as n\u00e3o \u00e9 for\u00e7a de vontade. \u00c9 uma habilidade que se aprende com o m\u00e9todo certo.',
  },
  {
    q: 'Funciona online?',
    a: 'Funciona. E para muitos homens funciona melhor do que presencial. A sess\u00e3o acontece em um ambiente que voc\u00ea escolhe, com total privacidade, sem deslocamento, sem exposi\u00e7\u00e3o. V\u00e1rios pacientes me contaram que s\u00f3 conseguiram se abrir de verdade por estarem no pr\u00f3prio espa\u00e7o.',
  },
  {
    q: 'Qual \u00e9 o investimento?',
    a: 'O investimento mensal em terapia \u00e9 menor do que o custo de uma crise ignorada. Infarto precoce, div\u00f3rcio, burnout, anos de produtividade comprometida: esses sim t\u00eam pre\u00e7os que n\u00e3o se recuperam. Os valores s\u00e3o apresentados na sess\u00e3o inicial, depois de entendermos o que faz sentido para o seu momento.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'N\u00e3o existe resposta \u00fanica para isso. Depende do quanto as cren\u00e7as est\u00e3o enraizadas e de quais \u00e1reas da vida precisam de mais aten\u00e7\u00e3o. O que posso dizer com honestidade: resultados pr\u00e1ticos aparecem antes de voc\u00ea imaginar. Reestrutura\u00e7\u00e3o profunda leva meses, n\u00e3o anos.',
  },
  {
    q: 'N\u00e3o tenho tempo na agenda.',
    a: 'Sess\u00f5es de 50 minutos por semana. Menos tempo do que voc\u00ea perde tentando gerenciar a ansiedade sem ferramenta. A agenda se encaixa. J\u00e1 organizamos isso com dezenas de profissionais com rotina t\u00e3o cheia quanto a sua.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-ultra max-w-2xl">
        <FadeIn>
          <h2 className="font-display font-[800] text-3xl md:text-4xl text-heading leading-tight mb-12">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <div>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="border-b border-text-main/10">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-sans font-medium text-base md:text-lg text-text-main pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-main/40 shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans font-light text-base text-text-main/70 leading-relaxed pb-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
