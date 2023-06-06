import Contacts from "@/components/contact";
import Experience from "@/components/experience/experience";
import HeroSection from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

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