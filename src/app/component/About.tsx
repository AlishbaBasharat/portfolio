import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section id={headerItems.about.page}
        className="flex text-center justify-center item-center md:flex-row flex-col md:text-start mt-40 text-black"
      >

        <div className="md:ml-19 sm:ml-12 md:w-1/2">
          <h1 className="my-6 text-6xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>About</h1>
          <h1 className="text-2xl my-4">Get to Know me!</h1>
          <AboutText text={userInfo.about} />
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-7">
          <Image
            src={userInfo.pic}
            alt="dp"
            width={200}
            height={200}
            className="shadow-2xl rounded-lg"
          />

        </div>
      </section>
    </div>
  )
}

const AboutText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default About;