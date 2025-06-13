"use client"
import Image from "next/image"
export default function AboutComponent() {
      return <>
            <div className="h-auto bg-[#F8F4F3] flex flex-wrap justify-around items-center">

                  <div className="about-message-container w-[800px]">

                        <h1 className="text-[45px] text-[#7B3A02]" style={{ fontFamily: 'Acumin Pro' }}>Who we are</h1>
                        <h1 className="mt-[10px] font-bold text-[40px]">Inspired by Africa’s rich cultural 
                            heritage, blending traditional <br/>patterns with modern designs.</h1>
                        <h3 className="mt-[20px] text-[30px]">Comfortable, everyday wear.</h3>
                        <p className="mt-[10px] text-[18px]">Rahela offers versatile, earth-toned pieces celebrating African tribes and cultures.The brand
                           promotes sustainable and ethical fashion practices. It aims to make fashion accessible
                           while bridging Ethiopia with Africa.</p>
                        <button className="mt-[25px] w-[350px] text-white h-[45px] rounded-[10px] cursor-pointer bg-[#CD5601]">Explore more</button>
                        <div className="about-water-mark mt-[30px] cursor-default text-[60px] font-bold text-[#83040436]">
                              FASION DESIGNER
                        </div>
                  </div>

                  <div className="photo-component">
                        <Image src="/assets/asset-one-about.png" alt="" width={300} height={100} className="w-[300px]"/>
                  </div>


            </div>
      </>
}