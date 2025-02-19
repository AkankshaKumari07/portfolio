"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define the Snowflake Type
interface Snowflake {
  id: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
}

const Hero = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]); // ✅ Correct Typing

  useEffect(() => {
    // Generate 100 snowflakes
    const flakes: Snowflake[] = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `-${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setSnowflakes(flakes);
  }, []);

  // ✅ Always Load in Dark Mode (default)
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Forces dark mode on page load
  }, []);

  // Function to Download CV
  const handleDownload = () => {
    const cvUrl = "/images/Akanksha_Frontend_developer.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Akanksha_Frontend_developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll to Contact Section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Grid */}
      <div
        id="hero"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 2px)",
          backgroundSize: "15px 15px",
          opacity: 0.3,
        }}
      />

      {/* Snowflake Animation */}
      <style>{`
        @keyframes snowfall {
          from { transform: translateY(-100vh); }
          to { transform: translateY(100vh); }
        }
        .snowflake {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.7;
          animation: snowfall linear infinite;
        }
        html.light .snowflake {
          background-color: #1e40af; /* Blue in Light Mode */
        }
        html.dark .snowflake {
          background-color: white; /* White in Dark Mode */
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(30) forwards;
        }
      `}</style>

      {/* Snowflakes */}
      {snowflakes.map(({ id, top, left, duration, delay }) => (
        <div
          key={id}
          className="snowflake"
          style={{
            top,
            left,
            animationDuration: duration,
            animationDelay: delay,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="text-center relative z-10">
        {/* Intro Text */}
        <div className="mb-6 text-black dark:text-gray-300 text-xs md:text-lg font-semibold">
          Hello! I&apos;m Akanksha. A passionate Software Developer.
        </div>

        {/* Typewriter Effect for Role */}
        <motion.p
          className="typewriter md:text-4xl text-sm mb-6 font-bold text-black dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer specializing in{" "}
          <span className="text-blue-600">React and Next.js</span>
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          {/* Download CV Button */}
          <button
            onClick={handleDownload}
            className="bg-gray-300 text-gray-700 md:px-4 md:py-3 px-2 py-2 rounded-md font-medium text-base hover:bg-gray-400 hover:text-black cursor-pointer transition duration-300"
          >
            Download CV
          </button>

          {/* Contact Me Button */}
          <button
            onClick={scrollToContact}
            className="bg-[rgb(35,40,58)] text-gray-200 md:px-4 md:py-3 px-2 py-2 rounded-md font-medium text-base hover:bg-blue-950 hover:text-white cursor-pointer transition duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
