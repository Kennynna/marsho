'use client'

import {
	Area,
	AreaChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const clientGrowthData = [
	{ month: 'Окт 2023', Клиенты: 0 },
	{ month: 'Ноя 2023', Клиенты: 10 },
	{ month: 'Дек 2023', Клиенты: 15 },
	{ month: 'Янв 2024', Клиенты: 20 },
	{ month: 'Фев 2024', Клиенты: 25 },
	{ month: 'Мар 2024', Клиенты: 35 },
	{ month: 'Апр 2024', Клиенты: 58 },
	{ month: 'Май 2024', Клиенты: 85 },
	{ month: 'Июн 2024', Клиенты: 120 },
	{ month: 'Июл 2024', Клиенты: 165 },
	{ month: 'Авг 2024', Клиенты: 210 },
	{ month: 'Сен 2024', Клиенты: 260 },
	{ month: 'Окт 2024', Клиенты: 315 },
	{ month: 'Ноя 2024', Клиенты: 375 },
	{ month: 'Дек 2024', Клиенты: 440 },
	{ month: 'Янв 2025', Клиенты: 510 },
	{ month: 'Фев 2025', Клиенты: 580 },
	{ month: 'Мар 2025', Клиенты: 650 },
	{ month: 'Апр 2025', Клиенты: 720 },
	{ month: 'Май 2025', Клиенты: 790 },
	{ month: 'Июн 2025', Клиенты: 860 },
	{ month: 'Июл 2025', Клиенты: 920 },
	{ month: 'Авг 2025', Клиенты: 1150 },
]

export function ClientGrowthChart() {
	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold text-center'>
					Рост клиентской базы
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='h-[300px] w-full'>
					<ResponsiveContainer width='100%' height='100%'>
						<AreaChart data={clientGrowthData}>
							<defs>
								<linearGradient id='clientGradient' x1='0' y1='0' x2='0' y2='1'>
									<stop
										offset='5%'
										stopColor='hsl(var(--chart-1))'
										stopOpacity={0.8}
									/>
									<stop
										offset='95%'
										stopColor='hsl(var(--chart-1))'
										stopOpacity={0.1}
									/>
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray='3 3'
								stroke='hsl(var(--border))'
							/>
							<XAxis
								dataKey='month'
								stroke='oklch(94.3% 0.029 294.588)'
								fontSize={12}
								tickLine={false}
								axisLine={false}
								interval='preserveStartEnd'
								tick={{ fontSize: 10, fontWeight: '500' }}
							/>
							<YAxis
								stroke='oklch(94.3% 0.029 294.588)'
								fontSize={12}
								tickLine={false}
								axisLine={false}
								tickFormatter={value => `${value}`}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: '#44403c',
									border: '1px solid white',
									borderRadius: '10px',
									color: 'hsl(var(--card-foreground))',
								}}
								labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
							/>
							<Area
								type='monotone'
								dataKey='Клиенты'
								stroke='oklch(92.2% 0 0)'
								fillOpacity={1}
								fill='oklch(55.6% 0 0)'
								strokeWidth={2}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
				<div className='mt-4 flex items-center justify-between text-sm text-muted-foreground gap-2 max-[773px]:flex-col max-[1920px]:justify-center'>
					<span className='text-white font-bold border-border  p-2 rounded-2xl bg-[#292524] flex items-center gap-2 w-full justify-center max-[773px]:justify-between'>
						Новых клиента каждую неделю
						<span className='text-2xl font-bold text-[#16a34a]  mb-1 '>
							+2-3{' '}
						</span>
					</span>
					<span className='text-white font-bold  p-2  bg-[#292524] flex items-center gap-2 rounded-2xl  w-full justify-center max-[773px]:justify-between'>
						Активных клиентов
						<span className='text-2xl font-bold text-[#16a34a]  mb-1'>
							+1150{' '}
						</span>
					</span>
				</div>
			</CardContent>
		</Card>
	)
}
