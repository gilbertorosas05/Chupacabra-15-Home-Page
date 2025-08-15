export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-4xl font-bold">Contact Us</h1>
			<p className="mt-2 text-slate-600">We respond quickly. Call (531) 541-2373 or use the form below.</p>
			<form action="/api/contact" method="post" className="mt-8 grid grid-cols-1 gap-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input required name="firstName" placeholder="First name" className="border rounded-md px-3 py-2" />
					<input required name="lastName" placeholder="Last name" className="border rounded-md px-3 py-2" />
				</div>
				<input required name="phone" placeholder="Phone" className="border rounded-md px-3 py-2" />
				<input required type="email" name="email" placeholder="Email" className="border rounded-md px-3 py-2" />
				<textarea required name="message" placeholder="Message" rows={5} className="border rounded-md px-3 py-2" />
				<button className="inline-flex items-center justify-center rounded-md bg-sky-700 text-white px-4 py-2 font-semibold hover:bg-sky-800">Send message</button>
			</form>
		</div>
	);
}