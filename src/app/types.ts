export interface GifFile {
  gif: {
    url: string;
    width: number;
    height: number;
    size: number;
  };
  webp: {
    url: string;
    width: number;
    height: number;
    size: number;
  };
}

export interface Gif {
  id: number;
  slug: string;
  title: string;
  blur_preview: string;
  file: {
    hd: GifFile;
    md: GifFile;
    sm: GifFile;
    xs: GifFile;
  };
  tags: string[];
  type: string;
}

export interface TrendingResponse {
  result: boolean;
  data: {
    data: Gif[];
    current_page: number;
    per_page: number;
    has_next: boolean;
  };
}