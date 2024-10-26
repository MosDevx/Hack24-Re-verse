// app/about/layout.tsx
import { ReactNode } from 'react';

interface TriviaLayoutProps {
  children: ReactNode;
}

export default function TriviaLayout({ children }: TriviaLayoutProps) {
  return (
    <div >
      <section className="">{children}</section>
    </div>
  );
}
