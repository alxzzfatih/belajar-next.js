export default function KontakPage() {
  const namaSekolah = "SMK TELKOM MAKASSAR";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center md:text-left">
        <span className="inline-block px-3 py-1 rounded-full bg-accent-orange/15 text-accent-orange text-xs font-semibold uppercase tracking-wider">
          Mulai Diskusi
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
          Hubungi Kami
        </h1>
        <p className="text-base md:text-lg font-light opacity-90 max-w-2xl leading-relaxed">
          Hubungi kami di <span className="font-bold underline decoration-accent-orange decoration-2">{namaSekolah}</span> untuk informasi lebih lanjut mengenai program, kegiatan sekolah, kolaborasi projek, atau sekadar bertegur sapa.
        </p>
      </div>

      <hr className="border-border-color/10" />

      {/* Main Grid: Form and Contact Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-card-bg border border-border-color rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(28,45,34,1)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-xl border border-border-color bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent-orange/40 text-sm font-medium transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border-color bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent-orange/40 text-sm font-medium transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Topik pesan Anda"
                className="w-full px-4 py-3 rounded-xl border border-border-color bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent-orange/40 text-sm font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">
                Pesan Anda
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tuliskan detail pesan Anda di sini..."
                className="w-full px-4 py-3 rounded-xl border border-border-color bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent-orange/40 text-sm font-medium transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-accent-orange text-white text-sm font-bold uppercase tracking-wider rounded-xl border border-border-color shadow-[4px_4px_0px_0px_rgba(28,45,34,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,45,34,1)] active:scale-98 transition-all"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-foreground text-background rounded-3xl p-8 border border-border-color shadow-[6px_6px_0px_0px_rgba(243,180,63,1)]">
            <h3 className="font-serif font-bold text-2xl mb-6">Detail Kontak</h3>
            
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider opacity-60">Lokasi Kampus</h4>
                  <p className="font-medium mt-1">Jl. Hertasning No. 4, Makasar, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider opacity-60">Alamat Email</h4>
                  <p className="font-medium mt-1">info@smktelkom-mks.sch.id</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider opacity-60">Nomor Telepon</h4>
                  <p className="font-medium mt-1">+62 411 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

