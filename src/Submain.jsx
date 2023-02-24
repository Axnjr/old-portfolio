import { useEffect, useRef } from "react";
import "./assets/work.css";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import SubElements from "./SubText";
import ProjectContainer from "./ProjectDivs";


export default function Work({ time }) {

	const PRO = useRef(null);
	const LMM = useRef(null);
	const { ref: mab1, inView: ab1InView1 } = useInView(); // mab => more about 1
	const { ref: mab2, inView: ab1InView2 } = useInView(); // mab => more about 1
	const { ref: mab3, inView: ab1InView3 } = useInView(); // mab => more about 1
	const { ref: lss1, inView: lssInView1 } = useInView(); // mab => lets start 1

	useEffect(() => {
		let ctx = gsap.context(() => {
		  mab1.current = gsap.to("#mab1", {
			opacity: "1",
			duration: "2",
			delay: "0.2",
			paused: true,
		  });
		  mab2.current = gsap.to("#mab2", {
			opacity: "1",
			duration: "2",
			delay: "0.2",
			paused: true,
		  });
		}, PRO);
	
		let ctx2 = gsap.context(() => {
		  lss1.current = gsap.to("#lss1", {
			opacity: "1",
			duration: "2",
			delay: "0.2",
			paused: true,
		  });
		}, LMM);
	
		return () => {
		  ctx.revert();
		  ctx2.revert();
		};
	}, []);

	if (ab1InView1) {
		mab1.current.play();
	}
	if (ab1InView2) {
	mab2.current.play();
	}
	if (lssInView1) {
	lss1.current.play();
	}

  return (
	<>

		<div ref={PRO} className="abt" id="abt">
				<div className="init-text-wrapper" >

					<h1>
						AXN IS DEVELOPER DEDICATED
						TO CRAFTING WEBSITES AND APPS
						WITH GREAT ATTENTION TO SCALABILTY,
						PERFORMANCE AND DETAIL.
						CURRENTLY BASED IN MUMBAI, INDIA.
					</h1>

				</div>

				<div className="moreabout">
					<h1 id="mab1" ref={mab1}>
						Tough Problems need<br/>
						Creative Solutions.
					</h1>
					<h1 id="mab2" ref={mab2}>
						I'm Here To Help<br/>
						You Stand Out .
					</h1>
				</div>
		</div> 

		<ProjectContainer />

		<div className="marval" ref={LMM}>
			<h1 id="lss1" ref={lss1}>LET'S START &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SOMETHING</h1>
		</div>
		
    </>
  );
}