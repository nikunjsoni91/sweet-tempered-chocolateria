import { business } from "@/data/business";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-white">
        <p className="uppercase tracking-[0.3em] mb-4">
          Brisbane • Australia
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {business.name}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          {business.tagline}
        </p>

        <div className="flex gap-4">
          <Link href="/menu" className="bg-white text-black px-6 py-3 rounded">
            View Menu
          </Link>

          <Link href="/contact" className="border border-white px-6 py-3 rounded">
            Visit Us
          </Link>
        </div>
      </div>
    </section>
  );
}