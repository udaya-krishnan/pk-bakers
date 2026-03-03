import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-bakery.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Outlets" },
  { value: 929, suffix: "+", label: "Reviews" },
  { value: 100, suffix: "+", label: "Menu Items" },
  { value: 15, suffix: "+", label: "Years" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-accent">
      {count}{suffix}
    </div>
  );
}

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding warm-gradient">
        <div className="container-bakery">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary-foreground text-xs font-semibold tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                A Tradition of <span className="text-accent">Taste</span> & Quality
              </h1>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                PEE KAY Bakers started as a small bakery in the heart of Kerala with a simple vision — to bring freshly baked happiness to every home. Over the years, we have grown into a beloved brand with 10+ outlets across Kerala.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Every product we serve is crafted with love, using the finest ingredients sourced locally. From our signature Honey Almond Cake to refreshing Falooda, each item reflects our commitment to quality and tradition.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={aboutImg}
                alt="Inside PEE KAY Bakers"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-[400px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-bakery">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding cream-gradient">
        <div className="container-bakery">
          <SectionHeading title="Mission & Vision" subtitle="What drives us every day" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver the finest baked goods at affordable prices, making every celebration sweeter and every morning brighter for families across Kerala.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Kerala's most loved bakery chain, known for uncompromised quality, innovation, and a warm café experience in every outlet.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
