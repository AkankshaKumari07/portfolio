"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, X, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup the overflow style on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Close modal on scroll
  const handleScroll = () => {
    if (selectedProject !== null) {
      setSelectedProject(null);
    }
  };

  return (
    <section
      className="md:py-10 px-4 md:px-8 bg-white text-black dark:bg-black dark:text-white relative"
      id="projects"
    >
      {/* Title Section */}
      <div>
        <h2 className="md:text-6xl text-4xl text-center md:text-left font-extrabold md:ml-[24rem] ml-4 md:mb-16 mb-8 text-black dark:text-white">
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group cursor-pointer transition-transform duration-300"
            onClick={() => setSelectedProject(index)}
          >
            {/* Card Image */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={project.coverImage || project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedProject(null)}
          onWheel={handleScroll} // Close modal on scroll
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-black dark:bg-zinc-900 dark:text-white rounded-xl max-w-2xl w-full p-6 relative z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-3 text-black dark:text-white z-[10001] transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-3">
              {projects[selectedProject].title}
            </h3>

            <p className="mb-4">{projects[selectedProject].description}</p>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                {projects[selectedProject].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* View Project & GitHub Links */}
            <div className="flex gap-4">
              {/* View Project */}
              <Link
                href={projects[selectedProject].link}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </Link>

              {/* GitHub Link */}
              {projects[selectedProject].github && (
                <Link
                  href={projects[selectedProject].github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-all"
                >
                  GitHub <Github className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
