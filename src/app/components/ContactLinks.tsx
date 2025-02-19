"use client";

import { Mail, FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-4 px-6 flex flex-col items-center">
      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-32 text-center">
        {[
          { icon: Linkedin, title: "LinkedIn", detail: "akanksha-kumari-661aa324a", url: "https://www.linkedin.com/in/akanksha-kumari-661aa324a/" },
          { icon: Github, title: "GitHub", detail: "AkankshaKumari07", url: "https://github.com/AkankshaKumari07" },
          { icon: Mail, title: "Email", detail: "akankshak0707@gmail.com", url: "mailto:akankshak0707@gmail.com" },
          { icon: FileText, title: "Certificate", detail: "Certificate Link", url: "/certificate.pdf", newTab: true },
        ].map(({ icon: Icon, title, detail, url, newTab }, index) => (
          <Link href={url} key={index} target={newTab ? "_blank" : "_self"}>
            <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-16 h-16 dark:bg-gray-800 bg-white flex items-center justify-center rounded-full border-2 dark:border-blue-950 border-gray-100">
                <Icon className="dark:text-blue-600 text-gray-600  w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400">{detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
