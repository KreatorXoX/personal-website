import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import HeroButton from "@/components/HeroButton";
import Link from "next/link";

export default function Home() {
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
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center ">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center ">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center ">
        <Skills />
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
