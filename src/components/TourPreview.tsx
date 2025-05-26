import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { TourStep } from "@/types/tour";

interface TourPreviewProps {
  steps: TourStep[];
  changeView: (view: "landing" | "builder" | "preview") => void;
  isTransitioning: boolean;
}

export const TourPreview: React.FC<TourPreviewProps> = ({
  steps,
  changeView,
  isTransitioning,
}) => {
  const [previewStep, setPreviewStep] = useState(0);

  const nextStep = () => {
    if (previewStep < steps.length - 1) {
      setPreviewStep(previewStep + 1);
    }
  };

  const prevStep = () => {
    if (previewStep > 0) {
      setPreviewStep(previewStep - 1);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 dark:from-black dark:to-gray-900 transition-all duration-1000"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "scale(0.95)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="bg-black/20 dark:bg-black/40 backdrop-blur-sm border-b border-white/10 dark:border-white/5 transition-colors duration-300"
        style={{ animation: "slideDown 0.6s ease-out" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => changeView("builder")}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-300 hover:scale-110 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <h1 className="text-xl font-semibold text-white">
            Product Tour Preview
          </h1>
          <div className="text-white/70 text-sm">
            {previewStep + 1} / {steps.length}
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto px-6 py-12"
        style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
      >
        {steps.length > 0 ? (
          <div
            key={previewStep}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500"
            style={{ animation: "scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <div className="relative group overflow-hidden">
              <img
                src={steps[previewStep]?.imageUrl}
                alt={steps[previewStep]?.title}
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                  {previewStep + 1}
                </div>
                <span className="text-white text-sm font-medium">
                  Step {previewStep + 1}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 bg-gray-700/50 dark:bg-gray-800/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${((previewStep + 1) / steps.length) * 100}%`,
                        transform: "translateX(0%)",
                        animation: "progressFill 0.8s ease-out",
                      }}
                    ></div>
                  </div>
                  <span className="text-white/70 text-sm font-medium">
                    {Math.round(((previewStep + 1) / steps.length) * 100)}%
                  </span>
                </div>

                <div style={{ animation: "slideInUp 0.6s ease-out 0.2s both" }}>
                  <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">
                    {steps[previewStep]?.title}
                  </h2>
                  <p className="text-lg text-gray-300 dark:text-gray-200 leading-relaxed">
                    {steps[previewStep]?.description}
                  </p>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                style={{ animation: "slideInUp 0.6s ease-out 0.4s both" }}
              >
                <button
                  onClick={prevStep}
                  disabled={previewStep === 0}
                  className="px-6 py-3 bg-white/10 dark:bg-white/5 text-white rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-105 hover:-translate-y-1 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Previous
                </button>

                {previewStep === steps.length - 1 ? (
                  <button
                    onClick={() => changeView("landing")}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
                  >
                    <span className="relative">
                      Complete Tour
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 group"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                )}
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPreviewStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === previewStep
                        ? "bg-blue-500 dark:bg-blue-400 scale-125 shadow-lg shadow-blue-500/50"
                        : index < previewStep
                          ? "bg-green-500 dark:bg-green-400 hover:bg-green-400"
                          : "bg-white/30 dark:bg-white/20 hover:bg-white/50 dark:hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="text-center py-20"
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <div className="text-white/70 mb-4">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50 animate-pulse" />
              <p className="text-xl">No steps available</p>
              <p className="text-sm mt-2">
                Go back to builder to add some steps
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
