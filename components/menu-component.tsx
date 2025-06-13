import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
export default function MenuComponent() {
      return <>
                <div className="fixed-menu-bar hidden fixed z-50 right-0 h-[100%] w-full bg-[#00000085]">

                  <div className="sub-menu-element duration-600 transition-all absolute right-0 bg-[white] w-[350px] h-screen">
                        <div className="closing-section absolute right-0 cursor-pointer pt-[20px] pr-[20px] text-[#555555]">
                        <IoCloseOutline size={40} />
                        </div>
                        
                    

                        <div className="button-section ml-[20px] mt-[100px] text-[18px]">

                        <div className="hidden-menu-head">
                                    <h1 className="text-[25px] font-bold">Explore Rahela</h1>
                                    <p>Discover our collections and story.</p>
                              </div>
                              <div className="action-buttons mt-[40px]">
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] rounded-[7px] bg-[#fff2e5] flex items-center pl-[10px] mt-[5px]"><Link href="/">Home</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] rounded-[7px] bg-[#fff2e5] flex items-center pl-[10px] mt-[5px]"><Link href="/">About</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] rounded-[7px] bg-[#fff2e5] flex items-center pl-[10px] mt-[5px]"><Link href="/">Shop</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] rounded-[7px] bg-[#fff2e5] flex items-center pl-[10px] mt-[5px]"><Link href="/">Service</Link></div>
                              <div className="hover cursor-pointer transition-all duration-200 hover:text-[25px] h-[50px] w-[96%] rounded-[7px] bg-[#fff2e5] flex items-center pl-[10px] mt-[5px]"><Link href="/">Contact</Link></div>
                              </div>
                              
                        </div>
                  </div>
                  
                  <div className="our-mission"></div>

            </div>
      </>
}