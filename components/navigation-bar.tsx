"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { CiMenuFries } from "react-icons/ci";
export default function NavigationBar() {

      const openMenuBar = () => {
            const MenuElement = document.querySelector(".fixed-menu-bar") as HTMLElement
            MenuElement.style.width="100%"
}

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
            
           
      
            <div className="navigation-bar border-b-1 border-[#ffffff28]  absolute z-40 flex justify-between items-center bg-[#ff88390e] gap-10 h-[80px] w-full">
       
                  <div className="logo-container">
                    <div className="navigation-log  overflow-hidden pl-[70px] ">
                        <Image src="/assets/rehela-transparent-white-logo.png" width={200} height={100} alt="Navigation Bar Logo"/>
                  </div>
                  </div>
                  <div onClick={openMenuBar} className="right-button cursor-pointer text-white font-bold pr-[50px]">
                        <CiMenuFries size={30}/>
                  </div>
            </div>

            
            { /* hidden nav bar */}
           <div className="navigation-bar-hidden-animation border-b-1 border-[#ffffff28]  fixed mt-[-80px] z-40 flex justify-between transition-all duration-700 items-center backdrop-blur-2xl bg-[#0000009a] gap-10 h-[80px] w-full">
       
                  <div className="logo-container">
                    <div className="navigation-log  overflow-hidden pl-[70px] ">
                        <Image src="/assets/rehela-transparent-white-logo.png" width={200} height={100} alt="Navigation Bar Logo"/>
                  </div>
                  </div>
                  <div onClick={openMenuBar} className="right-button cursor-pointer text-white font-bold pr-[50px]">
                        <CiMenuFries size={30}/>
                  </div>
            </div>
            

      </>
}