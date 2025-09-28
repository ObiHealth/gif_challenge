"use client";

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import GifGrid from './components/GifGrid';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';

const baseURL = "https://api.klipy.com";
const apiKey = "i8t64SqhFtuK5u3wkz1uzS4BpduuPAHQMlVukKrnuUs6cma3VD8WA5k6Mr0qA3IN";

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

interface SearchResponse {
  result: boolean;
  data: {
    data: Gif[];
    current_page: number;
    per_page: number;
    has_next: boolean;
  };
}

export default function App() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const perPage = 20;

  const searchGifs = async (query: string, page: number = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const offset = (page - 1) * perPage;
      const url = `${baseURL}/api/v1/${apiKey}/gifs/search?page=${page}&per_page=${perPage}&q=${encodeURIComponent(query)}&customer_id=default&locale=en&content_filter=off`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SearchResponse = await response.json();
      setGifs(data.data.data || []);
      setHasNextPage(data.data.has_next);
      setCurrentPage(data.data.current_page);
      setHasSearched(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching');
      setGifs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    searchGifs(query, 1);
  };

  const handlePageChange = (page: number) => {
    if (searchQuery) {
      searchGifs(searchQuery, page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GIF Search</h1>
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

        {hasSearched && !loading && gifs.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No GIFs found for "{searchQuery}"</p>
            <p className="text-gray-400 mt-2">Try a different search term</p>
          </div>
        )}

        {gifs.length > 0 && (
          <>
            <GifGrid gifs={gifs} />
            <Pagination
              currentPage={currentPage}
              hasNextPage={hasNextPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}