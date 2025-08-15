export default function Logo() {
	return (
		<svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#0ea5e9" />
					<stop offset="100%" stopColor="#0369a1" />
				</linearGradient>
			</defs>
			<circle cx="32" cy="32" r="30" stroke="url(#g)" strokeWidth="4" />
			<path d="M22 34c6 4 14 4 20 0" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
			<path d="M18 26c8 6 20 6 28 0" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" />
			<circle cx="50" cy="14" r="4" fill="#38bdf8" />
		</svg>
	);
}