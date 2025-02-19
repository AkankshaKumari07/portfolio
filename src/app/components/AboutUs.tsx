"use client";

import { personalData, profileInfo, skills } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div id="about" className="bg-white dark:bg-black text-foreground py-16 px-4 flex justify-center">
      {/* Content Grid with Mobile Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left Section: Profile and Skills */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-600"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold">Name: {personalData.name}</h2>
              <p className="text-gray-500 dark:text-gray-300">Job Role: {personalData.role}</p>
              <p className="text-gray-500 dark:text-gray-300">Experience: 2 Years</p>
              <p className="text-gray-500 dark:text-gray-300">Location: {personalData.location}</p>
            </div>
          </div>

          {/* Skills Section */}
          <h3 className="text-xl font-semibold">Skills</h3>
          {skills.languages.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded">
                <div className="h-2 bg-blue-600 rounded" style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: About and Profile Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">About Me</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-xl">
            {personalData.about}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold">Profile Info</h3>
          <div className="space-y-3 text-base text-gray-600 dark:text-gray-300">
            <p><strong>Profile:</strong> {profileInfo.profile}</p>
            <p><strong>Domain:</strong> {profileInfo.domain}</p>
            <p><strong>Education:</strong> {profileInfo.education}</p>
            <p><strong>Languages:</strong> {profileInfo.languages.join(", ")}</p>
            <p><strong>BI Tools:</strong> {profileInfo.frameworks.join(", ")}</p>
            <p><strong>Other Skills:</strong> {profileInfo.otherSkills.join(", ")}</p>
            <p><strong>Interests:</strong> {profileInfo.interests.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
