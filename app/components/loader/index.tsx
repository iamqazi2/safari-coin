import Image from "next/image";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="absolute top-0 z-90 inset-0 bg-black flex items-center justify-center">
      {/* Main container for logo and animations */}
      <div className="relative z-100 flex flex-col items-center">
        {/* Logo container with pulse animation */}
        <div className="relative mb-8">
          {/* Animated rings behind logo */}
          <div className="absolute inset-0 -m-4">
            <div className="w-60 h-60 border-2 border-[#00A8C5] rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="absolute inset-0 -m-2">
            <div className="w-56 h-56 border-2 border-[#00A8C5] rounded-full animate-ping opacity-50 animation-delay-200"></div>
          </div>

          {/* Logo placeholder - replace with your actual logo */}
          <div className="w-50 h-50 bg-[#00A8C5] rounded-full flex items-center justify-center animate-pulse">
            {/* Replace this div with your actual logo image */}
            <Image
              src="/loading.svg"
              width={48}
              height={48}
              alt="Logo"
              className="w-44 h-44 object-contain"
            />
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#00A8C5] rounded-full animate-loading-bar"></div>
        </div>
      </div>

      {/* Custom keyframes and animations via style tag */}
      <style jsx>{`
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 75%;
            margin-left: 12.5%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }

        /* Enhanced ping animation */
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* Smooth bounce */
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
