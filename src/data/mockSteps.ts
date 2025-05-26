import { TourStep } from "@/types/tour";

export const mockSteps: TourStep[] = [
  {
    id: "1",
    title: "Welcome to Dashboard",
    description:
      "This is your main dashboard where you can see all your projects and analytics at a glance.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    mockScreen: "dashboard",
  },
  {
    id: "2",
    title: "Create New Project",
    description:
      "Click the plus button to start a new project. You can choose from various templates or start from scratch.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    mockScreen: "create-project",
  },
  {
    id: "3",
    title: "Customize Your Workflow",
    description:
      "Drag and drop components to build your perfect workflow. Everything is customizable to fit your needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
    mockScreen: "workflow",
  },
];
