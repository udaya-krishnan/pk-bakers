import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const FloatingOrderButton = () => (
  <motion.a
    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20place%20an%20order"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-full shadow-lg font-semibold text-sm golden-glow hover:scale-105 transition-transform"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1, type: "spring" }}
  >
    <ShoppingBag className="w-5 h-5" />
    Order Now
  </motion.a>
);

export default FloatingOrderButton;
