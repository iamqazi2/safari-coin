"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-center items-start py-8 lg:py-[55px] px-4 sm:px-8 lg:px-[120px] gap-8 lg:gap-12 w-full max-w-7xl">
        {/* Logo and Description Section */}
        <div className="container mx-auto  md::text-left text-center flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full lg:w-auto">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={156}
            height={77}
            className="w-32 h-auto lg:w-[156px]"
          />
          <p className="font-normal text-sm lg:text-base text-center lg:text-left">
            Bridging travel with ownership, loyalty & intelligence{" "}
            <br className="hidden lg:block" />{" "}
            <span className="lg:hidden"> </span>
            through Web3 and AI innovation.
          </p>
          <button
            type="submit"
            className="bg-[#00A8C5] cursor-pointer text-white font-semibold w-[151px] h-[44px] text-base leading-none rounded-full transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex relative z-0 flex-row md:flex-row justify-center lg:justify-start items-center lg:items-start gap-8 lg:gap-12 w-full lg:w-auto">
          {/* Company Links */}
          <div className="flex flex-col justify-center items-center lg:items-start min-w-[100px] gap-4 lg:gap-6">
            <p className="text-base font-medium">Company</p>
            <ul className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Ecosystem
                </li>
              </a>
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Web3
                </li>
              </a>
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Roadmap
                </li>
              </a>
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Community
                </li>
              </a>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col justify-center items-center lg:items-start min-w-[142px] gap-4 lg:gap-6">
            <p className="text-base font-medium">Legal</p>
            <ul className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Terms & Conditions
                </li>
              </a>
              <a href="#">
                <li className="text-sm lg:text-base font-normal opacity-60 hover:opacity-80 transition-opacity">
                  Privacy Policy
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:min-w-[351px] lg:w-auto gap-6 lg:gap-8">
          <p className="text-base font-medium">Contact us</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center w-full max-w-md lg:max-w-none px-1 md:px-1 bg-transparent border border-white/50 rounded-full overflow-hidden shadow-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 w-full sm:w-auto bg-transparent px-6 font-normal py-[19px] text-sm lg:text-base text-white/50 placeholder-gray-400 outline-none leading-[1.25] tracking-normal"
              required
            />
            <button
              type="submit"
              className="bg-[#00A8C5] cursor-pointer text-white font-semibold md:w-full w-[136px] h-[48px] text-sm lg:text-base leading-none rounded-full sm:rounded-full transition-colors lg:mt-0"
            >
              Contact us
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex space-x-4 lg:space-x-6 justify-center">
            <Link
              href="https://t.me/"
              target="_blank"
              className="transition duration-200 hover:scale-110 active:scale-95 group"
            >
              <Image
                src={"/footer-telegram.svg"}
                alt="telegram"
                width={28}
                height={24}
                className="icon-hover cursor-pointer lg:w-8 lg:h-[27px]"
              />
            </Link>

            <Link
              href="https://twitter.com/"
              target="_blank"
              className="transition duration-200 hover:scale-110 active:scale-95 group"
            >
              <Image
                src={"/footer-twitter.svg"}
                alt="twitter"
                width={28}
                height={24}
                className="icon-hover cursor-pointer lg:w-8 lg:h-[27px]"
              />
            </Link>

            <Link
              href="https://discord.com/"
              target="_blank"
              className="transition duration-200 hover:scale-110 active:scale-95 group"
            >
              <Image
                src={"/footer-discord.svg"}
                alt="discord"
                width={28}
                height={24}
                className="icon-hover cursor-pointer lg:w-8 lg:h-[27px]"
              />
            </Link>

            <Link
              href="https://discord.com/"
              target="_blank"
              className="transition duration-200 hover:scale-110 active:scale-95 group"
            >
              <Image
                src={"/footer-web.svg"}
                alt="web"
                width={28}
                height={24}
                className="icon-hover cursor-pointer lg:w-8 lg:h-[27px]"
              />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-white/70 w-full" />
      <div className="text-center justify-center items-center py-4 px-4 text-white">
        <p className="text-sm lg:text-base">
          © 2025 SafariQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
