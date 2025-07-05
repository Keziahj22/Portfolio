import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/Themetoggle";
// import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "../components/AboutSection";


import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
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
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/*<ContactSection /> */}
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};