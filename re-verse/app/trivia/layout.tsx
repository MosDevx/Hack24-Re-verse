// app/about/layout.tsx
import { ReactNode } from 'react';
import BottomNav from '@/components/ui/Bottom-Nav/bottomNav';

interface TriviaLayoutProps {
  children: ReactNode;
}

export default function TriviaLayout({ children }: TriviaLayoutProps) {
  return (
    <div  >
      <section className="">{children}</section>
      <BottomNav />
    </div>

  );
}
