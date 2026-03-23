import { FadeIn } from './FadeIn'

const WHATSAPP_URL =
  'https://wa.me/5581995104226?text=Ol%C3%A1%2C%20Jeff.%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20como%20funciona%20a%20sess%C3%A3o%20inicial.%20Pode%20me%20passar%20os%20detalhes%3F'

export default function Footer() {
  return (
    <footer>
      {/* CTA Final section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-ultra text-center">
          <FadeIn>
            <h2 className="font-display font-[800] text-3xl md:text-4xl lg:text-5xl text-bg-light leading-tight mb-8">
              A armadura j&#225; pesou tempo suficiente.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer bg-dark text-bg-light rounded-sm font-sans font-medium text-base tracking-wide hover:bg-primary-dark transition-colors"
            >
              Reservar minha sess&#227;o
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Signature footer */}
      <div className="bg-dark py-8">
        <div className="container-ultra flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-2xl italic text-off-white">Jeff</span>
          <p className="font-sans text-xs text-bg-light/30">
            &#169; {new Date().getFullYear()} Jefferson Ferreira de Lira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
