import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TopicShowcase from "@/components/TopicShowcase";
import Vision from "@/components/Vision";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <TopicShowcase />
      <Vision />
      <FinalCTA />
      <Footer />
    </div>
  );
}
