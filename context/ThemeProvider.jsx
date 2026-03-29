// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext();


// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') || 
//       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//     setTheme(storedTheme);
//   }, []);

//   useEffect(() => {
//     const root = document.documentElement;
//     root.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// export const useTheme = () => useContext(ThemeContext);
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? 'dark'
//       : 'light';

//     setTheme(savedTheme || systemTheme);
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const root = document.documentElement;
//     root.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme);
//   }, [theme, mounted]);

//   const toggleTheme = () => {
//     setTheme(t => (t === 'light' ? 'dark' : 'light'));
//   };

//   // ✅ Provider ALWAYS wraps children
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {mounted ? children : null}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within ThemeProvider');
//   }
//   return context;
// };


// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // Default light
//   const [mounted, setMounted] = useState(false);

//   // Initialize theme after component mounts
//   useEffect(() => {
//     console.log('🔧 ThemeProvider mounted');
    
//     const savedTheme = localStorage.getItem('theme');
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
//       ? 'dark' 
//       : 'light';
    
//     const initialTheme = savedTheme || systemTheme;
//     console.log('📱 Initial theme:', initialTheme);
    
//     setTheme(initialTheme);
//     setMounted(true);
//   }, []);

//   // Apply theme to document
//   useEffect(() => {
//     if (!mounted) return;
    
//     console.log('🎨 Applying theme:', theme);
//     const root = document.documentElement;
    
//     if (theme === 'dark') {
//       root.classList.add('dark');
//       console.log('✅ Dark class added');
//     } else {
//       root.classList.remove('dark');
//       console.log('✅ Dark class removed');
//     }
    
//     localStorage.setItem('theme', theme);
//     console.log('💾 Theme saved to localStorage:', theme);
//   }, [theme, mounted]);

//   const toggleTheme = () => {
//     console.log('🔄 Toggle clicked! Current theme:', theme);
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     console.log('🔄 New theme will be:', newTheme);
//     setTheme(newTheme);
//   };

//   // IMPORTANT: Always provide context, even during loading
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={mounted ? '' : 'opacity-0'}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within ThemeProvider');
//   }
//   return context;
// };


//////ThemeProvider

"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}