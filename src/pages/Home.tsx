import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../utils/animations";

const Home = () => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-8 md:space-y-12"
  >
    <div className="space-y-2">
      <motion.span
        variants={fadeInUp}
        className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest block"
      >
        Based in Indonesia
      </motion.span>

      <div className="overflow-hidden">
        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight"
        >
          Powering the web <br /> from the
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight text-[var(--text-secondary)] opacity-60"
        >
          shell & server.
        </motion.h1>
      </div>
    </div>

    <motion.div
      variants={fadeInUp}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-[var(--text-secondary)] leading-relaxed max-w-3xl font-sans text-sm md:text-base"
    >
      <p>
        I'm Agas, a Backend Developer who loves living in the terminal. I care
        more about system stability, clean logic, and data flow than how a
        button looks.
      </p>
      <p>
        Currently diving deep into <b>Golang</b> and <b>JavaScript</b>, while
        exploring the depths of <b>Linux</b> and <b>C++</b> to understand how
        computers really work.
      </p>
    </motion.div>
  </motion.div>
);

export default Home;
