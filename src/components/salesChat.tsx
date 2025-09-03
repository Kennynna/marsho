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

const TOTAL_SALES = 106_681

// Продажи по месяцам (сумма = 106 681)
const salesData = [
	{ month: 'Сен 2024', Продажи: 4500 },
	{ month: 'Окт 2024', Продажи: 5200 },
	{ month: 'Ноя 2024', Продажи: 6500 },
	{ month: 'Дек 2024', Продажи: 7400 },
	{ month: 'Янв 2025', Продажи: 8300 },
	{ month: 'Фев 2025', Продажи: 8600 },
	{ month: 'Мар 2025', Продажи: 9500 },
	{ month: 'Апр 2025', Продажи: 10000 },
	{ month: 'Май 2025', Продажи: 10500 },
	{ month: 'Июн 2025', Продажи: 11100 },
	{ month: 'Июл 2025', Продажи: 11900 },
	{ month: 'Авг 2025', Продажи: 13181 },
]

// Компактный формат чисел для оси/подсказки
const formatNumber = (n: number) =>
	new Intl.NumberFormat('ru-RU', { notation: 'standard' }).format(n)

export function SalesChart() {
	const avg =
		Math.round(
			(salesData.reduce((acc, i) => acc + i.Продажи, 0) / salesData.length) * 1
		) || 0

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold text-center'>
					Продажи за 12 месяцев
				</CardTitle>
			</CardHeader>

			<CardContent>
				<div className='h-[300px] w-full'>
					<ResponsiveContainer width='100%' height='100%'>
						<AreaChart data={salesData}>
							<defs>
								<linearGradient id='salesGradient' x1='0' y1='0' x2='0' y2='1'>
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
								tickFormatter={v => formatNumber(v)}
							/>

							<Tooltip
								contentStyle={{
									backgroundColor: '#44403c',
									border: '1px solid white',
									borderRadius: '10px',
									color: 'hsl(var(--card-foreground))',
								}}
								labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
								formatter={(value: number) => [formatNumber(value), 'Продажи']}
							/>

							{/* Линия и заливка в стилистике твоего компонента */}
							<Area
								type='monotone'
								dataKey='Продажи'
								stroke='oklch(92.2% 0 0)'
								strokeWidth={2}
								fill='url(#salesGradient)'
								dot={false}
								activeDot={{ r: 4 }}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>

				<div className='mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground max-[775px]:grid-cols-1  w-full'>
					<span className='text-white font-bold p-2 rounded-2xl  bg-[#292524] flex items-center gap-2 w-full justify-center max-[773px]:justify-between'>
						Всего позиций продано:{' '}
						<span className='text-2xl font-bold text-[#16a34a]'>
							{TOTAL_SALES.toLocaleString('ru-RU')}
						</span>
					</span>

					<span className='text-white font-bold p-2 rounded-2xl   bg-[#292524] flex items-center gap-2 w-full justify-center max-[773px]:justify-between'>
						В среднем за месяц:{' '}
						<span className='text-2xl font-bold text-[#16a34a]'>
							{avg.toLocaleString('ru-RU')}
						</span>
					</span>
				</div>
			</CardContent>
		</Card>
	)
}
