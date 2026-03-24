import { FadeIn } from './FadeIn'

const PAINS = [
  'Sinto o cora\u00e7\u00e3o acelerar do nada e fico com medo de morrer ali mesmo.',
  'Parei de sair, parei de ver as pessoas. Fico travado com medo do que v\u00e3o pensar de mim.',
  'N\u00e3o consigo falar pra ningu\u00e9m que t\u00f4 passando mal. Eles precisam que eu seja o forte.',
  'Todo mundo me v\u00ea como o cara que resolve tudo, e por dentro eu t\u00f4 me desmanchando. E tenho vergonha disso.',
]

export default function PainPoints() {
  return (
    <section className="bg-dark section-padding">
      <div className="container-ultra">
        {/* Headline */}
        <FadeIn>
          <h2 className="font-display font-bold text-off-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-10 max-w-2xl">
            Por fora, você resolve tudo.<br />
            <span className="text-primary font-light italic">Por dentro, ninguém faz ideia.</span>
          </h2>
        </FadeIn>

        {/* Opening - biographical 1st person */}
        <FadeIn>
          <p className="editorial-line-light font-sans font-light text-lg md:text-xl text-off-white/80 max-w-2xl leading-relaxed mb-16">
            Eu acordei &#224;s 3h da manh&#227; com o cora&#231;&#227;o disparado, sem motivo nenhum, com certeza absoluta de que ia morrer ali mesmo. No dia seguinte apareci no trabalho como se nada tivesse acontecido, porque era o que eu sabia fazer.
          </p>
        </FadeIn>

        {/* 4 Pain cards */}
        <div className="space-y-8 md:space-y-10 mb-16">
          {PAINS.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="relative p-10 border border-bg-light/5 rounded-sm">
                {/* Decorative number */}
                <span
                  className="absolute top-4 right-6 font-display text-8xl leading-none text-off-white/[0.08] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="relative font-sans text-base md:text-lg text-bg-light/90 leading-relaxed italic">
                  &#8220;{pain}&#8221;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transition paragraph - separate FadeIn */}
        <FadeIn>
          <p className="editorial-line-light font-sans font-light text-lg md:text-xl text-off-white/70 max-w-2xl leading-relaxed">
            Essas quatro frases n&#227;o s&#227;o coincid&#234;ncia. Elas descrevem o mesmo homem. Em est&#225;gios diferentes do mesmo percurso. O percurso que eu tamb&#233;m fiz, antes de entender o que estava acontecendo comigo.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
