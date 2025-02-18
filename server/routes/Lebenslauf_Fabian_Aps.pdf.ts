import { defineEventHandler, setHeader, send } from "h3";

export default defineEventHandler(async (event) => {
	const { page } = await hubBrowser();

	await page.setViewport({
		width: 2440,
		height: 3468,
		deviceScaleFactor: 1,
	});

	// Deine Nuxt-Seite rendern lassen
	const url =
		process.env.NODE_ENV === "production"
			? "https://mcpeapsunterstrichhd.dev/lebenslauf-pdf"
			: "http://localhost:3000/lebenslauf-pdf";

	await page.goto(url,{
		waitUntil: "networkidle2",
	});

	// PDF generieren
	const pdfBuffer = await page.pdf({
		format: "A4",
		printBackground: true,
		margin: {
			top: "20px",
			bottom: "20px",
			left: "20px",
			right: "20px",
		},
		landscape: false,
		preferCSSPageSize: true,
		pageRanges: "1-2",
		scale: 0.6,
	});

	// Header setzen
	setHeader(event, "Content-Type", "application/pdf");
	setHeader(
		event,
		"Content-Disposition",
		'attachment; filename="Lebenslauf_Fabian_Aps.pdf"',
	);

	// PDF an den Client senden
	return send(
		event,
		pdfBuffer,
		"application/pdf",
		'attachment; filename="Lebenslauf_Fabian_Aps.pdf"',
	);
});