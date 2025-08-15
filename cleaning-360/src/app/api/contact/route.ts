import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

export async function POST(req: NextRequest) {
	try {
		const form = await req.formData();
		const firstName = String(form.get("firstName") || "");
		const lastName = String(form.get("lastName") || "");
		const phone = String(form.get("phone") || "");
		const email = String(form.get("email") || "");
		const message = String(form.get("message") || "");

		if (!firstName || !lastName || !phone || !email || !message) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		// Send email
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT || 587),
			secure: Boolean(process.env.SMTP_SECURE === "true"),
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const toEmail = process.env.CONTACT_TO_EMAIL || "gilberto@cleaning360services.com";
		await transporter.sendMail({
			from: process.env.MAIL_FROM || process.env.SMTP_USER,
			to: toEmail,
			subject: `New contact message from ${firstName} ${lastName}`,
			html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Message:</strong><br/>${message}</p>`,
		});

		// Send SMS notification
		if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM && process.env.NOTIFY_PHONE) {
			const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
			await client.messages.create({
				from: process.env.TWILIO_FROM,
				to: process.env.NOTIFY_PHONE,
				body: `New contact from ${firstName} ${lastName}. Phone: ${phone}. Email: ${email}.`,
			});
		}

		return NextResponse.redirect(new URL("/contact?success=1", req.url));
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}