"use client"
import MenuComponent from "./menu-component";
import SlidingComponent from "./slide-component/slide"
export default function HomePage() {
      return <>
            <MenuComponent/>
            <div className="absolute z-30 h-[750px] w-full  flex justify-center items-center bg-[#00000079]">
                  <div className="box-center w-[800px] flex text-center justify-center items-center rounded-[10px] h-[400px] backdrop-blur-[4px] bg-[#00000044]">
                        <div className="box-header-section">
                              <h1 className="text-[40px] w-[550px] text-[white]" >Elevate Your Everyday Style with African Elegance</h1>
                              <p className="text-[#FFFFFF] w-[550px] text-[18px]">
                                    Discover timeless pieces inspired by Africa’s rich heritage
                                    crafted for comfort, simplicity, and cultural pride.
                              </p> 
                              <button className="bg-[#D86F55] transition-all duration-500 hover:bg-[#864737] w-[300px] h-[55px] mt-[20px] cursor-pointer rounded-[5px] text-[white]">EXPROLE MORE COLLECTIONS </button>
                        </div>
                  </div>
            </div>

     
      <SlidingComponent/> 
      </>
}