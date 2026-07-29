import TeamCard from "@/components/profile/TeamCard";

export default function ProfilPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero */}

      <section className="text-center max-w-3xl mx-auto">

        <span className="text-sm uppercase tracking-[6px] text-accent-orange">
          Our Team
        </span>

        <h1 className="mt-6 text-6xl font-serif font-bold">
          Meet Our Team
        </h1>

        <p className="mt-6 text-lg opacity-80 leading-8">
          Kami membangun pengalaman digital melalui desain,
          kreativitas, dan teknologi modern.
        </p>

      </section>

      {/* Team */}

      <section className="mt-20 grid md:grid-cols-2 gap-10">

        <TeamCard
          name="Han Nguyen"
          role="UI/UX Designer"
          location="Narbonne, France"
          href="/profil/han"
        />

        <TeamCard
          name="Firss"
          role="Frontend Developer"
          location="Makassar, Indonesia"
          href="/profil/firss"
        />

      </section>

    </main>
  );
}