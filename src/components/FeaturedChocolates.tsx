import Image from "next/image";

export default function FeaturedChocolates() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-8">
        Featured Chocolates
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Image
            src="/images/chocolates/chocolates-1.jpeg"
            alt="Chocolate Collection"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div>
          <Image
            src="/images/chocolates/chocolates-2.jpeg"
            alt="Gift Boxes"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div>
          <Image
            src="/images/chocolates/chocolates-3.jpeg"
            alt="Premium Chocolates"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}