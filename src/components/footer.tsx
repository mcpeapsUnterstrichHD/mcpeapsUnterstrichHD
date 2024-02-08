"use client"



export default function Footer() {
    const today = new Date();
  return (
    <div className="-z-4 flex flex-col text-center items-center justify-center margin-top-auto text-sm mb-5 pt-10 snap-y snap-mandatory snap-center place-content-end no-print">
  <div className="pb-4 -z-4">
  <a href="/" className="-z-4 item-center flex flex-row justify-center text-center text-sm font-bold">&copy; {today.getFullYear()} Fabian Aps</a>
  </div>
  <div className="flex flex-row justify-center items-center text-center text-sm -z-4 5 pb-4 after:bottom-0 before:bottom-0 snap-y snap-mandatory snap-center place-content-end">
    <a href="https://linktr.ee/mcpeaps_hd" target="_blank" className="font-bold -z-4 snap-y snap-mandatory snap-center place-content-end">Linksammlung </a> |
    <a href="/" className="font-bold -z-4 snap-y snap-mandatory snap-center place-content-end"> Fabian Aps</a> |
    <a href="/impressum" className="font-bold -z-4 snap-y snap-mandatory snap-center place-content-end"> Impressum</a>
  </div>
</div>
  );
}
