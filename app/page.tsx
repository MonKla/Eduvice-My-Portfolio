// หน้าแรกของ portfolio คุณ (เปิดดูที่ http://localhost:3000)
//
// วิธีประกอบ portfolio:
// 1. เปิด Component Shop: https://natch-soros.vercel.app/projects/cs-challenge/shop
// 2. เลือก component แล้วกด Copy code
// 3. สร้างไฟล์ใหม่ในโฟลเดอร์ components/ เช่น components/HeroMinimal.tsx แล้ววางโค้ด
// 4. import มาใช้ในไฟล์นี้ แล้วเปลี่ยน props เป็นข้อมูลของคุณ เช่น
//
//    import HeroMinimal from "@/components/HeroMinimal";
//
//    <HeroMinimal name="ชื่อคุณ" role="สิ่งที่คุณทำ" image="/me.jpg" />
import NavbarMinimal from "@/components/NavbarMinimal";
import HeroMinimal from "@/components/HeroMinimal";
import SimpleFooter from "@/components/SimpleFooter";
import Lightning from '@/components/Lightning';
import AboutSplit from "@/components/AboutSplit";
import FeaturedProject from "@/components/FeaturedProject";
import SkillTags from "@/components/SkillTags";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      {/* Background Lightning */}
      <div className="absolute inset-0 z-0 pointer-events-none">
      {/* @ts-ignore */}
        <Lightning 
          color="#67e8f9"
          speed={0.67}
          intensity={1}
          style={{}} 
          dpr={1}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-10 sm:px-8 sm:py-16">
        <NavbarMinimal />
        <HeroMinimal />
        <AboutSplit />
        <SkillTags />
        <FeaturedProject />
        <SimpleFooter />
      </main>
    </div>
  );
}
