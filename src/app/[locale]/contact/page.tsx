"use client";

//text-[calc(10px+2vmin)]
export default function App() {
  return (
    <div className="text-center min-h-screen flex flex-col items-center justify-center w-full">
      <center className="w-full px-4">
        <h1 className="text-foreground xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl ">
          Contact Me
        </h1>
        <iframe
          src="https://cal.com/mcpeapsunterstrichhd"
          title={"cal.com"}
          frameBorder="1"
          scrolling="yes"
          className="w-full max-w-4xl h-[60rem] overflow-hidden border-primary border-2 rounded-lg"
        />
      </center>
    </div>
  );
}
