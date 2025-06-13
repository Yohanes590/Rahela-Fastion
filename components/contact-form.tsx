"use client"
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function ContactForm() {
      return <>
            <div className="contact-form-container flex justify-around items-center gap-5 h-screen w-[100%]">

                  <div className="form-input-section">
                        <div className="form-header w-[550px]">
                        <h1 className="text-[30px] font-bold">Get in Touch with Rahela</h1>
                        <p className="text-[#727272] text-[18px]">We'd love to hear from you  whether it's feedback,
                           collaboration, or a custom order.</p>
                        </div>
                        <div className="input-form mt-[20px]">
                              <input type="text"className="h-[50px] text-[black] w-[550px] bg-[#FFA768] pl-[20px] mt-[10px]"  placeholder="Your name" /><br/>
                              <input type="text"className="h-[50px] text-[black] w-[550px] bg-[#FFA768] pl-[20px] mt-[10px]"  placeholder="Email" /><br/>
                              <textarea className="h-[200px] text-[black] w-[550px] pt-[10px] bg-[#FFA768] pl-[20px] mt-[10px]" placeholder="Message"></textarea><br/>
                              <button className="w-[550px] h-[40px] mt-[20xp] duration-300 bg-[#FFA768] cursor-pointer hover:bg-amber-800 hover:text-[white]">Submit</button>
                        </div>

                  </div>

                  <div className="location-input-section">
                        <div className="text-[30px]">Detailed contact information</div>
                        <div className="small-line bg-[#FFA768] w-[200px] h-[4px]"></div>
                        
                        <div className="each-links cursor-pointer flex items-center gap-4 mt-[10px]">
                              <div className="icon">
                                    <FaLocationDot size={25}/>
                              </div>
                              <div className="mes-contact text-[20px]">
                                    <h2>Our Location</h2>
                                    <p>Addis Abeba , Ethiopia</p>
                              </div>
                        </div>
                        
                                           <div className="each-links cursor-pointer flex items-center gap-4 mt-[10px]">
                              <div className="icon">
                                    <FaPhone size={25}/>
                              </div>
                              <div className="mes-contact text-[20px]">
                                    <h2>Phone Number</h2>
                                    <p>+2519****212</p>
                              </div>
                        </div>
                        

                                           <div className="each-links cursor-pointer flex items-center gap-4 mt-[10px]">
                              <div className="icon">
                                    <MdMarkEmailUnread size={25}/>
                              </div>
                              <div className="mes-contact text-[20px]">
                                    <h2>Email Address</h2>
                                    <p>example@gmail.com</p>
                              </div>
                        </div>
                        

                              <div className="each-links cursor-pointer flex items-center gap-4 mt-[10px]">
                              <div className="icon">
                                    <FaLinkedin size={25}/>
                              </div>
                              <div className="mes-contact text-[20px]">
                                    <h2>LinkedIn</h2>
                                    <p>Contact Rahela</p>
                              </div>
                        </div>
                        

                               <div className="each-links cursor-pointer flex items-center gap-4 mt-[10px]">
                              <div className="icon">
                                    <FaInstagram size={25}/>
                              </div>
                              <div className="mes-contact text-[20px]">
                                    <h2>Instagram</h2>
                                    <p>Contact Rahela</p>
                              </div>
                        </div>

                  </div>

            </div>
      </>
}