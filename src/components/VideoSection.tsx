import { FadeIn } from './FadeIn'

export default function VideoSection() {
  return (
    <section className="bg-bg-warm section-padding">
      <div className="container-ultra">
        {/* Pre-video text */}
        <FadeIn>
          <p className="editorial-line-light font-sans font-light text-lg md:text-xl text-text-main/80 max-w-2xl leading-relaxed mb-12">
            No v&#237;deo abaixo, conto a travessia completa: como era, o que mudou, e por que hoje fa&#231;o o trabalho que fa&#231;o. N&#227;o &#233; um depoimento motivacional. &#201; o relato de um homem que ficou com medo de morrer em p&#250;blico e aprendeu o que estava por tr&#225;s disso. Assista antes de continuar.
          </p>
        </FadeIn>

        {/* Video container 9:16 */}
        <FadeIn delay={0.15}>
          <div className="flex justify-center mb-12">
            <div
              className="relative w-full max-w-[300px] ring-1 ring-primary shadow-2xl rounded-sm overflow-hidden"
              style={{ aspectRatio: '9/16' }}
            >
              <iframe
                src="https://www.youtube.com/embed/aO5GR22DmqU"
                title="Jeff conta sua hist&#243;ria"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

        {/* Post-video text */}
        <FadeIn delay={0.3}>
          <p className="font-sans font-light text-lg text-text-main/70 max-w-2xl mx-auto text-center leading-relaxed">
            Se algo no que eu disse soou familiar, o pr&#243;ximo bloco explica como funciona o processo que me ajudou, e que hoje aplico com outros homens.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
