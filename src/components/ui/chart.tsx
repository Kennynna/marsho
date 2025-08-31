// components/ui/chart.jsx
'use client'
import { ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'

export function ChartContainer({ className = '', children }) {
	return (
		<div
			className={`w-full h-56 sm:h-64 rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 ${className}`}
		>
			<ResponsiveContainer width='100%' height='100%'>
				{children}
			</ResponsiveContainer>
		</div>
	)
}

function TooltipContent({ active, payload, label }) {
	if (!active || !payload?.length) return null
	const v = payload[0]?.value
	return (
		<div className='rounded-lg bg-[var(--bg-gray)] text-[var(--text)] ring-1 ring-white/10 px-3 py-2 text-xs'>
			<div className='opacity-70'>{label}</div>
			<div className='mt-1 font-medium'>
				Продано: {v?.toLocaleString('ru-RU')}
			</div>
		</div>
	)
}

export function ChartTooltip(props) {
	return <RechartsTooltip content={<TooltipContent {...props} />} />
}
