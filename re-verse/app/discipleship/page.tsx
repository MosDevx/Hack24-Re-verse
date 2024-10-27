"use client";

import { CourseTabs } from "@/components/ui/course-tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import { getStageLevels, getStages } from "@/lib/reverse";
import Link from "next/link";

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

// DummyContent Component - Displays fetched levels
const DummyContent = ({ levels,questionsArray }: { levels: Level[] }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {questionsArray.map((item, i) => (
        <Link href={`/discipleship/${item.id}`} key={i}>
			<BentoGridItem
			  key={i}
			  title={item.title}
			  description={item.description}
			  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
			/>
		</Link>
      ))}
    </BentoGrid>
  );
};

export default function Home() {
  const [existingStages, setExistingStages] = useState<Stage[]>([]); // Stores stages
  const [selectedStage, setSelectedStage] = useState<number >(1); // Stores the selected stage ID
  const [levels, setLevels] = useState<Level[]>([]); // Stores the levels for the selected stage

  // Fetch stages on component mount
  useEffect(() => {
    // const fetchStages = async () => {
    //   const stages = await getStages();
    //   setExistingStages(stages);
    // };
    // fetchStages();
	setSelectedStage(1);
	console.log(levels);
	const fetchLevels = async () => {
        const levelsData = await getStageLevels(selectedStage+1);
		console.log(selectedStage);
		console.log(levelsData);
        setLevels(levelsData);
      };
	  fetchLevels();
  }, []);

  // Fetch levels based on the selected stage
  useEffect(() => {
    if (selectedStage !== null) {
      const fetchLevels = async () => {
        const levelsData = await getStageLevels(selectedStage+1);
		console.log(selectedStage);
		console.log(levelsData);
        setLevels(levelsData);
      };
      fetchLevels();
    }
  }, [selectedStage]);

  // Define CourseTabs content based on stages
  const tabs = [
	{
		title: "Beginner",
		value: "beginner",
		content: (
			<div className="w-full overflow-scroll relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Basics of Faith</p>
				<DummyContent level="beginner"  questionsArray={levels} />
			</div>
		),
	},
	{
		title: "Intermediate",
		value: "intermediate",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Intermediate Lessons</p>
				<DummyContent level="intermediate"  questionsArray={levels}/>
			</div>
		),
	},
	{
		title: "Advanced",
		value: "advanced",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Advanced Lessons</p>
				<DummyContent level="advanced"  questionsArray={levels}/>
			</div>
		),
	},
];

  return (
    <>
      <div className="h-full md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
        <CourseTabs
		changeLevel={setSelectedStage}
          tabs={tabs}
        //   onTabClick={(stageId: string) => setSelectedStage(Number(stageId))} // Update the selected stage on click
        />
      </div>
    </>
  );
}
