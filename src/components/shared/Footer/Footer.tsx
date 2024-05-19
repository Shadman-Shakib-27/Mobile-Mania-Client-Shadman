import Link from "next/link";
import CopyRight from "./CopyRight";
import Image from "next/image";
import logo from "../../../assets/client/Mobile-Mania.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 max-w-[1230px] mx-auto text-base-content gap-4">
        <div className="lg:-ml-8">
          <Link href="/">
            <Image
              className="lg:-ml-6 hover:scale-110 transition-all duration-300 lg:-mt-10 -ml-6"
              src={logo}
              alt="Logo"
              width={180}
              height={190}
            />
          </Link>
          <span className="w-72 text-justify">
            Welcome to <span className="font-semibold">Mobile Mania</span>, your
            premier destination for all things mobile. Dive into a world where
            cutting-edge technology meets exceptional service.Discover the joy
            of mobile innovation with us.
          </span>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <FaFacebookSquare className="text-2xl text-[#21A0F3] border-white" />
            </span>
            <span>
              <FaXTwitter className="text-2xl text-black border-white" />
            </span>
            <span>
              <FaLinkedin className="text-2xl text-[#21A0F3] border-white" />
            </span>
            <span>
              <FaSquareInstagram className="text-[26px] text-black border-white" />
            </span>
          </div>
        </div>

        <nav>
          <h6 className="footer-title border-b-[2px] border-[#22A1F0]">
            Quick Links
          </h6>
          <Link href="/products">Trending Products</Link>
          <Link href="/">Categories</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Customer Care</Link>
        </nav>
        <nav className="text-center">
          <h6 className="footer-title border-b-[2px] border-[#22A1F0]">
            Legal
          </h6>
          <Link href="/" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <form>
          <h6 className="footer-title border-b-[2px] border-[#22A1F0]">
            Newsletter
          </h6>
          <fieldset className="form-control w-36">
            <label className="label">
              <span className="label-text">Enter Your Email Address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Username@site.com"
                className="input w-52 input-bordered join-item"
              />
              <button className="btn px-3 join-item border-second bg-[#22A1F0]   hover:bg-black text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <CopyRight />
    </div>
  );
};

export default Footer;
