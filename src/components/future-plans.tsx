import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Target } from "lucide-react"

export function FuturePlans() {
  return (
    <section className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Планы развития</h2>
        <p className="text-muted-foreground">Амбициозные цели на ближайшие годы</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              2027 год
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Расширение деятельности до <strong className="text-foreground">Краснодарского края</strong>. Открытие
              новых складских комплексов и увеличение логистической сети.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              2030 год
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Войти в <strong className="text-foreground">ТОП-15 успешных торговых компаний России</strong>. Стать
              лидером оптовых поставок в южном регионе.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
