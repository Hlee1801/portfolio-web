import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Intro from "@/components/intro/Intro";
import Projects from "@/components/projects/Projects";
import { WorkDaily } from "@/components/work-daily";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <WorkDaily />
      <Contact />
    </>
  );
}
