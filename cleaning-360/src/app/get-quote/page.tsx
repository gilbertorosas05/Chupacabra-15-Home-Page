export default function GetQuotePage() {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-4xl font-bold">Get a Quote</h1>
			<p className="mt-2 text-slate-600">Tell us about your place and we’ll send a customized quote.</p>
			<form action="/api/quote" method="post" className="mt-8 grid grid-cols-1 gap-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input required name="firstName" placeholder="First name" className="border rounded-md px-3 py-2" />
					<input required name="lastName" placeholder="Last name" className="border rounded-md px-3 py-2" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input required type="email" name="email" placeholder="Email" className="border rounded-md px-3 py-2" />
					<input required name="phone" placeholder="Phone" className="border rounded-md px-3 py-2" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<input required name="address" placeholder="Street address" className="border rounded-md px-3 py-2 md:col-span-3" />
					<input required name="city" placeholder="City" className="border rounded-md px-3 py-2" />
					<input required name="state" placeholder="State" className="border rounded-md px-3 py-2" />
					<input required name="zip" placeholder="ZIP code" className="border rounded-md px-3 py-2" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<input required name="bedrooms" type="number" min={0} placeholder="Bedrooms" className="border rounded-md px-3 py-2" />
					<input required name="bathrooms" type="number" min={0} placeholder="Bathrooms" className="border rounded-md px-3 py-2" />
					<select name="serviceType" className="border rounded-md px-3 py-2">
						<option>Airbnb</option>
						<option>Move In / Move Out</option>
						<option>Deep Cleaning</option>
						<option>One-time Clean</option>
						<option>Weekly Clean</option>
						<option>Biweekly Clean</option>
						<option>Monthly Clean</option>
					</select>
				</div>
				<textarea name="message" placeholder="What would you like us to focus on?" rows={6} className="border rounded-md px-3 py-2" />
				<button className="inline-flex items-center justify-center rounded-md bg-sky-700 text-white px-4 py-2 font-semibold hover:bg-sky-800">Request quote</button>
			</form>
		</div>
	);
}