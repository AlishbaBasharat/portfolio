import React from 'react';
import { project } from '@/constants/constant';
import Image from 'next/image';

const Project: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold mb-8 mt-10 flex justify-center text-5xl my-9" style={{ fontFamily: 'Montserrat, sans-serif' }}>Project</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg inline-block max-w-max shadow-md overflow-hidden">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={200}
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;





