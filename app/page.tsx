import TestimonialCard from "@/components/cards/TestimonialCard";
import CTASection from "@/sections/cta/CTASection";
import FAQSection from "@/sections/faq/FAQSection";
import Hero from "@/sections/hero/Hero";
import ProjectsSection from "@/sections/projects/ProjectSection";
import ServiceSection from "@/sections/services/ServiceSection";
import StatsSection from "@/sections/stats/StatsSection";
import TestimonialsSection from "@/sections/testimonials/Testimonials";
import WhyChooseUs from "@/sections/why choose us/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/> 
  <ServiceSection/>
  <WhyChooseUs/>
  <StatsSection/>
  <ProjectsSection/>
  <TestimonialsSection/>
  <FAQSection/>
  <CTASection/>
  </>
  );
}
