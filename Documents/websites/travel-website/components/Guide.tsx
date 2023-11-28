import Image from 'next/image'
import Button from './Button'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full sm:mt-6 sm:py-14 md:py-24">
        <Image src="/school-owl-pen-removebg-preview.png" alt="camp" width={175} height={175} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-[#44b39d]">
          I am here to help improve you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Get the tutoring from an experienced teacher this is the best way to learn</p>
        
       
        </div>

      </div>

      {/* <div className="flexCenter max-container relative w-full">
        <Image 
          src="/applebooks.jpg"
          alt="boat"
          width={1440}
          height={480}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
        
          <div className="flexBetween flex-col">

            <Image 
            src="/school-owl-pencil-removebg-preview.png"
            alt="meter"
            width={100}
            height={158}
            className="h-full w-auto"
          />
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Guide