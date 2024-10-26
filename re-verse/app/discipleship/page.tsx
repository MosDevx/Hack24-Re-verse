"use client";
import Image from "next/image";
import { CourseTabs } from "@/components/ui/course-tabs";

// Define the tabs variable
const tabs = [
	{ id: 1, title: "Tab 1", content: "Content for Tab 1" },
	{ id: 2, title: "Tab 2", content: "Content for Tab 2" },
	{ id: 3, title: "Tab 3", content: "Content for Tab 3" },
];

export default function Home() {
	return (
		<>
			<div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
				<CourseTabs tabs={tabs} />
			</div>
		</>
	);
}
