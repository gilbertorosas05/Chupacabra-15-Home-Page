# Cleaning 360 Website

Full-stack Next.js (App Router) site for a cleaning business in Omaha, NE.

## Tech
- Next.js 14, TypeScript, Tailwind CSS
- Nodemailer for email
- Twilio for SMS notifications
- React Leaflet for map

## Environment
Copy `.env.example` to `.env.local` and fill in values:

```
cp .env.example .env.local
```

Required keys:
- SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO_EMAIL
- TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM, NOTIFY_PHONE

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm start
```
