import { ProductSlider } from '@/components/product-slider'
import { CatalogHero } from '@/components/catalog-hero'

// Mock data for products
const aromatizerProducts = [
	{
		id: '1',
		name: "Ароматизатор картонный 'Новая машина'",
		price: 'от 15 ₽',
		image: '/car-air-freshener-cardboard-hanging.png',
		description:
			'Классический картонный ароматизатор с долговременным эффектом',
	},
	{
		id: '2',
		name: "Ароматизатор-мешочек 'Лаванда'",
		price: 'от 45 ₽',
		image: '/lavender-scent-bag-car-freshener.png',
		description: 'Натуральный мешочек с ароматом лаванды для автомобиля',
	},
	{
		id: '3',
		name: "Спрей-ароматизатор 'Океан'",
		price: 'от 120 ₽',
		image: '/ocean-spray-car-air-freshener-bottle.png',
		description: 'Спрей с морским ароматом, 50мл',
	},
	{
		id: '4',
		name: "Ароматизатор-бочка 'Кожа'",
		price: 'от 85 ₽',
		image: '/leather-scent-barrel-car-air-freshener.png',
		description: 'Стильный ароматизатор в форме бочки с запахом кожи',
	},
]

const pendantProducts = [
	{
		id: '5',
		name: "Подвеска деревянная 'Волк'",
		price: 'от 200 ₽',
		image: '/wooden-wolf-pendant-car-accessory.png',
		description: 'Резная деревянная подвеска ручной работы',
	},
	{
		id: '6',
		name: "Подвеска с гравировкой 'Имя'",
		price: 'от 350 ₽',
		image: '/custom-engraved-wooden-pendant-car.png',
		description: 'Персональная подвеска с гравировкой под заказ',
	},
	{
		id: '7',
		name: "Подвеска 'Геометрия'",
		price: 'от 180 ₽',
		image: '/geometric-wooden-pendant-car-accessory.png',
		description: 'Современный геометрический дизайн из дерева',
	},
	{
		id: '8',
		name: "Подвеска 'Этно-узор'",
		price: 'от 250 ₽',
		image: '/ethnic-pattern-wooden-pendant-car.png',
		description: 'Традиционные узоры на деревянной основе',
	},
]

const snackProducts = [
	{
		id: '9',
		name: 'Попкорн сладкий 100г',
		price: 'от 65 ₽',
		image: '/sweet-popcorn-100g-package.png',
		description: 'Классический сладкий попкорн в удобной упаковке',
	},
	{
		id: '10',
		name: 'Попкорн карамельный 200г',
		price: 'от 95 ₽',
		image: '/caramel-popcorn-200g-package.png',
		description: 'Попкорн с карамельной глазурью, увеличенная порция',
	},
	{
		id: '11',
		name: 'Попкорн в стакане',
		price: 'от 45 ₽',
		image: '/popcorn-in-cup-container.png',
		description: 'Свежий попкорн в удобном стакане для употребления',
	},
	{
		id: '12',
		name: 'Сахарная вата',
		price: 'от 35 ₽',
		image: '/cotton-candy-pink-blue-package.png',
		description: 'Воздушная сахарная вата в ассортименте цветов',
	},
]

const drinkProducts = [
	{
		id: '13',
		name: "Спортивный напиток 'Апельсин'",
		price: 'от 85 ₽',
		image: '/orange-sports-drink-bottle.png',
		description: 'Изотонический напиток с апельсиновым вкусом, 500мл',
	},
	{
		id: '14',
		name: "Спортивный напиток 'Маракуя'",
		price: 'от 85 ₽',
		image: '/passion-fruit-sports-drink-bottle.png',
		description: 'Энергетический напиток с экзотическим вкусом маракуи',
	},
	{
		id: '15',
		name: "Спортивный напиток 'Малина'",
		price: 'от 85 ₽',
		image: '/raspberry-sports-drink-bottle.png',
		description: 'Освежающий малиновый напиток для активного образа жизни',
	},
	{
		id: '16',
		name: "Спортивный напиток 'Манго'",
		price: 'от 85 ₽',
		image: '/placeholder.svg?height=300&width=300',
		description: 'Тропический вкус манго в спортивном напитке',
	},
]

const coffeeProducts = [
	{
		id: '17',
		name: 'Колд-брю классический',
		price: 'от 150 ₽',
		image: '/placeholder.svg?height=300&width=300',
		description: 'Натуральный холодный кофе медленной экстракции, 330мл',
	},
	{
		id: '18',
		name: "Кофе-тоник 'Цитрус'",
		price: 'от 165 ₽',
		image: '/placeholder.svg?height=300&width=300',
		description: 'Освежающий микс кофе и тоника с цитрусовыми нотами',
	},
	{
		id: '19',
		name: "Колд-брю 'Ваниль'",
		price: 'от 170 ₽',
		image: '/placeholder.svg?height=300&width=300',
		description: 'Холодный кофе с натуральным ванильным ароматом',
	},
	{
		id: '20',
		name: "Кофе-тоник 'Мята'",
		price: 'от 165 ₽',
		image: '/placeholder.svg?height=300&width=300',
		description: 'Бодрящий напиток с мятными нотами и кофеином',
	},
]

export default function CatalogPage() {
	return (
		<div className='min-h-screen bg-background container mx-auto'>
			

			<main className='container mx-auto px-4 py-8 space-y-16'>
				{/* Hero Section */}
				<CatalogHero />

				<div className='space-y-20'>
					<ProductSlider
						title='🚗 Ароматизаторы для автомобилей'
						products={aromatizerProducts}
						accentColor='text-primary'
					/>
					<ProductSlider
						title='🎨 Подвески и аксессуары'
						products={pendantProducts}
						accentColor='text-chart-2'
					/>
					<ProductSlider
						title='🍿 Попкорн и сладости'
						products={snackProducts}
						accentColor='text-chart-3'
					/>
					<ProductSlider
						title='🥤 Спортивные напитки'
						products={drinkProducts}
						accentColor='text-chart-4'
					/>
					<ProductSlider
						title='☕ Натуральный холодный кофе'
						products={coffeeProducts}
						accentColor='text-chart-5'
					/>
				</div>

				
			</main>

		</div>
	)
}
