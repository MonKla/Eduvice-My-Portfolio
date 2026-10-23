type Props = {
  name?: string;
  role?: string;
  bio?: string;
  image?: "/me.jpeg"; // เช่น "/me.jpg" (วางรูปไว้ในโฟลเดอร์ public)
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

// Hero แบบเรียบ: รูป ชื่อ ตำแหน่ง และปุ่ม 2 ปุ่ม
export default function HeroMinimal({
  name = "Mon",
  role = "M.6 Student From Suankularb wittayalai School",
  bio = "Like i said from previous web i'm just level i^2 Programmer",
  image = "/me.jpeg",
  primaryLabel = "See my work",
  primaryHref = "https://github.com/MonKla?tab=repositories",
  secondaryLabel = "Contact",
  secondaryHref = "https://linktr.ee/mon24123",
}: Props) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      {image ? (
        <img src={image} alt={name} className="size-20 rounded-full object-cover" />
      ) : (
        // ยังไม่มีรูป: แสดงตัวอักษรแรกของชื่อแทน
        <div className="grid size-20 place-items-center rounded-full bg-cyan-400/15 text-2xl font-semibold text-cyan-200 ring-1 ring-cyan-300/40">
          {name.charAt(0)}
        </div>
      )}

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Hi, I&apos;m {name}.
      </h1>
      <p className="mt-2 text-xl text-cyan-300">{role}</p>
      <p className="mt-6 max-w-xl leading-relaxed text-slate-200">{bio}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={primaryHref}
          className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="rounded-full border border-white/25 bg-slate-950/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
        >
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
