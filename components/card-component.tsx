"use client"
import Image from "next/image"
export default function CardComponent() {
      return <>

            <div className="card-container bg-[linear-gradient(to_bottom,#252120_0px,#252120_600px,transparent_400px)] w-full text-[white] h-screen">
                  <center>
                  <div className="card-content-headers w-[650px] pt-[50px] text-center">
                        
                        <h1 className="text-[#FFA883] font-bold text-[40px]" style={{ fontFamily: 'Acumin Pro' }}>Our Core Business</h1>
                        <center>
                        <h2 className="text-[37px] w-[500px]" style={{ fontFamily: 'Acumin Pro' }}>Blending traditional African 
                                    patterns with modern design.</h2>
                              </center>
                        <p className="mt-[10px] text-[#B5B5B5]">Rahela creates earth-toned, ready-to-wear fashion using Ethiopian fabrics. 
                           Each piece reflects cultural heritage, sustainability, and modern comfort.</p>
                        </div>
                        </center>

                  <div className="card-containers flex mt-[70px] justify-center gap-5">
                        
                        <div className="each-card h-[560px] w-[400px] shadow-[0_0_6px_#e7e5e5] bg-[white] ">

                              <div className="img">
                                    <Image src="/assets/card1.jpg" alt="about-image" width={400} height={200} className="h-[380px] object-cover"/>
                              </div>

                              <div className="description">
                                    <h1 className="text-[20px]">Cultural Fashion Design</h1>
                              </div>

                        </div>


                        </div>


            </div>
      
      </>
}