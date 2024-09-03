"use client";

import { companies } from "@/data";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-0">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  className="md:w-10 w-5"
                  alt={company.name}
                  src={company.img}
                  loading="lazy"
                />
                <Image
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                  src={company.nameImg}
                  alt={company.name}
                  loading="lazy"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;