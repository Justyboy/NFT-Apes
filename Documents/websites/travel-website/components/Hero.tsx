import Image from "next/image"
import Button from "./Button"


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-8  lg:py-20 xl:flex-row">
      <div className="hero-map"/>
      

      {/* Left */}
<div className="relative z-20 mx-auto px-4 flex flex-1 flex-col w-full">
<div className="animate-spin-slow left-full top-1/2 translate-x-full translate-y-1/2">
<Image  src="/circledots.png" 
alt="spinning dots" 
width={450} height={550} 
className="absolute left-[-5px] top-[-60px] w-100 lf:w-[50px]" 
/> 
{/* <h2 className="text-2xl font-bold text-gray-300">Sample scrolling text here</h2>
  */}
 </div>
{/* <Image  src="/school-owl-pen-removebg-preview.png" alt="Owl with pen" width={150} height={150} className="absolute left-[-5px] top-[-60px] w-100 lf:w-[50px]" /> */}

 <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold">Tutoring for when you need it the most.</h1>
 <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
  Tutoring Nassau County specializing in Math
 </p>

 <div className="my-11 flex flex-wrap gap-5">
  <div className="flex items-center gap-2">
    {Array(5).fill(1).map((_, index) => (
      <Image
      src="/star.svg"
      key={index}
      alt="star"
      width={24}
      height={24}
      />
    ))}
  </div>

  <p className="bold-16 lg:bold-20 text-blue-70">
    198k
    <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
  </p>
 </div>

 <div className="flex flex-col w-full gap-3 sm:flex-row">
  <Button type="button" title="Book Now" variant="btn_green"
  />
 
 </div>
</div>

<div className="relative flex flex-1">
<div className="relative z-20 rounded-3xl  shadow-2xl flex flex-col gap-4 bg-white bg-cover md:w-[100%] w-[90%] h-[auto] mx-auto  py-4 pt-8 pb-30 lg:pb-20 px-4  ">
  
<div className="flex flex-col px-8">
  <div className="flexBetween hand-text">
  <p className="bold-32 text-gray-900 pb-4 hand-text"> Today's Class </p>
    <Image src="/school-owl-thumbsup-removebg-preview.png" alt="close" width={150} height={250} />
  </div>
 
</div>


  <div className="flexBetween">
  <div className="flex flex-col px-8 hand-text">
    <p className="text-2xl sm:text-4xl  block text-gray-700 font-bold italic">The month of December booking now</p>
    <ul className="pl-10 list-decimal">
    <li className="text-2xl sm:text-4xl  text-gray-700 pt-8">Math</li>
    <li className="text-2xl sm:text-4xl  text-gray-700">Per Hour Tutoring</li>
    <li className="text-2xl sm:text-4xl  text-gray-700">Zoom or locally</li>
    </ul>
  </div>

</div>

  
</div>
</div>


      </section>
  )
}

export default Hero