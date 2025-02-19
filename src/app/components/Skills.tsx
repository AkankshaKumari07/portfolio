"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJest } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

const skillLinks = {
  "React.js": { url: "https://react.dev/", icon: FaReact, color: "text-blue-500" },
  "Next.js": { 
    url: "https://nextjs.org/docs", 
    icon: SiNextdotjs, 
    color: "text-black dark:text-white"  // Next.js icon will be black in light mode and white in dark mode
  },
  Tailwind: { url: "https://tailwindcss.com/docs", icon: SiTailwindcss, color: "text-teal-400" },
  Javascript: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400",
  },
  "REST API": {
    url: "https://restfulapi.net/",
    icon: MdApi,
    color: "text-orange-500",
  },
  Jest: { url: "https://jestjs.io/docs/getting-started", icon: SiJest, color: "text-purple-600" },
};

export default function Skills() {
  return (
    <section id="skills" className="dark:bg-black bg-white py-12">
      <h2 className="md:text-6xl text-4xl md:ml-[27rem] ml-4 tracking-wide font-extrabold md:mb-16 mb-8 dark:text-white text-black md:text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-2 max-w-5xl">
        {Object.entries(skillLinks).map(
          ([skill, { url, icon: Icon, color }], index) => (
            <Link href={url} key={index} target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer border dark:border-gray-700 border-gray-800 rounded-lg flex flex-col items-center justify-center h-52 space-y-4 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,255,0,0.15), rgba(0,0,255,0.15))",
                  }}
                ></div>

                {/* Blinking Effect (Next.js only) */}
                {skill === "Next.js" && (
                  <motion.div
                    className="absolute top-[-15px] left-0 right-0 bottom-0 z-0 rounded-lg"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,0,255,0.2))",
                    }}
                  />
                )}

                {/* Skill Title */}
                <p className="text-3xl font-bold dark:text-white text-black relative z-10">
                  {skill}
                </p>

                {/* Icon Below Title */}
                <div className={`relative z-10 ${color}`}>
                  {/* Wrap the icon in a div for sizing and color */}
                  <Icon size={60} />
                </div>
              </motion.div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
