import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from "./tools/tools.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ExperienceComponent} from "./experience/experience.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Grzegorz Orczykowski – Senior Software Engineer | CV',
    data: {
      description: 'Grzegorz Orczykowski — Senior Fullstack Developer, Architect and Tech Lead with 15+ years of experience in Java, Kotlin, Spring, and distributed systems.',
      canonical: 'https://orczykowski.github.io/aboutme/'
    }
  },
  {
    path: 'tools',
    component: ToolsComponent,
    title: 'Tools & Skills – Grzegorz Orczykowski',
    data: {
      description: 'Technical skills and tools of Grzegorz Orczykowski — Java, Kotlin, Spring Boot, Angular, microservices, DDD, and modern software engineering practices.',
      canonical: 'https://orczykowski.github.io/aboutme/tools'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Work Experience – Grzegorz Orczykowski',
    data: {
      description: 'Work experience of Grzegorz Orczykowski — 15+ years as Senior Software Engineer and Architect at Allegro, Empik, Nationale Nederlanden, Fourthwall and more.',
      canonical: 'https://orczykowski.github.io/aboutme/experience'
    }
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education – Grzegorz Orczykowski',
    data: {
      description: 'Education and certifications of Grzegorz Orczykowski — Computer Science degree from AMU Poznań, Professional Scrum Master PSM1, Google AI Essentials.',
      canonical: 'https://orczykowski.github.io/aboutme/education'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Open-Source Projects – Grzegorz Orczykowski',
    data: {
      description: 'Open-source projects by Grzegorz Orczykowski — Spring Boot feature flags library, Logback sensitive data obfuscator, and more published to Maven Central.',
      canonical: 'https://orczykowski.github.io/aboutme/projects'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found – Grzegorz Orczykowski',
    data: {
      description: 'Page not found — Grzegorz Orczykowski CV and portfolio site.',
      canonical: 'https://orczykowski.github.io/aboutme/'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
