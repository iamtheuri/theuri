"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import RecentProjects from "@/components/RecentProjects";
import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from 'react';
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import dynamic from "next/dynamic";
import { navItems } from "@/data";
import "@/styles/global.css";

const DynamicLoading = dynamic(() => import('./loading'))

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {isLoading ? (
          <DynamicLoading />
        ) : (
          <>
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Experience />
            <Education />
            <Approach />
            <Footer />
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
