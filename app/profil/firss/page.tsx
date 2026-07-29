import ProfileHero from "@/components/profile/ProfileHero";
import Timeline from "@/components/profile/Timeline";
import SkillBadge from "@/components/profile/SkillBadge";

export default function FirssPage() {
  const education = [
    {
      years: "2023 - Sekarang",
      title: "SMK Telkom Makassar",
      description: "Rekayasa Perangkat Lunak",
    },
  ];

  const experience = [
    {
      year: "2025",
      title: "Frontend Developer",
      company: "Music Therapy Project",
      desc: "Developing website using Next.js and Tailwind CSS.",
    },
    {
      year: "2026",
      title: "Samsung Solve for Tomorrow",
      company: "Competition Project",
      desc: "Building AI-powered application prototypes.",
    },
  ];

  const softwareSkills = [
    "VS Code",
    "Git",
    "Figma",
    "Postman",
    "Photoshop",
  ];

  const codingSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

      <ProfileHero
        name="Firss"
        role="Frontend Developer"
        location="Makassar, Indonesia"
        email="firss@example.com"
        description="Saya merupakan Frontend Developer yang berfokus pada pengembangan website modern menggunakan React, Next.js, TypeScript, dan Tailwind CSS."
      />

      <hr className="border-border-color/10" />

      <section className="grid lg:grid-cols-2 gap-16">

        <Timeline
          title="Pendidikan"
          items={education}
        />

        <Timeline
          title="Pengalaman"
          items={experience}
        />

      </section>

      <hr className="border-border-color/10" />

      <section className="grid lg:grid-cols-2 gap-16">

        <SkillBadge
          title="Software Skills"
          skills={softwareSkills}
        />

        <SkillBadge
          title="Coding Skills"
          skills={codingSkills}
        />

      </section>

    </main>
  );
}