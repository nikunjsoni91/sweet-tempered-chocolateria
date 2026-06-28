import Hero from "@/components/Hero";
import FeaturedChocolates from "@/components/FeaturedChocolates";
import CoffeeAndPastries from "@/components/CoffeeAndPastries";
import VisitUs from "@/components/VisitUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedChocolates />
      <CoffeeAndPastries />
      <VisitUs />
    </>
  );
}