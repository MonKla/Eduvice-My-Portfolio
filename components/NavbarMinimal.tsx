type NavLink = { label: string; href: string };

type Props = {
  name?: string;
  links?: NavLink[];
};

// Navbar แบบเรียบ: ชื่ออยู่ซ้าย ลิงก์อยู่ขวา
export default function NavbarMinimal({
  name = "MonKla-Portfolio",
  links = [
    { label: "About", href: "/aboutme/index.html"},
    { label: "Projects", href: "https://github.com/MonKla?tab=repositories" },
    { label: "Contact", href: "https://linktr.ee/mon24123" },
  ],
}: Props) {
  return (
    <header className="rounded-2xl border border-cyan-200/20 bg-[#071225]/85 text-slate-100 shadow-xl shadow-cyan-950/30 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          {name}
        </a>
        <ul className="flex items-center gap-5 text-sm text-slate-300 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
