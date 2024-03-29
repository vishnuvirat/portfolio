import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Image from "next/image";
import Link from "next/link";
import {
  PageInfo,
  Experience,
  Project,
  Skill,
  Socials,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import type { GetStaticProps } from "next";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Socials[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-none md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        <link rel="manifest" href="./manifest.json"></link>
        
      </Head>
      <Header socials={socials}/>
      <div id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </div>
      <div id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </div>
      <div id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </div>
      <div id="skills" className="snap-start">
        <Skills skills={skills} />
      </div>
      <div id="projects" className="snap-start">
        <Projects projects={projects} />
      </div>
      <div id="contact" className="snap-start">
        <ContactMe />
      </div>

      <Link href="#hero">
        <div className="flex sticky bottom-16 lg:bottom-5 w-full cursor-pointer">
          <div className="flex flex-1"></div>
          <div className="flex items-center justify-center">
            <Image
              className=" h-6 w-6 sm:h-10 sm:w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/vishnu.jpg"
              alt=""
              width="100"
              height="100"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Socials[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate:10,
  };
};
