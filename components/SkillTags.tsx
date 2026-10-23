type SkillGroup = { title: string; skills: string[] };

type Props = {
  heading?: string;
  groups?: SkillGroup[];
};

// ทักษะแบบป้าย แบ่งเป็นกลุ่ม
export default function SkillTags({
  heading = "Skills",
  groups = [
    { title: "Languages", skills: ["HTML", "CSS", "JavaScript", "Python"] },
    { title: "Tools", skills: ["VS Code", "Zed", "Git", "GitHub", "Claude Code"] },
    { title: "Learning now", skills: ["C++", "SQL", "React"] },
  ],
}: Props) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white">{heading}</h2>
        <div className="mt-8 space-y-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-200/80">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-cyan-200/20 bg-slate-950/55 px-3.5 py-1.5 text-sm text-slate-200 shadow-sm shadow-cyan-950/20 transition hover:border-cyan-300/70 hover:text-cyan-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
