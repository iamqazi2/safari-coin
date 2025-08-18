"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="px-4  sm:px-8 md:px-16 lg:px-32 xl:px-[162px] py-6 sm:py-8 md:py-10 lg:py-[40px]">
      <div className="w-full max-w-[1116px] mx-auto bg-black text-white/50 md:rounded-2xl rounded-3xl lg:rounded-[30px] flex flex-col xl:flex-row items-center justify-between gap-6 md:gap-12 xl:gap-24 px-4 sm:px-8 md:px-12 lg:px-[60px] py-6 sm:py-8 md:py-10 lg:py-[44px]">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start w-full gap-6 sm:gap-8 lg:gap-12">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl text-white font-normal leading-[1.3] text-center lg:text-left whitespace-nowrap">
            Join Our Newsletter
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-md lg:max-w-none lg:w-1/2 px-1 py-0.5 bg-transparent border border-white/50 rounded-full overflow-hidden shadow-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent px-3 sm:px-4 font-normal py-3 sm:py-4 lg:py-[19px] text-sm sm:text-base text-white/50 placeholder-gray-400 outline-none leading-[1.25] tracking-normal"
              required
            />
            <button
              type="submit"
              className="bg-[#00A8C5] cursor-pointer text-white font-semibold w-[100px] sm:w-[120px] lg:w-[140px] h-[40px] sm:h-[48px] lg:h-[53px] text-sm sm:text-base leading-none rounded-full transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 sm:space-x-6 flex-shrink-0">
          <Link
            href="https://t.me/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 active:scale-95 group"
          >
            <Image
              src={"/telegram.png"}
              alt="telegram"
              width={40}
              height={33.6}
              className="w-8 h-6.7 sm:w-10 sm:h-8.4 lg:w-[50.98px] lg:h-[42.76px] transition duration-200 group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-[152deg] group-hover:saturate-200"
            />
          </Link>

          {/* Twitter */}
          <Link
            href="https://twitter.com/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 active:scale-95 group"
          >
            <Image
              src={"/twitter.png"}
              alt="twitter"
              width={40}
              height={33.6}
              className="w-8 h-6.7 sm:w-10 sm:h-8.4 lg:w-[50.98px] lg:h-[42.76px] transition duration-200 group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-[152deg] group-hover:saturate-200"
            />
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.com/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 active:scale-95 group"
          >
            <Image
              src={"/discord.png"}
              alt="discord"
              width={40}
              height={33.6}
              className="w-8 h-6.7 sm:w-10 sm:h-8.4 lg:w-[50.98px] lg:h-[42.76px] transition duration-200 group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-[152deg] group-hover:saturate-200"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
