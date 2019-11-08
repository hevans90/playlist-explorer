import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { PlaylistService } from './playlist.service';
import featuredPlaylistsFixture from './playlists.fixture.json';

describe('PlaylistService', () => {
  let service: PlaylistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(PlaylistService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map featured playlists correctly', async(() => {
    service.playlists.subscribe(playlists =>
      expect(playlists).toEqual(
        featuredPlaylistsFixture.featuredPlaylists.content
      )
    );

    httpMock.expectOne(service.apiUrl).flush(featuredPlaylistsFixture);
    httpMock.verify();
  }));
});
