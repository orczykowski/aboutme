import {Component} from '@angular/core';
import {ApplicationArchitecture, Methodology, SystemArchitecture, Technology} from "../utils/technologies/definition.model";
import {ToolsSetDefinition} from "./tool-model";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  namedToolsSet: ToolsSetDefinition[] = [
    {
      'title': 'Programming languages', 'tools': [
        {experienceRate: 4.5, name: Technology.JAVA},
        {experienceRate: 4, name: Technology.GROOVY},
        {experienceRate: 3, name: Technology.KOTLIN},
        {experienceRate: 4, name: Technology.JAVA_SCRIPT},
        {experienceRate: 4, name: Technology.TYPE_SCRIPT},
        {experienceRate: 2, name: Technology.PHP},
        {experienceRate: 2.5, name: Technology.BASH},
        {experienceRate: 4, name: Technology.SQL},
      ]
    },
    {
      'title': 'Backend frameworks / libraries', 'tools': [
        {experienceRate: 5, name: Technology.SPRING},
        {experienceRate: 5, name: Technology.SPRING_BOOT},
        {experienceRate: 4, name: Technology.SPRING_SECURITY},
        {experienceRate: 4, name: Technology.SPRING_CLOUD},
        {experienceRate: 5, name: Technology.LOMBOK},
        {experienceRate: 5, name: Technology.ACTUATOR},
        {experienceRate: 4, name: Technology.RIBBON},
        {experienceRate: 5, name: Technology.EUREKA},
        {experienceRate: 5, name: "SLF4J"},
        {experienceRate: 5, name: "LOGBACK"},
        {experienceRate: 5, name: Technology.JPA},
        {experienceRate: 5, name: Technology.HIBERNATE},
        {experienceRate: 4, name: Technology.JERSEY},
        {experienceRate: 5, name: Technology.OPEN_FEIGN},
        {experienceRate: 4, name: Technology.SLEUTH},
        {experienceRate: 5, name: Technology.MICRO_METER},
      ]
    },
    {
      'title': 'Test tools', 'tools': [
        {experienceRate: 4.5, name: Technology.SPOCK},
        {experienceRate: 5, name: Technology.JUNIT},
        {experienceRate: 5, name: Technology.WIRE_MOCK},
        {experienceRate: 4, name: Technology.RESTITO},
        {experienceRate: 4.5, name: Technology.REST_ASSURED},
        {experienceRate: 4, name: Technology.CYPRESS},
      ]
    },
    {
      'title': 'Frontend frameworks / libraries', 'tools': [
        {experienceRate: 5, name: Technology.HTML},
        {experienceRate: 3.5, name: Technology.CSS},
        {experienceRate: 3.5, name: Technology.ANGULAR},
        {experienceRate: 2.3, name: Technology.REACT},
        {experienceRate: 3, name: Technology.JQUERY},
        {experienceRate: 4, name: Technology.FREEMARKER},
        {experienceRate: 4, name: Technology.THYMELEAF},
      ]
    },
    {
      'title': 'Databases', 'tools': [
        {experienceRate: 4, name: Technology.MONGO_DB},
        {experienceRate: 3, name: Technology.POSTGRES},
        {experienceRate: 4, name: Technology.MY_SQL},
        {experienceRate: 4, name: Technology.MS_SQL},
        {experienceRate: 3, name: Technology.HDFS},
        {experienceRate: 2, name: Technology.REDIS},
        {experienceRate: 4, name: Technology.MEMCACHE},
        {experienceRate: 3, name: Technology.ELASTIC_SEARCH},
        {experienceRate: 2, name: Technology.HAZELCAST},
      ]
    },
    {
      'title': 'Infrastructure / monitoring (as a user not devOps)', 'tools': [
        {experienceRate: 4.5, name: "CI/CD"},
        {experienceRate: 3, name: Technology.MESOS},
        {experienceRate: 4.5, name: Technology.JENKINS},
        {experienceRate: 5, name: Technology.GRAFANA},
        {experienceRate: 4.5, name: Technology.KIBANA},
        {experienceRate: 4, name: Technology.GRAY_LOG},
        {experienceRate: 4, name: Technology.OPEN_SHIFT},
        {experienceRate: 4, name: Technology.K8S},
        {experienceRate: 3, name: Technology.BAMBOO},
        {experienceRate: 4.5, name: Technology.KAFKA},
        {experienceRate: 2.5, name: Technology.RABBIT_MQ},
        {experienceRate: 5, name: "Blue green deployment"},
        {experienceRate: 5, name: "Monitoring"},
        {experienceRate: 5, name: Technology.PROMETHEUS},
        {experienceRate: 3.5, name: Technology.GITLAB},
        {experienceRate: 3.5, name: Technology.GITHUB},
        {experienceRate: 4.5, name: Technology.BITBUCKET},
      ]
    },
    {
      'title': 'Api', 'tools': [
        {experienceRate: 5, name: Technology.REST},
        {experienceRate: 3, name: Technology.SOAP},
        {experienceRate: 4.5, name: Technology.GRAPH_QL}]
    },
    {
      'title': 'Data types', 'tools': [
        {experienceRate: 5, name: Technology.JSON},
        {experienceRate: 5, name: Technology.YAML},
        {experienceRate: 5, name: "CSV"},
        {experienceRate: 5, name: Technology.XML}]
    },
    {
      'title': 'Programming techniques / tools', 'tools': [
        {experienceRate: 5, name: "TDD"},
        {experienceRate: 5, name: "DDD"},
        {experienceRate: 5, name: "PAIR PROGRAMMING"},
        {experienceRate: 5, name: "SOLID"},
        {experienceRate: 5, name: "KISS"},
        {experienceRate: 5, name: "CLEAN CODE"},
        {experienceRate: 5, name: "DRY"},
        {experienceRate: 5, name: "YAGNI"},
        {experienceRate: 4, name: "Event storming"},

      ]
    },
    {
      'title': 'System architecture', 'tools': [
        {experienceRate: 5, name: SystemArchitecture.MICROSERVICES},
        {experienceRate: 5, name: SystemArchitecture.MICRO_MONOLITH},
        {experienceRate: 5, name: SystemArchitecture.MONOLITH},

      ]
    },
    {
      'title': 'Application architecture', 'tools': [
        {experienceRate: 5, name: ApplicationArchitecture.LAYERED_ARCHITECTURE},
        {experienceRate: 5, name: ApplicationArchitecture.HEXAGONAL_ARCHITECTURE},
        {experienceRate: 5, name: ApplicationArchitecture.PIPE_AND_FILTERS},
        {experienceRate: 4.5, name: ApplicationArchitecture.MICRO_CARNAL},
        {experienceRate: 5, name: ApplicationArchitecture.CQRS},
      ]
    },
    {
      'title': 'Methodologies', 'tools': [
        {experienceRate: 5, name: Methodology.SCRUM},
        {experienceRate: 5, name: Methodology.AGILE},
        {experienceRate: 5, name: Methodology.KANBAN},
        {experienceRate: 5, name: Methodology.LEAN},
        {experienceRate: 4, name: Methodology.XP},
        {experienceRate: 4, name: Methodology.SAFE},
        {experienceRate: 3, name: Methodology.WATERFALL},
      ]
    },
    {
      'title': 'Other', 'tools': [
        {experienceRate: 2, name: "Big data"},
        {experienceRate: 5, name: "Testing UNIT"},
        {experienceRate: 5, name: "Testing INTEGRATION"},
        {experienceRate: 5, name: "Testing E2E"},
        {experienceRate: 5, name: "A/B testing"},
        {experienceRate: 5, name: "Architecture"},
        {experienceRate: 5, name: "Quality"},
        {experienceRate: 5, name: Technology.GIT},
        {experienceRate: 4, name: "WordPress"},
        {experienceRate: 4.5, name: "Sonar"},
        {experienceRate: 4, name: "Linux"},
        {experienceRate: 4, name: "MacOsx"},
        {experienceRate: 4.5, name: "InteliJ"},
        {experienceRate: 1, name: "AI"},
      ]
    }
  ];


}
