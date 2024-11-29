import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaTelegram , FaFacebook} from 'react-icons/fa'; 
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-lightBlue min-h-screen flex items-center justify-between px-8 py-20">
      {/* Left Side: Text and About Me button */}
      <div className="flex flex-col items-start justify-center space-y-6">
        <h1 className="text-5xl font-bold text-yellow-500 animate-fadeInSlideUp">
          Hi, I&apos;m Safwan Mughal
        </h1>
        <p className="text-xl text-blue-300 animate-fadeInSlideUp">
          Web Developer | Frontend Specialist
        </p>
        
        {/* About Me Button */}
        <a href="#about" className="px-6 py-3 bg-yellow-500 text-black rounded-md text-lg font-semibold hover:bg-yellow-400 transition duration-300 mb-6 animate-fadeInSlideUp">
          About Me
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-6 animate-fadeInSlideUp">
          <a href="https://www.linkedin.com/in/muhammad-safwan-0100b8258/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SafwanMughal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/safwan_mughal12/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/safwan.jawaid" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaFacebook/>
          </a>
          <a href="https://twitter.com/safwanmughal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://t.me/safwanmughal" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaTelegram />
          </a>
          
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-1/3 h-auto">
        <Image
          src="/profile.jpg" 
          alt="Safwan Mughal"
          width={400} 
          height={400}
          className="rounded-full border-4 border-yellow-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;
