'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Coffee, Heart, Map, Music, Ghost, GraduationCap } from 'lucide-react';

export default function BentoJournal() {
  const [mounted, setMounted] = useState(false);
 
  //ganti ID spotify di sini
  const [spotifyTrackId, setSpotifyTrackId] = useState('68lbSrXDORS51pmyjZv712?si=a3f5c1ebe2354696'); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-purple-500">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
        
        {/* CARD 1: PROFIl*/}
        <motion.div 
          whileHover={{ scale: 0.98, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-900 via-slate-900 to-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-end border border-white/10"
        >
          <div className="bg-white/10 w-fit p-3 rounded-2xl mb-6 group-hover:rotate-12 transition-transform">
             <Sparkles className="text-yellow-400" size={40} />
          </div>
          <h1 className="text-6xl font-black italic leading-[0.8] uppercase tracking-tighter">
            ARMY<br/><span className="text-indigo-500">.LOG</span>
          </h1>
          <p className="opacity-50 mt-6 text-sm font-medium tracking-wide">
            Informatics Engineering student <br/> crafting digital chaos in Ternate.
          </p>
        </motion.div>

        {/* CARD 2: LOKASI */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="col-span-1 bg-zinc-900/50 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center border border-white/5"
        >
          <Map className="text-green-400 mb-2 animate-bounce" />
          <span className="font-black tracking-[0.2em] text-xl italic uppercase">Ternate</span>
          <span className="text-[10px] opacity-40 uppercase">North Maluku</span>
        </motion.div>

        {/* CARD 3: THE FLEX BOX HH */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="col-span-1 row-span-2 bg-zinc-900/50 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col gap-2 md:gap-3 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-2">
            <Code size={16} className="text-blue-400" />
            <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Mastering 'aamiin'</p>
          </div>
          {['Figma', 'Blender 3D', 'Next.js', 'Tailwind', 'Laravel'].map((t, i) => (
            <motion.div 
              key={t} 
              whileHover={{ x: 5 }}
              className="bg-white/5 p-3 rounded-2xl text-xs border border-white/5 font-mono flex justify-between group cursor-default"
            >
              {t} <span className="opacity-0 group-hover:opacity-100 transition-opacity">⚡</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CARD 4: ENERGY SOURCE UWU */}
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-orange-500/10 rounded-[2rem] p-6 flex flex-col justify-between border border-orange-500/20"
        >
          <div className="flex justify-between items-start">
            <Coffee className="text-orange-400" size={28} />
            <span className="text-[10px] bg-orange-500/20 px-2 py-1 rounded-full text-orange-400 font-bold">STAMINA</span>
          </div>
          <div>
            <span className="text-2xl font-black italic block">KELAPA MUDA</span>
            <span className="text-[10px] opacity-50 uppercase tracking-widest">Better than coffee.</span>
          </div>
        </motion.div>

        {/* CARD 5: THE QUOTE */}
        <motion.div 
          whileHover={{ scale: 0.98, rotate: 1 }}
          className="md:col-span-2 bg-zinc-900/50 rounded-[2rem] p-8 flex items-center justify-center border border-white/5 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-2xl italic font-medium text-center relative z-10 leading-relaxed">
            it had to happen so i could <br/>
            <span className="text-purple-500 font-black text-4xl not-italic tracking-tighter uppercase">Grow.</span>
          </p>
        </motion.div>

        {/* CARD 6: SPOTIFY EMBED */}
        <motion.div 
          className="md:col-span-2 bg-black rounded-[2rem] border border-white/10 overflow-hidden flex flex-col"
          whileHover={{ scale: 1.01 }}
        >
          <iframe 
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`} 
            width="100%" 
            height="180" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="rounded-[2rem]"
          ></iframe>
        </motion.div>

        {/* CARD 7: STUDENT LIFE PROGRESS */}
        <motion.div 
           whileHover={{ scale: 1.05 }}
           className="bg-zinc-900/50 rounded-[2rem] p-6 border border-white/5 flex flex-col justify-between"
        >
           <div className="flex justify-between items-center">
             <GraduationCap className="text-blue-400" />
             <span className="text-[10px] font-mono opacity-50 italic">SEM</span>
           </div>
           <div>
              <div className="w-full bg-white/5 h-2 rounded-full mb-2">
                 <div className="bg-blue-500 h-full w-[15%] rounded-full shadow-[0_0_10px_#3b82f6]" />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-tighter italic">Skripsi Progress: 15%</p>
           </div>
        </motion.div>

        {/* CARD 8: THE GHOST */}
        <motion.div 
          whileHover={{ scale: 0.95, rotate: -3 }}
          className="bg-white text-black rounded-[2rem] p-6 flex flex-col justify-between"
        >
          <Ghost className="animate-bounce" />
          <p className="text-xs font-black uppercase leading-none italic">
            Me trying <br/> to stay <br/> Sane.
          </p>
        </motion.div>

      </div>

      <footer className="mt-12 text-center">
        <p className="text-[10px] opacity-20 uppercase tracking-[0.5em]">Built with Chaos by Army © 2026</p>
      </footer>
    </main>
  );
}