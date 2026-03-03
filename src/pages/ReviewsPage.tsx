import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  { name: "Anish Kumar", text: "Best bakery in Palakkad! The cakes are always fresh and delicious. Love the honey almond cake. Will definitely keep coming back!", rating: 5, date: "2 weeks ago" },
  { name: "Priya Menon", text: "Amazing shakes and the ambiance is so warm and inviting. My go-to café for evening snacks. The chocolate shake is to die for!", rating: 4, date: "1 month ago" },
  { name: "Rahul S.", text: "Great variety and affordable prices. The shawarma here is fantastic too! Perfect place for a quick bite.", rating: 5, date: "3 weeks ago" },
  { name: "Deepa R.", text: "Love their fresh pastries! Always so soft and tasty. The cream rolls are our family favorite. Highly recommended!", rating: 5, date: "1 week ago" },
  { name: "Mohammed Faiz", text: "The Saudi Shake is absolutely amazing. Reminds me of the original from Gulf. Great taste and generous portion!", rating: 5, date: "2 months ago" },
  { name: "Lakshmi Nair", text: "Good overall experience. Friendly staff and clean environment. Some items could be improved but generally very good.", rating: 4, date: "1 month ago" },
  { name: "Arjun K.", text: "Been a regular customer for years. Consistent quality and always fresh. The best bakery chain in Kerala!", rating: 5, date: "3 days ago" },
  { name: "Sneha Thomas", text: "Tried their new falooda — absolutely heavenly! The presentation is beautiful and taste is perfect. Must try!", rating: 5, date: "5 days ago" },
];

const ratingDist = [
  { stars: 5, percent: 58 },
  { stars: 4, percent: 25 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 5 },
  { stars: 1, percent: 2 },
];

const ReviewsPage = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-bakery">
          <SectionHeading label="Customer Love" title="Reviews & Ratings" subtitle="What our happy customers say about us" />

          {/* Rating Summary */}
          <AnimatedSection className="max-w-2xl mx-auto mb-16">
            <div className="glass-card p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="text-center">
                <div className="font-display text-6xl font-bold text-foreground">4.1</div>
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <Star className="w-5 h-5 fill-accent/40 text-accent" />
                </div>
                <p className="text-muted-foreground text-sm mt-1">929 reviews</p>
              </div>
              <div className="flex-1 w-full space-y-2">
                {ratingDist.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-muted-foreground">{r.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${r.percent}%` }} />
                    </div>
                    <span className="w-10 text-right text-muted-foreground">{r.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.05}>
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{review.name}</p>
                        <p className="text-muted-foreground text-xs">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">"{review.text}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;
