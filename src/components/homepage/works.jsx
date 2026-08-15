import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import bellImage from "../../assets/bell.png";
import ciscoImage from "../../assets/cisco.png";
import mesoImage from "../../assets/meso.svg";
import conexImage from "../../assets/conex.svg";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
								alt="aws"
								className="work-image"
							/>
							<div className="work-title">Amazon Web Services</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">
								Jun 2026 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
								alt="shopify"
								className="work-image"
							/>
							<div className="work-title">Shopify</div>
							<div className="work-subtitle">
								Infrastructure Software Engineer Intern
							</div>
							<div className="work-duration">
								May 2025 - Dec 2025
							</div>
						</div>

						<div className="work">
							<img
								src={conexImage}
								alt="conex"
								className="work-image"
							/>
							<div className="work-title">Conex</div>
							<div className="work-subtitle">
								Co-Founder (Dobson Startup School)
							</div>
							<div className="work-duration">2026</div>
						</div>

						<div className="work">
							<img
								src={mesoImage}
								alt="meso"
								className="work-image"
							/>
							<div className="work-title">meSO Groupe Inc.</div>
							<div className="work-subtitle">
								Full Stack Software Engineer
							</div>
							<div className="work-duration">
								Jul 2023 - Apr 2025
							</div>
						</div>

						<div className="work">
							<img
								src={ciscoImage}
								alt="cisco"
								className="work-image"
							/>
							<div className="work-title">Cisco</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2024</div>
						</div>

						<div className="work">
							<img
								src={bellImage}
								alt="bell"
								className="work-image"
							/>
							<div className="work-title">Bell Canada</div>
							<div className="work-subtitle">
								Backend Software Developer Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
