import Link from "next/link";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="border-t border-black/5 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
					<div>
						<h3 className="font-semibold text-gray-900 mb-3">Cleaning 360</h3>
						<p className="text-gray-600">Professional cleaning services in Omaha, NE and nearby areas.</p>
					</div>
					<div>
						<h4 className="font-semibold text-gray-900 mb-3">Company</h4>
						<ul className="space-y-2">
							<li><Link href="/services" className="hover:text-sky-700">Services</Link></li>
							<li><Link href="/about" className="hover:text-sky-700">About</Link></li>
							<li><Link href="/contact" className="hover:text-sky-700">Contact</Link></li>
							<li><Link href="/get-quote" className="hover:text-sky-700">Get a Quote</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
						<ul className="space-y-2 text-gray-600">
							<li>Phone: <a className="hover:text-sky-700" href="tel:15315412373">(531) 541-2373</a></li>
							<li>Email: <a className="hover:text-sky-700" href="mailto:gilberto@cleaning360services.com">gilberto@cleaning360services.com</a></li>
							<li>Omaha, Nebraska</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-gray-900 mb-3">Social</h4>
						<div className="flex items-center gap-4 text-gray-700">
							<a href="#" aria-label="Instagram" className="hover:text-pink-600"><FaInstagram className="h-5 w-5" /></a>
							<a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebook className="h-5 w-5" /></a>
							<a href="#" aria-label="Google" className="hover:text-red-600"><FaGoogle className="h-5 w-5" /></a>
						</div>
					</div>
				</div>
				<p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Cleaning 360. All rights reserved.</p>
			</div>
		</footer>
	);
}