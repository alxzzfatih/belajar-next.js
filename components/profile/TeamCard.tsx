import Link from "next/link";

type TeamCardProps = {
  name: string;
  role: string;
  location: string;
  href: string;
};

export default function TeamCard({
  name,
  role,
  location,
  href,
}: TeamCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-border-color bg-card-bg overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(28,45,34,1)]"
    >
      {/* Image Placeholder */}
      <div className="h-72 bg-accent-yellow flex items-center justify-center relative overflow-hidden">
        <div className="w-36 h-36 rounded-full border-4 border-dashed border-border-color animate-spin [animation-duration:20s] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent-orange/30"></div>
        </div>

        <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-accent-orange text-white text-xs uppercase tracking-widest">
          {role}
        </span>
      </div>

      <div className="p-6">

        <h2 className="text-3xl font-serif font-bold">
          {name}
        </h2>

        <p className="mt-2 text-sm opacity-70">
          {location}
        </p>

        <div className="mt-8 flex justify-between items-center">

          <span className="font-semibold text-accent-orange">
            View Profile
          </span>

          <span className="text-2xl transition group-hover:translate-x-2">
            →
          </span>

        </div>

      </div>

    </Link>
  );
}