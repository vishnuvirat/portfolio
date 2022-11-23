import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vishnu Portfolio</title>
      </Head>
      <Header />
      <div id="hero" className="snap-start">
        <Hero />
      </div>
      <div id="about" className="snap-center">
        <About />
      </div>
      <div id="experience" className="snap-center">
        <Experience />
      </div>
      <div id="skills" className="snap-start">
        <Skills />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div id="contact" className="snap-start">
        <ContactMe/>
      </div>
    </div>
  );
}
