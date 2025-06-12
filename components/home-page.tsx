"use client"
import SlidingComponent from "./slide-component/slide"
export default function HomePage() {
      return <>
            <div className="absolute z-30 h-[750px] w-full flex justify-center items-center bg-[#00000079]">
                  <div className="box-center w-[800px] flex text-center justify-center items-center rounded-[10px] h-[400px] backdrop-blur-[1px] bg-[#00000081]">
                        <div className="box-header-section">
                              <h1 className="text-[40px] w-[550px] font-bold text-[white]">Rahela is an Ethiopian 
                                    based fashion brand</h1>
                              <p className="text-[#FFFFFF] w-[550px] text-[18px]">
                                    inspired by Africa’s rich cultural heritage, blending traditional patterns
                                    with modern designs to create comfortable, everyday wear...
                              </p> 
                              <button className="bg-[#D86F55] w-[300px] h-[55px] mt-[20px] cursor-pointer rounded-[5px] text-[white]">EXPROLE MORE COLLECTIONS </button>
                        </div>
                  </div>
            </div>
      <SlidingComponent/>
      </>
}