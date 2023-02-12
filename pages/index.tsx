import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import HeroButton from "@/components/HeroButton";

import { PageInfo, Social, Skill, Project, Typewriter } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchTypewriter } from "@/utils/fetchTypewriter";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  typewriterInfo: Typewriter;
};

export default function Home({
  pageInfo,
  socials,
  skills,
  projects,
  typewriterInfo,
}: Props) {
  return (
    <div
      className="relative snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll overflow-x-hidden bg-[#191A19] z-5
     scrollbar-thin scrollbar-track-green-200/20 scrollbar-thumb-[#CF2400]/70 scrollbar-thumb-rounded-full
    "
    >
      <Head>
        <title>Gorkem Gocer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center ">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center ">
        <About image={pageInfo.profileImage} about={pageInfo.about} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center ">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start ">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-end ">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-4 z-20">
          <HeroButton />
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const typewriterInfo: Typewriter = await fetchTypewriter();

  return {
    props: {
      pageInfo,
      skills,
      socials,
      projects,
      typewriterInfo,
    },
    revalidate: 60 * 6 * 10,
  };
};
