type Props = {
  label?: string;
  title?: string;
  description?: string;
  tech?: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  accent?: string;
};

// โปรเจกต์เด่น 1 ชิ้น: ข้อความซ้าย ภาพหน้าเว็บขวา
export default function FeaturedProject({
  label = "24YourFix",
  title = "A website that anyone, even non-car enthusiasts, can easily use.",
  description = "",
  tech = ["Html", "CSS", "Js", "Vercel"],
  image = "/24.png",
  demoUrl = "https://24-your-fix.vercel.app/",
  codeUrl = "https://github.com/MonKla/24YourFix",
  accent = "#67e8f9",
}: Props) {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 overflow-hidden rounded-3xl border border-cyan-200/15 bg-slate-950/55 p-8 shadow-xl shadow-cyan-950/25 backdrop-blur-sm md:grid-cols-5 md:p-12">
        <div className="md:col-span-2">
          <p className="text-sm font-medium" style={{ color: accent }}>
            {label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-4 leading-relaxed text-slate-300">{description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-cyan-200/20 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={demoUrl}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Live demo
            </a>
            <a
              href={codeUrl}
              className="rounded-lg border border-cyan-200/25 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
            >
              Source code
            </a>
          </div>
        </div>

        {/* กรอบหน้าต่างเบราว์เซอร์ ใส่ภาพหน้าเว็บของคุณผ่าน prop image */}
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-xl border border-cyan-200/20 bg-slate-950 shadow-xl shadow-cyan-950/30">
            <div className="flex gap-1.5 border-b border-cyan-200/15 px-4 py-3">
              <span className="size-2.5 rounded-full bg-cyan-300/70" />
              <span className="size-2.5 rounded-full bg-cyan-200/40" />
              <span className="size-2.5 rounded-full bg-slate-600" />
            </div>
            {image ? (
              <img src={image} alt={title} className="aspect-[16/10] w-full object-cover object-top" />
            ) : (
              <div
                className="aspect-[16/10] w-full"
                style={{ background: `linear-gradient(135deg, ${accent}, #fde68a)` }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
