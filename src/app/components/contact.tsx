"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ TypeScript Error Fix: Added proper type for 'e'
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex items-start justify-start bg-white text-black dark:bg-black dark:text-white px-12 md:py-20 py-12 relative">
      <div className="w-full max-w-lg lg:ml-[22rem] relative z-10">
        {/* Header */}
        <h1 className="md:text-6xl text-4xl font-extrabold md:mb-12 text-center md:text-left mb-8">Contact Me</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name Input */}
          <div>
            <label className="text-sm font-medium block mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Akanksha...."
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-10 p-2 text-sm bg-white text-black dark:bg-neutral-900 dark:text-white border dark:border-blue-950 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-sm font-medium block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-10 p-2 bg-white text-black text-sm dark:bg-neutral-900 dark:text-white border dark:border-blue-950 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="text-sm font-medium block mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 h-36 bg-white text-sm text-black dark:bg-neutral-900 dark:text-white border dark:border-blue-950 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          {/* Submit Button - Width Chhoti */}
          <button
            type="submit"
            className="w-28 bg-black text-white dark:bg-neutral-200 dark:text-black py-3 px-4 text-sm rounded-md font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
