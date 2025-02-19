"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

interface CardProps {
  title?: string;
  items: string[];
  onItemClick?: (item: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({ title, items, onItemClick, onMouseEnter, onMouseLeave }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 5 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute top-full mt-2 rounded-lg shadow-lg p-3 border ${
        theme === "light"
          ? "bg-white text-black border-gray-300"  // ✅ Light mode: White background
          : "bg-black text-white border-gray-700"  // ✅ Dark mode: Dark background
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title && <div className="px-4 py-2 font-bold">{title}</div>}
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick && onItemClick(item)}
          className="block px-4 py-1 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
};

export default Card;
