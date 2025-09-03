import { Card } from '@/components/ui/card'
import { Badge } from './ui/badge'

interface ProductDetailsProps {
	diversity: string[]
	mainImgUrl: string
}
export const ProductDetails = ({
	diversity,
	mainImgUrl,
}: ProductDetailsProps) => {
	return (
		<section className='container mx-auto px-4 py-16'>
			<div className='grid lg:grid-cols-2 gap-12 items-center'>
				{/* Product Image */}
				<div className='relative'>
					<div className='aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-chart-2/20 to-chart-3/20 p-4'>
						<img
							src={mainImgUrl}
							alt='Разнообразие попкорна и сладостей'
							className='w-full h-full object-cover rounded-xl brightness-85'
						/>
					</div>
				</div>

				{/* Product Description */}
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold text-foreground'>
							Премиальное качество
						</h2>
						<p className='text-lg text-muted-foreground text-pretty'>
							Попкорн изготавливается из отборных зерен кукурузы с
							использованием традиционных рецептов. Каждая партия проходит
							строгий контроль качества.
						</p>
					</div>

					<div className='grid gap-6'>
						<Card className='p-6 border-chart-2/20 bg-chart-2/5'>
							<h3 className='text-xl font-semibold text-chart-2 mb-3'>
								Линейка товаров
							</h3>
							<div className='flex items-center flex-wrap gap-2'>
								{diversity.map((item: string, index) => (
									<Badge
										variant='outline'
										className={` border-chart-${String(
											index + 1
										)}/30  ml-2 text-[16px]`}
									>
										{item}
									</Badge>
								))}
							</div>
						</Card>

						<Card className='p-6 border-chart-5/20 bg-chart-5/5'>
							<h3 className='text-xl font-semibold text-chart-5 mb-3'>
								Внимание!
							</h3>
							<p className='text-muted-foreground'>
								Товар продается упаковками
							</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
