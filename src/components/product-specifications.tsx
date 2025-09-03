import { Card } from '@/components/ui/card'
import { CategorySlider } from './category-slider'

interface Product {
	id: string
	name: string
	price: string
	image: string
	description?: string
}
interface ProductSpecificationsProps {
	slidersData: Product[]
}
export const ProductSpecifications = ({
	slidersData,
}: ProductSpecificationsProps) => {
	// const specifications = [
	// 	{
	// 		category: 'Вкусовые характеристики',
	// 		color: 'chart-2',
	// 		items: [
	// 			{ label: 'Сладкий', value: 'Натуральный сахар, легкая карамелизация' },
	// 			{
	// 				label: 'Карамельный',
	// 				value: 'Насыщенный карамельный вкус, хрустящая текстура',
	// 			},
	// 			{
	// 				label: 'Шоколадный',
	// 				value: 'Бельгийский какао, сбалансированная сладость',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		category: 'Пищевая ценность',
	// 		color: 'chart-3',
	// 		items: [
	// 			{ label: 'Калорийность', value: '380-420 ккал на 100г' },
	// 			{ label: 'Содержание сахара', value: '15-25% в зависимости от вкуса' },
	// 			{ label: 'Белки', value: '8-12г на 100г' },
	// 			{ label: 'Жиры', value: '5-8г на 100г' },
	// 		],
	// 	},
	// 	{
	// 		category: 'Упаковка и хранение',
	// 		color: 'chart-4',
	// 		items: [
	// 			{
	// 				label: 'Форматы',
	// 				value: 'Пакеты 50г, 100г, 200г; Стаканы 150мл, 300мл',
	// 			},
	// 			{
	// 				label: 'Срок годности',
	// 				value: '12 месяцев при соблюдении условий хранения',
	// 			},
	// 			{
	// 				label: 'Условия хранения',
	// 				value: 'Сухое место, температура до +25°C',
	// 			},
	// 			{
	// 				label: 'Упаковка в коробке',
	// 				value: '24 шт для пакетов, 50 шт для стаканов',
	// 			},
	// 		],
	// 	},
	// ]

	return (
		<section className='container mx-auto px-4 py-16'>
			<CategorySlider products={slidersData} accentColor='text-chart-3' />

			{/* Additional Info Section */}
			<div className='mt-16 text-center'>
				<Card className='p-8 bg-gradient-to-r from-chart-2/10 via-chart-3/10 to-chart-4/10 border-chart-2/20'>
					<h3 className='text-2xl font-bold mb-4 text-foreground'>
						Сертификация и качество
					</h3>
					<p className='text-muted-foreground max-w-3xl mx-auto text-pretty'>
						Вся продукция сертифицирована согласно ГОСТ и имеет необходимые
						документы качества. Производство осуществляется на современном
						оборудовании с соблюдением всех санитарно-гигиенических норм.
					</p>
				</Card>
			</div>
		</section>
	)
}
