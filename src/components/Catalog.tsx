import { ProductSlider } from '@/components/product-slider'
import { CatalogHero } from '@/components/catalog-hero'
import { useEffect } from 'react'
import {
	aromatizerProducts,
	coffeeProducts,
	drinkProducts,
	pendantProducts,
	snackProducts,
} from '@/constants/moks'

export default function CatalogPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto', // можно поставить 'smooth' для плавной прокрутки
		})
	}, [])
	return (
		<div className='min-h-screen bg-background container mx-auto'>
			<main className='container mx-auto px-4 py-8 space-y-16'>
				{/* Hero Section */}
				<CatalogHero />

				<div className='space-y-20'>
					<ProductSlider
						title='Ароматизаторы для автомобилей'
						products={aromatizerProducts}
						accentColor='text-[#a78bfa]'
						id={1}
					/>
					<ProductSlider
						title='Подвески и аксессуары'
						products={pendantProducts}
						accentColor='text-chart-2'
						id={2}
					/>
					<ProductSlider
						title=' Попкорн и сладости'
						products={snackProducts}
						accentColor='text-chart-3'
						id={0}
					/>
					<ProductSlider
						title='Спортивные напитки'
						products={drinkProducts}
						accentColor='text-chart-4'
						id={3}
					/>
					<ProductSlider
						title='Натуральный холодный кофе'
						products={coffeeProducts}
						accentColor='text-chart-5'
						id={4}
					/>
				</div>
			</main>
		</div>
	)
}
