"use client"

import { experience } from "@/lib/data"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <h2 className="text-4xl md:text-6xl font-extrabold md:mb-10 text-center md:text-left xl:ml-[27rem] lg:px-0 px-8 tracking-wide">
        Experience
      </h2>

      {/* Line with blinking dot and experience content side by side */}
      <div className="relative flex flex-col md:flex-row items-start xl:ml-[28rem] space-y-12 md:space-x-12 md:space-y-0 lg:px-0 px-8">
        {/* Left: Vertical Line with Blinking Dot (hidden on mobile) */}
        <div className="hidden md:block relative md:w-[1px] md:h-[70vh]">
          <div className="w-[1px] h-[70vh] dark:bg-gray-900 bg-gray-200">
            {/* White Circle Outline (Static) */}
            <div className="absolute -top-2.5 w-4 h-4 left-[-7px] border-2 dark:border-gray-700 border-gray-300 rounded-full" />

            {/* Green Blinking Dot (Slow Blink with Delay) */}
            <motion.div
              className="absolute -top-2 w-3 h-3 left-[-5px] bg-green-400 rounded-full"
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />
          </div>
        </div>

        {/* Right: Experience Content */}
        <div className="max-w-3xl space-y-16 px-4 md:px-0">
          {experience.map((exp, index) => (
            <div key={index} className="text-left">
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <p className="dark:text-gray-400 text-gray-900 italic">
                {exp.role} / {exp.period}
              </p>
              <ul className="mt-3 space-y-2 dark:text-gray-300 text-gray-900 text-base list-disc list-inside">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

