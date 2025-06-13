import Image from "next/image"
export default function ShopSection() {
      return <>

            <div className="shop-section h-[500px] bg-[white] w-full flex justify-around  flex-wrap">
                  <div className="shop-all-contain justify-around w-full backdrop-blur-[10px] bg-[#00000013] items-center flex">
                  <div className="shop-message-container w-[550px]">
                              <h1 className="text-[45px] font-bold">Shop Rahela Now!</h1>
                              <h3 className="text-[35px]">Discover Afrocentric 
                              fashion rooted in culture.</h3>
                              <p>Explore ready to wear collections made with Ethiopian
                              fabrics.Celebrate tradition with every earth toned,
                              sustainable piece.</p>
                        <button className="mt-[30px] w-[300px] h-[40px] transition-all duration-500 hover:bg-[#864737] hover:text-[white]  bg-[#FFAB70] cursor-pointer text-[black]">SHOP NOW</button>
                  </div>
                  <div className="shop-image-display"> 
                        <Image src="/assets/shopping-rahela.png" width={450} height={100} alt="Shope now pic"/>
                  </div>
                  </div>
      </div>
      
      </>
}