import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExperienceComponent} from './experience/experience.component';
import {ToolsComponent} from './tools/tools.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProjectsComponent} from './projects/projects.component';
import {EducationComponent} from './education/education.component';
import {JobComponent} from './experience/job/job.component';
import {DateRangeComponent} from './utils/date-range/date-range.component';
import {TechnologiesComponent} from './utils/technologies/technologies.component';
import { MenuComponent } from './utils/menu/menu.component';
import { GroupedToolsComponent } from './tools/grouped-tools/grouped-tools.component';
import { RatingComponent } from './utils/rating/rating.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ToolsComponent,
    WelcomeComponent,
    NotFoundComponent,
    ProjectsComponent,
    EducationComponent,
    JobComponent,
    DateRangeComponent,
    TechnologiesComponent,
    MenuComponent,
    GroupedToolsComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
