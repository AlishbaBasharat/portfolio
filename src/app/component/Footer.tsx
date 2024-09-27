import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-5 text-white items-center justify-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebookF className="text-xl hover:text-blue-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/alishba-basharat-1a4401302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-xl hover:text-blue-500" />
          </a>
        </div>
        
      </div>
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm">&copy; 2024 Alishba Basharat ❤️ All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
