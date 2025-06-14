"use client"
import { AiFillStar, AiOutlineFire } from "react-icons/ai";
import { BsTags, BsGlobe2, BsCashCoin } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
export default function LastCardFunction() {
      return <>

            <div className="last-card-function bg-[#FFF9F3] flex justify-center items-center h-[800px]">

                  <div className="centered-items grid grid-cols-3 justify-center items-center gap-5 ">

                        <div className="each-card-center-item border-l-5 border-amber-200 pt-[20px] pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>Customer Favorite</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>Our best-selling piece, 
                                          loved by everyone.</p>
                                    <div className="icon flex items-center justify-center w-[60px] h-[50px] rounded-full text-amber-700 bg-amber-200 mr-[30px]">
                                          <AiFillStar/>
                                    </div>
                              </div>
                        </div>
                        

                        <div className="each-card-center-item pt-[20px] border-l-5 border-amber-200 pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>New Arrival</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>Fresh designs inspired
                                       by African patterns</p>
                                    <div className="icon flex items-center justify-center w-[60px] h-[50px] rounded-full text-amber-700 bg-amber-200 mr-[30px]">
                                          <AiOutlineFire/>
                                    </div>
                              </div>
                        </div>
                        


                        
                        <div className="each-card-center-item pt-[20px] border-l-5 border-amber-200 pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>Limited Stock</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>Only a few pieces made
                                       grab yours fast!</p>
                                    <div className="icon flex items-center justify-center w-[60px] h-[50px] rounded-full text-amber-700 bg-amber-200 mr-[30px]">
                                          <BsTags/>
                                    </div>
                              </div>
                        </div>
                        

                        
                        <div className="each-card-center-item pt-[20px] border-l-5 border-[#ffac706e] pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>Eco-Friendly</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>Sustainable fabrics, 
                                       supporting local artisans.</p>
                                    <div className="icon flex items-center justify-center w-[60px] h-[50px] rounded-full bg-[#ffac706e] text-[#FFAB70] mr-[30px]">
                                          <FaLeaf/>
                                    </div>
                              </div>
                        </div>
                        


                                        <div className="each-card-center-item border-l-5 border-[#ffac706e] pt-[20px] pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>Cultural Heritage</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>Our best-selling piece, 
                                       loved by everyone.</p>
                                    <div className="icon flex items-center justify-center w-[60px] h-[50px] rounded-full bg-[#ffac706e] text-[#FFAB70] mr-[30px]">
                                          <BsGlobe2/>
                                    </div>
                              </div>
                        </div>
                        

                                        <div className="each-card-center-item border-l-5 border-[#ffac706e] pt-[20px] pl-[20px] h-[160px] cursor-pointer w-[400px] shadow-[0_0_5px_#e2e2e2] bg-[white]">
                              <div className="card-heading-section text-[25px] font-bold">
                                    <h1>Exclusive discounts</h1>
                              </div>
                              <div className="flex-p-icon text-[18px] text-[#8d8d8d] flex gap-5 items-center">
                                    <p>enjoy savings on your
                                       first purchase!</p>
                                    <div className="icon flex items-center justify-center w-[55px] h-[50px] rounded-full bg-[#ffac706e] text-[#FFAB70] mr-[30px]">
                                          <BsCashCoin/>
                                    </div>
                              </div>
                        </div>
                        




                  </div>
                  

                  


            </div>
            
      </>
}