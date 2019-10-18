import { Playlist } from './playlist';

export interface FeaturedPlaylists {
  featuredPlaylists: {
    name: string;
    content: Playlist[];
  };
}
