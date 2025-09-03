import { Badge } from '@/components/ui/badge'

interface CategoryHeroProps {
	category: string
	company: string
	desc: string
}
export const CategoryHero = ({
	category,
	company,
	desc,
}: CategoryHeroProps) => {
	return (
		<section className='container mx-auto px-4 py-16'>
			<div className='text-center space-y-6'>
				<Badge
					variant='outline'
					className='text-chart-2 border-chart-2/30 bg-chart-2/10'
				>
					{category}
				</Badge>
				<h1 className='text-4xl md:text-6xl font-bold text-balance'>
					<span className='bg-gradient-to-r from-chart-2 via-chart-3 to-chart-4 bg-clip-text text-transparent'>
						"{company}"
					</span>
				</h1>
				<p className='text-xl text-muted-foreground max-w-3xl mx-auto text-pretty'>
					{desc}
				</p>
			</div>
		</section>
	)
}
