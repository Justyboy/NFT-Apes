import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-2 sm:py-10 lg:mt-10 mt-0">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/yesiamalwaysright.jfif"
            alt="phone"
            width={225}
            height={225}
            className="feature-img"
          />
        </div>
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/quote.jfif"
            alt="phone"
            width={225}
            height={225}
            className="feature-img2"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[70%] px-10 py-2">
          {/* <div className='relative'>
            <Image
              src="/school-owl-pencil-removebg-preview.png"
              alt="camp"
              width={100}
              height={100}
              className="absolute left-[-5px] top-[-88px] w-[150px]"
            />
            <h2 className="bold-40 lg:bold-54">How It Works</h2>
          </div> */}

          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:mg-20 lg:gap-12">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>

        
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7">
        <Image src={icon} alt="map" width={75} height={75} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features