import { ReactNode } from 'react';
import BottomNav from '@/components/ui/Bottom-Nav/bottomNav';

interface LandingPageLayoutProps {
  children: ReactNode;
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <div>
      <section className="">{children}</section>
      <BottomNav />
    </div>
  );
}
