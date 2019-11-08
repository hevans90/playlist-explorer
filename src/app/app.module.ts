import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const materialModules = [MatIconModule];

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    ...materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: '**',
        redirectTo: 'welcome' // unresolved routes fall back to the welcome page
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
