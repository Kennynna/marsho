export function CatalogHero() {
  return (
    <section className="text-center space-y-6 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Каталог товаров
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Широкий ассортимент качественных товаров для вашего бизнеса. От ароматизаторов до натурального кофе — всё для
          успешных продаж.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors">
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-sm text-muted-foreground">Категорий</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors">
          <div className="text-2xl font-bold text-chart-2">50+</div>
          <div className="text-sm text-muted-foreground">Товаров</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors">
          <div className="text-2xl font-bold text-chart-3">24ч</div>
          <div className="text-sm text-muted-foreground">Доставка</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors">
          <div className="text-2xl font-bold text-chart-4">Опт</div>
          <div className="text-sm text-muted-foreground">Цены</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors">
          <div className="text-2xl font-bold text-chart-5">100%</div>
          <div className="text-sm text-muted-foreground">Качество</div>
        </div>
      </div>
    </section>
  )
}
