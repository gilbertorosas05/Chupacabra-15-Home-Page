"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						<Logo />
						<span className="font-semibold text-lg tracking-wide">Cleaning 360</span>
					</Link>
					<nav className="hidden md:flex items-center gap-8 text-sm">
						<Link href="/services" className="hover:text-sky-700">Services</Link>
						<Link href="/about" className="hover:text-sky-700">About Us</Link>
						<Link href="/contact" className="hover:text-sky-700">Contact</Link>
						<Link href="/get-quote" className="inline-flex items-center rounded-md bg-sky-700 text-white px-4 py-2 hover:bg-sky-800">Get a Quote</Link>
					</nav>
					<button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
						{open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
					</button>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t border-black/5 bg-white">
					<nav className="px-4 py-4 flex flex-col gap-3 text-sm">
						<Link href="/services" onClick={() => setOpen(false)}>Services</Link>
						<Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
						<Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
						<Link href="/get-quote" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-sky-700 text-white px-4 py-2">Get a Quote</Link>
					</nav>
				</div>
			)}
		</header>
	);
}