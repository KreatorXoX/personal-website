import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-[#191A19] z-5">
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
      <section id="about" className="snap-center h-screen">
        <About />
      </section>

      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
