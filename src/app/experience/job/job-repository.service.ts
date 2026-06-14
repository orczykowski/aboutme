import {Injectable} from '@angular/core';
import {JobInfo} from './job.model';
import {ApplicationArchitecture, Methodology, SystemArchitecture, Technology} from '../../utils/technologies/definition.model';

@Injectable({
  providedIn: 'root'
})
export class JobRepository {

  findAll(): JobInfo[] {
    return [
      {
        companyName: 'Smartfrigo',
        position: 'Developer',
        begin: new Date('2010-07-01'),
        end: new Date('2011-12-31'),
        mainTechnologies: [Technology.PHP, Technology.JAVA_SCRIPT, Technology.HTML, Technology.XML, Technology.CSS],
        otherTechnologies: [Technology.SVN],
        methodologies: [],
        mainResponsibilities: [
          'design and implementation of website functionalities (backend PHP / frontend JS, HTML, CSS)',
          'testing the implemented functionalities',
          'creating documentation',
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MONOLITH,
        description:
          'Creation of a refrigerated transport exchange platform. Platform that allows you to optimize transport costs by selling / renting transport space on selected sections of the route for large trucks',
      },
      {
        companyName: 'Allegro',
        position: 'Senior Software Engineer',
        begin: new Date('2012-11-01'),
        end: new Date('2019-06-30'),
        mainTechnologies: [
          Technology.JAVA, Technology.KOTLIN, Technology.GROOVY,
          Technology.SPRING, Technology.SPRING_CLOUD, Technology.SPRING_BOOT, Technology.OPEN_FEIGN, Technology.SPRING_DATA,
          Technology.EUREKA, Technology.RIBBON, Technology.ACTUATOR, Technology.SLEUTH, Technology.MICRO_METER,
          Technology.JPA, Technology.HIBERNATE,
          Technology.SPRING_TEST, Technology.PITEST, Technology.JUNIT, Technology.SPOCK, Technology.RESTITO,
          Technology.SOAP, Technology.REST, Technology.O_AUTH2,
          Technology.JERSEY, Technology.KAFKA, Technology.WIRE_MOCK, Technology.JSON, Technology.YAML, Technology.SQL,
          Technology.MAVEN, Technology.GRADLE,
        ],
        otherTechnologies: [
          Technology.NPM, Technology.ANGULAR, Technology.JAVA_SCRIPT, Technology.BITBUCKET, Technology.TYPE_SCRIPT, Technology.CSS, Technology.HTML, Technology.PHP,
          Technology.ORACLE, Technology.MY_SQL, Technology.MONGO_DB, Technology.HUE, Technology.HIVE, Technology.HDFS,
          Technology.PROMETHEUS, Technology.GRAFANA, Technology.PAGER_DUTY, Technology.KIBANA, Technology.BAMBOO, Technology.RABBIT_MQ,
          Technology.REDIS, Technology.AVRO, Technology.SONAR, Technology.ELASTIC_SEARCH, Technology.GIT, Technology.MESOS, Technology.BASH, Technology.MEMCACHE, Technology.HADOOP,
        ],
        methodologies: [Methodology.LEAN, Methodology.SCRUM, Methodology.AGILE, Methodology.KANBAN, Methodology.XP],
        mainResponsibilities: [
          'designed and developed backend, frontend and Big Data solutions for business-critical platforms',
          'participated in software architecture and solution design within a large-scale distributed ecosystem consisting of over 1,000 microservices',
          'designed scalable REST APIs and integration mechanisms between internal and external systems',
          'optimized application performance, database queries and data models to support high-volume workloads',
          'designed and implemented monitoring and observability solutions for production systems',
          'created automated tests across all levels, including unit, integration and end-to-end testing',
          'performed code reviews and promoted engineering best practices, maintainability and software quality',
          'participated in Proof of Concept initiatives and technology evaluations supporting platform evolution',
          'supported business stakeholders by translating functional requirements into scalable technical solutions',
          'developed internal tools using Big Data technologies to improve operational efficiency',
          'contributed to engineering excellence through continuous improvement of development processes, architecture and code quality',
        ],
        additionalResponsibilities: [
          'conducted internal technical workshops and knowledge-sharing sessions',
          'participated in recruitment processes by conducting technical interviews and evaluating candidates',
          'acted as a mentor during company hackathons and supported onboarding of new engineers',
          'participated in 24/7 production support, troubleshooting critical incidents and ensuring platform stability',
        ],
        applicationArchitectures: [
          ApplicationArchitecture.LAYERED_ARCHITECTURE,
          ApplicationArchitecture.ONION_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.PIPE_AND_FILTERS,
        ],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: 'Allegro is one of the largest e-commerce platforms in Central and Eastern Europe, serving millions of users and operating on a highly distributed architecture consisting of more than 1,000 microservices. During nearly seven years with the company, I contributed to multiple strategic initiatives across Product, Finance, Delivery and Big Data domains, working on systems responsible for core business processes and high-volume traffic.'
          + '<br/> - <i>Product Area</i>: Designed and developed platforms supporting merchants and sellers, including tools simplifying integration with Allegro services and automating business processes. Participated in the development of Allegro Brands Zone and other solutions aimed at improving seller experience and increasing platform capabilities.'
          + '<br/> - <i>Finance Area</i>: Developed business-critical systems responsible for purchase refunds, commission settlements and billing processes. Designed reporting mechanisms and supported financial workflows requiring reliability, consistency and high data quality.'
          + '<br/> - <i>Delivery Area</i>: Participated in projects integrating external logistics providers with Allegro\'s ecosystem, including shipment tracking and multi-channel customer notifications. Contributed to the Allegro SMART initiative by developing services supporting delivery processes and customer communication.'
          + '<br/> - <i>Big Data & Research</i>: Participated in an R&D initiative focused on demand-based price prediction using Big Data technologies and analytical models. Although the solution was ultimately not released to production due to legal constraints, the project provided valuable experience in large-scale data processing and predictive systems.',
      },
      {
        companyName: 'University of Adama Mickiewicz in Poznan',
        position: 'Lecturer',
        begin: new Date('2015-02-01'),
        end: new Date('2015-07-31'),
        mainTechnologies: [],
        otherTechnologies: [],
        methodologies: [],
        mainResponsibilities: [
          'conducting lectures',
          'conducting labs and exercises classes for students',
          'developed lectures and prepared supporting materials',
          'conducting the final evaluation of students',
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [],
        description: 'Cooperation with the university was established through Allegro. I prepared and delivered lectures, exercises, labs, and seminars for students. I was responsible for developing teaching materials, administering exams, and assessing students\' progress.',
      },
      {
        companyName: 'B2B Network',
        position: 'Senior Java Developer / Team Leader',
        begin: new Date('2019-06-01'),
        end: new Date('2019-12-31'),
        mainTechnologies: [
          Technology.JAVA, Technology.GROOVY, Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY, Technology.O_AUTH2,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST, Technology.ANGULAR, Technology.CSS, Technology.HTML, Technology.MONGO_DB,
          Technology.POSTGRES, Technology.REST, Technology.WIRE_MOCK, Technology.OPEN_FEIGN, Technology.JSON, Technology.YAML, Technology.SQL, Technology.GRADLE,
        ],
        otherTechnologies: [Technology.GIT, Technology.AWS],
        methodologies: [Methodology.AGILE, Methodology.KANBAN, Methodology.XP],
        mainResponsibilities: [
          'acted as Technical Leader while remaining actively involved in software development and solution design',
          'co-designed the overall system architecture, defining scalable backend services, APIs and frontend components',
          'led technical decision-making, evaluating technologies and selecting appropriate architectural approaches',
          'coordinated technical activities within the team and supported day-to-day project execution',
          'designed and implemented backend and frontend functionality using modern engineering practices',
          'designed and developed REST APIs and integration mechanisms for internal services',
          'created automated unit and integration tests to ensure software quality and reliability',
          'performed code reviews and established high engineering standards across the project',
          'promoted Clean Code principles, maintainable architecture and long-term technical sustainability',
          'managed task prioritization and collaborated with business stakeholders to define project scope and delivery timelines',
          'negotiated functional scope, priorities and deadlines directly with business representatives',
          'identified technical risks and participated in planning system evolution and future improvements',
        ],
        additionalResponsibilities: [
          'mentored team members and supported their professional growth through continuous technical guidance',
          'conducted internal technical workshops and knowledge-sharing sessions for developers',
          'designed and facilitated usability testing sessions with potential end users to validate business assumptions and improve user experience',
          'participated in recruitment processes by conducting technical interviews and evaluating candidates',
          'supported team composition planning and resource allocation to ensure effective project delivery',
          'contributed to creating a collaborative engineering culture focused on quality, ownership and continuous improvement',
        ],
        applicationArchitectures: [ApplicationArchitecture.HEXAGONAL_ARCHITECTURE, ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MICRO_MONOLITH,
        description: 'Development of an internal enterprise platform designed to manage the complete software testing lifecycle – from test case definition and execution, through result aggregation, reporting and analytics, to defect management. The primary objective of the project was to improve security, auditability and efficiency of the software testing process while providing a scalable and user-friendly solution.',
      },
      {
        companyName: 'Empik',
        position: 'Architect - Hands On',
        begin: new Date('2020-01-01'),
        end: new Date('2021-01-31'),
        mainTechnologies: [
          Technology.JAVA, Technology.GROOVY, Technology.KOTLIN,
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_SECURITY,
          Technology.O_AUTH2, Technology.JSON, Technology.YAML, Technology.SQL,
          Technology.SPRING_BOOT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.GRAPH_QL, Technology.OPEN_FEIGN, Technology.MAVEN, Technology.GRADLE,
        ],
        otherTechnologies: [
          Technology.CSS, Technology.HTML, Technology.GIT, Technology.ORACLE, Technology.NPM, Technology.CLOUDFLARE, Technology.K8S, Technology.LOMBOK,
          Technology.KIBANA, Technology.HAZELCAST, Technology.REACT, Technology.GRAFANA, Technology.PROMETHEUS, Technology.JENKINS, Technology.KAFKA,
        ],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          'defined business and technical metrics and monitoring strategy',
          'participated in technology selection, R&D and risk analysis',
          'designed distributed architecture including GraphQL BFF, CMS, SSR and monitoring services',
          'participated in implementation of key platform components',
          'created solutions measuring business and technical goals',
          'supported architectural decisions across teams',
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [ApplicationArchitecture.HEXAGONAL_ARCHITECTURE, ApplicationArchitecture.MVC],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: 'The project focused on optimizing product page performance and reducing offer presentation time through KPI-driven engineering, GraphQL, SSR and monitoring.'
          + '<br/> - <i>BFF</i>: facade using GraphQL that allows dynamically pulling data from several services'
          + '<br/> - <i>CMS</i>: a system that allows defining rules depending on various business conditions that influence the displayed content'
          + '<br/> - <i>SSR App</i>: a consumer of the two previous apps, a view pre-renderer for the client to reduce response time'
          + '<br/> - <i>Frontend app</i>: rewritten application presenting product data'
          + '<br/> - <i>Monitoring</i>: allowing for continuous verification of business goals',
      },
      {
        companyName: 'Apreel / Nationale Nederlanden',
        position: 'Senior Software Engineer',
        begin: new Date('2021-01-01'),
        end: new Date('2022-02-01'),
        mainTechnologies: [
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_CLOUD, Technology.SPRING_BOOT,
          Technology.JAVA, Technology.SOAP, Technology.REST, Technology.GROOVY, Technology.ACTUATOR, Technology.WIRE_MOCK, Technology.ARCHUNIT, Technology.JUNIT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.OPEN_FEIGN, Technology.LOMBOK, Technology.JSON, Technology.YAML, Technology.SQL, Technology.MAVEN, Technology.PITEST,
        ],
        otherTechnologies: [
          Technology.K8S, Technology.NPM, Technology.PROMETHEUS, Technology.GRAFANA, Technology.REACT, Technology.OKD,
          Technology.HELM, Technology.ARGO, Technology.GITLAB, Technology.JENKINS, Technology.GRAY_LOG,
          Technology.GIT, Technology.MS_SQL, Technology.KAFKA,
        ],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          'designed and developed backend and frontend components for the claims management platform',
          'participated in solution architecture and system design discussions, helping shape the overall technical direction of the platform',
          'designed APIs and integration patterns for communication between distributed services',
          'created automated tests covering unit, integration and end-to-end scenarios',
          'monitored and maintained production systems, ensuring reliability and operational stability',
          'performed code reviews and promoted engineering best practices, code quality and maintainability',
          'planned and supported technical debt reduction initiatives and long-term platform evolution',
          'developed Proof of Concepts (PoCs) and evaluated new technologies before adoption',
          'collaborated with business stakeholders to translate functional requirements into scalable technical solutions',
          'prepared technical documentation and solution designs',
        ],
        additionalResponsibilities: [
          'participated in a company-wide (international) program aimed at increasing the number of employed engineers and improving their working conditions in order to increase their retention',
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.LAYERED_ARCHITECTURE,
        ],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: 'Body leasing to the insurance (Nationale Nederlanden) company. The project focused on building a modern end-to-end claims management platform responsible for reporting, automating, processing and handling insurance claims. The system was designed to streamline business processes, improve operational efficiency and provide a scalable foundation for future digital transformation initiatives.',
      },
      {
        companyName: 'Nationale Nederlanden',
        position: 'Software Engineering Lead',
        begin: new Date('2022-02-01'),
        end: new Date('2023-06-01'),
        mainTechnologies: [
          Technology.SPRING, Technology.SPRING_DATA, Technology.SPRING_CLOUD, Technology.SPRING_BOOT,
          Technology.JAVA, Technology.ARCHUNIT, Technology.SOAP, Technology.REST, Technology.GROOVY, Technology.JUNIT, Technology.SPOCK, Technology.SPRING_TEST,
          Technology.ACTUATOR, Technology.CYPRESS, Technology.WIRE_MOCK, Technology.MAVEN,
        ],
        otherTechnologies: [
          Technology.NPM, Technology.K8S, Technology.PROMETHEUS, Technology.GRAFANA, Technology.REACT,
          Technology.HELM, Technology.ARGO, Technology.GITLAB, Technology.GRAY_LOG,
          Technology.GIT, Technology.MS_SQL, Technology.KAFKA, Technology.PITEST,
        ],
        methodologies: [Methodology.AGILE, Methodology.SCRUM, Methodology.SAFE],
        mainResponsibilities: [
          'provided technical leadership while remaining hands-on in software development',
          'supported multiple engineering teams in making architectural and integration decisions',
          'participated in solution architecture and system design discussions',
          'designed and developed backend and frontend components',
          'performed code reviews and promoted engineering best practices, code quality and maintainability',
          'monitored and maintained production systems, ensuring reliability and operational stability',
          'planned and supported technical debt reduction initiatives',
          'developed Proof of Concepts (PoCs) and evaluated new technologies before adoption',
          'collaborated with business stakeholders to translate functional requirements into scalable technical solutions',
          'prepared technical documentation and solution designs',
        ],
        additionalResponsibilities: [
          'mentored team members, supported their professional development and participated in onboarding activities',
          'contributed to engineering culture initiatives aimed at improving software development standards across NN Poland',
        ],
        applicationArchitectures: [
          ApplicationArchitecture.HEXAGONAL_ARCHITECTURE,
          ApplicationArchitecture.MVC,
          ApplicationArchitecture.LAYERED_ARCHITECTURE,
        ],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description: 'Direct transition to Nationale Nederlanden. Continued work on the claims reporting and management system as a Tech Leader.',
      },
      {
        companyName: 'J-laabs - Brown Brothers Harriman (BBH)',
        position: 'Technical Leader',
        begin: new Date('2023-09-15'),
        end: new Date('2024-02-01'),
        mainTechnologies: [
          Technology.JAVA, Technology.TYPE_SCRIPT, Technology.SPRING, Technology.SPRING_TEST, Technology.SPRING_BOOT, Technology.ANGULAR,
        ],
        otherTechnologies: [
          Technology.EUREKA, Technology.K8S, Technology.MAVEN, Technology.GRADLE, Technology.ORACLE,
          Technology.GRAFANA, Technology.SPLUNK, Technology.KAFKA, Technology.JENKINS, Technology.BITBUCKET,
        ],
        methodologies: [Methodology.SCRUM],
        mainResponsibilities: [
          'provided technical leadership while remaining actively involved in software development',
          'designed application architecture and coordinated modernization initiatives',
          'led refactoring of inefficient components and technical improvements',
          'optimized application, database and infrastructure performance',
          'coordinated team activities and defined technical requirements',
          'mentored engineers and supported professional development',
          'redesigned CI/CD pipelines and promoted engineering standards',
          'participated in architecture and integration discussions',
          'planned technical debt reduction and conducted technical interviews',
        ],
        additionalResponsibilities: [],
        applicationArchitectures: [ApplicationArchitecture.OTHER, ApplicationArchitecture.LAYERED_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MONOLITH,
        description:
          'Development and maintenance of an internal document processing platform enabling document transformation and analysis.',
      },
      {
        companyName: 'Fourthwall',
        position: 'Senior Software Engineer',
        begin: new Date('2024-02-01'),
        mainTechnologies: [
          Technology.KOTLIN, Technology.SPRING, Technology.SPRING_BOOT, Technology.JOOQ,
          Technology.POSTGRES, Technology.REACT, Technology.TYPE_SCRIPT,
          Technology.REST, Technology.CLAUDE_CODE,
        ],
        otherTechnologies: [ Technology.GCP, Technology.GITLAB, Technology.GIT, Technology.CHAT_GPT],
        methodologies: [Methodology.AGILE],
        mainResponsibilities: [
          'designed system and application architecture for scalable backend services and microservices',
          'developed backend and frontend solutions with focus on maintainability and performance',
          'designed and implemented APIs supporting business growth and platform evolution',
          'optimized applications, databases and infrastructure for scalability and reliability',
          'worked with Google Cloud Platform infrastructure and production environments',
          'created and maintained automated unit, integration and end-to-end tests',
          'managed technical debt and refactored legacy components',
          'participated in architectural and technical decision-making processes',
          'improved observability, monitoring and operational reliability',
          'designed and developed AI Agents and AI Workflows supporting engineering automation',
          'leveraged AI tools and agentic coding approaches to improve software delivery',
          'evaluated and integrated AI-driven solutions into existing development practices',
        ],
        additionalResponsibilities: [
          'supported engineering culture, onboarding and knowledge sharing',
          'participated in R&D and Proof of Concept initiatives',
        ],
        applicationArchitectures: [ApplicationArchitecture.HEXAGONAL_ARCHITECTURE],
        systemArchitecture: SystemArchitecture.MICROSERVICES,
        description:
          'Development of systems supporting creators and e-commerce functionalities within the Fourthwall platform. Contributing to scalable services, developer experience, platform performance and AI-driven engineering initiatives.',
      },
    ].sort((a, b) => this.compare(a, b));
  }

  private compare(a: JobInfo, b: JobInfo): number {
    if (!b.end || !a.end) {
      return a.begin < b.begin ? 1 : -1;
    }
    return a.end < b.end ? 1 : -1;
  }
}
