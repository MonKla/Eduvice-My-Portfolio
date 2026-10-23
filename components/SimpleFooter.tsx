type SocialLink = { label: string; href: string };

type Props = {
  name?: string;
  links?: SocialLink[];
};

// Footer แบบเรียบ: ชื่อ ปี และลิงก์โซเชียล
export default function SimpleFooter({
  name = "MonKlalnwza007",
  links = [
    { label: "GitHub", href: "https://github.com/MonKla" },
    { label: "Instagram", href: "https://www.instagram.com/mon_24123/" },
    { label: "Email", href: "mailto:mon24123@gmail.com" },
  ],
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-cyan-200/15 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {year} {name}.
        </p>
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
