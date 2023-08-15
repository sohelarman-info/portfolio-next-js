"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Layout from "@/components/common/Layout/Layout";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Blog from "@/components/Blog/Blog";
import Partners from "@/components/Partners/Partners";
import Subscription from "@/components/Subscription/Subscription";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Blog />
        <Partners />
        <Subscription />
      </Layout>
    </div>
  );
}
