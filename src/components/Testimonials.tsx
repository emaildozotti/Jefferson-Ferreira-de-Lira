import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

interface Testimonial {
  name: string
  role: string
  text: string
  highlight: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rodrigo M.',
    role: 'Engenheiro de Software, 34 anos',
    text: 'Eu acordava \u00e0s 3 da manh\u00e3 com cora\u00e7\u00e3o disparado, convicto que ia morrer. Fui no pronto-socorro tr\u00eas vezes em dois meses. Aprendi que era ansiedade, mas n\u00e3o conseguia controlar. Quando cheguei no Jeff, eu j\u00e1 tinha desistido de m\u00e9dico, de rem\u00e9dio, de tudo. Em 6 semanas eu entendi o que estava acontecendo na minha cabe\u00e7a. Em 3 meses eu estava dormindo de novo. Hoje vejo esses pensamentos chegando e sei o que fazer com eles.',
    highlight: 'Aprendi que era ansiedade, mas n\u00e3o conseguia controlar. Hoje sei o que fazer com esses pensamentos.',
  },
  {
    name: 'Andr\u00e9 S.',
    role: 'Gestor Comercial, 41 anos',
    text: 'Minha mulher me deu um ultimato. Ela disse que eu estava presente fisicamente mas tinha sumido de verdade. Eu achava que todo mundo exagerava \u2014 eu estava trabalhando, sustentando a fam\u00edlia, o que mais queriam? O Jeff me fez entender que o isolamento n\u00e3o era descanso, era fuga. Demorei um m\u00eas pra aceitar. Mas quando aceitei, tudo mudou. Hoje eu consigo ter uma conversa com meu filho sem o celular na m\u00e3o. Parece simples. N\u00e3o era.',
    highlight: 'O Jeff me fez entender que o isolamento n\u00e3o era descanso, era fuga.',
  },
  {
    name: 'Felipe C.',
    role: 'Empreendedor, 29 anos',
    text: 'Eu estava faturando bem e me sentindo um lixo. N\u00e3o conseguia aproveitar nada do que constru\u00ed. Qualquer decis\u00e3o me paralisava, qualquer problema virava cat\u00e1strofe na minha cabe\u00e7a. Pesquisei terapia por meses mas sempre achava que n\u00e3o era pra mim \u2014 parecia coisa de quem n\u00e3o consegue se resolver. O Jeff foi diferente desde o primeiro contato. Ele n\u00e3o me pedia pra ser vulner\u00e1vel. Me pedia pra ser honesto. Isso eu conseguia. Hoje minha empresa cresceu 40% e eu durmo tranquilo.',
    highlight: 'Ele n\u00e3o me pedia pra ser vulner\u00e1vel. Me pedia pra ser honesto. Isso eu conseguia.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]

  return (
    <section className="bg-dark section-padding">
      <div className="container-ultra">
        <FadeIn>
          <div className="relative max-w-2xl mx-auto">
            {/* Decorative quote mark */}
            <span
              className="absolute -top-16 -left-4 md:-left-10 font-display text-[120px] leading-none text-primary/20 select-none pointer-events-none"
              aria-hidden="true"
            >
              &#8220;
            </span>

            {/* Testimonial content with crossfade */}
            <div className="relative min-h-[320px] md:min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Highlight */}
                  <p className="font-display font-[800] text-xl md:text-2xl text-off-white italic leading-snug mb-6">
                    &#8220;{t.highlight}&#8221;
                  </p>

                  {/* Full testimonial */}
                  <blockquote className="border-l-[3px] border-off-white/30 pl-6">
                    <p className="font-sans font-light text-base text-bg-light/70 leading-relaxed mb-6">
                      {t.text}
                    </p>
                    <footer className="font-sans text-sm text-off-white/60">
                      — {t.name}, {t.role}
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full border border-bg-light/20 flex items-center justify-center text-bg-light/60 hover:text-off-white hover:border-off-white/40 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-off-white' : 'bg-bg-light/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Pr\u00f3ximo depoimento"
                className="w-10 h-10 rounded-full border border-bg-light/20 flex items-center justify-center text-bg-light/60 hover:text-off-white hover:border-off-white/40 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
