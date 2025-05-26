import React from "react";
import { ChevronRight, Play, Eye } from "lucide-react";

interface LandingPageProps {
  changeView: (view: "landing" | "builder" | "preview") => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ changeView }) => (
  <div
    className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden transition-all duration-1000"
    style={{ animation: "fadeInUp 1s ease-out" }}
  >
    {/* Animated background elements */}
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20`}
          style={{
            background: [
              "bg-blue-500",
              "bg-purple-500",
              "bg-pink-500",
              "bg-cyan-500",
              "bg-indigo-500",
            ][i],
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animation: `float ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>

    <div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={{ animation: "fadeInUp 1s ease-out" }}
    >
      <div
        className="mb-8 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105"
        style={{ animation: "bounceIn 1s ease-out 0.2s both" }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>

      <h1
        className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        style={{ animation: "slideInLeft 1s ease-out 0.4s both" }}
      >
        Build Interactive
        <span
          className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ animation: "slideInRight 1s ease-out 0.6s both" }}
        >
          Product Tours
        </span>
      </h1>

      <p
        className="text-xl text-gray-300 dark:text-gray-200 mb-12 max-w-2xl leading-relaxed"
        style={{ animation: "fadeInUp 1s ease-out 0.8s both" }}
      >
        Create stunning, interactive product demonstrations that captivate your
        audience. Record, edit, and share beautiful product tours in minutes.
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4"
        style={{ animation: "fadeInUp 1s ease-out 1s both" }}
      >
        <button
          onClick={() => changeView("builder")}
          className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-white/25 hover:scale-105 hover:-translate-y-1"
        >
          <span className="group-hover:animate-pulse">Start Demo</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </button>

        <button
          onClick={() => changeView("preview")}
          className="px-8 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 flex items-center gap-3 border border-white/20 dark:border-white/10 hover:scale-105 hover:-translate-y-1"
        >
          <Eye className="w-5 h-5 group-hover:animate-bounce" />
          Preview Tour
        </button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl"
        style={{ animation: "fadeInUp 1s ease-out 1.2s both" }}
      >
        {[
          {
            title: "Record & Edit Steps",
            desc: "Professional-grade tools for creating engaging product experiences.",
          },
          {
            title: "Smooth Animations",
            desc: "Buttery smooth transitions that delight your users.",
          },
          {
            title: "Responsive Design",
            desc: "Perfect on desktop, tablet, and mobile devices.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
            style={{
              animationDelay: `${1.4 + index * 0.1}s`,
              animation: "fadeInUp 1s ease-out both",
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-400 dark:text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
