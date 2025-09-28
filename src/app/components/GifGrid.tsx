"use client";

interface GifFile {
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

interface Gif {
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

interface GifGridProps {
  gifs: Gif[];
}

export default function GifGrid({ gifs }: GifGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4 mb-8">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="shadow-md overflow-hidden"
        >
          <div className="aspect-square relative overflow-hidden">
            <img
              src={gif.file.md.gif.url}
              alt={gif.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <h3>
              {gif.title || 'Untitled GIF'}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}