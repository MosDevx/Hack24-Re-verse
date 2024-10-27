"use client";
import Image from "next/image";
import { CourseTabs } from "@/components/ui/course-tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Skeleton = () => (
	<div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// Define the items variable with level property
const items = [
	{
		title: "The Dawn of Innovation",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		level: "beginner",
		// header: <Skeleton />,
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		level: "intermediate",
		// header: <Skeleton />,
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		level: "advanced",
		// header: <Skeleton />,
	},
	{
		title: "The Power of Communication",
		description: "Understand the impact of effective communication in our lives.",
		level: "beginner",
		// header: <Skeleton />,
	},
	{
		title: "The Pursuit of Knowledge",
		description: "Join the quest for understanding and enlightenment.",
		level: "intermediate",
		// header: <Skeleton />,
	},
	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		level: "advanced",
		// header: <Skeleton />,
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		level: "beginner",
		// header: <Skeleton />,
	},
];

const DummyContent = ({ level }: { level: string }) => {
	const filteredItems = items.filter(item => item.level === level);
	return (
		<BentoGrid className="max-w-4xl mx-auto">
			{filteredItems.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={i === 3 || i === 6 ? "md:col-span-2" : ""}
				/>
			))}
		</BentoGrid>
	);
};

const tabs = [
	{
		title: "Beginner",
		value: "beginner",
		content: (
			<div className="w-full overflow-scroll relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Basics of Faith</p>
				<DummyContent level="beginner" />
			</div>
		),
	},
	{
		title: "Intermediate",
		value: "intermediate",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Intermediate Lessons</p>
				<DummyContent level="intermediate" />
			</div>
		),
	},
	{
		title: "Advanced",
		value: "advanced",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Advanced Lessons</p>
				<DummyContent level="advanced" />
			</div>
		),
	},
];

export default function Home() {
	return (
		<>
			<div className="h-full md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
				<CourseTabs tabs={tabs} />
			</div>
		</>
	);
}
