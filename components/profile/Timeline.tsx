type TimelineItem = {
  year?: string;
  years?: string;
  title: string;
  company?: string;
  description?: string;
  desc?: string;
};

type TimelineProps = {
  title: string;
  items: TimelineItem[];
};

export default function Timeline({
  title,
  items,
}: TimelineProps) {
  return (
    <div className="space-y-8">

      <h2 className="text-3xl font-serif font-bold">
        {title}
      </h2>

      <div className="border-l border-border-color/30 pl-6 ml-2 space-y-10">

        {items.map((item, index) => (

          <div key={index} className="relative">

            <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full border-2 border-border-color bg-background"></span>

            <p className="text-xs font-semibold text-accent-orange">
              {item.year || item.years}
            </p>

            <h3 className="text-xl font-serif font-bold mt-1">
              {item.title}
            </h3>

            {item.company && (
              <p className="text-xs uppercase opacity-70">
                {item.company}
              </p>
            )}

            <p className="mt-2 opacity-80">
              {item.description || item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}