import React from "react";
import { ArrowLeft, ArrowRight, Eye, Plus } from "lucide-react";
import { TourStep } from "@/types/tour";
import { StepCard } from "./StepCard";
import { EditStepModal } from "./EditStepModal";

interface StepBuilderProps {
  steps: TourStep[];
  setSteps: React.Dispatch<React.SetStateAction<TourStep[]>>;
  currentStepIndex: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editingStep: TourStep | null;
  setEditingStep: React.Dispatch<React.SetStateAction<TourStep | null>>;
  changeView: (view: "landing" | "builder" | "preview") => void;
  isTransitioning: boolean;
}

export const StepBuilder: React.FC<StepBuilderProps> = ({
  steps,
  setSteps,
  currentStepIndex,
  setCurrentStepIndex,
  isEditing,
  setIsEditing,
  editingStep,
  setEditingStep,
  changeView,
  isTransitioning,
}) => {
  const addNewStep = () => {
    const newStep: TourStep = {
      id: Date.now().toString(),
      title: "New Step",
      description: "Add your description here",
      imageUrl:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=500&fit=crop",
    };
    setSteps([...steps, newStep]);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "scale(0.95)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 transition-colors duration-300"
        style={{ animation: "slideDown 0.6s ease-out" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => changeView("landing")}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tour Builder
            </h1>
          </div>
          <button
            onClick={() => changeView("preview")}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-0.5 group"
          >
            <Eye className="w-4 h-4 group-hover:animate-pulse" />
            Preview
          </button>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto px-6 py-8"
        style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tour Steps
              </h2>
              <button
                onClick={addNewStep}
                className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-0.5 group"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                Add Step
              </button>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  setSteps={setSteps}
                  setEditingStep={setEditingStep}
                  setIsEditing={setIsEditing}
                />
              ))}
            </div>
          </div>

          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-6 transition-colors duration-300"
            style={{ animation: "slideInRight 0.6s ease-out 0.3s both" }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Live Preview
            </h3>
            {steps.length > 0 ? (
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={steps[currentStepIndex]?.imageUrl}
                    alt={steps[currentStepIndex]?.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {steps[currentStepIndex]?.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {steps[currentStepIndex]?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() =>
                      setCurrentStepIndex(Math.max(0, currentStepIndex - 1))
                    }
                    disabled={currentStepIndex === 0}
                    className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:-translate-x-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStepIndex
                            ? "bg-blue-500 dark:bg-blue-400 scale-125"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentStepIndex(
                        Math.min(steps.length - 1, currentStepIndex + 1),
                      )
                    }
                    disabled={currentStepIndex === steps.length - 1}
                    className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <Plus className="w-12 h-12 mx-auto mb-4 opacity-50 animate-pulse" />
                <p>Add your first step to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isEditing && editingStep && (
        <EditStepModal
          editingStep={editingStep}
          setEditingStep={setEditingStep}
          setSteps={setSteps}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};
