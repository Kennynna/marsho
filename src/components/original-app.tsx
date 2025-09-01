const photos = [
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    title: "Широкий ассортимент",
    text: "10k+ SKU на складе. Быстрый подбор под нишу.",
  },
  {
    src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop",
    title: "Стабильная логистика",
    text: "Ежедневные отгрузки, страхование поставок.",
  },
  {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80&auto=format&fit=crop",
    title: "Персональные цены",
    text: "Индивидуальные условия для оптовых клиентов.",
  },
]




function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color-mix(in_oklab,var(--bg-gray)_85%,transparent)] text-[var(--text)]">
      <nav className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold tracking-wide">LOGO</div>
        <button aria-label="menu" className="rounded-md border border-white/10 px-3 py-1 text-sm">
          Меню
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pt-6 pb-2 text-[var(--text)]">
      <h1 className="text-2xl font-semibold leading-tight">Оптовые поставки для магазинов</h1>
      <p className="mt-2 text-[var(--muted)]">Ассортимент, цена и скорость. Работаем по всей стране.</p>

      {/* Горизонтальная лента карточек с фото и преимуществами */}
      <div className="mt-5 overflow-x-auto">
        <div className="flex gap-4 snap-x snap-mandatory">
          {photos.map((p, i) => (
            <article
              key={i}
              className="min-w-[84%] snap-center rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
            >
              <div className="relative">
                <img src={p.src} alt={p.title} className="h-60 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-2 left-3 text-base font-medium">{p.title}</h3>
              </div>
              <p className="p-3 text-sm text-[var(--muted)]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

type StatProps = {
	value: string
	label: string
}

function Stat({ value, label }: StatProps) {
	return (
		<div className='flex flex-col items-start'>
			<div className='text-xl font-semibold text-[var(--text)]'>{value}</div>
			<div className='text-[var(--muted)] text-sm'>{label}</div>
		</div>
	)
}

function About() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-6">
      <div className="grid grid-cols-2 gap-6">
        <Stat value="24 ч" label="сборка заказа" />
        <Stat value="98%" label="доставка в срок" />
        <Stat value="10 000+" label="SKU на складе" />
        <Stat value="300+" label="городов доставки" />
      </div>
      <div className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        Мы помогаем рознице держать стабильные полки: быстрые отгрузки, прозрачные цены и личный менеджер.
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl px-4 py-8 text-[var(--muted)]">
      <div className="text-sm">© {new Date().getFullYear()} ООО «Торговая компания»</div>
      <div className="mt-1 text-xs">ИНН 0000000000 • ОГРН 0000000000000</div>
      <div className="mt-3 text-xs">Контакты: sales@example.com • +7 (900) 000-00-00</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app min-h-dvh bg-[var(--bg-gray)] text-[var(--text)]">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}
