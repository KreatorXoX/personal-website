import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll bg-[#191A19] z-5">
      <Head>
        <title>Gorkem Gocer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center h-screen">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center h-screen">
        <About />
      </section>

      {/* experience */}
      <section id="exp" className="snap-center h-screen">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start h-screen">
        <Projects />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center h-screen">
        <Skills />
      </section>
      {/* Contact */}
    </div>
  );
}
