import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Wheel() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      className="relative w-4 h-4 border border-red-600 rounded-full flex items-center justify-center"
    >
      <div className="absolute w-[1px] h-full bg-red-600" />
      <div className="absolute w-full h-[1px] bg-red-600" />
      <div className="absolute w-[1px] h-full bg-red-600 rotate-45" />
      <div className="absolute w-full h-[1px] bg-red-600 rotate-45" />
    </motion.div>
  );
}

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // This timer determines how long the loader stays visible (e.g., 3000ms = 3 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

      {/* Ambient smoke */}
      <motion.div
        animate={{ y: [-20, 20], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-red-600/20 blur-3xl rounded-full"
      />

      {/* Content */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center z-10"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide font-sans">
          <span className="text-white">Vyronex </span>
          <span className="text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.35)]">
            Motors
          </span>
        </h1>

        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 2 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.4 }}
          className="mt-4 h-[2px] w-[260px] bg-red-600 origin-center"
        />

        {/* Loader Wheels */}
        <div className="relative mt-7 flex gap-3">
          <Wheel />
          <Wheel />
          <Wheel />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;