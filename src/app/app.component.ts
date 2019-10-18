import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { Playlist } from './models/playlist';
import { PlaylistService } from './services/playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private playlistService: PlaylistService) {}

  @ViewChild('input', { static: true }) inputElRef: ElementRef;

  playlists: Playlist[];
  displayedPlaylists: Playlist[];
  filter: Observable<string>;

  ngAfterViewInit(): void {
    this.playlistService.playlists.subscribe(playlists => {
      this.playlists = playlists;
      this.displayedPlaylists = playlists;
    });

    fromEvent(this.inputElRef.nativeElement, 'keyup')
      .pipe(
        debounceTime(100),
        map(
          (keyboardEvent: Event) =>
            (keyboardEvent.target as HTMLInputElement).value
        ),
        tap(
          filterString =>
            (this.displayedPlaylists = this.playlists.filter(playlist =>
              playlist.name.toLowerCase().includes(filterString.toLowerCase())
            ))
        )
      )
      .subscribe();
  }
}
