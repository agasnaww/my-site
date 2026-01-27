import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../utils/animations";

const Works = () => {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2026",
      cat: "Development",
      desc: "Modern editorial layout crafted with React, Tailwind, and Framer Motion.",
      link: "https://github.com/agasnaww/my-site",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        variants={fadeInUp}
        className="font-display text-2xl md:text-3xl mb-8 md:mb-12 font-medium"
      >
        Selected Works
      </motion.h2>

      <div className="divide-y divide-[var(--border-color)] border-t border-[var(--border-color)]">
        {projects.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
            className="group py-6 flex flex-col md:flex-row justify-between md:items-baseline transition-all cursor-pointer rounded-lg block"
          >
            <div className="flex gap-4 md:gap-6 items-baseline">
              <span className="font-mono text-xs text-[var(--text-secondary)] opacity-50">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium group-hover:text-[var(--text-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 font-sans line-clamp-2 md:line-clamp-none opacity-80">
                  {item.desc}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-3 md:mt-0 text-[10px] md:text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] opacity-70 ml-8 md:ml-0">
              <span>{item.cat}</span>
              <span>{item.year}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Works;
