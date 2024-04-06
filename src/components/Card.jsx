import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
	return (
		<div className="transition-shadow duration-200 rounded-lg cursor-pointer sm:m-2 group sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400">
			<Link href={`/movie/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original${
						result.backdrop_path || result.poster_path
					}`}
					alt="movie poster"
					width={500}
					height={300}
					className="transition-opacity duration-300 sm:rounded-t-lg group-hover:opacity-75"
				/>
				<div className="p-2">
					<p className="line-clamp-2">{result.overview}</p>
					<h2 className="text-lg font-bold truncate">
						{result.title || result.name}
					</h2>
					<p className="flex items-center">
						{result.release_date || result.first_air_date}
						<FiThumbsUp className="h-5 ml-3 mr-1" />
						{result.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
}
