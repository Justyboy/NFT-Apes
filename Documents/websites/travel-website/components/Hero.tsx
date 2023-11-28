import Image from "next/image"
import Button from "./Button"


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-8  lg:py-20 xl:flex-row">
      <div className="hero-map"/>
      

      {/* Left */}
<div className="relative z-20 mx-4 flex flex-1 flex-col w-full">

{/* <Image  src="/school-owl-pen-removebg-preview.png" alt="Owl with pen" width={150} height={150} className="absolute left-[-5px] top-[-60px] w-100 lf:w-[50px]" /> */}

 <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold">Tutoring whenever and wherever they need it the most.</h1>
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
<div className="relative z-20 rounded-3xl flex flex-col gap-4 bg-sm-bg bg-cover w-[100%] h-[auto]  py-4 pt-8 pb-30 lg:pb-20 px-4  ">
  
<div className="flex flex-col px-8">
  <div className="flexBetween hand-text">
  <p className="bold-32 text-gray-10 pb-4 hand-text"> Today's Class </p>
    <Image src="/school-owl-thumbsup-removebg-preview.png" alt="close" width={150} height={250} />
  </div>
 
</div>


  <div className="flexBetween">
  <div className="flex flex-col px-8 hand-text">
    <p className="text-2xl sm:text-4xl  block text-gray-10 font-bold italic">The month of December booking now</p>
    <ul className="pl-20 list-decimal">
    <li className="text-2xl sm:text-4xl  text-gray-10 pt-4">Math</li>
    <li className="text-2xl sm:text-4xl  text-gray-10">Per Hour Tutoring</li>
    <li className="text-2xl sm:text-4xl  text-gray-10">Zoom or locally</li>
    </ul>
  </div>

</div>

  
</div>
</div>


      </section>
  )
}

export default Hero