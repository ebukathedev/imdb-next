import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
	return (
		<div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
			<div className="flex gap-4">
				<MenuItem title="Home" address="/" Icon={AiFillHome} />
				<MenuItem
					title="About"
					address="/about"
					Icon={BsFillInfoCircleFill}
				/>
			</div>
			<div className="flex items-center gap-4">
				<DarkModeSwitch />
				<Link href="/" className="flex items-center">
					<span className="px-2 py-1 text-2xl font-bold rounded-lg bg-amber-500">
						IMDb
					</span>
					<span className="hidden text-xl sm:inline">Clone</span>
				</Link>
			</div>
		</div>
	);
}
