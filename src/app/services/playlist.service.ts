import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FeaturedPlaylists } from '../models/featured-playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  apiUrl =
    'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists';

  playlists = this.http
    .get<FeaturedPlaylists>(this.apiUrl)
    .pipe(map(data => data.featuredPlaylists.content));
}
