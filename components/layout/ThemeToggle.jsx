// // components/ThemeToggle.jsx
// "use client";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   // Sahi logic: Agar theme dark hai, to button "Switch to Light" dikhaye
//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="px-4 py-2 rounded-lg border border-border bg-card text-foreground font-medium transition-all"
//     >
//       {theme === "light" ? (
//         <span>☀️ Light Mode</span> // Dark mode mein light switch dikhaye
//       ) : (
//         <span>🌙 Dark Mode</span>  // Light mode mein dark switch dikhaye
//       )}
//     </button>
//   );
// }



"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      {/* Toggle Container */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
          isDark ? "bg-teal-500" : "bg-gray-300"
        }`}
      >
        {/* Animated Circle (The Knob) */}
        <div
          className={`bg-white w-5 h-5 rounded-full cursor-pointer shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isDark ? "translate-x-7" : "translate-x-0"
          }`}
        >
        </div>
      </button>
    </div>
  );
}