"use client";
import { CourseTabs } from "@/components/ui/course-tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import { getStageLevels, getStages } from "@/lib/reverse";
import Link from "next/link";
import { motion } from 'framer-motion';

const Skeleton = () => (
  <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

interface Level {
  id: number;
  title: string;
  description: string | null;
}

interface Stage {
  id: number;
  name: string;
}

const DummyContent = ({ levels, questionsArray }: { levels: Level[], questionsArray: Level[] }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto gap-4">
      {questionsArray.map((item, i) => (
        <Link href={`/discipleship/${item.id}`} key={i}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BentoGridItem
              title={item.title}
              description={item.description}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </motion.div>
        </Link>
      ))}
    </BentoGrid>
  );
};

export default function Home() {
  const [existingStages, setExistingStages] = useState<Stage[]>([]);
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const levelsData = await getStageLevels(selectedStage + 1);
      setLevels(levelsData);
    };
    fetchLevels();
  }, [selectedStage]);

  const tabs = [
    {
      title: "Beginner",
      value: "beginner",
      content: (
        <div className="w-full overflow-scroll relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Basics of Faith</p>
          <DummyContent level="beginner" questionsArray={levels} />
        </div>
      ),
    },
    {
      title: "Intermediate",
      value: "intermediate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Intermediate Lessons</p>
          <DummyContent level="intermediate" questionsArray={levels} />
        </div>
      ),
    },
    {
      title: "Advanced",
      value: "advanced",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Advanced Lessons</p>
          <DummyContent level="advanced" questionsArray={levels} />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center py-12">
      <div className="h-full md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
        <CourseTabs
          changeLevel={setSelectedStage}
          tabs={tabs}
        />
      </div>
    </div>
  );
}
