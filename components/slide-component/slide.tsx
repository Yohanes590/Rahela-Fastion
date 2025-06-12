"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 


export default function SlidingComponent() {
      return (<>
            <div className="slider-container h-[700px]">

<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      
      autoplay={{ delay: 2500 }}
      loop={true}
    >
      <SwiperSlide>
        <Image src="/assets/slide/1.jpg" width={700} height={200} alt="slide 1"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/slide/2.jpg" width={700} height={200} alt="slide 2"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/slide/3.jpg" width={700} height={200} alt="slide 3"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/slide/4.jpg" width={700} height={200} alt="slide 3"  />
            </SwiperSlide>
            <SwiperSlide>
        <Image src="/assets/slide/about-pic.jpg" width={780} height={200} alt="slide 3"  />
            </SwiperSlide>
            <SwiperSlide>
        <Image src="/assets/slide/slide-5.jpg" width={780} height={200} alt="slide 3"  />
      </SwiperSlide>
    </Swiper>
            </div> 
   
      </>)
}