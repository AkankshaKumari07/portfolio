"use client";

import { useState, useEffect } from "react";
import Card from "./ui/card";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon, Menu } from "lucide-react";

export default function MiniNavbar() {
  const [hoverMenu, setHoverMenu] = useState<"navigation" | "social" | "theme" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // ✅ Default to Dark Mode
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme as "light" | "dark");
    setMounted(true);
  }, [setTheme]);

  // ✅ Theme Icons
  const getThemeIcon = () => {
    if (!mounted) return null; // ✅ No placeholder icon during hydration
    return theme === "dark" ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-yellow-400" />;
  };

  const toggleTheme = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(selectedTheme);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Desktop Navbar */}
      <div className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-white dark:bg-black text-black dark:text-white rounded-full px-12 py-3 space-x-8 shadow-lg border border-gray-300 dark:border-gray-700">
        {/* Navigation */}
        <div className="relative">
          <span className="cursor-pointer" onMouseEnter={() => setHoverMenu("navigation")}>
            Navigation
          </span>
          {hoverMenu === "navigation" && (
            <Card
              title="Navigation"
              items={["Home", "About", "Experience", "Skills", "Projects", "Contact"]}
              onItemClick={(label) => scrollToSection(label.toLowerCase())}
              onMouseLeave={() => setHoverMenu(null)}
            />
          )}
        </div>

        {/* Social */}
        <div className="relative">
          <span className="cursor-pointer" onMouseEnter={() => setHoverMenu("social")}>
            Social
          </span>
          {hoverMenu === "social" && (
            <Card
              title="Social"
              items={["Github", "LinkedIn", "Email"]}
              onItemClick={(label) => {
                const links: Record<"Github" | "LinkedIn" | "Email", string> = {
                  Github: "https://github.com/AkankshaKumari07",
                  LinkedIn: "https://www.linkedin.com/in/akanksha-kumari-661aa324a/",
                  Email: "mailto:akankshak0707@gmail.com",
                };
                window.open(links[label as keyof typeof links], "_blank");
              }}
              onMouseLeave={() => setHoverMenu(null)}
            />
          )}
        </div>

        {/* ✅ Theme Selection */}
        <div className="relative mt-[3px]">
          <span className="cursor-pointer" onMouseEnter={() => setHoverMenu("theme")}>
            {getThemeIcon()}
          </span>
          {hoverMenu === "theme" && (
            <Card
              title="Theme"
              items={["Light", "Dark"]}
              onItemClick={(label) => toggleTheme(label.toLowerCase() as "light" | "dark")}
              onMouseLeave={() => setHoverMenu(null)}
            />
          )}
        </div>
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-white dark:bg-black text-black dark:text-white rounded-full px-6 py-3 flex items-center space-x-6 shadow-lg border border-gray-300 dark:border-gray-700">
        {/* Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* ✅ Theme Toggle */}
        <button onClick={() => setHoverMenu(hoverMenu === "theme" ? null : "theme")}>
          {getThemeIcon()}
        </button>

        {/* ✅ Theme Selection Dropdown */}
        {hoverMenu === "theme" && (
          <Card
            title="Theme"
            items={["Light", "Dark"]}
            onItemClick={(label) => toggleTheme(label.toLowerCase() as "light" | "dark")}
            onMouseLeave={() => setHoverMenu(null)}
          />
        )}
      </div>

      {/* ✅ Mobile Menu Dropdown (Navigation) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-1/2 transform -translate-x-1/2 z-[101] bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg p-4 space-y-4">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((label) => (
            <button
              key={label}
              className="flex items-center space-x-3 w-full text-left"
              onClick={() => scrollToSection(label.toLowerCase())}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
