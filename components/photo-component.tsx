"use client"
import Image from "next/image"
export default function PhotoGrid() {
      return <>
            <div className="h-[auto] flex flex-wrap  w-[100%]">
                  
                  <div className="gird-part justify-between w-[100%] flex gap-5  flex-wrap">
  <div className="each-grid-photo w-[400px] h-[550px] overflow-hidden">
                  <Image id="horizontal-1" src="/assets/grid-5.jpeg" alt="Grid photo" width={400} height={100} className="object-cover"/>  
            </div>

                  
                        <div className="each-grid-photo w-[950px] h-[550px] overflow-hidden">
                  <Image id="mid-1" src="/assets/grid-3.jpeg" alt="Grid photo" width={500} height={100} className="object-cover w-[950px] h-[265px]"/>  
                  <Image id="mid-2" src="/assets/grid-2.jpeg" alt="Grid photo" width={500} height={100} className="object-cover mt-[20px] w-[950px] h-[265px]"/>  
                  </div>
                  
                                 <div className="each-grid-photo w-[400px] h-[550px] overflow-hidden">
                  <Image id="horizontal-2" src="/assets/grid-1.jpeg" alt="Grid photo" width={400} height={100} className="object-cover"/>  
                  </div>
                  

      

                  </div>
                
           </div>
      </>
}