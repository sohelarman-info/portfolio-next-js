"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/about";
import Layout from "@/components/common/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </div>
  );
}
