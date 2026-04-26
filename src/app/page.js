import CTABanner from "@/components/homepage/CTABanner";
import FeaturedEvents from "@/components/homepage/FeaturedEvents";
import Features from "@/components/homepage/Features";
import HeroSection from "@/components/homepage/HeroSection";
import Testimonials from "@/components/homepage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Features />
        <FeaturedEvents />
        <Testimonials />
        <CTABanner />
      </div>
    </>
  );
}
