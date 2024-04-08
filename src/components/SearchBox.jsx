"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search/${search}`);
	};

	return (
		<form
			className="flex justify-between px-5 max-w-6xl mx-auto"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search Keywords..."
				className="w-full h-14 rounded-md flex-1 bg-transparent placeholder-gray-500 outline-none"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className="text-amber-600 disabled:text-gray-400"
				disabled={!search}
				onSubmit={handleSubmit}
			>
				Search
			</button>
		</form>
	);
}
