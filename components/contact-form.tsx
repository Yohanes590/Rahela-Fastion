"use client"
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
                              <input type="text"className="h-[50px] text-[black] w-[450px] bg-[#FFA768] pl-[20px] mt-[10px]"  placeholder="Your name" /><br/>
                              <input type="text"className="h-[50px] text-[black] w-[450px] bg-[#FFA768] pl-[20px] mt-[10px]"  placeholder="Email" /><br/>
                              <textarea className="h-[200px] text-[black] w-[450px] pt-[10px] bg-[#FFA768] pl-[20px] mt-[10px]" placeholder="Message"></textarea><br/>
                              <button className="w-[450px]">Submit</button>
                        </div>

                  </div>

                  <div className="location-input-section">

                  </div>

            </div>
      </>
}