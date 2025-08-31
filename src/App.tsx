import { Button } from '@/components/ui/button'
import { Main } from './components/Main'
import { Route, Routes } from 'react-router'
import CatalogPage from './components/Catalog'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<header className='sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border'>
				<nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
					<div className='font-bold text-xl'>ТК "MARSHO"</div>
					<Button variant='outline' size='sm'>
						Каталог
					</Button>
				</nav>
			</header>

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='catalog' element={<CatalogPage />} />
			</Routes>
			{/* Footer */}
			<footer className='border-t border-border mt-16'>
				<div className='container mx-auto px-4 py-8'>
					<div className='text-center text-muted-foreground'>
						<p className='mb-2'>© 2024 ТК "Регион" - Оптовые поставки</p>
						<p className='text-sm'>ИНН 0000000000 • ОГРН 0000000000000</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
