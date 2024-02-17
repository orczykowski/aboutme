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
        begin: new Date("2015-02-01"),
        end: new Date("2013-07-01"),
        mainTechnologies: [],
        otherTechnologies: [],
        methodologies: [],
        mainResponsibilities: [
          "giving a lecture to students",
          "conducting laboratory classes for students",
          "development of course materials"],
        additionalResponsibilities: ["final knowledge verification and assessment"],
        applicationArchitectures: [],
        description: "Cooperation with the university was established through Allegro. As part of the internal recruitment, I managed to qualify as a lecturer."
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
          "software development",
          "creating automated tests",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code / solutions",
          "design system/application architecture",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
          "business support in decision making (in the technological aspect)"
        ],
        additionalResponsibilities: [
          "conducting internal trainings and workshops",
          "conducting technical interviews in the process of recruiting new employees",
          "participation as a mentor in hackathons organized by Allegro",
          "introducing and supporting new employees to the team",
          "24/7 duty over applications",
          "onboarding new team mates"
        ],
        applicationArchitectures: [
          ApplicationArchitecture.LAYERED_ARCHITECTURE,
          ApplicationArchitecture.ONION_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.PIPE_AND_FILTERS,],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Largest e-commerce platform in Eastern Europe. Platform built with 1k+ microservices. I developed the area of finance, product, and post-purchasing (delivery)."
      },
      {
        companyName: "B2B Network",
        position: "SENIOR JAVA DEVELOPER / LEADER",
        begin: new Date("2019-06-01"),
        end: new Date("2019-12-31"),
        mainTechnologies: [Technology.JAVA, Technology.GROOVY, Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY, Technology.O_AUTH2,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST, Technology.ANGULAR, Technology.CSS, Technology.HTML, Technology.MONGO_DB,
          Technology.POSTGRES, Technology.REST, Technology.WIRE_MOCK, Technology.OPEN_FEIGN, Technology.JSON, Technology.YAML, Technology.SQL, Technology.GRADLE],
        otherTechnologies: [Technology.GIT, Technology.AWS],
        methodologies: [Methodology.AGILE, Methodology.KANBAN, Methodology.XP],
        mainResponsibilities: [
          "implementation of functionality on the backend and frontend side",
          "creating automated tests (unit, integration test)",
          "design system/application architecture",
          "documenting solutions",
          "api design",
          "code review",
          "support team members during self-development",
          "negotiating the scope and deadlines of work with the business"
        ],
        additionalResponsibilities: [
          "conducting internal trainings and workshops",
          "organization of usability tests with potential users",
          "business support in designing functionalities",
          "conducting technical interviews in the process of recruiting new employees",
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MICRO_MONOLITH,
        description: "Internal project. Creating an application that allows you to manage the entire testing process, starting from the creation of test cases, through reporting the test progress, reporting errors, to automatic test launch."

      },
      {
        companyName: "Empik",
        position: "Architect",
        begin: new Date("2020-01-01"),
        end: new Date("2020-12-31"),
        mainTechnologies: [Technology.JAVA, Technology.GROOVY, Technology.KOTLIN,
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY, Technology.O_AUTH2, Technology.JSON, Technology.YAML, Technology.SQL,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST, Technology.GRAPH_QL, Technology.OPEN_FEIGN, Technology.MAVEN, Technology.GRADLE],
        otherTechnologies: [Technology.CSS, Technology.HTML, Technology.GIT, Technology.ORACLE, Technology.NPM,
          Technology.KIBANA, Technology.HAZELCAST, Technology.REACT, Technology.GRAFANA, Technology.PROMETHEUS, Technology.JENKINS],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          "software development",
          "creating automated tests",
          "design system/application architecture",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code / solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
          "business support in decision making (in the technological aspect)",
          "support of various teams in making architectural decisions"
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
        description: "The aim of the project was to increase the speed of the \"product card\". As part of the project, the following were created:" +
          "<br/>BFF - façade using graphQL that allows you to dynamically pull data\n" +
          "<br/>CMS - a system that allows you to define rules depending on various business rules that influenced the displayed content\n" +
          "<br/>SSR App - a consumer of the two previous apps, a view pre-renderer app for the client\n" +
          "<br/>Frontend app - rewritten application presenting product data," +
          "<br/>Monitoring allowing for continuous verification of business goals"
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
          "software development",
          "creating automated tests",
          "design system/application architecture",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code / solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
        ],
        additionalResponsibilities: [
          "participation in a company-wide (international) program aimed at increasing the number of employed engineers and improving their working conditions in order to increase their retention.",
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Body leasing to the insurance (Nationale Nederlanden) company. Working as developer in the area of claim reporting and out payments. Rewriting old applications to a  microservices architecture with new tech stack"
      },
      {
        companyName: "Nationale nederlanden",
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
          "creating automated tests",
          "design system/application architecture",
          "monitoring and maintenance of the developed software",
          "taking care of the high quality of the code / solutions",
          "documenting solutions",
          "code review",
          "develop R&D / POC concepts",
          "api design",
          "business support in decision making (in the technological aspect)",
          "support of various teams in making architectural decisions",
          "participation in meetings determining the shape of the system architecture / method of integration",
          "support for planning technological debt reduction"

        ],
        additionalResponsibilities: [
          "participation in a program aimed at creating / strengthening the engineering culture (NN Poland).",
          "onboarding new team mates",
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC, ApplicationArchitecture.HEXAGONAL_ARCHITECTURE, ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: "Working as developer in the area of claim reporting and out payments. Rewriting old applications to a  microservices architecture with new tech stack"
      },
      {
        companyName: "Smartfrigo",
        position: "developer",
        begin: new Date("2010-07-01"),
        end: new Date("2011-12-31"),
        mainTechnologies: [Technology.PHP, Technology.HTML, Technology.XML, Technology.HTML, Technology.CSS],
        otherTechnologies: [],
        methodologies: [],
        mainResponsibilities: [
          "design, creating backend and frontend functionalists",
          "design system/application architecture",
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
        companyName: "J-laabs - Brown Brothers Harriman",
        position: "technical leader",
        begin: new Date("2023-09-15"),
        mainTechnologies:
          [Technology.JAVA, Technology.SPRING, Technology.SPRING_TEST, Technology.ANGULAR
          ],
        otherTechnologies: [Technology.EUREKA, Technology.K8S, Technology.MAVEN, Technology.GRADLE, Technology.ORACLE],
        methodologies: [Methodology.SCRUM],
        mainResponsibilities: [
          "Design and development of both backend and frontend functionality",
          "Designing the architecture of both the system and the application",
          "Refactoring - rewriting inefficient parts of the application / coordinating activities",
          "Management i Coordination of team work",
          "Technical debt management",
          "Defining technical requirements",
          "Education of team members",
          "CICD creation/optimization",
          "Creating documentation",
          "Process standardization support"
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [
          ApplicationArchitecture.OTHER],
        systemArchitecture: SystemArchitecture.MONOLITH,
        description:
          "Work at a BBH client, on the client's internal system"
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
