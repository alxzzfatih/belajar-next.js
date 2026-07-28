import Link from "next/link";

interface KartuBeritaProps {
  judul: string;
  deskripsi: string;
  tanggal?: string;
  kategori?: string;
  link?: string;
}

export default function KartuBerita({
  judul,
  deskripsi,
  tanggal,
  kategori,
  link = "#",
}: KartuBeritaProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border-color bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(28,45,34,1)]">
      <div className="p-6 flex-1 flex flex-col">
        {/* Kategori & Tanggal */}
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider mb-4">
          {kategori && (
            <span className="px-3 py-1 rounded-full bg-accent-yellow/20 text-foreground border border-border-color/30">
              {kategori}
            </span>
          )}
          {tanggal && <span className="opacity-60">{tanggal}</span>}
        </div>

        {/* Judul */}
        <h3 className="text-xl md:text-2xl font-serif font-bold leading-snug mb-3 group-hover:text-accent-orange transition-colors">
          {judul}
        </h3>

        {/* Deskripsi */}
        <p className="text-sm font-light leading-relaxed opacity-85 mb-6 flex-1">
          {deskripsi}
        </p>

        {/* Link Selengkapnya */}
        <div className="mt-auto pt-4 border-t border-border-color/10">
          <Link
            href={link}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-orange"
          >
            Lihat Detail
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
