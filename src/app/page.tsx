"use client";

import { useState, useEffect } from 'react';
import GifGrid from './components/GifGrid';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import { Gif, TrendingResponse } from './types';

const baseURL = "https://api.klipy.com";
const apiKey = "request from interviewer"

export default function App() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const perPage = 20;

  // Fetch trending GIFs on component mount and when page changes
  useEffect(() => {
    fetchTrendingGifs(currentPage);
  }, [currentPage]);

  const fetchTrendingGifs = async (page: number = 1) => {
    // Fetch trending GIFs
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
    
        {/* Trending GIFs */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Trending GIFs</h1>
          <p className="text-gray-600">Discover the most popular GIFs right now</p>
        </div>

        {loading && <LoadingSpinner />}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}
        

        {!loading && gifs.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No trending GIFs available at the moment</p>
          </div>
        )}

        {gifs.length > 0 && (
          <>
            <Pagination
              currentPage={currentPage}
              hasNextPage={hasNextPage}
              onPageChange={handlePageChange}
            />
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