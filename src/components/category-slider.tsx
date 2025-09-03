'use client'

import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Product {
	id: string
	name: string
	price: string
	image: string
	description?: string
}

interface ProductSliderProps {
	products: Product[]
	accentColor?: string
}

export function CategorySlider({
	products,
	accentColor = 'text-primary',
}: ProductSliderProps) {
	const prevRef = useRef<HTMLButtonElement | null>(null)
	const nextRef = useRef<HTMLButtonElement | null>(null)
	const [swiper, setSwiper] = useState<SwiperType | null>(null)

	useEffect(() => {
		if (!swiper || !prevRef.current || !nextRef.current) return

		const nav = swiper.params.navigation
		// nav: boolean | NavigationOptions | undefined
		if (nav && typeof nav !== 'boolean') {
			// тут nav уже NavigationOptions, без any
			nav.prevEl = prevRef.current
			nav.nextEl = nextRef.current

			swiper.navigation.destroy()
			swiper.navigation.init()
			swiper.navigation.update()
		}
	}, [swiper])

	// при 4–5 карточках loop лучше выключить
	const enableLoop = products.length >= 6

	return (
		<div className='space-y-6'>

			<div className='w-full'>
				<Swiper
					modules={[Navigation]}
					onSwiper={setSwiper}
					navigation={false}
					// ✅ ключевые настройки, чтобы не было «дальних прыжков»
					slidesPerView='auto' // используем реальные ширины слайдов из CSS
					slidesPerGroup={1} // листаем по одному слайду
					spaceBetween={16}
					breakpoints={{ 1024: { spaceBetween: 20 } }} // можно менять только отступы
					centeredSlides={false}
					loop={enableLoop} // клоны только если карточек достаточно
					rewind // аккуратно в начало/конец
					watchOverflow // если ширины не хватает — отключит навигацию
					className='w-full'
				>
					{products.map(product => (
						<SwiperSlide
							key={product.id}
							// ширину задаём только классами (никаких числовых slidesPerView!)
							className='h-auto !w-[320px] sm:!w-[340px] md:!w-[560px]'
						>
							<Card className='group h-full hover:shadow-lg transition-all duration-300 bg-card border-border cursor-pointer'>
								<CardContent className='p-0 flex flex-col'>
									<div className='overflow-hidden rounded-t-lg aspect-square'>
										<img
											src={product.image || '/placeholder.svg'}
											alt={product.name}
											className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
										/>
									</div>

									<div className='grid grid-rows-[auto,1fr,auto] gap-3 p-4 md:p-6 flex-1 min-h-0'>
										<h3
											className={`font-semibold  transition-colors text-base md:text-lg leading-snug line-clamp-2 min-h-[3rem] md:min-h-[3.25rem]  ${accentColor} group-hover:text-foreground`}
										>
											{product.name}
										</h3>

										{product.description ? (
											<p className='text-sm text-muted-foreground line-clamp-2 leading-snug min-h-[2.5rem]'>
												{product.description}
											</p>
										) : (
											<div className='min-h-[2.5rem]' />
										)}

										<div
											className={`font-bold ${accentColor} text-lg md:text-xl`}
										>
											{product.price}
										</div>
									</div>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='flex justify-end gap-2 mt-4 w-full'>
					<div className='flex items-center gap-4'>
						<button
							ref={prevRef}
							aria-label='Previous'
							className='h-12 w-12 rounded-full border border-border bg-transparent hover:bg-white flex items-center justify-center transition-all duration-300 cursor-pointer'
						>
							<ArrowLeft className={accentColor} />
						</button>
						<button
							ref={nextRef}
							aria-label='Next'
							className='h-12 w-12 rounded-full border border-border bg-transparent hover:bg-white flex items-center justify-center transition-all duration-300 cursor-pointer'
						>
							<ArrowRight className={accentColor} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
