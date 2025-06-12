"use client"
import SlidingComponent from "./slide-component/slide"
export default function HomePage() {
      return <>
            <div className="absolute z-30 h-[750px] w-full flex justify-center items-center bg-[#00000079]">
                  <div className="box-center w-[700px] rounded-[10px] h-[400px] bg-[#000000a4]">
                        <div className="box-header-sect">
                              <h1>Rahela is an Ethiopian 
                              based fashion brand</h1>
                        </div>
                  </div>
            </div>
      <SlidingComponent/>
      </>
}