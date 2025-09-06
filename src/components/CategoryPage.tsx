import { CategoryHero } from '@/components/category-hero'
import { ProductDetails } from '@/components/product-details'
import { ProductSpecifications } from '@/components/product-specifications'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const data = [
	{
		category: 'Попкорн и сахарная вата',
		company: 'Бабушкин огород',
		desc: 'Натуральные сладости и попкорн высочайшего качества. Разнообразие вкусов и форматов упаковки для любых потребностей вашего бизнеса.',
		diversity: [
			'Сладкий',
			'Карамельный',
			'Шоколадный',
			'Сливочный',
			'Попкорн в стакане',
			'Разноцветный попкорн в стакане',
			'Сахарная вата в ведре',
			'Сахарная вата в стакане',
		],
		mainImgUrl: '/popcornmain.jpg',
		snackProducts: [
			{
				id: '9',
				name: 'Попкорн сладкий 100г/200г',
				price: '65₽/85₽',
				image: '/popcorn/sladkiy.jpg',
				description: 'Классический сладкий попкорн в  упаковке',
			},
			{
				id: '10',
				name: 'Попкорн карамельный 200г/100г',
				price: '65₽/85₽',
				image: '/popcorn/karamel.jpg',
				description: 'Попкорн с карамельной глазурью',
			},
			{
				id: '11',
				name: 'Попкорн в стакане',
				price: 'от 45 ₽',
				image: '/popcorn/stakan.jpg',
				description: 'Попкорн в удобном стакане для употребления',
			},
			{
				id: '12',
				name: 'Сахарная вата  30г/50г',
				price: 'от 35₽/40₽',
				image: '/popcorn/vata.jpg',
				description: 'Воздушная сахарная вата в ассортименте цветов',
			},
		],
	},
	{
		category: 'Ароматизаторы',
		company: 'Contact, Aroma Top Line',
		desc: 'Натуральные сладости и попкорн высочайшего качества. Разнообразие вкусов и форматов упаковки для любых потребностей вашего бизнеса.',
		diversity: ['Картонки', 'Бочки', 'Мешки', 'Спрей'],
		mainImgUrl: '/aroma/contact.webp',

		snackProducts: [
			{
				id: '1',
				name: "Ароматизатор картонный 'Новая машина'",
				price: 'от 120 ₽',
				image: '/car-air-freshener-cardboard-hanging.png',
				description:
					'Классический картонный ароматизатор с долговременным эффектом',
			},
			{
				id: '2',
				name: "Ароматизатор-мешочек 'Лаванда'",
				price: 'от 240 ₽',
				image: '/lavender-scent-bag-car-freshener.png',
				description: 'Натуральный мешочек с ароматом лаванды для автомобиля',
			},
			{
				id: '3',
				name: "Спрей-ароматизатор 'Океан'",
				price: 'от 350 ₽',
				image: '/ocean-spray-car-air-freshener-bottle.png',
				description: 'Спрей с морским ароматом, 50мл',
			},
			{
				id: '4',
				name: "Ароматизатор-бочка 'Кожа'",
				price: 'от 240 ₽',
				image: '/leather-scent-barrel-car-air-freshener.png',
				description: 'Стильный ароматизатор в форме бочки с запахом кожи',
			},
			{
				id: '21',
				name: "Ароматизатор картонный 'Новая машина'",
				price: 'от 120 ₽',
				image: '/car-air-freshener-cardboard-hanging.png',
				description:
					'Классический картонный ароматизатор с долговременным эффектом',
			},
			{
				id: '22',
				name: "Ароматизатор-мешочек 'Лаванда'",
				price: 'от 200 ₽',
				image: '/lavender-scent-bag-car-freshener.png',
				description: 'Натуральный мешочек с ароматом лаванды для автомобиля',
			},
			{
				id: '33',
				name: "Спрей-ароматизатор 'Океан'",
				price: 'от 300 ₽',
				image: '/ocean-spray-car-air-freshener-bottle.png',
				description: 'Спрей с морским ароматом, 50мл',
			},
			{
				id: '44',
				name: "Ароматизатор-бочка 'Кожа'",
				price: 'от 230 ₽',
				image: '/leather-scent-barrel-car-air-freshener.png',
				description: 'Стильный ароматизатор в форме бочки с запахом кожи',
			},
		],
	},
	{
		category: 'Деревянные подвески и аксессуары',
		company: 'Aroma Wood',
		desc: 'Подвески из дерева с лазерной гравировкой. Имеются готовые стандарты, так же есть возможность заказать под индивидуальный дизайн',
		diversity: [
			'Логотипы',
			'Марки автомобилей',
			'Национальная тематика',
			'Индивидуальный заказ',
		],
		mainImgUrl: '/aromawood/aromawood.webp',

		snackProducts: [
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
		],
	},
	{
		category: 'Спортивные напитки',
		company: 'SPORTINIA',
		desc: 'Мировой лидер в области производства спортивного питания',
		diversity: ['BCAA', 'L-Carnitine', 'Vitamine-C'],
		mainImgUrl: '/sportinia/sportiniajpg.jpg',

		snackProducts: [
			{
				id: '13',
				name: `BCAA "Маракуя"`,
				price: 'от 85 ₽',
				image: '/sportinia/bca-1.webp',
				description:
					'Витаминный напиток со вкусом маракуи для активного образа жизни и для восстановления мышц, 0.5л',
			},
			{
				id: '14',
				name: `BCAA "Апельсин"`,
				price: 'от 85 ₽',
				image: '/sportinia/bca-2.webp',
				description:
					'Витаминный апельсиновый напиток для активного образа жизни и для восстановления мышц, 0.5л',
			},
			{
				id: '15',
				name: `Витамин-С "Апельсин"`,
				price: 'от 85 ₽',
				image: '/sportinia/V-c-1.webp',
				description:
					'Витаминный апельсиновый напиток для активного образа жизни, 0.5л',
			},
			{
				id: '16',
				name: `L-карнитин "Апельсин"`,
				price: 'от 85 ₽',
				image: '/sportinia/L-car-4.webp',
				description:
					'L-Карнитин со вкусом апельсина. Отлично подойдет для похудения, 0.5л ',
			},
			{
				id: '17',
				name: `L-карнитин "Ананас"`,
				price: 'от 85 ₽',
				image: '/sportinia/L-car-1.webp',
				description:
					'L-Карнитин со вкусом ананаса. Отлично подойдет для похудения, 0.5л',
			},
			{
				id: '18',
				name: `L-карнитин "Малина"`,
				price: 'от 85 ₽',
				image: '/sportinia/L-car-2.webp',
				description:
					'L-Карнитин со вкусом малины. Отлично подойдет для похудения, 0.5л',
			},
		],
	},
]

export default function CategoryPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto', // можно поставить 'smooth' для плавной прокрутки
		})
	}, [])

	const params = useParams()
	const categoryId = data[Number(params.pid)]

	return (
		<div className='min-h-screen bg-background'>
			<CategoryHero
				desc={categoryId.desc}
				category={categoryId.category}
				company={categoryId.company}
			/>
			<ProductDetails
				companyDesc=''
				diversity={categoryId.diversity}
				mainImgUrl={categoryId.mainImgUrl}
			/>
			<ProductSpecifications slidersData={categoryId.snackProducts} />
		</div>
	)
}
