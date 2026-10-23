type Stat = { value: string; label: string };

type Props = {
  heading?: string;
  paragraphs?: string[];
  image?: string;
  stats?: Stat[];
  accent?: string;
};

// About แบบแบ่งครึ่ง: รูปซ้าย ข้อความและตัวเลขเด่นขวา (บนมือถือเรียงบนลงล่าง)
export default function AboutSplit({
  heading = "A little about me",
  paragraphs = [
    "I got into coding by changing the colors of a website with DevTools. Since then I've built a class website, a quiz game and this portfolio.",
    "Outside of code I play Guitar and play valorant.",
  ],
  image = "/serial.JPG",
  stats = [
    { value: "2", label: "Websites built" },
    { value: "7", label: "GitHub repos" },
    { value: "-1", label: "Hackathon" },
  ],
  accent = "#67e8f9",
}: Props) {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl border border-cyan-200/15 bg-slate-950/45 p-6 shadow-lg shadow-cyan-950/20 backdrop-blur-sm md:grid-cols-2 md:gap-16 md:p-10">
        {image ? (
          <img src={image} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover" />
        ) : (
          // ยังไม่มีรูป: ใช้กล่องสีแทน
          <div className="aspect-[4/5] w-full rounded-3xl bg-cyan-300/10 ring-1 ring-cyan-200/20" />
        )}

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
          {paragraphs.map((text) => (
            <p key={text} className="mt-5 leading-relaxed text-slate-300">
              {text}
            </p>
          ))}

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-cyan-200/15 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold" style={{ color: accent }}>
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
