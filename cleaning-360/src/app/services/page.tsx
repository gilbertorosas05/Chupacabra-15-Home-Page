export default function ServicesPage() {
	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-4xl font-bold">Services</h1>
			<p className="mt-3 text-slate-600">Flexible options to fit your home or business.</p>

			<section id="deep-clean" className="mt-10 border-t pt-10">
				<h2 className="text-2xl font-semibold">Deep Cleaning</h2>
				<p className="mt-2 text-slate-700">A detailed top-to-bottom cleaning including baseboards, light fixtures, cabinet exteriors, and hard-to-reach areas. Ideal for first-time service or seasonal refresh.</p>
			</section>

			<section id="move" className="mt-10 border-t pt-10">
				<h2 className="text-2xl font-semibold">Move In / Move Out</h2>
				<p className="mt-2 text-slate-700">Perfect for empty homes and apartments. We focus on interiors of cabinets, refrigerators, ovens, and ensure the property is ready for handover.</p>
			</section>

			<section id="recurring" className="mt-10 border-t pt-10">
				<h2 className="text-2xl font-semibold">Recurring Maid Service</h2>
				<p className="mt-2 text-slate-700">Weekly, biweekly, or monthly cleans to maintain fresh bathrooms, kitchens, dust-free surfaces, and tidy living spaces.</p>
			</section>

			<section id="airbnb" className="mt-10 border-t pt-10">
				<h2 className="text-2xl font-semibold">Airbnb / Short-term Rental Turnovers</h2>
				<p className="mt-2 text-slate-700">Fast, consistent turnovers with hotel-style resets, linen change, and consumables restock as requested.</p>
			</section>
		</div>
	);
}