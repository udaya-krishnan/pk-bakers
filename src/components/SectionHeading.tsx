import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true }: SectionHeadingProps) => (
  <AnimatedSection className={`mb-12 ${center ? "text-center" : ""}`}>
    {label && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold tracking-wider uppercase mb-4">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
