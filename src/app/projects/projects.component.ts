import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: []
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      id: 'sbff',
      name: 'spring-boot-feature-flags',
      description: 'A lightweight, production-ready Spring Boot starter library for feature flag management. Allows controlling features globally or per user, managing flags at runtime via REST API, and tracking usage with Micrometer metrics. Supports multiple storage backends: in-memory, JPA, Redis, MongoDB, or custom. Published to Maven Central.',
      technologies: ['Java 25', 'Maven', 'Spring Boot 4', 'Spock', 'Testcontainers', 'Groovy', 'REST Assured'],
      links: [{ label: 'GitHub', url: 'https://github.com/orczykowski/spring-boot-feature-flags' }]
    },
    {
      id: 'logback-obfuscator',
      name: 'logback-sensitive-data-obfuscator',
      description: 'Dedicated to Logback Classic. A lightweight library for masking PII and sensitive data in application logs. Works as a Logback layout extension, supporting JSON, key-value, and custom log formats. Offers full mask and shortcut mask strategies with built-in ReDoS protection. Published to Maven Central.',
      technologies: ['Java 25', 'Maven', 'JUnit 5', 'Pitest'],
      links: [{ label: 'GitHub', url: 'https://github.com/orczykowski/logback-sensitive-data-obfuscator-pattern-layout' }]
    },
    {
      id: 'logstash-obfuscator',
      name: 'logstash-logback-sensitive-data-obfuscator',
      description: 'Dedicated to logback-logstash. A lightweight library for masking PII and sensitive data in application logs during JSON serialization. Supports JSON, key-value, and custom log formats with full mask and shortcut mask strategies. Includes built-in ReDoS protection with configurable regex timeout. Published to Maven Central.',
      technologies: ['Java 25', 'Maven', 'JUnit 5', 'Pitest'],
      links: [{ label: 'GitHub', url: 'https://github.com/orczykowski/logstash-logback-sensitive-data-obfuscator' }]
    },
    {
      id: 'gustaw',
      name: 'gustaw',
      description: 'A website about cats. Contains a food requirement calculator, articles in Polish, and information about charity organizations.',
      technologies: ['Angular 21', 'TypeScript', 'CSS', 'HTML', 'FlexSearch', 'pdfmake', 'npm', 'GitHub Pages'],
      links: [
        { label: 'GitHub', url: 'https://github.com/orczykowski/gustaw' },
        { label: 'website', url: 'https://orczykowski.github.io/gustaw/' }
      ]
    },
    {
      id: 'multi-stats',
      name: 'multi-project-contribution-stats-calculator',
      description: 'A command-line tool that calculates contribution statistics across multiple Git repositories using JGit and generates comprehensive reports. Includes per-contributor breakdowns of commits, lines added/removed, files changed, production vs. test code, and project distribution. Supported formats: HTML, CSV, PDF.',
      technologies: ['Java 25', 'Gradle', 'Spring Boot 4', 'Groovy', 'Spock', 'JGit', 'FreeMarker', 'iTextPDF'],
      links: [{ label: 'GitHub', url: 'https://github.com/orczykowski/multi-project-contribution-stats-calculator' }]
    }
  ];
}
