"use client"
import Image from "next/image"
export default function AboutComponent() {
      return <>
            <div className="h-[700px] w-[100%] bg-[#F5F5F5] flex flex-wrap  justify-around items-center">

                  <div className="about-message-container text-center">
                        <h1 className="text-[60px] text-[#918F8E]">Who we are</h1>
                        <p className="w-[650px] text-[20px]">Rahela offers versatile, earth-toned pieces celebrating African tribes and
                        cultures.The brand promotes sustainable and ethical fashion practices.
                              It aims to make fashion accessible while bridging Ethiopia with Africa.</p>
                        <center>
                              <div className="border-2 border-[#3F3C3C] hover:bg-[#3F3C3C] transition-all duration-300 hover:text-[white] flex justify-center items-center mt-[25px] w-[300px] h-[50px]">Explore</div>
                        </center>
                        </div> 


            </div>
      </>
}