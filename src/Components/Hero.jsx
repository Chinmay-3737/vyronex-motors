import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-brand-black flex flex-col justify-center items-center overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.9)_100%)] z-20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none z-0"></div>
      
      {/* NEW: Horizontal Red Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-600/60 blur-sm z-5"></div>

      {/* Ambient Smoke Animation */}
      <motion.div
        animate={{ y: [-20, 20], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/30 blur-[100px] rounded-full z-0"
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center w-full max-w-7xl px-4 flex flex-col items-center justify-center mt-10">
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-brand-red tracking-[0.2em] text-sm mb-2 font-medium"
        >
          THE FUTURE OF AUTOMOTIVE LUXURY
        </motion.p>

        <div className="relative w-full flex justify-center items-center py-10">
          {/* Background Text - PERFORMANCE (Red Outline) */}
          <h1 className="absolute text-[12rem] md:text-[16rem] leading-none font-black tracking-tighter text-outline select-none opacity-80 z-0">
            PERFORMANCE
          </h1>

          {/* Car Image - Dark Sports Car */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            // Reverted to the original dark car image URL
            src="https://pngimg.com/d/aston_martin_PNG38.png" 
            alt="Dark Sports Car" 
            className="relative z-10 w-[80%] max-w-5xl object-contain drop-shadow-2xl"
          />

          {/* Foreground Text - PRECISION (Clear White) */}
          <h2 className="absolute -top-4 text-7xl md:text-9xl font-bold text-white tracking-tight z-20 drop-shadow-lg">
            PRECISION
          </h2>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-row gap-6 mt-8 z-30"
        >
          <button className="bg-brand-red text-white px-8 py-3 font-bold tracking-wider text-sm flex items-center hover:bg-red-700 transition-all">
            EXPLORE COLLECTION <span className="ml-2">→</span>
          </button>
          <button className="bg-transparent border border-white/30 text-white px-8 py-3 font-bold tracking-wider text-sm flex items-center hover:bg-white hover:text-black transition-all">
            CUSTOMIZATION STUDIO <span className="ml-2">→</span>
          </button>
        </motion.div>

      </div>

      {/* NEW: Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-400 font-medium">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;