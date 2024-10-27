"use client";
import React from 'react';
import Link from 'next/link';


// pages/discipleship/[id].tsx

// export async function getStaticPaths() {
// 	// Fetch possible paths, e.g., from an API or database
// 	const response = await fetch('https://api.example.com/articles');
// 	const articles = await response.json();

// 	// Define paths based on the data
// 	const paths = articles.map((article) => ({
// 		params: { id: article.id.toString() },
// 	}));

// 	return {
// 		paths,
// 		fallback: false, // Can be 'true' or 'blocking' if you want to generate additional pages on the fly
// 	};
// }

// export async function getStaticProps({ params }) {
// 	// Fetch data for each specific path
// 	const response = await fetch(`https://api.example.com/articles/${params.id}`);
// 	const article = await response.json();

// 	return {
// 		props: { article },
// 		revalidate: 60, // Optional: revalidate every 60 seconds
// 	};
// }

export default function ArticlePage({ }) {
	return (
		<>
		<div className="flex justify-center items-center min-h-screen">
			<div className="max-w-4xl mx-auto p-4">
				<h1 className="text-4xl font-bold mb-4">Lorem</h1>
				<p className="text-lg leading-relaxed">Ipsum</p>
			</div>
		</div>


		<div className="flex justify-center mt-4">
		<Link href={{ pathname: '/trivia', query: { message: 'from_lesson_page' } }}>
			<button className="bg-blue-500 text-white p-2 w-24 rounded">Take Quiz</button>
      </Link>
		</div>
</>

	);


}
