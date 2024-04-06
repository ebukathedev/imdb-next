import NavbarItem from "./NavbarItem";

export default function Navbar() {
	return (
		<div className="flex justify-center bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg gap-8">
			<NavbarItem title="Trending" param="fetchTrending" />
			<NavbarItem title="Top Rated" param="fetchTopRated" />
		</div>
	);
}
