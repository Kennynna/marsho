import { Button } from '@/components/ui/button'
import { Main } from './components/Home'
import { Route, Routes, Link } from 'react-router'
import CatalogPage from './components/Catalog'
import { Phone, Send, MapPin } from 'lucide-react'
import { Card, CardContent } from './components/ui/card'
import CategoryPage from './components/CategoryPage'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<header className='sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border'>
				<nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
					<div className='font-bold text-xl'>ТК "MARSHO"</div>
					<div className='flex items-center gap-3'>
						<Link to='/'>
							<Button variant='outline' size='sm'>
								Главная
							</Button>
						</Link>
						<Link to='/catalog'>
							<Button variant='outline' size='sm'>
								Каталог
							</Button>
						</Link>
					</div>
				</nav>
			</header>

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/category-page/:pid' element={<CategoryPage />} />
			</Routes>

			{/* Footer */}

			<footer className='border-t border-border mt-16 mb-10 pt-4'>
				<section className='text-center space-y-8'>
					<div>
						<h2 className='text-2xl font-bold mb-2' id='ready'>
							Готовы к сотрудничеству?
						</h2>
						<p className='text-muted-foreground'>
							Свяжитесь с нами для обсуждения условий поставок
						</p>
					</div>

					<div className='grid gap-4 md:grid-cols-3 max-w-2xl mx-auto p-4'>
						<Card>
							<CardContent className='p-6 text-center'>
								<Phone className='h-6 w-6 text-primary mx-auto mb-2' />
								<div className='font-medium'>+7 (900) 123-45-67</div>
							</CardContent>
						</Card>
						<a
							href='https://t.me/kennynna'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Открыть чат в Telegram с @kennynna'
							className='block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg'
						>
							<Card className='cursor-pointer transition-shadow hover:shadow-md'>
								<CardContent className='p-6 text-center'>
									<Send className='h-6 w-6 text-primary mx-auto mb-2' />
									<div className='font-medium'>@kennynna</div>
								</CardContent>
							</Card>
						</a>
						<Card>
							<CardContent className='p-6 text-center'>
								<MapPin className='h-6 w-6 text-primary mx-auto mb-2' />
								<div className='font-medium'>КБР, Грозный</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</footer>
		</div>
	)
}
