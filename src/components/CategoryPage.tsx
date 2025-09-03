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
		category: 'Ароматизаторы',
		company: 'Contact, Aroma Top Line',
		desc: 'Натуральные сладости и попкорн высочайшего качества. Разнообразие вкусов и форматов упаковки для любых потребностей вашего бизнеса.',
		diversity: ['Картонки', 'Бочки', 'Мешки', 'Спрей'],
		mainImgUrl: '/aroma/contact.webp',

		snackProducts: [
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
			{
				id: '21',
				name: "Ароматизатор картонный 'Новая машина'",
				price: 'от 15 ₽',
				image: '/car-air-freshener-cardboard-hanging.png',
				description:
					'Классический картонный ароматизатор с долговременным эффектом',
			},
			{
				id: '22',
				name: "Ароматизатор-мешочек 'Лаванда'",
				price: 'от 45 ₽',
				image: '/lavender-scent-bag-car-freshener.png',
				description: 'Натуральный мешочек с ароматом лаванды для автомобиля',
			},
			{
				id: '33',
				name: "Спрей-ароматизатор 'Океан'",
				price: 'от 120 ₽',
				image: '/ocean-spray-car-air-freshener-bottle.png',
				description: 'Спрей с морским ароматом, 50мл',
			},
			{
				id: '44',
				name: "Ароматизатор-бочка 'Кожа'",
				price: 'от 85 ₽',
				image: '/leather-scent-barrel-car-air-freshener.png',
				description: 'Стильный ароматизатор в форме бочки с запахом кожи',
			},
		],
	},
	{
		category: 'Подвеска деревянная',
		company: 'Aroma Wood',
		desc: 'Натуральные сладости и попкорн высочайшего качества. Разнообразие вкусов и форматов упаковки для любых потребностей вашего бизнеса.',
		diversity: ['Логотипы', 'Марки автомобилей', 'Национальная тематика', 'Индивидуальный заказ'],
		mainImgUrl: '/aroma/contact.webp',

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
				diversity={categoryId.diversity}
				mainImgUrl={categoryId.mainImgUrl}
			/>
			<ProductSpecifications slidersData={categoryId.snackProducts} />
		</div>
	)
}
