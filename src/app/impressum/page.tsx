import Link from "next/link";



export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="pb-12 mt-5">
            <div className="text-3xl w-full font-bold mb-2">Impressum</div>

            <div className="text-2xl py-2 font-bold">Angaben gemäß § 5 TMG:</div>
            <div className="text-lg py-1">
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, Deutschland
            </div>

            <div className="text-2xl py-2 font-bold">Kontakt:</div>
            <div className="text-lg py-1">
                <div className="flex flex-row justify-between items-center">
                <p>E-Mail: </p><Link href="mailto:fabian.aps@comboompunksucht.app" legacyBehavior passHref><p>fabian.aps@comboompunksucht.app</p></Link><p>;</p><p>Telefonnummer: </p><Link href="tel:+4917645172171" legacyBehavior passHref><p>+4917645172171</p></Link>
                </div>
            </div>

            <div className="text-2xl py-2 font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</div>
            <div className="text-lg py-1">
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, Deutschland
            </div>
        </div>
      </main>
    );
  }