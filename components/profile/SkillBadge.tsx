type SkillBadgeProps = {
  title: string;
  skills: string[];
};

export default function SkillBadge({
  title,
  skills,
}: SkillBadgeProps) {
  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-serif font-bold">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (

          <span
            key={index}
            className="px-4 py-2 rounded-xl border border-border-color bg-card-bg shadow-[3px_3px_0px_rgba(28,45,34,1)]"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}