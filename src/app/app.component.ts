import { Component } from '@angular/core';
import { PlaylistService } from './services/playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playlist-explorer';

  constructor(private playlistService: PlaylistService) {}

  playlists = this.playlistService.playlists;
}
