"use client"
import NavigationBar from "@/components/navigation-bar"
import HomePage from "@/components/home-page"
import SocialMediaLinks from "@/components/social-media-links"
import AboutComponent from "@/components/about-component"
import CardComponent from "@/components/card-component"
import ContactForm from "@/components/contact-form"
import MiddelSection from "@/components/middel-section"
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
      <MiddelSection/>
    <ContactForm/>
    </div>

  </>
}
