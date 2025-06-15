"use client"
import Image from "next/image"
export default function PhotoGrid() {
      return <>
            <div className="photo-grid-container h-screen w-[100%]" >
                  <div className="center-element  gap-3 flex mt-[100px] justify-center items-center">
                <div className="hover-image-section w-[400px] overflow-hidden cursor-pointer ">
                         <Image src='/assets/card1.jpg' alt="grid photo's" width={450} height={100} className="object-cover w-[430px] h-[450px]"/>   
                  </div>

                  <div className="hover-image-section w-[400px] overflow-hidden cursor-pointer ">
                         <Image src='/assets/card.jpg' alt="grid photo's" width={450} height={100} className="object-cover w-[430px] h-[450px]"/>   
                  </div>
                  <div className="hover-image-section w-[400px] overflow-hidden cursor-pointer ">
                  <Image src='/assets/card2.jpg' alt="grid photo's" width={450} height={100} className="object-cove w-[430px] h-[450px]"/>   
                  </div>
                  </div>
  
          <div className="lower-banner flex justify-center w-full mt-[20px]">
                  <div className="hover-image-section w-[64.5%] overflow-hidden cursor-pointer ">
                  <Image src='/assets/cover-image.jpeg' alt="grid photo's" width={950} height={100} className="object-cover w-[100%] h-[400px]"/>   
                        </div>
                  </div>
                  <div className="lower-text text-center text-[32px] mt-[25px]">
                        <center>
                 <p className=" w-[793px]">Inspired by Africa’s rich cultural heritage, blending traditional patterns with modern designs.</p>
                        </center>
                  </div>
                  
            </div>
      </>
}