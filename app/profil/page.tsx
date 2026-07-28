export default function ProfilPage() {
  const education = [
    {
      years: "2022 - 2023",
      title: "Digital Campus, Montpellier",
      description: "Digital Web & Project Management",
    },
    {
      years: "2021 - 2022",
      title: "IUT de Béziers",
      description: "Commercialisation Technique",
    },
    {
      years: "2017 - 2020",
      title: "Economic University, Danang",
      description: "International Business",
    },
  ];

  const experience = [
    {
      year: "2022",
      title: "Marketing Intern",
      company: "Bi Ethic, Narbonne, France",
      desc: "Social media content creator and brand strategist.",
    },
    {
      year: "2021",
      title: "Freelancer",
      company: "Self-employed",
      desc: "Consulted with clients, created logos, posters, and web illustrations.",
    },
    {
      year: "2020",
      title: "Graphic Designer",
      company: "Songhan Incubator, Viet Nam",
      desc: "Designed promotional materials for local startups and community events.",
    },
  ];

  const softwareSkills = ["Figma", "Photoshop", "Illustrator", "InDesign", "VS Code"];
  const codingSkills = ["HTML & CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Intro Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-orange/15 text-accent-orange text-xs font-semibold uppercase tracking-wider">
            Tentang Saya
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-none tracking-tight">
            Halo, Saya <span className="underline decoration-accent-yellow decoration-wavy">Han</span>!
          </h1>
          <p className="text-lg font-light leading-relaxed opacity-90 max-w-xl">
            Saya adalah seorang desainer grafis dan web developer independen yang berfokus pada estetika digital. 
            Saya suka memecahkan masalah rumit dengan pendekatan yang rasional, pragmatis, dan menyajikannya 
            dalam bentuk visual yang memukau dan fungsional.
          </p>
          <div className="pt-2">
            <a
              href="mailto:contact@hannnguyen.dev"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent-orange hover:opacity-85"
            >
              contact@hannnguyen.dev
              <span className="w-5 h-[1px] bg-accent-orange inline-block"></span>
            </a>
          </div>
        </div>

        {/* Profile Card Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-96 bg-accent-yellow rounded-3xl border border-border-color p-4 shadow-[8px_8px_0px_0px_rgba(28,45,34,1)] overflow-hidden flex flex-col justify-end group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(28,45,34,1)] transition-all duration-300">
            {/* Visual element simulating portrait photo frame */}
            <div className="absolute inset-x-4 top-4 bottom-24 bg-border-color/10 rounded-2xl border border-border-color/30 flex items-center justify-center overflow-hidden">
              {/* Geometric pattern instead of empty placeholder */}
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-border-color/40 animate-spin [animation-duration:20s] flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent-orange/20"></div>
              </div>
            </div>
            {/* Tag */}
            <span className="absolute top-6 right-6 px-3 py-1 bg-accent-orange text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Web Designer
            </span>
            {/* Card Content Footer */}
            <div className="bg-border-color text-background p-4 rounded-xl space-y-1">
              <h4 className="font-serif font-bold text-lg">Han Nguyen</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-80">Narbonne, France / Makassar</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border-color/10" />

      {/* Education & Experience Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold relative inline-block">
            Pendidikan
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-yellow/40 -z-10"></span>
          </h2>
          <div className="relative border-l border-border-color/30 pl-6 ml-3 space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-border-color bg-background group-hover:bg-accent-orange transition-colors"></span>
                <span className="text-xs font-semibold text-accent-orange">{edu.years}</span>
                <h3 className="font-serif font-bold text-xl mt-1 text-foreground">{edu.title}</h3>
                <p className="text-sm font-light opacity-80 mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold relative inline-block">
            Pengalaman Kerja
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-yellow/40 -z-10"></span>
          </h2>
          <div className="relative border-l border-border-color/30 pl-6 ml-3 space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-border-color bg-background group-hover:bg-accent-orange transition-colors"></span>
                <span className="text-xs font-semibold text-accent-orange">{exp.year}</span>
                <h3 className="font-serif font-bold text-xl mt-1">{exp.title}</h3>
                <p className="text-xs font-medium text-border-color/70">{exp.company}</p>
                <p className="text-sm font-light opacity-85 mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-border-color/10" />

      {/* Technical Skills & Capabilities */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Software Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold">Software Skills</h3>
          <p className="text-sm font-light opacity-80">Beberapa aplikasi penunjang desain dan kolaborasi yang saya gunakan secara profesional:</p>
          <div className="flex flex-wrap gap-3">
            {softwareSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 border border-border-color rounded-xl bg-card-bg text-sm font-medium shadow-[3px_3px_0px_0px_rgba(28,45,34,1)] hover:bg-accent-yellow/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Coding Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold">Coding Skills</h3>
          <p className="text-sm font-light opacity-80">Bahasa pemrograman, library, dan kerangka kerja web yang saya kuasai:</p>
          <div className="flex flex-wrap gap-3">
            {codingSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 border border-border-color rounded-xl bg-card-bg text-sm font-medium shadow-[3px_3px_0px_0px_rgba(28,45,34,1)] hover:bg-accent-yellow/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

