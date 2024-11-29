// "use client"
import Navbar from "../components/Nevbar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="bg-black text-lightBlue">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      
    </div>
  );
}
