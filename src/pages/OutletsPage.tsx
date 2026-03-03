import { useState } from "react";
import { MapPin, Clock, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const outlets = [
  { name: "PK Bakers - Kadampazhipuram", district: "Palakkad", address: "Palakkad - Cherpulassery Rd, Kadampazhipuram, Kerala 678633", hours: "6 AM – 10 PM", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5!2d76.31!3d10.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" },
  { name: "PK Bakers - Cherpulassery", district: "Palakkad", address: "Main Road, Cherpulassery, Kerala 679503", hours: "6 AM – 10 PM" },
  { name: "PK Bakers - Pattambi", district: "Palakkad", address: "NH 966, Pattambi, Kerala 679303", hours: "6:30 AM – 9:30 PM" },
  { name: "PK Bakers - Perinthalmanna", district: "Malappuram", address: "Court Road, Perinthalmanna, Kerala 679322", hours: "6 AM – 10 PM" },
  { name: "PK Bakers - Manjeri", district: "Malappuram", address: "Calicut Road, Manjeri, Kerala 676121", hours: "6 AM – 10 PM" },
  { name: "PK Bakers - Thrissur", district: "Thrissur", address: "MG Road, Thrissur, Kerala 680001", hours: "7 AM – 10 PM" },
  { name: "PK Bakers - Kozhikode", district: "Kozhikode", address: "SM Street, Kozhikode, Kerala 673001", hours: "6 AM – 10:30 PM" },
  { name: "PK Bakers - Ottapalam", district: "Palakkad", address: "Bus Stand Road, Ottapalam, Kerala 679101", hours: "6 AM – 9:30 PM" },
];

const districts = ["All", ...new Set(outlets.map((o) => o.district))];

const OutletsPage = () => {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");

  const filtered = outlets.filter((o) => {
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.address.toLowerCase().includes(search.toLowerCase());
    const matchDistrict = district === "All" || o.district === district;
    return matchSearch && matchDistrict;
  });

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-bakery">
          <SectionHeading label="Our Outlets" title="Find Us Near You" subtitle="10+ outlets across Kerala to serve you" />

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search outlet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Outlet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((outlet, i) => (
              <AnimatedSection key={outlet.name} delay={i * 0.05}>
                <div className="glass-card p-6 hover:shadow-xl transition-shadow">
                  <h3 className="font-display font-semibold text-lg mb-3">{outlet.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      <span>{outlet.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{outlet.hours}</span>
                    </div>
                  </div>
                  <span className="inline-block mt-3 px-3 py-1 bg-accent/20 text-accent-foreground text-xs font-medium rounded-full">
                    {outlet.district}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Map */}
          <AnimatedSection className="mt-12">
            <div className="glass-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.71098612922!2d76.2!3d10.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ce2f0aaaaaab%3A0xaaaaaaaaaaaaaaaa!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="PEE KAY Bakers Locations"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default OutletsPage;
