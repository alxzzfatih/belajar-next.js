export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-none text-foreground">
          PORTFOLIO
        </h1>
        <div className="h-[1px] w-24 bg-border-color mx-auto my-4"></div>
        <p className="text-base md:text-lg font-light tracking-wide max-w-md mx-auto opacity-80">
          Selamat datang di portofolio digital saya. Jelajahi profil, karya, dan mari berkolaborasi.
        </p>
        <div className="pt-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-orange">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
            Tersedia untuk Proyek Baru
          </span>
        </div>
      </div>
    </main>
  );
}

