import {Component, linkedSignal, signal} from '@angular/core';
import {ApplicationArchitecture, Methodology, SystemArchitecture, Technology} from '../utils/technologies/definition.model';
import {ToolsSetDefinition} from './tool-model';
import {GroupedToolsComponent} from './grouped-tools/grouped-tools.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  standalone: true,
  imports: [GroupedToolsComponent, FormsModule]
})
export class ToolsComponent {

  searchQuery = signal('');

  private allToolsSets: ToolsSetDefinition[] = [
    {
      title: 'Programming languages',
      tools: [
        {experienceRate: 4.7, name: Technology.JAVA},
        {experienceRate: 4, name: Technology.GROOVY},
        {experienceRate: 4.0, name: Technology.KOTLIN},
        {experienceRate: 4, name: Technology.JAVA_SCRIPT},
        {experienceRate: 3.8, name: Technology.TYPE_SCRIPT},
        {experienceRate: 2, name: Technology.PHP},
        {experienceRate: 2.5, name: Technology.BASH},
        {experienceRate: 4, name: Technology.SQL},
      ],
    },
    {
      title: 'AI',
      tools: [
        {experienceRate: 4.2, name: Technology.CHAT_GPT},
        {experienceRate: 3, name: Technology.GITHUB_COPILOT},
        {experienceRate: 4.5, name: Technology.CLAUDE_CODE},
        {experienceRate: 4.2, name: Technology.GEMINI},
        {experienceRate: 3.7, name: Technology.BUILDING_AGENTS},
        {experienceRate: 3.7, name: Technology.CREATING_SKILLS},
        {experienceRate: 3.7, name: Technology.CREATING_WORKFLOWS},
        {experienceRate: 4.2, name: Technology.MCP},
      ],
    },
    {
      title: 'Backend frameworks / libraries',
      tools: [
        {experienceRate: 5, name: Technology.SPRING},
        {experienceRate: 5, name: Technology.SPRING_BOOT},
        {experienceRate: 4, name: Technology.SPRING_SECURITY},
        {experienceRate: 4, name: Technology.SPRING_CLOUD},
        {experienceRate: 5, name: Technology.LOMBOK},
        {experienceRate: 5, name: Technology.ACTUATOR},
        {experienceRate: 4, name: Technology.RIBBON},
        {experienceRate: 5, name: Technology.EUREKA},
        {experienceRate: 5, name: Technology.SLF4J},
        {experienceRate: 5, name: Technology.LOGBACK},
        {experienceRate: 5, name: Technology.JPA},
        {experienceRate: 5, name: Technology.HIBERNATE},
        {experienceRate: 4, name: Technology.JERSEY},
        {experienceRate: 5, name: Technology.OPEN_FEIGN},
        {experienceRate: 4, name: Technology.SLEUTH},
        {experienceRate: 5, name: Technology.MICRO_METER},
        {experienceRate: 2.5, name: Technology.CAMEL},
        {experienceRate: 3.5, name: Technology.MULTI_THREADING},
      ],
    },
    {
      title: 'Test tools',
      tools: [
        {experienceRate: 4.8, name: Technology.SPOCK},
        {experienceRate: 4.8, name: Technology.JUNIT},
        {experienceRate: 5, name: Technology.WIRE_MOCK},
        {experienceRate: 4, name: Technology.RESTITO},
        {experienceRate: 4.5, name: Technology.REST_ASSURED},
        {experienceRate: 4, name: Technology.CYPRESS},
      ],
    },
    {
      title: 'Frontend frameworks / libraries',
      tools: [
        {experienceRate: 5, name: Technology.HTML},
        {experienceRate: 3.5, name: Technology.CSS},
        {experienceRate: 3.5, name: Technology.ANGULAR},
        {experienceRate: 2.3, name: Technology.REACT},
        {experienceRate: 3, name: Technology.JQUERY},
        {experienceRate: 4, name: Technology.FREEMARKER},
        {experienceRate: 4, name: Technology.THYMELEAF},
      ],
    },
    {
      title: 'Databases',
      tools: [
        {experienceRate: 4, name: Technology.MONGO_DB},
        {experienceRate: 3, name: Technology.POSTGRES},
        {experienceRate: 4, name: Technology.MY_SQL},
        {experienceRate: 4, name: Technology.MS_SQL},
        {experienceRate: 4, name: Technology.ORACLE},
        {experienceRate: 3, name: Technology.HDFS},
        {experienceRate: 2, name: Technology.REDIS},
        {experienceRate: 4, name: Technology.MEMCACHE},
        {experienceRate: 3, name: Technology.ELASTIC_SEARCH},
        {experienceRate: 2, name: Technology.HAZELCAST},
      ],
    },
    {
      title: 'Infrastructure / monitoring (as a user not devOps)',
      tools: [
        {experienceRate: 4.5, name: Technology.CI_CD},
        {experienceRate: 4.5, name: Technology.JENKINS},
        {experienceRate: 5, name: Technology.GRAFANA},
        {experienceRate: 4.5, name: Technology.KIBANA},
        {experienceRate: 4, name: Technology.GRAY_LOG},
        {experienceRate: 4, name: Technology.OPEN_SHIFT},
        {experienceRate: 2.8, name: Technology.K8S},
        {experienceRate: 3, name: Technology.BAMBOO},
        {experienceRate: 4.5, name: Technology.KAFKA},
        {experienceRate: 4.0, name: Technology.PUBSUB},
        {experienceRate: 2.5, name: Technology.RABBIT_MQ},
        {experienceRate: 5, name: Technology.BLUE_GREEN_DEPLOYMENT},
        {experienceRate: 5, name: Technology.MONITORING},
        {experienceRate: 5, name: Technology.PROMETHEUS},
        {experienceRate: 3.5, name: Technology.GITLAB},
        {experienceRate: 3.5, name: Technology.GITHUB},
        {experienceRate: 4.5, name: Technology.BITBUCKET},
        {experienceRate: 3, name: Technology.MESOS},
        {experienceRate: 3.5, name: Technology.GCP},
      ],
    },
    {
      title: 'Api',
      tools: [
        {experienceRate: 5, name: Technology.REST},
        {experienceRate: 3, name: Technology.SOAP},
        {experienceRate: 4.5, name: Technology.GRAPH_QL},
      ],
    },
    {
      title: 'Data types',
      tools: [
        {experienceRate: 5, name: Technology.JSON},
        {experienceRate: 5, name: Technology.YAML},
        {experienceRate: 5, name: Technology.CSV},
        {experienceRate: 5, name: Technology.XML},
      ],
    },
    {
      title: 'Programming techniques / tools',
      tools: [
        {experienceRate: 5, name: Technology.TDD},
        {experienceRate: 5, name: Technology.DDD},
        {experienceRate: 5, name: Technology.PAIR_PROGRAMMING},
        {experienceRate: 5, name: Technology.SOLID},
        {experienceRate: 5, name: Technology.KISS},
        {experienceRate: 5, name: Technology.CLEAN_CODE},
        {experienceRate: 5, name: Technology.DRY},
        {experienceRate: 5, name: Technology.YAGNI},
        {experienceRate: 4, name: Technology.EVENT_STORMING},
      ],
    },
    {
      title: 'System architecture',
      tools: [
        {experienceRate: 5, name: SystemArchitecture.MICROSERVICES},
        {experienceRate: 5, name: SystemArchitecture.MICRO_MONOLITH},
        {experienceRate: 5, name: SystemArchitecture.MONOLITH},
      ],
    },
    {
      title: 'Application architecture',
      tools: [
        {experienceRate: 5, name: ApplicationArchitecture.LAYERED_ARCHITECTURE},
        {experienceRate: 5, name: ApplicationArchitecture.HEXAGONAL_ARCHITECTURE},
        {experienceRate: 5, name: ApplicationArchitecture.PIPE_AND_FILTERS},
        {experienceRate: 4.5, name: ApplicationArchitecture.MICRO_CARNAL},
        {experienceRate: 5, name: ApplicationArchitecture.CQRS},
      ],
    },
    {
      title: 'Methodologies',
      tools: [
        {experienceRate: 5, name: Methodology.SCRUM},
        {experienceRate: 5, name: Methodology.AGILE},
        {experienceRate: 5, name: Methodology.KANBAN},
        {experienceRate: 5, name: Methodology.LEAN},
        {experienceRate: 4, name: Methodology.XP},
        {experienceRate: 4, name: Methodology.SAFE},
        {experienceRate: 3, name: Methodology.WATERFALL},
      ],
    },
    {
      title: 'Other',
      tools: [
        {experienceRate: 2, name: Technology.BIG_DATA},
        {experienceRate: 5, name: Technology.TESTING_UNIT},
        {experienceRate: 5, name: Technology.TESTING_INTEGRATION},
        {experienceRate: 5, name: Technology.TESTING_E2E},
        {experienceRate: 5, name: Technology.AB_TESTING},
        {experienceRate: 5, name: Technology.ARCHITECTURE},
        {experienceRate: 5, name: Technology.QUALITY},
        {experienceRate: 5, name: Technology.GIT},
        {experienceRate: 4, name: Technology.WORDPRESS},
        {experienceRate: 4.5, name: Technology.SONAR},
        {experienceRate: 4, name: Technology.LINUX},
        {experienceRate: 4, name: Technology.MAC_OSX},
        {experienceRate: 4.5, name: Technology.INTELLIJ},
      ],
    },
  ];

  filteredToolsSets = linkedSignal<string, ToolsSetDefinition[]>({
    source: this.searchQuery,
    computation: (query) => {
      if (!query.trim()) {
        return this.allToolsSets;
      }
      const lowerQuery = query.toLowerCase().trim();
      return this.allToolsSets
        .map(set => ({
          title: set.title,
          tools: set.title.toLowerCase().includes(lowerQuery)
            ? set.tools
            : set.tools.filter(tool => tool.name.toLowerCase().includes(lowerQuery)),
        }))
        .filter(set => set.tools.length > 0);
    }
  });

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
