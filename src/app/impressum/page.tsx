'use client'
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
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
                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <Link href="mailto:fabian.aps@comboompunksucht.app" legacyBehavior passHref><p className="cursor-pointer">E-Mail: fabian.aps@comboompunksucht.app</p></Link></div>
                    <div className="flex flex-row items-center">
                        <Link href="tel:+4917645172171" legacyBehavior passHref><p className="cursor-pointer">Telefonnummer: +4917645172171</p></Link>
                    </div>

                </div>
            </div>

            <div className="text-2xl py-2 font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</div>
            <div className="text-lg py-1">
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, Deutschland
            </div>
        </div>
        <Footer />
      </main>
    );
  }