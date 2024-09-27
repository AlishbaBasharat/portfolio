import { userObject } from "@/modals/User"
import { navItems } from "@/modals/Header"
import { Project } from "@/modals/Project"

export const userInfo:userObject = {
    name: "Alishba Basharat",
    picture: "/assets/mypicture.jpeg",
    pic: "/assets/mypicture.jpeg",
    heading: 'I&#39;m a Web Developer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>Hello! My name is Alishba, and I&#39;m a 19-year-old passionate about technology and innovation. I have successfully completed my ICOM,which has strengthened my foundation in tech. Currently, I am pursuing Generative AI Engineering from GIAIC, where I am diving deep into cutting-edge AI technologies to harness the power of AI in creative and technical ways.</p>
        `,
    skills: ['React', 'Next', 'HTML', 'CSS', 'Typescript', 'JavaScript'],    
}

export const headerItems: navItems= {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  skill: { label: "Skill", page: "skill" },
  project: { label: "Project", page: "project" },
}

export const project: Project[] = [
  {
    name: 'Calculator',
    image: '/assets/calculator12.jpeg',
    githubLink: 'https://github.com/AlishbaBasharat/simple-calculator.git',
    description: 'basic mathematical operations.',
  
  },
  {
    name: 'Atm',
    image: '/assets/atm12.jpeg',
    githubLink: 'https://github.com/AlishbaBasharat/ATM-Machine.git',
    description: "Atm Machine",
  },
  {
    name: 'ToDo List',
    image: '/assets/todo12.jpeg',
    githubLink: 'https://github.com/AlishbaBasharat/to_do_app.git',
    description: "Todo tasks",
  },
 ];
  