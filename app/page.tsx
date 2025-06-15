"use client"
import NavigationBar from "@/components/navigation-bar"
import HomePage from "@/components/home-page"
import SocialMediaLinks from "@/components/social-media-links"
import AboutComponent from "@/components/about-component"
import CardComponent from "@/components/card-component"
import WaterMark from "@/components/water-mark"
import ShopSection from "@/components/shop-now"
import LastCardFunction from "@/components/last-card"
import ContactForm from "@/components/contact-form"
import PhotoGrid from "@/components/photo-component"
import { useEffect } from "react"
export default function Home() {
  
  useEffect(() => {
      const FadeAnimation = ()=> {
      const AllDivElement = document.querySelector(".add-div-element") as HTMLElement
      AllDivElement.style.opacity="1"
      }
    FadeAnimation()
  },[])



  return <>
    <div className="add-div-element opacity-0 duration-2000 transition-all">
    <NavigationBar />
    <HomePage />
    <SocialMediaLinks />
    <AboutComponent />
    <CardComponent />
    <WaterMark />
    <ShopSection />
    <PhotoGrid/>
    <LastCardFunction />
    <ContactForm/>
    </div>

  </>
}
