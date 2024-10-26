
import Image from "next/image";

import {ContentCard} from '@/components/ui/content-card'

export default function Home() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ContentCard theme="Faith" verseOfTheDay="John 3:16" writeUp="Lporem Ipsum" />
    </div>
  )
}