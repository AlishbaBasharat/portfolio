"use client";
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { MouseEventHandler } from "react";

const openLinkedInProfile: MouseEventHandler<HTMLButtonElement> = () => {
  window.open(
    "https://www.linkedin.com/in/alishba-basharat-1a4401302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "_blank"
  );
};

const Intro: React.FC = () => {
  return (
    <section
      id={headerItems.home.page}
      className="h-screen flex text-center justify-center item-center md:flex-row flex-col md:text-start"
    >
      <div className="flex items-center justify-center">
        <Image
          src={userInfo.picture}
          alt="dp"
          width={200}
          height={200}
          className="mt-36 shadow-2xl rounded-lg"
        />
      </div>

      <div className="md:ml-19 sm:ml-12 md:w-1/2">
        <h1 className="uppercase text-7xl hidden md:block mt-56">
          Website Developer
        </h1>
        <h1 className="mt-8 md:text-3xl text-3xl">
          Hi, I&#39;m{" "}
          <span className="text-purple-800 text-3x1 md:text-4x1">
            {userInfo.name}
          </span>
        </h1>
        <p className="mt-5 font-medium text-lg">
          A{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Frontend developer", "Programmer", "Teacher"]}
            />
          </span>
        </p>
        <button
          className="bg-purple-700 mt-5 w-28 h-9 rounded text-neutral-200 example_e"
          onClick={openLinkedInProfile}
        >
          Hire Me
        </button>

        <a
          href="/ALISHBA BASHARAT final cv.pdf"
          download
          className="bg-purple-700 text-white px-4 py-2 rounded-md font-semibold transition ml-5"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Intro;
