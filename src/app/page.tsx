
import Section1 from "@/components/features/home/Section1";
import Section2 from "@/components/features/home/Section2";
import Section3 from "@/components/features/home/Section3";
import Section4 from "@/components/features/home/Section4";
import Section5 from "@/components/features/home/Section5";
import Section6 from "@/components/features/home/Section6";
import Section7 from "@/components/features/home/Section7";
import Section8 from "@/components/features/home/Section8";
import Section9 from "@/components/features/home/Section9";
import Section10 from "@/components/features/home/Section10";
import Section11 from "@/components/features/home/Section11";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollReveal direction="down"><Section1 /></ScrollReveal>
      <ScrollReveal direction="left" delay={0.3}><Section2 /></ScrollReveal>
      <ScrollReveal direction="right"><Section3 /></ScrollReveal>
      <ScrollReveal><Section4 /></ScrollReveal>
      <ScrollReveal direction="left"><Section5 /></ScrollReveal>
      <ScrollReveal><Section6 /></ScrollReveal>
      <ScrollReveal direction="right"><Section7 /></ScrollReveal>
      <ScrollReveal><Section8 /></ScrollReveal>
      <ScrollReveal width="100%"><Section9 /></ScrollReveal>
      <ScrollReveal><Section10 /></ScrollReveal>
      <ScrollReveal><Section11 /></ScrollReveal>
    </div>
  );
}
