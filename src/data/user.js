const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const INFO = {
	main: {
		title: "CX899 portfolio",
		name: "Colin Xiong",
		email: "xiong.colin899@gmail.com",
	},

	socials: {
		github: "https://github.com/CX899",
		linkedin: "https://www.linkedin.com/in/colinxiong/",
		instagram: "https://www.instagram.com/colin_xiong/",
	},

	homepage: {
		title: "Software Engineering Student, Startup Founder, Varsity Badminton Athlete.",
		description:
			"Hi, I'm Colin Xiong, a Software Engineering student at McGill University graduating in May 2027. I'm currently a Software Developer Intern at Amazon Web Services in Vancouver, working in Rust on CloudFront invalidation infrastructure — replacing poll-based propagation with a synchronous push-and-ack model and load testing it across a 16-region EC2 fleet. Before AWS I was an Infrastructure Software Engineering Intern on Shopify's Database Platform team, deploying YugabyteDB across seven global regions for fault-tolerant storage of petabytes of commerce data. I also co-founded Conex through the McGill Dobson Startup School, a venture focused on optimizing workflows inside civil engineering firms, and interned at Cisco on LLM and RAG-based developer tooling, at Bell Canada on real-time complex event processing with Apache Flink and Kafka, and at meSO Groupe Inc. as a full stack engineer. Together these have given me exposure to distributed systems, infrastructure, and full stack work across very different scales and industries.",
	},

	about: {
		title: "My name is Colin Xiong. I live in Montreal and study at McGill University.",
		description:
			"I've been involved in a range of projects throughout my time at McGill, as well as during my internships at Amazon Web Services, Shopify, Cisco, Bell Canada, and meSO Groupe Inc. I'm currently a Software Developer Intern at AWS in Vancouver, building distributed infrastructure in Rust for CloudFront invalidations. Before that I spent my work term on Shopify's Database Platform team, working on distributed database infrastructure, observability, and backup and recovery at scale. Outside of my internships I went through the McGill Dobson Startup School to build Conex, a product aimed at streamlining the document and approval workflows that slow down civil engineering companies — my first real experience taking something from a problem statement to a validated product. I'm particularly proud of my work on complex event processing with Apache Flink at Bell, my contributions to AI and LLM-based tooling at Cisco, and my full stack work at meSO Groupe Inc. Some of these projects are open-source, and I'd love for others to explore, contribute, or provide feedback. If you're interested in any of the projects I've worked on, feel free to check out the code. I'm always open to collaboration and new ideas, as it's a great way to continue learning and growing.",
	},

	projects: [
		{
			title: "Conex",
			description:
				"A venture built through the McGill Dobson Startup School aimed at optimizing workflows inside civil engineering companies, replacing scattered email and spreadsheet approvals with a single tracked pipeline for drawings, submittals, and revisions. Covered customer discovery, product validation, and a working prototype.",
			logo1: `${DEVICON}/react/react-original.svg`,
			logo2: `${DEVICON}/typescript/typescript-original.svg`,
			logo3: `${DEVICON}/postgresql/postgresql-original.svg`,
			linkText: "Learn More",
			link: "https://www.linkedin.com/in/colinxiong/",
		},

		{
			title: "CloudFront Invalidation Propagation",
			description:
				"Distributed infrastructure work at AWS: an end-to-end proof of concept in Rust that replaces poll-based propagation of CloudFront invalidations with a synchronous push-and-ack model. Redesigned the regional hub to process records concurrently for a 150x gain in per-connection throughput, load tested to 1,200 records/sec across a 16-region EC2 fleet with zero failed confirmations at under 2% hub CPU, and implemented both raw TCP and gRPC transports to compare latency, wire cost, and failure behavior.",
			logo1: `${DEVICON}/rust/rust-original.svg`,
			logo2: `${DEVICON}/grpc/grpc-original.svg`,
			logo3: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
			linkText: "Learn More",
			link: "https://www.linkedin.com/in/colinxiong/",
		},

		{
			title: "Distributed Database Infrastructure",
			description:
				"Infrastructure work on Shopify's Database Platform team: deploying YugabyteDB across seven global regions for fault-tolerant storage of 5+ petabytes of commerce data, real-time cluster monitoring with Prometheus and Grafana including clock skew detection and alerting, and GCS-based recovery for tablespaces and roles from metadata snapshots.",
			logo1: `${DEVICON}/go/go-original-wordmark.svg`,
			logo2: `${DEVICON}/prometheus/prometheus-original.svg`,
			logo3: `${DEVICON}/grafana/grafana-original.svg`,
			linkText: "Learn More",
			link: "https://www.linkedin.com/in/colinxiong/",
		},

		{
			title: "Event-Driven Microservices Platform",
			description:
				"A full stack event-driven microservices platform built at meSO Groupe Inc., routing traffic through an ALB into Dockerized filtering services and caching ranked match pools in Redis via SQS-triggered processing. Includes 30+ REST endpoints backed by MongoDB, Redis, and S3, with Winston logging shipped to CloudWatch.",
			logo1: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
			logo2: `${DEVICON}/docker/docker-original.svg`,
			logo3: `${DEVICON}/redis/redis-original.svg`,
			linkText: "Learn More",
			link: "https://www.linkedin.com/in/colinxiong/",
		},

		{
			title: "GoodLuckTruck",
			description:
				"GoodLuckTruck is an innovative platform designed to optimize freight matching for truckers. It intelligently connects truck drivers with the most suitable loads using a combination of geospatial data and advanced filtering algorithms.",
			logo1: `${DEVICON}/swift/swift-original.svg`,
			logo2: `${DEVICON}/python/python-original.svg`,
			logo3: `${DEVICON}/javascript/javascript-original.svg`,
			linkText: "View Project",
			link: "https://github.com/CX899/GoodLuckTruck",
		},

		{
			title: "Quant_Algo",
			description:
				"A comprehensive quantitative trading algorithms project implementing various financial models and strategies. Features advanced statistical analysis, backtesting capabilities, and automated trading systems using Python.",
			logo1: `${DEVICON}/python/python-original.svg`,
			logo2: `${DEVICON}/pandas/pandas-original.svg`,
			logo3: `${DEVICON}/numpy/numpy-original.svg`,
			linkText: "View Project",
			link: "https://github.com/CX899/Quant_Algo",
		},

		{
			title: "SportCenterManagement",
			description:
				"A sport center management web app built to client requirements with project stakeholders. Features dynamic query filtering and pagination through Hibernate and QueryBuilder, plus 30+ OpenAPI-compliant REST endpoints backed by PostgreSQL.",
			logo1: `${DEVICON}/java/java-original.svg`,
			logo2: `${DEVICON}/spring/spring-original.svg`,
			logo3: `${DEVICON}/postgresql/postgresql-original.svg`,
			linkText: "View Project",
			link: "https://github.com/CX899/SportCenterManagement",
		},

		{
			title: "SicknessHacks",
			description:
				"Developed a web app that gives a possible preliminary diagnosis for the patient's illness. It also tells him whether or not they should go to the hospital.",
			logo1: `${DEVICON}/python/python-original.svg`,
			logo2: `${DEVICON}/javascript/javascript-original.svg`,
			logo3: `${DEVICON}/html5/html5-original.svg`,
			linkText: "View Project",
			link: "https://github.com/CX899/SicknessHacks",
		},

		{
			title: "RedBirdRoster",
			description:
				"RedBirdsRoster streamlines task management with a user-friendly design and pleasant interface.",
			logo1: `${DEVICON}/react/react-original.svg`,
			logo2: `${DEVICON}/javascript/javascript-original.svg`,
			logo3: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
			linkText: "View Project",
			link: "https://github.com/CX899/RedBirdRoster",
		},
	],
};

export default INFO;
