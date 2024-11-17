import BottomNav from "@/components/ui/Bottom-Nav/bottomNav";
import { ReactNode } from "react";

export default function DiscipleshipLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <section className="">{children}</section>
      <BottomNav />
    </div>
  );
}