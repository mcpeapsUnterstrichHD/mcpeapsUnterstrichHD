"use client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between m-4">
      <div className="mt-5 pb-12">
        <div className="mb-2 w-full font-bold text-3xl">Impressum</div>

        <div className="py-2 font-bold text-2xl">Angaben gemäß § 5 TMG:</div>
        <a
          href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
          target="_blank"
          rel="noreferrer"
        >
          <div className="py-1 text-lg">
            Aps, Fabian
            <br />
            Ludwig-Renn-Straße 33
            <br />
            12679 Berlin, Deutschland
          </div>
        </a>

        <div className="py-2 font-bold text-2xl">Kontakt:</div>
        <div className="py-1 text-lg">
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center">
              <a
                href="mailto:aps.fabian@mcpeapsunterstrichhd.dev"
                target="_blank"
                rel="noreferrer"
              >
                <p>E-Mail: aps.fabian@mcpeapsunterstrichhd.dev</p>
              </a>
            </div>
            <div className="flex flex-row items-center">
              <a href="tel:+4917645172171" target="_blank" rel="noreferrer">
                <p>Telefonnummer: +4917645172171</p>
              </a>
            </div>
          </div>
        </div>

        <div className="py-2 font-bold text-2xl">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </div>
        <a
          href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
          target="_blank"
          rel="noreferrer"
        >
          <div className="py-1 text-lg">
            Aps, Fabian
            <br />
            Ludwig-Renn-Straße 33
            <br />
            12679 Berlin, Deutschland
          </div>
        </a>
      </div>
    </div>
  );
}
