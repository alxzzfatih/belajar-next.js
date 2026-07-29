import ProfileHero from "@/components/profile/ProfileHero";
import Timeline from "@/components/profile/Timeline";
import SkillBadge from "@/components/profile/SkillBadge";

export default function HanPage() {
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
      company: "Bi Ethic, France",
      desc: "Social media content creator and brand strategist.",
    },
    {
      year: "2021",
      title: "Freelancer",
      company: "Self-employed",
      desc: "Created logos, branding, and website designs.",
    },
    {
      year: "2020",
      title: "Graphic Designer",
      company: "Songhan Incubator",
      desc: "Designed promotional materials for startups.",
    },
  ];

  const softwareSkills = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "VS Code",
  ];

  const codingSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

      <ProfileHero
        name="Han Nguyen"
        role="UI/UX Designer"
        location="Narbonne, France"
        email="contact@hannnguyen.dev"
        description="Saya adalah seorang UI/UX Designer dan Web Designer yang berfokus pada pengalaman pengguna, desain modern, dan antarmuka yang bersih."
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