type ProfileHeroProps = {
  name: string;
  role: string;
  location: string;
  email: string;
  description: string;
};

export default function ProfileHero({
  name,
  role,
  location,
  email,
  description,
}: ProfileHeroProps) {
  return (
    <section className="grid lg:grid-cols-12 gap-12 items-center">

      {/* Left */}

      <div className="lg:col-span-7 space-y-6">

        <span className="inline-block px-4 py-1 rounded-full bg-accent-orange/15 text-accent-orange text-xs uppercase tracking-[4px] font-semibold">
          About Me
        </span>

        <h1 className="text-6xl font-serif font-bold leading-tight">
          {name}
        </h1>

        <p className="text-2xl text-accent-orange font-semibold">
          {role}
        </p>

        <p className="leading-8 opacity-80">
          {description}
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 text-accent-orange font-semibold hover:opacity-80"
        >
          {email}
        </a>

      </div>

      {/* Right */}

      <div className="lg:col-span-5 flex justify-center">

        <div className="relative w-80 h-[430px] rounded-3xl bg-accent-yellow overflow-hidden border border-border-color shadow-[8px_8px_0px_rgba(28,45,34,1)]">

          <div className="absolute inset-5 rounded-2xl border border-border-color/20 flex items-center justify-center">

            <div className="w-36 h-36 rounded-full border-4 border-dashed border-border-color animate-spin [animation-duration:20s] flex items-center justify-center">

              <div className="w-20 h-20 rounded-full bg-accent-orange/30"></div>

            </div>

          </div>

          <span className="absolute top-5 right-5 bg-accent-orange text-white text-xs uppercase px-3 py-1 rounded-full">
            {role}
          </span>

          <div className="absolute bottom-5 left-5 right-5 bg-border-color text-background rounded-xl p-5">

            <h2 className="text-xl font-serif font-bold">
              {name}
            </h2>

            <p className="text-xs uppercase tracking-[3px] mt-1">
              {location}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}