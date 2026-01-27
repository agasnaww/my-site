import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp, imageReveal } from "../utils/animations";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/agasnaww")
      .then((r) => r.json())
      .then(setProfile);
  }, []);

  if (!profile)
    return (
      <div className="text-xs font-mono text-[var(--text-secondary)] animate-pulse">
        Loading...
      </div>
    );

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
        Profile Overview
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        <motion.div
          variants={imageReveal}
          className="w-24 h-24 md:w-40 md:h-40 shrink-0 bg-[var(--border-color)] rounded-2xl overflow-hidden relative ring-1 ring-[var(--border-color)]"
        >
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        <div className="flex-1 space-y-8 md:space-y-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div variants={fadeInUp} className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                Full Name
              </span>
              <p className="font-display text-lg font-medium">{profile.name}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                Location
              </span>
              <p className="font-display text-lg font-medium">
                {profile.location || "Remote"}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="col-span-1 sm:col-span-2 space-y-1.5"
            >
              <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                GitHub Bio
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                {profile.bio || "No public bio."}
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="pt-8 md:pt-10 border-t border-[var(--border-color)]"
          >
            <h3 className="font-display text-xl font-medium mb-6">
              The Backstory
            </h3>
            <div className="text-[var(--text-secondary)] leading-7 space-y-4 font-sans max-w-2xl text-sm md:text-base">
              <p>
                I started coding around 2021 just before the AI hype took over.
                Instead of getting distracted by flashy UIs, I fell in love with
                the terminal and system internals. I spend more time configuring
                my <b>Arch Linux</b> setup (yes, I use Arch) and exploring
                backend logic than centering divs.
              </p>
              <p>
                Off the keyboard, I dive deep into Japanese pop
                culture—devouring Light Novels and blasting J-Rock/J-Pop. I also
                have a thing for audio gear (just a casual IEM enjoyer), so
                you'll rarely see me without my IEMs plugged in.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-6">
            <a
              href={profile.html_url}
              target="_blank"
              className="group inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--text-primary)] transition-colors"
            >
              Visit GitHub Profile{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
