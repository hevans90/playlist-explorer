import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = [
    { icon: 'github', url: 'https://github.com/hevans90/playlist-explorer' },
    { icon: 'linkedin', url: 'https://uk.linkedin.com/in/evansharrison' }
  ];
}
