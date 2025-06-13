import Link from "next/link";

export default function SocialMediaLinks() {
      return <>
            <div className="social-media-link-container flex gap-50 bg-white justify-center items-center pt-[50px] text-[#8a3520] text-[20px] w-[full] h-[250px]">
                  <div className="flex-links"><Link href="">Face Book</Link></div>
                  <div className="flex-links"><Link href="">Instagram</Link></div>
                  <div className="flex-links"><Link href="">Linked In</Link></div>
                  <div className="flex-links"><Link href="">Email Us</Link></div>
            </div>
      </>
}