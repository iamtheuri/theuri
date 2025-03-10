"use client";

import { FaLocationArrow } from "react-icons/fa6";
import BackgroundImage from "../public/bg.png";
import { PinContainer } from "./ui/Pin";
import { projects } from "@/data";
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <section className="py-20 select-none" id="projects">
      <h1 className="heading">
        Recent{" "}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href="https://x.com/iamtheuri_"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={BackgroundImage} alt={item.title} loading="lazy" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.linkUrl}
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.link}
                  </p>
                  {item.linkUrl !== '#' ?
                    <FaLocationArrow className="ms-3" color="#CBACF9" /> : ''
                  }
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
