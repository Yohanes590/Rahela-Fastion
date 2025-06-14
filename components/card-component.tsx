"use client"
import Image from "next/image"
export default function CardComponent() {
      return <>

            <div className="card-container bg-[linear-gradient(to_bottom,#252120_0px,#252120_730px,transparent_400px)] w-full text-[white] h-auto">
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

                  <div className="card-containers text-[black] text-center flex mt-[70px] justify-center gap-5">
                        
                        <div className="each-card transition-all duration-700 border-b-5 border-[#FEA489] h-[560px] w-[400px] shadow-[0_0_6px_#e7e5e5]  bg-[white] ">
                              <div className="img overflow-hidden h-[380px]">
                                    <Image src="/assets/card1.jpg" alt="about-image" width={400} height={200} className="h-[380px] object-cover "/>
                              </div>

                              <div className="about-description pt-[8px] ">
                                    <h1 className="text-[25px]">Cultural Fashion Design</h1>
                                    <p className="text-[#575757]">Rahela blends African tribal patterns with modern silhouettes.
                                          Each design celebrates identity and connects heritage with style.</p>
                                    <button className="w-[250px] h-[40px] mt-[10px] text-white cursor-pointer bg-[#FEA489] transition-all duration-500 hover:bg-[#864737]">Learn More</button>
                              </div>
                        </div>

                        
                                                <div className="each-card h-[560px] w-[400px] shadow-[0_0_6px_#e7e5e5] bg-[white] ">
                              <div className="img overflow-hidden h-[380px]">
                                    <Image src="/assets/card.jpg" alt="about-image" width={400} height={200} className="h-[380px] object-cover"/>
                              </div>

                              <div className="about-description pt-[8px] ">
                                    <h1 className="text-[25px]">Sustainable Craftsmanship</h1>
                                    <p className="text-[#575757]">We use Ethiopian handwoven cotton and local materials.
                                          Our process reduces waste and supports ethical fashion.</p>
                                    <button className="w-[250px] h-[40px] mt-[10px] text-white cursor-pointer bg-[#FEA489] transition-all duration-500 hover:bg-[#864737]">Learn More</button>
                              </div>
                        </div>



                                                <div className="each-card h-[560px] w-[400px] shadow-[0_0_6px_#e7e5e5] bg-[white] ">
                              <div className="img overflow-hidden h-[380px]">
                                    <Image src="/assets/card2.jpg" alt="about-image" width={400} height={200} className="h-[380px] object-cover"/>
                              </div>

                              <div className="about-description pt-[8px] ">
                                    <h1 className="text-[25px]">Ready-to-Wear Collections</h1>
                                    <p className="text-[#575757]">Versatile, earth toned outfits designed for everyday comfort.Fashion that&apos;s globally
                                          appealing yet deeply Afrocentric.</p>
                                    <button className="w-[250px] h-[40px] mt-[10px] text-white cursor-pointer bg-[#FEA489] transition-all duration-500 hover:bg-[#864737]">Learn More</button>
                              </div>
                        </div>

                        </div>


            </div>
      
      </>
}