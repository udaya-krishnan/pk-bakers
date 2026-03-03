import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Leaf, DollarSign, MapPin, Truck, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bakery.jpg";
import honeyAlmondCake from "@/assets/honey-almond-cake.jpg";
import chocolateShake from "@/assets/chocolate-shake.jpg";
import saudiShake from "@/assets/saudi-shake.jpg";
import falooda from "@/assets/falooda.jpg";

const featuredItems = [
  { name: "Honey Almond Cake", price: "₹180", image: honeyAlmondCake, tag: "Bestseller" },
  { name: "Chocolate Shake", price: "₹90", image: chocolateShake, tag: "Popular" },
  { name: "Saudi Shake", price: "₹120", image: saudiShake, tag: "Special" },
  { name: "Falooda", price: "₹100", image: falooda, tag: "Must Try" },
];

const whyChoose = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "We use only the freshest and finest ingredients in every recipe." },
  { icon: DollarSign, title: "Affordable Prices", desc: "Quality baked goods at prices everyone can enjoy. ₹1–200 range." },
  { icon: MapPin, title: "Multiple Outlets", desc: "10+ outlets across Kerala for your convenience." },
  { icon: Truck, title: "Takeaway & Delivery", desc: "Quick takeaway and delivery options available." },
];

const testimonials = [
  { name: "Anish Kumar", text: "Best bakery in Palakkad! The cakes are always fresh and delicious. Love the honey almond cake.", rating: 5 },
  { name: "Priya Menon", text: "Amazing shakes and the ambiance is so warm and inviting. My go-to café!", rating: 4 },
  { name: "Rahul S.", text: "Great variety and affordable prices. The shawarma here is fantastic too!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="PEE KAY Bakers interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        <div className="relative z-10 container-bakery px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <Star className="w-5 h-5 fill-accent/40 text-accent" />
              </div>
              <span className="text-primary-foreground/80 text-sm font-medium">4.1 · 929 reviews</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Freshly Baked{" "}
              <span className="text-accent">Happiness</span>{" "}
              Every Day
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg sm:text-xl max-w-lg leading-relaxed">
              Quality, freshness, and tradition in every bite. Experience the warmth of Kerala's favorite bakery & café.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
              >
                View Menu
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/outlets"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-sm sm:text-base"
              >
                Find Outlet
                <MapPin className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding cream-gradient">
        <div className="container-bakery">
          <SectionHeading label="Our Specials" title="Featured Items" subtitle="Handpicked favorites loved by our customers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg text-foreground">{item.name}</h3>
                    <p className="text-accent-foreground font-bold text-lg mt-1">{item.price}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-bakery">
          <SectionHeading label="Why PK" title="Why Choose Us" subtitle="What makes PEE KAY Bakers special" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding warm-gradient">
        <div className="container-bakery">
          <SectionHeading label="Reviews" title="What Our Customers Say" subtitle="Real reviews from happy customers" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
