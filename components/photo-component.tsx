"use client"
import Image from "next/image"
export default function PhotoGrid() {
      return <>
            <div className="h-[auto] flex flex-wrap  w-[100%]">
                  
                  <div className="gird-part justify-between w-[100%] flex gap-5  flex-wrap">
  <div className="each-grid-photo">
                  <Image src="/assets/grid-5.jpeg" alt="Grid photo" width={500} height={100} className="object-cover"/>  
            </div>

                  
                        <div className="each-grid-photo">
                  <Image src="/assets/grid-3.jpeg" alt="Grid photo" width={500} height={100} className="object-cover w-[850px] h-[365px]"/>  
                  <Image src="/assets/grid-2.jpeg" alt="Grid photo" width={500} height={100} className="object-cover mt-[20px] w-[850px] h-[365px]"/>  
                  </div>
                  
                                 <div className="each-grid-photo">
                  <Image src="/assets/grid-1.jpeg" alt="Grid photo" width={500} height={100} className="object-cover"/>  
                  </div>
                  

      

                  </div>
                
           </div>
      </>
}