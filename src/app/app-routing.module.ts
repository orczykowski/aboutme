import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from "./tools/tools.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ExperienceComponent} from "./experience/experience.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
