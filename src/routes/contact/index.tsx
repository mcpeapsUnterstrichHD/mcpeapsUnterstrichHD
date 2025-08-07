import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({
  component: App,
})
//text-[calc(10px+2vmin)]
function App() {
  return (
    <div className="text-center min-h-screen flex flex-col items-center justify-center ">
      <center className="w-[100vw]">
        <h1 className="text-foreground xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl ">Contact Me</h1>
        <iframe src="https://cal.com/mcpeapsunterstrichhd" title={"cal.com"} frameBorder="1" scrolling="yes" className="mx-[10vw] w-[80vw] h-[60rem] overflow-hidden border-primary border-2 rounded-lg"/>
      </center>
    </div>
  )
}
