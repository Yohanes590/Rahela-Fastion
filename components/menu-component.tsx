"use client"
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
export default function MenuComponent() {
            const closeMenu = () => {
            const MenuElement = document.querySelector(".fixed-menu-bar") as HTMLElement
            const OpacitySection = document.querySelector(".button-section") as HTMLElement
            MenuElement.style.width="0%"
            OpacitySection.style.opacity="0"
      }
      const [ openSlide , setSlide ] = useState<boolean>(true)
      const openMission = () => {
            const missionComponent = document.querySelector(".our-mission") as HTMLElement
            if (openSlide === true) {
            setSlide(false)
            missionComponent.style.height="250px"
            missionComponent.style.paddingTop="30px"
            missionComponent.style.backgroundPositionY="0px"
            } else {
            setSlide(true)
            missionComponent.style.height="0px"
            missionComponent.style.paddingTop="0px" 
            missionComponent.style.backgroundPositionY="400px"
           }
      }
      return <>
                <div className="fixed-menu-bar pt-[50px] duration-900 transition-all overflow-hidden text-white fixed z-50 right-0 h-[100%] backdrop-blur-2xl w-[0%] bg-[#000000ab]">

                  <div className="sub-menu-element w-[100%] bg duration-900 transition-all text-center absolute h-screen">
                        <div onClick={closeMenu} className="closing-section absolute right-0 cursor-pointer pt-[20px] pr-[20px] text-[#555555]">
                        <IoCloseOutline className="text-[white]" size={40} />
                        </div>
                        
                    
                  <center>

                        <div className="button-section w-[40%] opacity-0 transition-all duration-1000 mt-[100px] text-[18px]">

                        <div className="hidden-menu-head">
                                    <h1 className="text-[25px] font-bold">Explore Rahela</h1>
                                    <p >Discover our collections and story.</p>
                              </div>
                              <div className="action-buttons mt-[40px]">
                              <div className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px] hover:text-white flex items-center mt-[5px]"><Link href="/">Home</Link></div>
                              <div className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px]  hover:text-white flex items-center mt-[5px]"><Link href="/">About</Link></div>
                              <div className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px]  hover:text-white flex items-center mt-[5px]"><Link href="/">Shop</Link></div>
                              <div className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px]  hover:text-white flex items-center mt-[5px]"><Link href="/">Service</Link></div>
                              <div className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px]  hover:text-white flex items-center mt-[5px]"><Link href="/">Contact</Link></div>
                              <div onClick={openMission} className="hover cursor-pointer transition-all duration-1000 hover:bg-[#00000052] hover:text-[25px] h-[55px] w-[100%] justify-center bg-gradient-to-b from-[#42424288] to-[#42424288] bg-no-repeat bg-[910px] hover:bg-[-910px]  hover:text-white flex items-center mt-[5px]">Our Mission</div>
                              </div>
                              
                        <div className="our-mission bg-gradient-to-t bg-no-repeat from-[#42424288] bg-[0_-400px] to-[#42424288] text-center overflow-hidden h-[0px] transition-all duration-1000 hover:bg-[#00000052]">
                        <h1 className="text-[25px] font-bold">Our Mission</h1>
                        <p className="text-[14px]">Rahela&apos;s mission is to create comfortable, everyday wear that reflects Africa’s rich cultural diversity
                          . We deliver versatile, earth-toned clothing that blends traditional African patterns with contemporary 
                          designs. Our goal is to provide accessible, meaningful fashion that empowers individuals to embrace their 
                          identity while championing African craftsmanship and promoting sustainability and ethical production. 
                          We envision a world where Afrocentric fashion is celebrated globally, and contemporary fashion is redefined 
                                                by blending Africa’s rich traditions with modern design.</p>
                                                <center>
                                    <div className="line bg-amber-700 mt-[15px] h-[3px] w-[40%]"></div>
                              </center>
                              </div>
                        
          
                              </div>
                  </center>
                              
                  </div>
            

            </div>
      </>
}