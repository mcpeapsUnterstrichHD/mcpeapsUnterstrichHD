"use client"



export default function Footer() {
    const today = new Date();
  return (
    <footer className="z-0 item-center justify-center text-center text-gray-500 text-sm block bottom-0 mb-5 pt-10 no-print">
  
  <div className="pb-4 z-0">
  <a href="/" className="z-0 item-center justify-center text-center text-gray-500 text-md font-bold">&copy; {today.getFullYear()} Fabian Aps</a>
  </div>
  <div className="inline z-0 opacity-75 pb-4">
    <a href="https://linktr.ee/mcpeaps_hd" target="_blank" className="font-bold z-0">Linksammlung </a> |
    <a href="/" className="font-bold z-0"> Fabian Aps</a> |
    <a href="/impressum" className="font-bold z-0"> Impressum</a>
  </div>
</footer>
  );
}
