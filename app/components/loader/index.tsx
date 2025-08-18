import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed z-100 inset-0 bg-gradient-to-br from-slate-900 via-[#166371] to-slate-900 flex items-center justify-center overflow-hidden min-h-screen">
      {/* Enhanced animated background elements with 3D effect */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob transform-gpu"
          style={{ backgroundColor: "#00A8C5" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 transform-gpu"
          style={{ backgroundColor: "#5DE7FF" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 transform-gpu"
          style={{ backgroundColor: "#3EB9CF" }}
        ></div>

        {/* Additional floating orbs for more depth */}
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-float transform-gpu"
          style={{ backgroundColor: "#4CD9ED" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-float-reverse transform-gpu"
          style={{ backgroundColor: "#00A8C5" }}
        ></div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

      {/* Main loading container with glass effect */}
      <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 p-6 md:p-8">
        {/* Glass card container */}
        <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
          {/* 3D Central loading animation */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Outer rotating ring with 3D effect */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 border-4 border-transparent rounded-full animate-spin transform-gpu shadow-lg"
              style={{
                borderTopColor: "#00A8C5",
                borderRightColor: "#5DE7FF",
                boxShadow: "0 10px 15px -3px rgba(0, 168, 197, 0.2)",
              }}
            ></div>

            {/* Middle ring */}
            <div
              className="absolute inset-1 w-16 h-16 md:w-20 md:h-20 border-3 border-transparent rounded-full animate-reverse-spin transform-gpu"
              style={{
                borderBottomColor: "#3EB9CF",
                borderLeftColor: "#4CD9ED",
              }}
            ></div>

            {/* Inner rotating ring - opposite direction with glow */}
            <div
              className="absolute inset-3 w-12 h-12 md:w-14 md:h-14 border-2 border-transparent rounded-full animate-spin-slow transform-gpu shadow-inner"
              style={{
                borderRightColor: "#00A8C5",
                borderBottomColor: "#5DE7FF",
              }}
            ></div>

            {/* Center pulsing core with 3D effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-4 h-4 rounded-full animate-pulse-glow transform-gpu shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, #00A8C5, #5DE7FF, #3EB9CF)",
                  boxShadow: "0 10px 15px -3px rgba(93, 231, 255, 0.5)",
                }}
              ></div>
            </div>

            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-orbit">
              <div
                className="absolute -top-1 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 shadow-lg"
                style={{
                  backgroundColor: "#00A8C5",
                  boxShadow: "0 4px 6px -1px rgba(0, 168, 197, 0.5)",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 animate-orbit-reverse">
              <div
                className="absolute top-1/2 -right-1 w-2 h-2 rounded-full transform -translate-y-1/2 shadow-lg"
                style={{
                  backgroundColor: "#3EB9CF",
                  boxShadow: "0 4px 6px -1px rgba(62, 185, 207, 0.5)",
                }}
              ></div>
            </div>
          </div>

          {/* Enhanced loading text with glass effect */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 animate-pulse-text drop-shadow-lg">
              Loading
              <span
                className="animate-bounce inline-block"
                style={{ color: "#00A8C5" }}
              >
                .
              </span>
              <span
                className="animate-bounce inline-block animation-delay-200"
                style={{ color: "#5DE7FF" }}
              >
                .
              </span>
              <span
                className="animate-bounce inline-block animation-delay-400"
                style={{ color: "#3EB9CF" }}
              >
                .
              </span>
            </h2>
            <p className="text-gray-300 text-xs md:text-sm animate-fade-in drop-shadow-sm">
              Preparing your experience
            </p>
          </div>

          {/* 3D Animated progress indicators */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-6">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full animate-bounce transform-gpu shadow-lg`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  backgroundColor:
                    index === 0 || index === 3
                      ? "#00A8C5"
                      : index === 1 || index === 4
                      ? "#5DE7FF"
                      : "#3EB9CF",
                  boxShadow: `0 4px 6px -1px ${
                    index === 0 || index === 3
                      ? "rgba(0, 168, 197, 0.5)"
                      : index === 1 || index === 4
                      ? "rgba(93, 231, 255, 0.5)"
                      : "rgba(62, 185, 207, 0.5)"
                  }`,
                }}
              ></div>
            ))}
          </div>

          {/* Modern 3D progress bar */}
          <div className="w-48 md:w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden mt-6 backdrop-blur-sm border border-white/10 shadow-inner">
            <div
              className="h-full rounded-full animate-loading-progress shadow-lg transform-gpu"
              style={{
                background:
                  "linear-gradient(to right, #00A8C5, #5DE7FF, #3EB9CF)",
              }}
            ></div>
          </div>
        </div>

        {/* Floating particles around the main card */}
        <div
          className="absolute -top-4 -left-4 w-2 h-2 rounded-full animate-float opacity-60 shadow-lg"
          style={{
            backgroundColor: "#00A8C5",
            boxShadow: "0 4px 6px -1px rgba(0, 168, 197, 0.5)",
          }}
        ></div>
        <div
          className="absolute -top-2 -right-6 w-1.5 h-1.5 rounded-full animate-float-reverse opacity-60 shadow-lg"
          style={{
            backgroundColor: "#5DE7FF",
            boxShadow: "0 4px 6px -1px rgba(93, 231, 255, 0.5)",
          }}
        ></div>
        <div
          className="absolute -bottom-3 -left-2 w-2 h-2 rounded-full animate-float opacity-60 shadow-lg"
          style={{
            backgroundColor: "#3EB9CF",
            boxShadow: "0 4px 6px -1px rgba(62, 185, 207, 0.5)",
          }}
        ></div>
        <div
          className="absolute -bottom-4 -right-4 w-1.5 h-1.5 rounded-full animate-float-reverse opacity-60 shadow-lg"
          style={{
            backgroundColor: "#4CD9ED",
            boxShadow: "0 4px 6px -1px rgba(76, 217, 237, 0.5)",
          }}
        ></div>
      </div>

      {/* Custom styles with 3D animations */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-reverse-spin {
          animation: reverse-spin 2s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-loading-progress {
          animation: loading-progress 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-text {
          animation: pulse-text 2s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 3s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 4s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg) translateZ(0);
          }
          to {
            transform: rotate(0deg) translateZ(0);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1) rotateZ(0deg);
          }
          25% {
            transform: translate(30px, -50px) scale(1.2) rotateZ(90deg);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.8) rotateZ(180deg);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.1) rotateZ(270deg);
          }
        }

        @keyframes loading-progress {
          0% {
            width: 0%;
            transform: translateX(-100%) translateZ(0);
            box-shadow: 0 0 20px rgba(0, 168, 197, 0.5);
          }
          50% {
            width: 100%;
            transform: translateX(0%) translateZ(0);
            box-shadow: 0 0 30px rgba(93, 231, 255, 0.7);
          }
          100% {
            width: 0%;
            transform: translateX(100%) translateZ(0);
            box-shadow: 0 0 20px rgba(62, 185, 207, 0.5);
          }
        }

        @keyframes fade-in {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1) translateZ(0);
            box-shadow: 0 0 20px rgba(93, 231, 255, 0.5);
          }
          50% {
            transform: scale(1.2) translateZ(0);
            box-shadow: 0 0 40px rgba(93, 231, 255, 0.8);
          }
        }

        @keyframes pulse-text {
          0%,
          100% {
            transform: scale(1) translateZ(0);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: scale(1.02) translateZ(0);
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateZ(0);
          }
          to {
            transform: rotate(360deg) translateZ(0);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg) translateZ(0);
          }
          to {
            transform: rotate(0deg) translateZ(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) translateZ(0);
          }
          33% {
            transform: translateY(-10px) translateX(5px) translateZ(0);
          }
          66% {
            transform: translateY(5px) translateX(-5px) translateZ(0);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) translateZ(0);
          }
          33% {
            transform: translateY(10px) translateX(-5px) translateZ(0);
          }
          66% {
            transform: translateY(-5px) translateX(5px) translateZ(0);
          }
        }

        /* Responsive breakpoints for better mobile experience */
        @media (max-width: 640px) {
          .animate-blob {
            animation-duration: 10s;
          }
        }

        /* Hardware acceleration for better performance */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
