// local imports
import {  shopTitle, shopSubtitle } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import m1 from "../assets/1.jpg";
import m3 from "../assets/3.jpg";
import m4 from "../assets/4.jpg";
import m5 from "../assets/5.jpg";
import m6 from "../assets/6.jpg";
import m8 from "../assets/8.jpg";

import FadeIn from "../components/FadeIn";
import Image from "next/image";

const Shop = () => {
  return (
    <div id="shop" className="pb-[50px] pt-[20px] bg-[#C1D0E4] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {shopTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {shopSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <Image src={m4} alt="" width={735} height={549}/>
            <Image src={m5} alt="" width={735} height={549}/>
            <Image src={m4} alt="" width={735} height={549}/>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div className="flex flex-col gap-8">
            <Image src={m1} alt="" width={735} height={549}/>
            <Image src={m6} alt="" width={735} height={549}/>
            <Image src={m1} alt="" width={735} height={549}/>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <div className="flex flex-col gap-8">
            <Image src={m3} alt="" width={735} height={549}/>
            <Image src={m8} alt="" width={735} height={549}/>
            <Image src={m3} alt="" width={735} height={549}/>
          </div>
        </FadeIn>
      {/*   <FadeIn delay={0.2} direction="left">
          <div>
            <img src={imageThree} alt="" />
          </div>
        </FadeIn> */}
      </div>
    </div>
  );
};

export default Shop;