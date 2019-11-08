import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  socialLinks = [
    { icon: 'github', url: 'https://github.com/hevans90/playlist-explorer' },
    { icon: 'linkedin', url: 'https://uk.linkedin.com/in/evansharrison' }
  ];
}
