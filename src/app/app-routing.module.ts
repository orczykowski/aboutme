import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from "./tools/tools.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ExperienceComponent} from "./experience/experience.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  {path: '', component: WelcomeComponent, title: 'Grzegorz Orczykowski – Senior Software Engineer | CV'},
  {path: 'tools', component: ToolsComponent, title: 'Tools & Skills – Grzegorz Orczykowski'},
  {path: 'experience', component: ExperienceComponent, title: 'Work Experience – Grzegorz Orczykowski'},
  {path: 'education', component: EducationComponent, title: 'Education – Grzegorz Orczykowski'},
  {path: 'projects', component: ProjectsComponent, title: 'Projects – Grzegorz Orczykowski'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found – Grzegorz Orczykowski'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
