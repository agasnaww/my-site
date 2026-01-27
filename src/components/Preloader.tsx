import { motion } from "framer-motion";

const Preloader = () => {
  const greeting = "こんにちは。";
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--bg-primary)]"
    >
      <div className="overflow-hidden font-display font-sans text-5xl md:text-8xl font-bold tracking-tight text-[var(--text-primary)] flex">
        {greeting.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            className="inline-block origin-bottom"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
