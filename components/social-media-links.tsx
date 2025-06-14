import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
export default function SocialMediaLinks() {
      return <>
            <div className="social-media-link-container flex gap-50 bg-white justify-center items-center pt-[50px] text-[#8a3520] text-[20px] w-[full] h-[250px]">
                  <div className="flex-links flex items-center gap-3"><FaFacebook size={25}/><Link href="">Face Book</Link></div>
                  <div className="flex-links flex items-center gap-3"><FaInstagram size={25}/><Link href="">Instagram</Link></div>
                  <div className="flex-links flex items-center gap-3"><FaLinkedin size={25}/><Link href="">Linked In</Link></div>
                  <div className="flex-links flex items-center gap-3"><MdMarkEmailUnread size={25}/><Link href="">Email Us</Link></div>
            </div>
      </>
}