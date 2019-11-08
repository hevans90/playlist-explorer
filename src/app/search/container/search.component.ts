import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  constructor(private playlistService: PlaylistService) {}

  playlists: Playlist[];
  displayedPlaylists: Playlist[];
  filter: Observable<string>;

  ngAfterViewInit(): void {
    this.playlistService.playlists.subscribe(playlists => {
      this.playlists = playlists;
      this.displayedPlaylists = playlists;
    });
  }

  filterResults = (term: string) =>
    (this.displayedPlaylists = this.playlists.filter(playlist =>
      playlist.name.toLowerCase().includes(term.toLowerCase())
    ));
}
