'use client';

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'


const Navbar = () => {
 const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className="border-2 borer-red-500 flexBetween padding-container relative z-30 py-5">
        <Link href="/">
    <Image 
    src="/hilink-logo.svg"
     alt="logo" 
     width={75} 
     height={30} />
        </Link>

        <ul className="hidden h-full gap-12 md:flex">
    {NAV_LINKS.map((link) =>(
    <Link href={link.href} key={link.key} className="regular-16
    text-gray-50 flexCenter cursor-pointer pb-1.5 transition-allhover:font-bold">
        {link.label}
    </Link>
))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button  
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          />
        </div>

        {/* Mobile Nav */}

<button onClick={() => setToggleDropdown((prev)=> !prev )} 
className="p-2 text-gray-700 rounded-md">


{toggleDropdown ? (
  <Image 
        src="menu_close.svg"
        alt="close"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        
        />
) : (

  <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        
        />

)}
       

       <div className={`flex-1 justify-self-center pb-3 mt08 lg:block md:pb-0 md:mt-0 
${toggleDropdown ? 'p-12 md:p-0 block' : 'hidden'}`}>
   
   <ul className="lg:hidden inline-block h-full gap-12">
    {NAV_LINKS.map((link) =>(
    <Link href={link.href} key={link.key} className="regular-16
    text-gray-50 flexCenter cursor-pointer pb-1.5 transition-allhover:font-bold">
        {link.label}
    </Link>
))}

        </ul>
   </div> 
       </button>






    </nav>
  )
}




export default Navbar