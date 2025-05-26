import React from "react";
import { TourStep } from "@/types/tour";

interface EditStepModalProps {
  editingStep: TourStep;
  setEditingStep: React.Dispatch<React.SetStateAction<TourStep | null>>;
  setSteps: React.Dispatch<React.SetStateAction<TourStep[]>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditStepModal: React.FC<EditStepModalProps> = ({
  editingStep,
  setEditingStep,
  setSteps,
  setIsEditing,
}) => {
  const saveStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === editingStep.id ? editingStep : step,
      ),
    );
    setIsEditing(false);
    setEditingStep(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 transform transition-all duration-300"
        style={{ animation: "scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Edit Step
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={editingStep.title}
              onChange={(e) =>
                setEditingStep({ ...editingStep, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={editingStep.description}
              onChange={(e) =>
                setEditingStep({ ...editingStep, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Image URL
            </label>
            <input
              type="url"
              value={editingStep.imageUrl}
              onChange={(e) =>
                setEditingStep({ ...editingStep, imageUrl: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={saveStep}
            className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
