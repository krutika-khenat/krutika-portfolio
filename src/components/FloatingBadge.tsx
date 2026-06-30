import { motion } from "framer-motion";

type FloatingBadgeProps = {
  text: string;
  className?: string;
};

function FloatingBadge({ text, className = "" }: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium shadow-lg ${className}`}
    >
      {text}
    </motion.div>
  );
}

export default FloatingBadge;