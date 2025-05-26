import React from "react";
import { Edit3, Trash2 } from "lucide-react";
import { TourStep } from "@/types/tour";

interface StepCardProps {
  step: TourStep;
  index: number;
  setSteps: React.Dispatch<React.SetStateAction<TourStep[]>>;
  setEditingStep: React.Dispatch<React.SetStateAction<TourStep | null>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  index,
  setSteps,
  setEditingStep,
  setIsEditing,
}) => {
  const deleteStep = (id: string) => {
    setSteps((prevSteps) => prevSteps.filter((s) => s.id !== id));
  };

  const editStep = () => {
    setEditingStep(step);
    setIsEditing(true);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-4 hover:shadow-md dark:hover:shadow-lg transition-all duration-300 hover:scale-102 hover:-translate-y-1 group"
      style={{
        animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="flex items-center gap-4">
        {/* Serial Number Circle */}
        <div className="flex-none w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
          {index + 1}
        </div>
        {/* Step Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
            {step.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {step.description}
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={editStep}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteStep(step.id)}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
