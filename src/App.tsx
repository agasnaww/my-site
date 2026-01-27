import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Works from "./pages/Works";

const AppContent = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[var(--bg-primary)] transition-colors duration-500`}
    >
      <AnimatePresence mode="wait">
        {isFirstLoad ? (
          <Preloader key="preloader" />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="works" element={<Works />} />
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
