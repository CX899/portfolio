import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import bellImage from "../../assets/bell.png";
import ciscoImage from "../../assets/cisco.png";

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
								src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Symbol.png"
								alt="shopify"
								className="work-image"
							/>
							<div className="work-title">Shopify</div>
							<div className="work-subtitle">
								Infrastructure Software Engineer Intern
							</div>
							<div className="work-duration">Current</div>
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
							<div className="work-title">Bell</div>
							<div className="work-subtitle">
								Software Engineer Intern
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
