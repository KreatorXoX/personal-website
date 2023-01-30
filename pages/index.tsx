import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

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

      {/* About */}
      <section id="hero" className="snap-center h-screen">
        <Hero />
      </section>
      <section id="about" className="snap-center h-screen">
        <About />
      </section>

      {/* experience */}
      <section id="exp" className="snap-center h-screen">
        <Experience />
      </section>

      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
