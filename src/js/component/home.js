import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./Navbar.js";
import { Body } from "./body.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<NavBar />
			<Body />
			<Footer />
		</div>
	);
}
