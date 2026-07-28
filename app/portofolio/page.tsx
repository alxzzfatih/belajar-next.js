import KartuBerita from "@/components/KartuBerita";

export default function PortofolioPage() {
  const projects = [
    {
      judul: "Redesain Website Museum Seni Nasional",
      kategori: "Web Design",
      tanggal: "Juni 2026",
      deskripsi: "Konsep ulang website museum seni dengan memadukan gaya minimalis modern dan navigasi interaktif berbasis animasi mikro.",
      link: "#",
    },
    {
      judul: "Branding Identitas Visual Kopi 'Aroma Bumi'",
      kategori: "Branding",
      tanggal: "April 2026",
      deskripsi: "Pembuatan identitas visual lengkap mulai dari desain logo, kemasan ramah lingkungan, hingga pedoman gaya visual media sosial.",
      link: "#",
    },
    {
      judul: "Pengembangan Aplikasi Manajemen Tugas 'Fokus'",
      kategori: "Web Development",
      tanggal: "Februari 2026",
      deskripsi: "Aplikasi web produktivitas yang dibangun dengan Next.js dan Tailwind CSS, dioptimalkan untuk performa tinggi dan aksesibilitas penuh.",
      link: "#",
    },
    {
      judul: "Desain Editorial Majalah Kreatif 'Skena'",
      kategori: "Editorial Design",
      tanggal: "Desember 2025",
      deskripsi: "Tata letak majalah seni bulanan dengan menonjolkan tipografi serif tebal, skema warna berani, dan komposisi asimetris yang dinamis.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center md:text-left">
        <span className="inline-block px-3 py-1 rounded-full bg-accent-orange/15 text-accent-orange text-xs font-semibold uppercase tracking-wider">
          Karya Pilihan
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
          Portofolio Projek
        </h1>
        <p className="text-base md:text-lg font-light opacity-80 max-w-xl">
          Koleksi pekerjaan terbaru saya yang memadukan keahlian desain antarmuka pengguna, seni grafis, dan pengembangan web modern.
        </p>
      </div>

      <hr className="border-border-color/10" />

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <KartuBerita
            key={index}
            judul={project.judul}
            deskripsi={project.deskripsi}
            kategori={project.kategori}
            tanggal={project.tanggal}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

