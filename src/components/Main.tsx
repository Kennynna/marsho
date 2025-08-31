import { ClientGrowthChart } from '@/components/client-growth-chart'
import { BusinessAdvantages } from '@/components/business-advantages'
import { FuturePlans } from '@/components/future-plans'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from './ui/button'

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
					<Button size='lg' className='text-lg px-8'>
						Стать клиентом
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

			{/* Client Growth Chart */}
			<section>
				<ClientGrowthChart />
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

			{/* Future Plans */}
			<FuturePlans />

			{/* Contact Section */}
			<section className='text-center space-y-8'>
				<div>
					<h2 className='text-2xl font-bold mb-2'>Готовы к сотрудничеству?</h2>
					<p className='text-muted-foreground'>
						Свяжитесь с нами для обсуждения условий поставок
					</p>
				</div>

				<div className='grid gap-4 md:grid-cols-3 max-w-2xl mx-auto'>
					<Card>
						<CardContent className='p-6 text-center'>
							<Phone className='h-6 w-6 text-primary mx-auto mb-2' />
							<div className='font-medium'>+7 (900) 123-45-67</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6 text-center'>
							<Mail className='h-6 w-6 text-primary mx-auto mb-2' />
							<div className='font-medium'>sales@tk-region.ru</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6 text-center'>
							<MapPin className='h-6 w-6 text-primary mx-auto mb-2' />
							<div className='font-medium'>КБР, Грозный</div>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	)
}
