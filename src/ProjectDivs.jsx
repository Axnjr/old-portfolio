import "./assets/work.css";

function ProjectDivs({ id, name, date, type, link, last_boolean}) {
    let borderBottom_val = last_boolean ? "0.2vw solid currentColor" : "none";
    return (
        <a href={link}>
            <div
                className="project-cards"
                id={`pc${id}`}

				style={{
					borderBottom:borderBottom_val
				}}

                >
                <h1 id={`project-cards-h2${id}`}>
                    {name} <span>&nbsp; - {date}</span>
                </h1>

                <div className="type-of-project" id={"types" + id}>
                    {type.map((element, id) => {
                        return (
                            <>
                                <p key={id}>{element}</p>
                            </>
                        );
                    })}
                </div>

                <section id={`project-cards-section${id}`}>
                    <h1>{name}</h1>
                    <h1>{name}</h1>
                    <h1>{name}</h1>
                    <h1>{name}</h1>
                    <h1>{name}</h1>
                    <h1>{name}</h1>
                </section>
            </div>
        </a>
    );
}



export default function ProjectContainer() {

	const project_object = [
		[
			"2023",
			"Exponential Design Studios",
			["UI/UX", "DESIGN", "NEXT JS"],
			"LINK PENDING",
		],
		[
			"2022",
			"Radha Programming Lang",
			["HARDCORE VANILLA JS", "CODONG"],
			"https://github.com/Axnjr/Radha-Programming-Language",
		],
		[
			"2022",
			"Sorting Algorithm Visualizer",
			["DSA", "REACT", "CODING"],
			"LINK PENDINF",
		],
		["2022", "Random Data API", ["BACKEND", "REST API"], "LINK PENDING"],
		[
			"2021",
			"Global Climatic Maps",
			["DATA FETCHING", "API'S"],
			"https://bright-tartufo-189e52.netlify.app/",
		],
		[
			"2021",
			"Split Text Package",
			["NPM PACKAGE"],
			"https://axnjr.github.io/SubTextJS/",
		],
		[
			"2023",
			"Current Portfolio",
			["REACT", "DESIGN", "WEB DEV"],
			"LINK PENDING",
		],
		[
			"2021",
			"Letter Game",
			["SPEECH RECOGNITION", "WEB DEV"],
			"https://silly-mermaid-f68aa3.netlify.app/",
			true,
		],
	];

	return (
		<>
			<div className="projects" id="pro">
				<div>
					<p>Select Works</p>
					{
                    project_object.map((element, id) => {
						return (
							<ProjectDivs
								key={id}
								id={id}
								date={element[0]}
								name={element[1]}
								type={element[2]}
								link={element[3]}
								last_boolean={element[4]}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
