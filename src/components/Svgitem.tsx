import React from 'react'

type PathCfg = {
	id?: string
	d: string
	lights?: number // кол-во «ламп»
	speed?: number // сек на обход
}

const paths: PathCfg[] = [
	{ id: 'p1', d: 'M 24 220 C 220 140 520 280 1176 160', lights: 10, speed: 8 },
	{ id: 'p2', d: 'M 24 120 Q 320 20 600 120 T 1176 90', lights: 12, speed: 10 },
	{
		id: 'p3',
		d: 'M 24 265 L 220 265 L 420 205 L 640 240 L 940 180 L 1176 215',
		lights: 8,
		speed: 7,
	},
]

export default function RunningLightsSVG() {
	return (
		<div className='w-full rounded-2xl border border-border bg-[#0b0b0c] p-4'>
			<svg
				viewBox='0 0 1200 300'
				width='100%'
				height='300'
				xmlns='http://www.w3.org/2000/svg'
				style={{ display: 'block' }}
			>
				<defs>
					{/* Неоновое свечение */}
					<filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
						<feGaussianBlur stdDeviation='4' result='blur' />
						<feMerge>
							<feMergeNode in='blur' />
							<feMergeNode in='SourceGraphic' />
						</feMerge>
					</filter>

					{/* Встроенный CSS для анимаций */}
					<style>
						{`
              .line-base {
                fill: none;
                stroke: oklch(92.2% 0 0);            /* светлая линия, как у тебя */
                stroke-width: 0.5;
                filter: url(#glow);
                vector-effect: non-scaling-stroke;
                shape-rendering: geometricPrecision;
              }
              .line-dash {
                fill: none;
                stroke: hsl(var(--chart-1));         /* оттенок из твоей палитры */
                stroke-width: 2;
                stroke-dasharray: 12 16;
                filter: url(#glow);
                animation: flow 3.6s linear infinite;
              }
              @keyframes flow {
                to { stroke-dashoffset: -200; }
              }
            `}
					</style>
				</defs>

				{/* Сетка (необязательно) */}
				<g opacity='0.2' stroke='hsl(var(--border))' strokeDasharray='3 3'>
					{[...Array(6)].map((_, i) => (
						<line
							key={i}
							x1='24'
							x2='1176'
							y1={60 * (i + 1)}
							y2={60 * (i + 1)}
						/>
					))}
				</g>

				{/* Линии + бегущие штрихи + лампы */}
				{paths.map((p, idx) => (
					<g
						key={p.id ?? idx}
						aria-label={`line-${idx}`}
						style={{ pointerEvents: 'none' }}
					>
						{/* Основная линия */}
						<path id={p.id ?? `path-${idx}`} d={p.d} className='line-base' />

						{/* Бегущая штриховка поверх */}
						<path d={p.d} className='line-dash'>
							{/* дублируем анимацию через SMIL для лучшей поддерживаемости */}
							<animate
								attributeName='stroke-dashoffset'
								from='0'
								to='-200'
								dur='3.6s'
								repeatCount='indefinite'
							/>
						</path>

						{/* Точки-«светильники», бегущие по траектории */}
						{Array.from({ length: p.lights ?? 8 }).map((_, i) => {
							const dur = (p.speed ?? 8) + (idx % 2 ? 1.2 : 0) // немного варьируем
							const begin = (i * (dur / (p.lights ?? 8))).toFixed(2) + 's'
							const r = 3.5
							return (
								<g key={i} filter='url(#glow)'>
									<circle r={r} fill='hsl(var(--chart-1))' opacity='0.95'>
										<animate
											attributeName='r'
											values={`${r};${r * 1.3};${r}`}
											dur='1.2s'
											begin={begin}
											repeatCount='indefinite'
										/>
										<animate
											attributeName='opacity'
											values='0.7;1;0.7'
											dur='1.2s'
											begin={begin}
											repeatCount='indefinite'
										/>
										<animateMotion
											dur={`${dur}s`}
											begin={begin}
											rotate='auto'
											repeatCount='indefinite'
										>
											{/* И href, и xlinkHref — для совместимости */}
											<mpath
												href={`#${p.id ?? `path-${idx}`}`}
												xlinkHref={`#${p.id ?? `path-${idx}`}`}
											/>
										</animateMotion>
									</circle>
								</g>
							)
						})}
					</g>
				))}
			</svg>
		</div>
	)
}
