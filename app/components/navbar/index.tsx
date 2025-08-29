"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Navbar Component
export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isInHeroSection, setIsInHeroSection] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Web3", href: "#web3" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" },
  ];

  // Handle scroll effect for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background color
      setIsScrolled(currentScrollY > 50);

      // Check if we're still in hero section (assuming hero is viewport height)
      const heroHeight = window.innerHeight;
      setIsInHeroSection(currentScrollY < heroHeight);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname === "/") {
        // Already on home → just scroll
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Not on home → go to home with hash
        router.push(`/${href}`);
      }
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`${
          // Mobile: absolute positioning only in hero, Desktop: fixed
          isInHeroSection
            ? "fixed top-0 left-1/2 transform -translate-x-1/2"
            : "lg:fixed lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 absolute top-0 left-1/2 transform -translate-x-1/2"
        } overflow-hidden z-60 max-w-[1240px] w-full mx-auto mt-6 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full opacity-0"
        } ${
          // Mobile: black background, Desktop: original background behavior
          isScrolled
            ? "bg-black/80 lg:bg-black/40"
            : "bg-black/80 lg:bg-white/10"
        }`}
      >
        <div className="px-4">
          <div className="flex justify-between items-center h-11 md:h-[66px]">
            <Link href={"/"}>
              <Image
                className="absolute -left-30 top-0"
                src={"/nav-blur.svg"}
                height={200}
                width={440}
                alt="logo"
              />
              <Image
                className="absolute -left-30 top-0"
                src={"/nav-blur.svg"}
                height={200}
                width={440}
                alt="logo"
              />
              <Image
                className="absolute -left-30 top-0"
                src={"/nav-blur.svg"}
                height={200}
                width={440}
                alt="logo"
              />
              <div className="flex-shrink-0 relative z-10">
                <Image src={"/logo.svg"} className="md:h-[56px] md:w-[110px] h-[40px] w-[80px]" height={56} width={110} alt="logo" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.href.startsWith("#") ? (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-white text-4 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white text-4 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Sign In Button (Desktop) */}
            <div className="hidden lg:block">
              <button className="bg-[#00A8C5] hover:bg-white hover:text-black text-white px-6 py-2 rounded-full cursor-pointer font-[600] h-[44px]">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleDrawer}
                className="text-white hover:text-white p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isDrawerOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isDrawerOpen ? "opacity-70" : "bg-opacity-0"
          }`}
          onClick={toggleDrawer}
        ></div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-black transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <Link href={"/"}>
                <Image
                  className="absolute left-0 bottom-0 top-0"
                  src={"/nav-blur.svg"}
                  height={220}
                  width={240}
                  alt="logo"
                />
                <div className="flex-shrink-0 relative z-10">
                  <Image src={"/logo.svg"} height={56} width={110} alt="logo" />
                </div>
              </Link>
            </div>
            <button
              onClick={toggleDrawer}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-6 space-y-6">
            {navItems.map((item, index) =>
              item.href.startsWith("#") ? (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

            <button className="w-full bg-[#4CD9ED] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-8">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
