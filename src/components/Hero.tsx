import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="max-w-3xl">
        <p className="uppercase tracking-widest mb-3">
          Brisbane • Australia
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {business.name}
        </h1>

        <p className="text-xl mb-8">
          {business.tagline}
        </p>

        <div className="flex gap-4">
          <button className="border px-6 py-3 rounded">
            View Menu
          </button>

          <button className="border px-6 py-3 rounded">
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}