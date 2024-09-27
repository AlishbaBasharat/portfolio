 import Intro from "../component/Intro";
 import About from "../component/About";
 import Project from "../component/Project";
import Footer from "../component/Footer";
import Skill from "../component/Skill";


 const Main: React.FC = () => {
    return(
        <div>
        <Intro/>
        <About/>
        <Skill/>
        <Project/>
        <Footer/>
        </div>
        
    )
 }

 export default Main;

