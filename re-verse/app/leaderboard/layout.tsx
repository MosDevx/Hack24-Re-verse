// app/about/layout.js
import BottomNav from "@/components/ui/Bottom-Nav/bottomNav";
export default function DiscipleshipLayout({ children }) {
  return (
    <div className="">
      <section className="">{children}</section>
      <BottomNav />
    </div>
  );
}
