import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-bakery">
          <SectionHeading label="Get in Touch" title="Contact Us" subtitle="We'd love to hear from you" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Palakkad - Cherpulassery Rd, Kadampazhipuram, Kerala 678633</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>hello@peekaybakers.in</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span>6:00 AM – 10:00 PM (All Days)</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <div className="glass-card overflow-hidden rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5!2d76.31!3d10.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="PEE KAY Bakers Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
