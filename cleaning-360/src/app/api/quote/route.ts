import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

export async function POST(req: NextRequest) {
	try {
		const form = await req.formData();
		const firstName = String(form.get("firstName") || "");
		const lastName = String(form.get("lastName") || "");
		const email = String(form.get("email") || "");
		const phone = String(form.get("phone") || "");
		const address = String(form.get("address") || "");
		const city = String(form.get("city") || "");
		const state = String(form.get("state") || "");
		const zip = String(form.get("zip") || "");
		const bedrooms = String(form.get("bedrooms") || "");
		const bathrooms = String(form.get("bathrooms") || "");
		const serviceType = String(form.get("serviceType") || "");
		const message = String(form.get("message") || "");

		if (!firstName || !lastName || !email || !phone || !city || !state || !zip || !bedrooms || !bathrooms || !serviceType) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT || 587),
			secure: Boolean(process.env.SMTP_SECURE === "true"),
			auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
		});

		const toEmail = process.env.CONTACT_TO_EMAIL || "gilberto@cleaning360services.com";
		await transporter.sendMail({
			from: process.env.MAIL_FROM || process.env.SMTP_USER,
			to: toEmail,
			subject: `New quote request from ${firstName} ${lastName}`,
			html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
			<p><strong>Bedrooms/Bathrooms:</strong> ${bedrooms}/${bathrooms}</p>
			<p><strong>Service Type:</strong> ${serviceType}</p>
			<p><strong>Message:</strong><br/>${message}</p>`,
		});

		if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM && process.env.NOTIFY_PHONE) {
			const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
			await client.messages.create({
				from: process.env.TWILIO_FROM,
				to: process.env.NOTIFY_PHONE,
				body: `New quote: ${firstName} ${lastName}, ${city}, ${state}. ${bedrooms}bd/${bathrooms}ba. ${serviceType}.`,
			});
		}

		return NextResponse.redirect(new URL("/get-quote?success=1", req.url));
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}