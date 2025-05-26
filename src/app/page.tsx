"use client";
import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LandingPage } from "@/components/LandingPage";
import { StepBuilder } from "@/components/StepBuilder";
import { TourPreview } from "@/components/TourPreview";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TourStep } from "@/types/tour";
import { mockSteps } from "@/data/mockSteps";

export default function InteractiveProductTour() {
  const [currentView, setCurrentView] = useState<
    "landing" | "builder" | "preview"
  >("landing");
  const [steps, setSteps] = useState<TourStep[]>(mockSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStep, setEditingStep] = useState<TourStep | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeView = (newView: "landing" | "builder" | "preview") => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <ThemeProvider>
      <div className="font-sans transition-colors duration-500">
        <ThemeToggle />
        {currentView === "landing" && <LandingPage changeView={changeView} />}
        {currentView === "builder" && (
          <StepBuilder
            steps={steps}
            setSteps={setSteps}
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editingStep={editingStep}
            setEditingStep={setEditingStep}
            changeView={changeView}
            isTransitioning={isTransitioning}
          />
        )}
        {currentView === "preview" && (
          <TourPreview
            steps={steps}
            changeView={changeView}
            isTransitioning={isTransitioning}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
