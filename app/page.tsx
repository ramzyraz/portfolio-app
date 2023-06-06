import Contacts from "@/components/contact";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  )
}