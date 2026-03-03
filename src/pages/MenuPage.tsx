import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Cakes", "Pastries", "Snacks", "Juices & Shakes", "Tea & Coffee", "Shawarma", "Fresh Fruits"];

const menuItems = [
  { name: "Honey Almond Cake", price: "₹180", category: "Cakes", popular: true },
  { name: "Black Forest Cake", price: "₹200", category: "Cakes" },
  { name: "Vanilla Sponge Cake", price: "₹150", category: "Cakes" },
  { name: "Red Velvet Cake", price: "₹190", category: "Cakes" },
  { name: "Pineapple Pastry", price: "₹40", category: "Pastries" },
  { name: "Chocolate Éclair", price: "₹35", category: "Pastries" },
  { name: "Cream Roll", price: "₹25", category: "Pastries" },
  { name: "Chicken Puff", price: "₹30", category: "Snacks", popular: true },
  { name: "Egg Puff", price: "₹20", category: "Snacks" },
  { name: "Veg Samosa", price: "₹15", category: "Snacks" },
  { name: "Bread Sandwich", price: "₹40", category: "Snacks" },
  { name: "Chocolate Shake", price: "₹90", category: "Juices & Shakes", popular: true },
  { name: "Saudi Shake", price: "₹120", category: "Juices & Shakes" },
  { name: "Falooda", price: "₹100", category: "Juices & Shakes" },
  { name: "Fresh Orange Juice", price: "₹60", category: "Juices & Shakes" },
  { name: "Mango Milkshake", price: "₹80", category: "Juices & Shakes" },
  { name: "Sulaimani Tea", price: "₹15", category: "Tea & Coffee" },
  { name: "Ginger Tea", price: "₹20", category: "Tea & Coffee" },
  { name: "Black Coffee", price: "₹25", category: "Tea & Coffee" },
  { name: "Cappuccino", price: "₹60", category: "Tea & Coffee" },
  { name: "Chicken Shawarma", price: "₹80", category: "Shawarma", popular: true },
  { name: "Shawarma Plate", price: "₹120", category: "Shawarma" },
  { name: "Paneer Shawarma", price: "₹70", category: "Shawarma" },
  { name: "Fruit Salad", price: "₹50", category: "Fresh Fruits" },
  { name: "Watermelon Juice", price: "₹40", category: "Fresh Fruits" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-bakery">
          <SectionHeading label="Our Menu" title="Delicious Offerings" subtitle="From fresh cakes to refreshing shakes — something for everyone" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground border border-border hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.03}>
                <motion.div
                  layout
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-5 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                      {item.popular && (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent-foreground text-xs rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{item.category}</p>
                  </div>
                  <span className="font-display font-bold text-lg text-foreground">{item.price}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
