import { useEffect, useState, useRef } from "react";
import "./assets/App.css";
import gsap from "gsap";
import Work from "./Submain";
import Loader from "./Loader";
import Footer from "./Footer";
import Menu from "./Menu";

export default function App() {
	const main = useRef(null);
	const BODY = useRef(null);
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to("#hero", {
				transform: "translateY(0vw)",
				duration: 1.5,
				delay: "4.5",
			});
		}, main);
		return () => ctx.revert();
	}, []);

	setInterval(() => {
		setTime(new Date().toLocaleTimeString());
	}, 1000);

	function ShowMenu() {
		document.querySelector(".menu").style.transform = "translateY(0vh)";
	}

	return (
		<>
			<Loader body={BODY} />
			<Menu />
			<div ref={BODY} className="site-container">
				<p id="menu" onClick={ShowMenu} >MENU</p>
				<div className="main-container" ref={main}>
					<div id="hero-container">
						<h1 id="hero">Creative,<br /> frontend developer</h1>
					</div>
				</div>

				<Work time={time} />

			</div>
			<Footer time={time} />
		</>
	);
}