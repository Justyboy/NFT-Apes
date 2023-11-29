import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-8">
          <h2 className="bold-40 lg:bold-52 xl:max-w-[360px] text-white">Guarantee your success!</h2>
          <p className="regular-16 text-gray-50"></p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          
            <Button 
              type="button"
              title="Book Now"
  
              variant="btn_dark_green_outline"
              w-full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end rounded-3xl">
          <Image className="rounded-3xl" src="/teacherstudentcrop.jpeg" alt="mrs lovett teaching" width={550} height={670} />
        </div>
      </div>
    </section>
  )
}

export default GetApp