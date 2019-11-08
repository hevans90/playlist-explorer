import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const materialModules = [MatIconModule, MatToolbarModule];
const components = [AppComponent, FooterComponent, WelcomeComponent];

@NgModule({
  declarations: [...components],
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
