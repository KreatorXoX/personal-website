import Head from "next/head";
import { GetStaticProps } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import { PageInfo, Social, Skill, Project } from "@/typings";
import {
  pageInfoQuery,
  projectsQuery,
  skillsQuery,
  socialsQuery,
} from "@/utils/groqs";

import { client } from "@/sanity/lib/client";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
};

export default function Home({ pageInfo, socials, skills, projects }: Props) {
  return (
    <main
      className="relative snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll overflow-x-hidden bg-gray-800 z-5
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
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className=" snap-center ">
        <About image={pageInfo?.profileImage} about={pageInfo?.about} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center ">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start ">
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-end ">
        <ContactMe
          contactEmail={pageInfo?.email}
          contactAddress={pageInfo?.address}
        />
      </section>

      {/* Footer */}
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  const projects: Project[] = await client.fetch(projectsQuery);
  const socials: Social[] = await client.fetch(socialsQuery);
  const skills: Skill[] = await client.fetch(skillsQuery);
  return {
    props: {
      pageInfo,
      skills,
      socials,
      projects,
    },
    revalidate: 60 * 6 * 10,
  };
};
