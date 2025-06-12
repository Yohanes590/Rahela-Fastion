"use client"
import Link from "next/link"
import Image from "next/image"
export default function NavigationBar() {
      return <>
      
            <div className="navigation-bar border-b-1 border-[#ffffff28] fixed z-40 flex items-center bg-[#ff88390e] gap-10 h-[80px] w-full">
                  <div className="sub-navigation text-[18px] pl-[70px] flex gap-8 text-[white]">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Service</Link>
                        <Link href="/">Contact</Link>
                  </div>
                  <div className="logo-container ml-[24%]">
                    <div className="navigation-log rounded-full overflow-hidden  w-[80px] h-[80px]">
                        <Image src="/assets/logo.jpg" width={100} height={100} alt="Navigation Bar Logo"/>
                  </div>
                  </div>
          
                  </div>
            

      </>
}