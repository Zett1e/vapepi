import React from "react";
import {
  KeyIcon,
  ArrowPathIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="px-40 mt-10 flex gap-x-10">
        <div className="space-y-16">
          <div className="space-y-3">
            <h4 className="font-semibold">Customer Service</h4>
            <div className="flex items-center gap-x-1">
              <KeyIcon className="w-5" />
              <p className="text-sm">Terms & Privacy Policy</p>
            </div>
            <div className="flex items-center gap-x-1">
              <ArrowPathIcon className="w-5" />
              <p className="text-sm">Return Policy</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Payment</h4>
            <div className="flex gap-x-3 items-center">
              <div className="relative w-16 h-12">
                <Image src={"/images/payment/kbz.png"} fill alt="payment" />
              </div>
              <div className="relative w-16 h-12 rounded-md overflow-hidden">
                <Image
                  src={"/images/payment/wave.png"}
                  fill
                  alt="payment"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-3">
            <h4 className="font-semibold">Language</h4>
            <form>
              <div className="space-x-3">
                <input
                  type="radio"
                  name="language"
                  id="unicode"
                  value="unicode"
                />
                <label htmlFor="unicode">Myanmar (Unicode)</label>
              </div>
              <div className="space-x-3">
                <input
                  type="radio"
                  name="language"
                  id="zawgyi"
                  value="zawgyi"
                />
                <label htmlFor="zawgyi">Myanmar (Zawgyi)</label>
              </div>
              <div className="space-x-3">
                <input
                  type="radio"
                  name="language"
                  id="eng"
                  value="english"
                  defaultChecked
                />
                <label htmlFor="eng">English</label>
              </div>
            </form>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us On</h4>
            <div className="flex gap-x-2 mt-2">
              <Image
                className="cursor-pointer"
                src={"/images/socialmedia/facebook.png"}
                width={40}
                height={40}
                alt="socia media"
              />
              <Image
                className="cursor-pointer"
                src={"/images/socialmedia/instagram.png"}
                width={40}
                height={40}
                alt="socia media"
              />
              <Image
                className="cursor-pointer"
                src={"/images/socialmedia/viber.png"}
                width={40}
                height={40}
                alt="socia media"
              />
              <Image
                className="cursor-pointer"
                src={"/images/socialmedia/telegram.png"}
                width={40}
                height={40}
                alt="socia media"
              />
              <Image
                className="cursor-pointer"
                src={"/images/socialmedia/twitter.png"}
                width={40}
                height={40}
                alt="socia media"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex items-start gap-x-1">
            <MapPinIcon className="w-5" />
            <p className="w-60">
              Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingyun Tsp,
              Yangon
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <PhoneIcon className="w-5" />
            <p>09458489458</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold ml-5">Download Our App</h4>
          <Image src={"/images/frame.png"} width={200} height={200} alt="QR" />
        </div>
      </div>
      <p className="text-center mt-5 text-sm">
        &#169; Copyright 2023 C by D Co., Ltd. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
