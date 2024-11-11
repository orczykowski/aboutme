import {Injectable} from '@angular/core';
import {JobInfo} from "./job.model";
import {ApplicationArchitecture, Methodology, SystemArchitecture, Technology} from "../../utils/technologies/definition.model";

@Injectable({
  providedIn: 'root'
})
export class JobRepository {

  constructor() {
  }

  findAll(): JobInfo[] {
    return [
      {
        companyName: "University of Adama Mickiewicz in Poznań",
        position: "Lecture",
        begin: new Date("2013-09-01"),
        end: new Date("2015-02-01"),
        mainTechnologies: [],
        otherTechnologies: [],
        methodologies: [],
        mainResponsibilities: [
          "conducting lectures",
          "conducting labs and exercises classes for students",
          "developed lectures and prepared supporting materials",
          "Conducting the final evaluation of students"
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [],
        description: "Cooperation with the university was established through Allegro. I prepared and delivered lectures, exercises, labs, and seminars for students. I was responsible for developing teaching materials, administering exams, and assessing students' progress."
      },
      {
        companyName: "Allegro",
        position: "SENIOR SOFTWARE ENGINEER",
        begin: new Date("2012-11-01"),
        end: new Date("2019-06-30"),
        mainTechnologies: [
          Technology.JAVA, Technology.KOTLIN, Technology.GROOVY,
          Technology.SPRING, Technology.SPRING_CLOUD, Technology.SPRING_BOOT, Technology.OPEN_FEIGN, Technology.SPRING_DATA,
          Technology.EUREKA, Technology.RIBBON, Technology.ACTUATOR, Technology.SLEUTH, Technology.MICRO_METER,
          Technology.JPA, Technology.HIBERNATE,
          Technology.SPRING_TEST, Technology.PITEST, Technology.JUNIT, Technology.SPOCK, Technology.RESTITO,
          Technology.SOAP, Technology.REST, Technology.O_AUTH2, Technology.OPEN_FEIGN,
          Technology.JERSEY, Technology.KAFKA, Technology.WIRE_MOCK, Technology.JSON, Technology.YAML, Technology.SQL,
          Technology.MAVEN, Technology.GRADLE, Technology.PITEST
        ],
        otherTechnologies: [
          Technology.NPM, Technology.ANGULAR, Technology.JAVA_SCRIPT, Technology.BITBUCKET, Technology.TYPE_SCRIPT, Technology.CSS, Technology.HTML, Technology.PHP,
          Technology.ORACLE, Technology.MY_SQL, Technology.MONGO_DB, Technology.HUE, Technology.HIVE, Technology.HDFS,
          Technology.PROMETHEUS, Technology.GRAFANA, Technology.PAGER_DUTY, Technology.KIBANA, Technology.BAMBOO, Technology.RABBIT_MQ,
          Technology.REDIS, Technology.AVRO, Technology.SONAR, Technology.ELASTIC_SEARCH, Technology.GIT, Technology.MESOS, Technology.BASH, Technology.MEMCACHE, Technology.HADOOP,
        ],

        methodologies: [
          Methodology.LEAN,
          Methodology.SCRUM,
          Methodology.AGILE,
          Methodology.KANBAN,
          Methodology.XP],
        mainResponsibilities: [
          "software development - backend, frontend, big data",
          "optimizing the performance of applications",
          "design system/application architecture",
          "creating automated tests at all levels (from units to e2e)",
          "creating monitoring",
          "analysis and performance optimization of databases (and application pages), data design",
          "api design and developing",
          "maintenance of the developed software",
          "taking care of the high quality of the code, application design and solutions",
          "creating tools using Big Data technologies",
          "documenting solutions",
          "ensuring High Code and Solution quality",
          "code review",
          "develop R&D / POC concepts",
          "business support in decision making"
        ],
        additionalResponsibilities: [
          "conducting internal trainings and workshops",
          "conducting technical interviews in the process of recruiting new employees",
          "participation as a mentor in hackathons organized by Allegro",
          "24/7 duty over applications",
          "onboarding new team members"
        ],
        applicationArchitectures: [
          ApplicationArchitecture.LAYERED_ARCHITECTURE,
          ApplicationArchitecture.ONION_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.PIPE_AND_FILTERS,],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Allegro is one of the largest e-commerce platforms in Eastern Europe, built on a foundation of over 1,000 microservices. I contributed to the development of products across several areas, including:" +
          "<br/> - <i>Product Area</i>: Developed platforms (such as the Allegro Brands Zone) and tools for sellers to facilitate easier integration with Allegro, automate tasks, and enhance service professionalism." +
          "<br/> - <i>Finance Area</i>: Created systems responsible for managing purchase and commission refunds, developed the billing system for the entire platform, and built reporting tools." +
          "<br/> - <i>Delivery Area</i>: Worked on integrations with carriers, implemented package tracking with multi-channel user notifications, and participated in the Allegro SMART program." +
          "<br/> - <i>Other Projects</i>: Engaged in a project to predict price distribution based on demand (although due to legal reasons, this project was never deployed to the production environment)."
      },
      {
        companyName: "B2B Network",
        position: "SENIOR JAVA DEVELOPER / TEAM LEADER",
        begin: new Date("2019-06-01"),
        end: new Date("2019-12-31"),
        mainTechnologies: [Technology.JAVA, Technology.GROOVY, Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY, Technology.O_AUTH2,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST, Technology.ANGULAR, Technology.CSS, Technology.HTML, Technology.MONGO_DB,
          Technology.POSTGRES, Technology.REST, Technology.WIRE_MOCK, Technology.OPEN_FEIGN, Technology.JSON, Technology.YAML, Technology.SQL, Technology.GRADLE],
        otherTechnologies: [Technology.GIT, Technology.AWS],
        methodologies: [Methodology.AGILE, Methodology.KANBAN, Methodology.XP],
        mainResponsibilities: [
          "software development - backend and frontend",
          "design system/application architecture",
          "creating automated tests (unit, integration test)",
          "api design and developing",
          "taking care of the high quality of the code, application design and solutions",
          "code review",
          "analysis and decision-making regarding the technologies used",
          "support team members during self-development",
          "negotiating the scope and deadlines of work with the business"
        ],
        additionalResponsibilities: [
          "conducting internal trainings and workshops",
          "design and conducting of usability tests with potential users",
          "business support in designing functionalities and in decision making",
          "conducting technical interviews in the process of recruiting new employees",
          "task prioritization management",
          "supporting the development of team members",
          "team composition management"
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MICRO_MONOLITH,
        description: "Internal project. Create a competitive system for managing the entire software testing process, starting from defining test cases, running various types of tests, aggregating " +
          "and presenting results (reports, trends, analyses), to managing bugs. The goal of the application was to increase the security, auditability, and speed of the flawed software testing process."

      },
      {
        companyName: "Empik",
        position: "Architect - hands on ",
        begin: new Date("2020-01-01"),
        end: new Date("2020-12-31"),
        mainTechnologies: [Technology.JAVA, Technology.GROOVY, Technology.KOTLIN,
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY,
          Technology.O_AUTH2, Technology.JSON, Technology.YAML, Technology.SQL,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.GRAPH_QL, Technology.OPEN_FEIGN, Technology.MAVEN, Technology.GRADLE],
        otherTechnologies: [Technology.CSS, Technology.HTML, Technology.GIT, Technology.ORACLE, Technology.NPM, Technology.CLOUDFLARE, Technology.K8S, Technology.LOMBOK,
          Technology.KIBANA, Technology.HAZELCAST, Technology.REACT, Technology.GRAFANA, Technology.PROMETHEUS, Technology.JENKINS, Technology.KAFKA],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          "software development - backend and fronted",
          "design system/application architecture",
          "monitoring and maintenance of the developed software",
          "participating in the implementation of each application (particularly the GraphQL facade)",
          "implementation of changes in existing systems and infrastructure",
          "creating a solution to monitor the achievement of business and technical goals",
          "creating automated tests",
          "taking care of the high quality of the code, application design and solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
          "business support in decision making (in the technological aspect)",
          "support of various teams in making architectural decisions",
        ],
        additionalResponsibilities: [
          "creating a complete on-boarding process from scratch",
          "participation in meetings determining the shape of the system architecture / method of integration",
          "support for planning technological debt reduction"
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC,],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "The goal of the project was to optimize the performance of the product page and the speed of presenting the full offer. The first stage of the project involved defining both " +
          "technical and business metrics, as well as methods for collecting and presenting them. " +
          "The metrics were gathered through an additional application that measured the performance of competing websites. " +
          "To ensure easy accessibility, the metrics were presented in Grafana on a dedicated dashboard. The second stage focused on " +
          "technology selection (R&D) and a detailed analysis of risks and opportunities. " +
          "Next, a system was designed consisting of several services, along with a facade using GraphQL as the API." +
          "Applications created as part of the implementation: " +
          "<br/> - BFF - facade using graphQL that allows you to dynamically pull data from several services" +
          "<br/> - CMS - a system that allows you to define rules depending on various business rules that influenced the displayed content" +
          "<br/> - SSR App - a consumer of the two previous apps, a view pre-renderer app for the client to reduce response time" +
          "<br/> - Frontend app - rewritten application presenting product data," +
          "<br/> - Monitoring allowing for continuous verification of business goals"
      },
      {
        companyName: "Apreel / Nationale Nederlanden",
        position: "Senior software engineer",
        begin: new Date("2021-01-01"),
        end: new Date("2022-02-01"),
        mainTechnologies: [
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_CLOUD, Technology.SPRING_BOOT, Technology.SPRING_BOOT,
          Technology.JAVA, Technology.SOAP, Technology.REST, Technology.GROOVY, Technology.ACTUATOR, Technology.WIRE_MOCK, Technology.ARCHUNIT, Technology.JUNIT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.ACTUATOR, Technology.OPEN_FEIGN, Technology.LOMBOK, Technology.JSON, Technology.YAML, Technology.SQL, Technology.MAVEN, Technology.PITEST,
        ],
        otherTechnologies: [
          Technology.K8S, Technology.NPM, Technology.PROMETHEUS, Technology.GRAFANA, Technology.REACT, Technology.OKD,
          Technology.HELM, Technology.ARGO, Technology.GITLAB, Technology.JENKINS, Technology.GRAY_LOG,
          Technology.GIT, Technology.MS_SQL, Technology.KAFKA],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          "software development - backend and frontend",
          "creating automated tests (all level unit, integration, e2e)",
          "design system/application architecture",
          "design and optimization of data and database usage",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code, application design and solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design and development",
          "design CI/CD"
        ],
        additionalResponsibilities: [
          "participation in a company-wide (international) program aimed at increasing the number of employed engineers and improving their working conditions in order to increase their retention.",
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Body leasing to the insurance (Nationale Nederlanden) company.The project in the area of claims reporting aimed to develop a modern system to optimize and automate the entire claims management process. The key objectives of the project included:" +
          "<br/> - High availability" +
          "<br/> - Process automation: Selected stages of the claims handling process were automated to reduce the time required to process claims and to minimize the need for manual execution of routine tasks. As a result, the system can independently assign cases to appropriate staff, update claim statuses, and inform customers about the progress of their cases.\n" +
          "<br/> - Integration of various solutions: The system was designed to integrate with other systems, such as insurance systems, customer communication tools, and external databases (e.g., insurance history databases). These connections allow real-time data exchange, which streamlines the entire claims handling process." +
          "<br/> - Single source of truth**: The system serves as a central repository of information on the claim’s status, eliminating discrepancies. This ensures that both employees and customers have access to up-to-date and consistent information about each stage of the claims process.\n" +
          "This project increased the efficiency and speed of claims handling, improved process transparency, and enhanced customer satisfaction by providing quick access to information on the status of their claims."
      },
      {
        companyName: "Nationale Nederlanden",
        position: "Software engineering lead",
        begin: new Date("2022-02-01"),
        end: new Date("2023-06-01"),
        mainTechnologies: [
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_CLOUD, Technology.SPRING_BOOT, Technology.SPRING_BOOT,
          Technology.JAVA, Technology.ARCHUNIT, Technology.SOAP, Technology.REST, Technology.GROOVY, Technology.JUNIT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.ACTUATOR, Technology.CYPRESS, Technology.WIRE_MOCK, Technology.MAVEN,
        ],
        otherTechnologies: [
          Technology.NPM, Technology.K8S, Technology.PROMETHEUS, Technology.GRAFANA, Technology.REACT,
          Technology.HELM, Technology.ARGO, Technology.GITLAB, Technology.GRAY_LOG,
          Technology.GIT, Technology.MS_SQL, Technology.KAFKA, Technology.PITEST],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          "software development - backend and frontend",
          "creating automated tests",
          "support of various teams in making architectural decisions",
          "participation in meetings determining the shape of the system architecture / method of integration",
          "support for planning technological debt reduction",
          "design system/application architecture",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code, application design and solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
          "business support in decision making (in the technological aspect)",
          "support for team members' development and evaluating their progress."
        ],
        additionalResponsibilities: [
          "participation in a program aimed at creating / strengthening the engineering culture (NN Poland).",
          "onboarding new team members",
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC, ApplicationArchitecture.HEXAGONAL_ARCHITECTURE, ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Direct transition to Nationale Nederlanden. Continued work on the claims reporting and management system as a Tech Leader."
      },
      {
        companyName: "Smartfrigo",
        position: "developer",
        begin: new Date("2010-07-01"),
        end: new Date("2011-12-31"),
        mainTechnologies: [Technology.PHP, Technology.JAVA_SCRIPT, Technology.HTML, Technology.XML, Technology.HTML, Technology.CSS],
        otherTechnologies: [Technology.SVN],
        methodologies: [],
        mainResponsibilities: [
          "design, creating backend and frontend functionalists",
          "design system/application architecture",
          "data design",
          "testing application",
        ],
        additionalResponsibilities: ["Support founders with design functionalities"],
        applicationArchitectures: [
          ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MONOLITH,
        description:
          "Creation of a refrigerated transport exchange platform. Platform that allows you to optimize transport costs by selling / renting transport space on selected sections of the route for large trucks"
      },

      {
        companyName: "J-laabs - Brown Brothers Harriman (BBH)",
        position: "technical leader",
        begin: new Date("2023-09-15"),
        mainTechnologies:
          [Technology.JAVA, Technology.TYPE_SCRIPT, Technology.SPRING, Technology.SPRING_TEST, Technology.SPRING, Technology.SPRING_BOOT,
            Technology.ANGULAR
          ],
        otherTechnologies: [Technology.EUREKA, Technology.K8S, Technology.MAVEN, Technology.GRADLE, Technology.ORACLE, Technology.GRAFANA, Technology.SPLUNK, Technology.KAFKA, Technology.EUREKA, Technology.JENKINS, Technology.BITBUCKET],
        methodologies: [Methodology.SCRUM],
        mainResponsibilities: [
          "design and development - backend and frontend functionality",
          "designing system and application architecture",
          "refactoring - rewriting inefficient parts of the application / coordinating activities",
          "performance optimization - improving application, database, and infrastructure performance to ensure scalability, efficiency, and responsiveness.",
          "maintaining and monitoring applications in production",
          "management and coordination of team work",
          "technical debt management",
          "defining technical requirements",
          "supporting team members' development and evaluating their progress",
          "redesigning and creating CI/CD pipelines",
          "creating documentation",
          "supporting process standardization",
          "ensuring code quality and best practices",
          "collaborating with cross-functional teams to deliver solutions",
          "troubleshooting and resolving complex technical issues",
          "driving continuous improvement in development processes",
        ],
        additionalResponsibilities: [
          "participation in meetings determining the shape of the system architecture / method of integration",
          "support for planning technological debt reduction",
          "conducting technical interviews in the process of recruiting new employees"
        ],
        applicationArchitectures: [ApplicationArchitecture.OTHER, ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MONOLITH,
        description:
          "Work at a BBH client, on the client's internal system. Development and maintenance of a system that enables processing, transforming, and analyzing documents."
      },
    ].sort((job1: JobInfo, job2: JobInfo) => this.compare(job1, job2));
  }

  private compare(job1: JobInfo, job2: JobInfo): number {
    if (!job2.end || !job1.end) {
      return job1.begin < job2.begin ? 1 : -1;
    }
    return job1.end < job2.end ? 1 : -1;
  }
}
