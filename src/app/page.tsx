import { business } from "@/data/business";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">
        {business.name}
      </h1>

      <p className="text-xl mb-6">
        {business.tagline}
      </p>

      <p>
        Welcome to {business.name}, your destination for
        artisan chocolates, premium coffee, and freshly
        baked pastries in {business.city}, {business.country}.
      </p>
    </main>
  );
}