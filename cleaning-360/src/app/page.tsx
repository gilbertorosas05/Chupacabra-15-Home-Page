import Link from "next/link";
import { FaBroom, FaHome, FaBath, FaStar, FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import NebraskaMapLoader from "@/components/NebraskaMapLoader";

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div>
							<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Spotless homes and businesses, 360° clean.</h1>
							<p className="mt-5 text-lg text-slate-600">Trusted professional cleaning services for Omaha, Nebraska and surrounding communities. Deep cleans, move-in/move-out, Airbnb turnovers, and recurring maintenance cleans.</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<Link href="/get-quote" className="inline-flex items-center rounded-md bg-sky-700 text-white px-6 py-3 font-semibold hover:bg-sky-800">Get a Free Quote</Link>
								<Link href="/contact" className="inline-flex items-center rounded-md border border-sky-700 text-sky-700 px-6 py-3 font-semibold hover:bg-sky-50">Contact Us</Link>
							</div>
							<p className="mt-6 flex items-center gap-2 text-slate-500 text-sm"><FaStar className="text-amber-400" /> 4.9/5 average rating • Fully insured • Satisfaction guaranteed</p>
						</div>
						<div className="relative">
							<div className="aspect-[4/3] rounded-2xl bg-sky-100/60 border border-sky-200 flex items-center justify-center">
								<FaBroom className="text-sky-600 w-24 h-24" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section id="services" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-end justify-between mb-10">
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
						<Link href="/services" className="text-sky-700 hover:underline">View all services</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 border rounded-xl">
							<FaHome className="h-8 w-8 text-sky-700" />
							<h3 className="mt-4 font-semibold text-lg">Deep Cleaning</h3>
							<p className="mt-2 text-slate-600">Comprehensive top-to-bottom clean for best first impressions or seasonal refresh.</p>
							<Link href="/services#deep-clean" className="mt-4 inline-block text-sky-700 hover:underline">Learn more</Link>
						</div>
						<div className="p-6 border rounded-xl">
							<FaBath className="h-8 w-8 text-sky-700" />
							<h3 className="mt-4 font-semibold text-lg">Move In / Move Out</h3>
							<p className="mt-2 text-slate-600">Detailed cleaning for empty homes and apartments to meet landlord or buyer standards.</p>
							<Link href="/services#move" className="mt-4 inline-block text-sky-700 hover:underline">Learn more</Link>
						</div>
						<div className="p-6 border rounded-xl">
							<FaBroom className="h-8 w-8 text-sky-700" />
							<h3 className="mt-4 font-semibold text-lg">Recurring Maid Service</h3>
							<p className="mt-2 text-slate-600">Weekly, bi-weekly, or monthly visits to keep your space consistently clean.</p>
							<Link href="/services#recurring" className="mt-4 inline-block text-sky-700 hover:underline">Learn more</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-sky-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why choose Cleaning 360?</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 border rounded-xl bg-white">
							<h3 className="font-semibold">Reliable pros</h3>
							<p className="mt-2 text-slate-600">Background-checked, trained team members who arrive on time and deliver quality.</p>
						</div>
						<div className="p-6 border rounded-xl bg-white">
							<h3 className="font-semibold">Transparent pricing</h3>
							<p className="mt-2 text-slate-600">Clear quotes with no surprises, tailored to your home and needs.</p>
						</div>
						<div className="p-6 border rounded-xl bg-white">
							<h3 className="font-semibold">Satisfaction guaranteed</h3>
							<p className="mt-2 text-slate-600">If something isn’t right, we’ll make it right. Your happiness matters.</p>
						</div>
					</div>
					<div className="mt-8">
						<Link href="/contact" className="inline-flex items-center rounded-md bg-sky-700 text-white px-6 py-3 font-semibold hover:bg-sky-800">Contact us</Link>
					</div>
				</div>
			</section>

			{/* Service Areas */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900">Service areas</h2>
					<p className="mt-3 text-slate-600">Proudly serving Omaha and nearby communities including Bellevue, Papillion, La Vista, Ralston, Bennington, Elkhorn, Gretna, Millard, Chalco, Council Bluffs (IA), Springfield, Valley, Waterloo, and more.</p>
					<div className="mt-6">
						<div className="rounded-xl border overflow-hidden">
							<NebraskaMapLoader />
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-sky-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900">What customers say</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<blockquote className="p-6 bg-white border rounded-xl">
							<p className="text-slate-700">“They made our move-out stress-free. The place looked brand new!”</p>
							<footer className="mt-3 text-sm text-slate-500">— Maria G.</footer>
						</blockquote>
						<blockquote className="p-6 bg-white border rounded-xl">
							<p className="text-slate-700">“Reliable and thorough. We love our bi-weekly cleans.”</p>
							<footer className="mt-3 text-sm text-slate-500">— James P.</footer>
						</blockquote>
						<blockquote className="p-6 bg-white border rounded-xl">
							<p className="text-slate-700">“Great communication and attention to detail. Highly recommend.”</p>
							<footer className="mt-3 text-sm text-slate-500">— Aisha K.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="py-20 bg-white">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900">FAQs</h2>
					<div className="mt-8 divide-y">
						<details className="py-4">
							<summary className="font-semibold cursor-pointer">Do I need to be home during the cleaning?</summary>
							<p className="mt-2 text-slate-600">No, as long as we have access instructions. Many clients provide a code or lockbox.</p>
						</details>
						<details className="py-4">
							<summary className="font-semibold cursor-pointer">What supplies do you use?</summary>
							<p className="mt-2 text-slate-600">We bring professional-grade, eco-friendly products. If you prefer specific brands, let us know.</p>
						</details>
						<details className="py-4">
							<summary className="font-semibold cursor-pointer">Are you insured?</summary>
							<p className="mt-2 text-slate-600">Yes, we are fully insured and bonded for your peace of mind.</p>
						</details>
					</div>
				</div>
			</section>

			{/* Start conversation CTA */}
			<section className="py-20 bg-sky-700 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold">Start a conversation</h2>
						<p className="mt-3 text-sky-100">Call or email us, or reach out on social. We’ll respond quickly.</p>
						<div className="mt-6 space-y-2">
							<p><span className="font-semibold">Phone:</span> <a href="tel:15315412373" className="underline">(531) 541-2373</a></p>
							<p><span className="font-semibold">Email:</span> <a href="mailto:gilberto@cleaning360services.com" className="underline">gilberto@cleaning360services.com</a></p>
						</div>
						<div className="mt-6 flex items-center gap-4">
							<a href="#" className="inline-flex items-center gap-2 underline"><FaInstagram /> Instagram</a>
							<a href="#" className="inline-flex items-center gap-2 underline"><FaFacebook /> Facebook</a>
							<a href="#" className="inline-flex items-center gap-2 underline"><FaGoogle /> Google Reviews</a>
						</div>
					</div>
					<div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
						<h3 className="font-semibold text-lg">Contact us</h3>
						<form action="/api/contact" method="post" className="mt-4 grid grid-cols-1 gap-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<input required name="firstName" placeholder="First name" className="border rounded-md px-3 py-2" />
								<input required name="lastName" placeholder="Last name" className="border rounded-md px-3 py-2" />
							</div>
							<input required name="phone" placeholder="Phone" className="border rounded-md px-3 py-2" />
							<input required type="email" name="email" placeholder="Email" className="border rounded-md px-3 py-2" />
							<textarea required name="message" placeholder="Message" rows={4} className="border rounded-md px-3 py-2" />
							<button className="inline-flex items-center justify-center rounded-md bg-sky-700 text-white px-4 py-2 font-semibold hover:bg-sky-800">Send message</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
