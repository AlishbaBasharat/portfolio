import React from 'react';
import Image from 'next/image';

interface Skill {
  icon: string; 
}

const skillsData: Skill[] = [
  { icon: '/assets/html.png' },
  { icon: '/assets/css.png' },
  { icon: '/assets/typescript.png' },
  { icon: '/assets/javascript.png' },
  { icon: '/assets/react.png' }, 
  { icon: '/assets/nextjs.png' }, 
];

const Skill: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-16 items-center">
      <h2 className="text-6xl font-bold mb-4 text-center text-blue-600">Skills</h2>
      <ul>
        <li className="flex items-center mb-2 justify-center my-5 mt-10 gap-3">
          {skillsData.map((skill, index) => (
            <div key={index} className="transition-transform transform hover:scale-110 duration-00">
              <Image
                src={skill.icon}
                alt={`Skill ${index}`}
                width={48} 
                height={48} 
                className="mr-2"
              />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Skill;
