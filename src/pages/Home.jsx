import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/Themetoggle";
// import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
// import { HeroSection } from "../components/HeroSection";
// import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "../components/SkillsSection";
// import { ProjectsSection } from "../components/ProjectsSection";
// import { ContactSection } from "../components/ContactSection";
// import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMeSection />
        {/* <SkillsSection />
        <ProjectsSection />
        <ContactSection /> */}
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};