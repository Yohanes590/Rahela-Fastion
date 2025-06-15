"use client"
import Image from "next/image"
export default function CardComponent() {
      return <>

            <div className="card-container h-screen ">
                  <div className="left-text text-right pr-[40px] pt-[70px] text-[#686464] text-[35px]">Comfortable, everyday wear!</div>
                  <div className="flex-photos flex justify-center items-center gap-3 mt-[50px]">
                        <div className="each-img-hover w-[400px] h-[600px] overflow-hidden cursor-pointer">
                        <Image src='/assets/grid-5.jpeg' alt="flex image's" width={400} height={400}/>
                        </div>
                        <div className="each-img-hover w-[400px] h-[600px] overflow-hidden cursor-pointer">
                              <Image src='/assets/grid-3.jpeg' alt="flex image's" width={400} height={400} />
                        </div>
                        <div className="each-img-hover w-[400px] h-[600px] overflow-hidden cursor-pointer">
                              <Image src='/assets/grid-2.jpeg' alt="flex image's" width={400} height={400} />
                        </div>
                              <div className="each-img-hover w-[400px] h-[600px] overflow-hidden cursor-pointer">
                              <Image src='/assets/grid-1.jpeg' alt="flex image's" width={400} height={400} />
                        </div>
                        
                  </div>
            </div>
      
      </>
}