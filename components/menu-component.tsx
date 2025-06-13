"use client"
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
export default function MenuComponent() {
            const closeMenu = () => {
            const MenuElement = document.querySelector(".fixed-menu-bar") as HTMLElement
            MenuElement.style.width="0%"
}
      return <>
                <div className="fixed-menu-bar pt-[50px] duration-900 transition-all overflow-hidden text-white fixed z-50 right-0 h-[100%] backdrop-blur-2xl w-[0%] bg-[#000000ab]">

                  <center>
                  <div className="sub-menu-element bg duration-900 transition-all text-center absolute h-screen">
                        <div onClick={closeMenu} className="closing-section absolute right-0 cursor-pointer pt-[20px] pr-[20px] text-[#555555]">
                        <IoCloseOutline className="text-[white]" size={40} />
                        </div>
                        
                    

                        <div className="button-section ml-[20px] w-[480px] mt-[100px] text-[18px]">

                        <div className="hidden-menu-head">
                                    <h1 className="text-[25px] font-bold">Explore Rahela</h1>
                                    <p >Discover our collections and story.</p>
                              </div>
                              <div className="action-buttons mt-[40px]">
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] justify-center rounded-[50px_0px_50px_0px] bg-[#ff83071a] hover:bg-[#FFAB70] hover:text-white flex items-center mt-[5px]"><Link href="/">Home</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] justify-center rounded-[50px_0px_50px_0px] bg-[#ff83071a] hover:bg-[#FFAB70] hover:text-white flex items-center mt-[5px]"><Link href="/">About</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] justify-center rounded-[50px_0px_50px_0px] bg-[#ff83071a] hover:bg-[#FFAB70] hover:text-white flex items-center mt-[5px]"><Link href="/">Shop</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] justify-center rounded-[50px_0px_50px_0px] bg-[#ff83071a] hover:bg-[#FFAB70] hover:text-white flex items-center mt-[5px]"><Link href="/">Service</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] justify-center rounded-[50px_0px_50px_0px] bg-[#ff83071a] hover:bg-[#FFAB70] hover:text-white flex items-center mt-[5px]"><Link href="/">Contact</Link></div>
                              </div>
                              
                        <div className="our-mission mt-[30px] text-center">
                        <h1 className="text-[25px] font-bold">Our Mission</h1>
                        <p className="text-[14px]">Rahela&apos;s mission is to create comfortable, everyday wear that reflects Africa’s rich cultural diversity
                          . We deliver versatile, earth-toned clothing that blends traditional African patterns with contemporary 
                          designs. Our goal is to provide accessible, meaningful fashion that empowers individuals to embrace their 
                          identity while championing African craftsmanship and promoting sustainability and ethical production. 
                          We envision a world where Afrocentric fashion is celebrated globally, and contemporary fashion is redefined 
                          by blending Africa’s rich traditions with modern design.</p>
                              </div>
                              <center>
                                    <div className="line bg-amber-700 mt-[15px] h-[3px] w-[40%]"></div>
                              </center>
          
                        </div>
                  </div>
                  </center>
            

            </div>
      </>
}