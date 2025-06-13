"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
export default function NavigationBar() {

      useEffect(() => {
            document.addEventListener('scroll', () => {
                  const ScrollY = scrollY;
                  const NavigationElement = document.querySelector(".navigation-bar-hidden-animation") as HTMLElement
                  if (ScrollY > 300) {
                        NavigationElement.style.marginTop="0px"
                  } else {
                        NavigationElement.style.marginTop="-80px"
                  }
            })     
      },[])

      return <>
      
            <div className="navigation-bar border-b-1 border-[#ffffff28] absolute z-40 flex items-center bg-[#ff88390e] gap-10 h-[80px] w-full">
                  <div className="sub-navigation text-[18px] pl-[70px] flex gap-8 text-[white]">
                        <Link className="transition-all duration-100 hover:text-amber-700" href="/">Home</Link>
                        <Link className="transition-all duration-100 hover:text-amber-700" href="/">About</Link>
                        <Link className="transition-all duration-100 hover:text-amber-700" href="/">Service</Link>
                        <Link className="transition-all duration-100 hover:text-amber-700" href="/">Contact</Link>
                  </div>
                  <div className="logo-container ml-[24%]">
                    <div className="navigation-log rounded-full overflow-hidden  w-[80px] h-[80px]">
                        <Image src="/assets/logo.jpg" width={100} height={100} alt="Navigation Bar Logo"/>
                  </div>
                  </div>
            </div>
            
            { /* hidden nav bar */}
            <div className="navigation-bar-hidden-animation backdrop-blur-[20px] transition-all duration-600 border-b-1 mt-[-80] border-[#ffffff28] fixed z-40 flex items-center bg-[#1818189c] gap-10 h-[80px] w-full">
                  <div className="sub-navigation text-[18px] pl-[70px] flex gap-8 text-[white]">
                        <Link className="transition-all duration-100 hover:text-[#D86F55]" href="/">Home</Link>
                        <Link className="transition-all duration-100 hover:text-[#D86F55]" href="/">About</Link>
                        <Link className="transition-all duration-100 hover:text-[#D86F55]" href="/">Service</Link>
                        <Link className="transition-all duration-100 hover:text-[#D86F55]" href="/">Contact</Link>
                  </div>
                  <div className="logo-container ml-[24%]">
                    <div className="navigation-log rounded-full overflow-hidden  w-[80px] h-[80px]">
                        <Image src="/assets/logo.jpg" width={100} height={100} alt="Navigation Bar Logo"/>
                  </div>
                  </div>
            </div>
            

      </>
}