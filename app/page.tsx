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
export default function Home() {
  return <>
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
  </>
}
