"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Layout from "@/components/common/Layout/Layout";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Services />
      </Layout>
    </div>
  );
}
