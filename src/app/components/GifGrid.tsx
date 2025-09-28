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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
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
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {gif.title || 'Untitled GIF'}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {gif.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}