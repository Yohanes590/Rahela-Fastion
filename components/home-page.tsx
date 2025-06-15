"use client"
import MenuComponent from "./menu-component";
import SlidingComponent from "./slide-component/slide"
export default function HomePage() {
      return <>
            <MenuComponent/>
            <div className="absolute z-30 h-[750px] w-full  flex justify-center items-center bg-[#00000096]">
                  <div className="box-center w-[870px] flex text-center justify-center items-center rounded-[10px] h-[400px] ">
                        <div className="box-header-section">
                              <h1 className="text-[65px]  text-[white]" >Elevate Your Everyday Style with African Elegance</h1>
                              <button className="bg-[#272727] transition-all duration-500 hover:bg-[#333333] w-[300px] h-[55px] mt-[20px] cursor-pointer rounded-[5px] text-[white]">EXPROLE MORE COLLECTIONS </button>
                        </div> 
                  </div>
            </div>

     
      <SlidingComponent/> 
      </>
}