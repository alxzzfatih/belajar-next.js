import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Premium - Han Nguyen",
  description: "Desain website portofolio premium bergaya retro-modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-accent-yellow selection:text-foreground">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border-color bg-background/90 backdrop-blur-md transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo / Brand */}
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight hover:opacity-85 transition-opacity">
              Han Nguyen
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
              <Link href="/" className="hover:text-accent-orange transition-colors">
                Beranda
              </Link>
              <Link href="/profil" className="hover:text-accent-orange transition-colors">
                Profil
              </Link>
              <Link href="/portofolio" className="hover:text-accent-orange transition-colors">
                Portofolio
              </Link>
            </nav>

            {/* CTA Button / Contact */}
            <div>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border-color bg-accent-orange text-white text-sm font-medium hover:bg-opacity-90 active:scale-95 transition-all"
              >
                Kirim Pesan
              </Link>
            </div>
          </div>
          {/* Mobile Navigation bar - simple and clean */}
          <div className="flex md:hidden border-t border-border-color justify-center py-2 gap-6 text-xs font-semibold uppercase tracking-wider bg-background/50">
            <Link href="/" className="hover:text-accent-orange transition-colors">
              Beranda
            </Link>
            <Link href="/profil" className="hover:text-accent-orange transition-colors">
              Profil
            </Link>
            <Link href="/portofolio" className="hover:text-accent-orange transition-colors">
              Portofolio
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border-color py-8 bg-background">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-opacity-80">
            <p>&copy; {new Date().getFullYear()} Han Nguyen. Hak Cipta Dilindungi.</p>
            <p className="font-serif italic">Designed with passion & aesthetics.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

