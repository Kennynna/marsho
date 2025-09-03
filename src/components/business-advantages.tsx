import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Award, MapPin } from 'lucide-react'

const advantages = [
	{
		icon: <Award className='h-8 w-8 text-white' />,
		image:
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop',
		title: 'Качественные товары',
		description:
			'Работаем только с проверенными поставщиками. Контроль качества на каждом этапе.',
	},
	{
		icon: <Users className='h-8 w-8 text-white' />,
		image:
			'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
		title: 'Увеличение штата',
		description:
			'Команда растет с каждым годом. Профессиональные менеджеры для каждого клиента.',
	},
	{
		icon: <TrendingUp className='h-8 w-8 text-white' />,
		image:
			'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop',
		title: 'Конкурентные цены',
		description:
			'Прямые поставки от производителей. Гибкая система скидок для постоянных клиентов.',
	},
	{
		icon: <MapPin className='h-8 w-8 text-white' />,
		image:
			'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
		title: 'Дистрибьютерские товары',
		description:
			'Эксклюзивные права на распространение популярных брендов в КБР и Грозном.',
	},
]

export function BusinessAdvantages() {
	return (
		<section className='w-full'>
			<div className='mb-8 text-center'>
				<h2 className='text-2xl font-bold mb-2'>Наши преимущества</h2>
				<p className='text-muted-foreground'>
					Почему более 1000 компаний выбирают нас
				</p>
			</div>

			<div className='grid gap-6 md:gap-8'>
				{advantages.map((advantage, index) => (
					<Card key={index} className='overflow-hidden'>
						<CardContent className='p-0'>
							<div
								className={`flex flex-col ${
									index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} gap-0`}
							>
								{/* Image section */}
								<div className='relative md:w-1/2'>
									<img
										src={advantage.image || '/placeholder.svg'}
										alt={advantage.title}
										className='h-48 md:h-64 w-full object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r' />
								</div>

								{/* Content section */}
								<div className='flex flex-col justify-center p-6 md:w-1/2 md:p-8'>
									<div className=' block mb-4 max-[767px]:hidden '>
										{advantage.icon}
									</div>
									<h3 className=' text-xl md:text-3xl font-semibold mb-3 text-balance flex items-center gap-4'>
										<span className='min-[768px]:hidden'>{advantage.icon}</span>
										{advantage.title}
									</h3>
									<p className='text-muted-foreground leading-relaxed text-pretty'>
										{advantage.description}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
