import Results from "@/components/Results";
import { revalidatePath } from "next/cache";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
	const genre = searchParams.genre || "fetchTrending";

	const res = await fetch(
		`https://api.themoviedb.org/3${
			genre === "fetchTopRated"
				? "/movie/top_rated"
				: "/trending/all/week"
		}?api_key=${API_KEY}&language=en-US&page=1`,
		{ next: { revalidate: 10000 } }
	);

	const data = await res.json();
	if (!res.ok) {
		throw new Error("Failed tp fetch data");
	}

	const results = data.results;
	console.log(results);

	return (
		<div>
			<Results results={results} />
		</div>
	);
}
