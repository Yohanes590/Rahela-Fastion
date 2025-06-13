"use client"
import NavigationBar from "@/components/navigation-bar"
import HomePage from "@/components/home-page"
import SocialMediaLinks from "@/components/social-media-links"
import AboutComponent from "@/components/about-component"
export default function Home() {
  return <>
    <NavigationBar />
    <HomePage />
    <SocialMediaLinks />
    <AboutComponent/>
  </>
}
