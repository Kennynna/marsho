import { ClientGrowthChart } from '@/components/client-growth-chart'
import { BusinessAdvantages } from '@/components/business-advantages'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from './ui/button'
import { SalesChart } from './salesChat'
// import RunningLightsSVG from './Svgitem'

export const Main = () => {
	return (
		<main className='container mx-auto px-4 py-8 space-y-16'>
			{/* Hero Section */}
			<section className='text-center space-y-6'>
				<div className='space-y-4'>
					<h1 className='text-3xl md:text-5xl font-bold text-balance'>
						Оптовые поставки для бизнеса
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
						Надежный партнер для розничных магазинов в КБР и Грозном. 1150+
						довольных клиентов и стабильный рост каждую неделю.
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button asChild size='lg' className='text-lg px-8'>
						<a href='#ready'>Стать клиентом</a>
					</Button>
					<Button
						variant='outline'
						size='lg'
						className='text-lg px-8 bg-transparent'
					>
						Узнать больше
					</Button>
				</div>
			</section>

			{/* Key Stats */}
			<section className='grid grid-cols-2 md:grid-cols-4 gap-4'>
				<Card>
					<CardContent className='p-6 text-center'>
						<div className='text-2xl font-bold text-white  mb-1'>1150+</div>
						<div className='text-sm text-muted-foreground'>
							Активных клиентов
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className='p-6 text-center'>
						<div className='text-2xl font-bold text-white mb-1'>2-3</div>
						<div className='text-sm text-muted-foreground'>
							Новых клиента/неделю
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className='p-6 text-center'>
						<div className='text-2xl font-bold text-white mb-1'>24ч</div>
						<div className='text-sm text-muted-foreground'>Сборка заказа</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className='p-6 text-center'>
						<div className='text-2xl font-bold text-white mb-1'>98%</div>
						<div className='text-sm text-muted-foreground'>Доставка в срок</div>
					</CardContent>
				</Card>
			</section>

			{/* Business Advantages */}
			<BusinessAdvantages />

			<section>
				<ClientGrowthChart />
			</section>

			<section>
				<SalesChart />
			</section>
			{/* <RunningLightsSVG /> */}
		</main>
	)
}
