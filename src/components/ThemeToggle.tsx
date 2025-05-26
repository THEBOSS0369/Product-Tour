import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("Toggling theme. Current isDark:", isDark);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-3 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-full border border-white/20 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 group"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
        />
      </div>
    </button>
  );
};
