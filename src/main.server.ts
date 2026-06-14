import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideServerRendering} from '@angular/platform-server';
import {importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {routes} from './app/app-routing.module';

const bootstrap = (context?: {platformRef?: unknown}) =>
  bootstrapApplication(AppComponent, {
    providers: [
      provideZoneChangeDetection(),
      provideServerRendering(),
      provideRouter(routes),
      importProvidersFrom(FormsModule)
    ]
  }, context as never);

export default bootstrap;
