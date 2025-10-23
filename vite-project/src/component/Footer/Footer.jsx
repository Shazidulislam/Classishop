import React from "react";
import Requerments from "../home/Requerments/Requerments";
import Container from "../gobal/Container/Container";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiYoutubeLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="pt-10 bg-gray-50 ">
      <Requerments />
      <div className="py-2 border-t border-gray-300"></div>
      {/* footer */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-10">
          {/* contact section */}
          <div className="border-r border-gray-400">
            <h1 className="text-xl font-medium pb-5">Contact Us</h1>
            <p className="w-[70%] text-sm pb-5">
              Classyshop - Mega Super Store 507-Union Trade Centre Italy
            </p>
            <p className="text-sm pb-5">sales@yourcompany.com</p>
            <p className="text-2xl">(+91) 9876-543-210</p>
          </div>
          {/* produvt section */}
          <div className="pl-4 ">
            <h1 className="text-xl font-medium pb-5">Products</h1>
            <ul className="space-y-2">
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Prices drop{" "}
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                New products
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Best sales
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Contact us
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Sitemap
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Stores
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h1 className="text-xl font-medium pb-5">Our company</h1>
            <ul className="space-y-2">
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                {" "}
                Delivery
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Legal Notice
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Terms and conditions of use
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                About us
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Secure payment
              </li>
              <li className="text-sm hover:text-[#ff5252] text-gray-800 font-[300]">
                Login
              </li>
            </ul>
          </div>
          {/* Subscribe to newsletter */}
          <div>
            <h1 className="text-xl font-medium pb-5">Subscribe to newsletter</h1>
            <p className="text-sm font-[300] text-gray-800 pb-5">Subscribe to our latest newsletter to get news about special discounts.</p>
            <input type="email" name="" placeholder="Your email addres" className="px-4 py-2 w-full outline-none border-2 border-gray-200 bg-white rounded mb-5" />
            <button className="px-6 py-2 bg-[#ff5252] text-white hover:bg-black transition-all cursor-pointer text-sm rounded duration-300">SUBSCRIBE</button>
            <div className="mt-5 flex justify-center items-start gap-2">
                <input type="checkbox" className="bg-white outline-none border-2 p-1"  />
                <p className="text-sm font-[400]">I agree to the terms and conditions and the privacy policy</p>
            </div>
          </div>
        </div>
      
      </Container>
        {/* copey right */}
        <div className="border-t bg-white border-gray-200 shadow">
            <Container>
              <div className="py-5 flex flex-col sm:flex-row justify-between items-center ">
                 <div className="flex gap-3 items-center">
                   <RiFacebookCircleLine size={24} />
                   <FaSquareInstagram size={24}/>
                   <PiYoutubeLogoBold size={24}/>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500">© 2025 - Ecommerce Template</p>
                 </div>
                 <div className="flex gap-1">
                   <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="" />
                   <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="" />
                   <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="" />
                   <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="" />
                 </div>
              </div>
            </Container>
        </div>
    </div>
  );
};

export default Footer;
