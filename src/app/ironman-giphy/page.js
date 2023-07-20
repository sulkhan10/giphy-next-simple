'use client'

import { useState, useEffect } from 'react';

export default function IronManGiphyPage() {
  const [ironManGifs, setIronManGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 9;

  const fetchIronManGifs = async (newOffset) => {
    const apiKey = '51Ya5aYw5SPa4sgDtyZfCaqKByFuTwyr';
    const searchTerm = 'Iron Man';
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      searchTerm
    )}&api_key=${apiKey}&limit=${limit}&offset=${newOffset}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setIronManGifs(data.data);
      setOffset(newOffset);
    } catch (error) {
      console.error('Error fetching Iron Man Giphy data:', error);
      setIronManGifs([]);
    }
  };

  const handleNextPage = () => {
    fetchIronManGifs(offset + limit);
  };

  const handlePreviousPage = () => {
    if (offset >= limit) {
      fetchIronManGifs(offset - limit);
    }
  };

  useEffect(() => {
    // Fetch Iron Man themed GIFs from GIPHY API
    fetchIronManGifs(offset);
  }, [offset]);

  return (
    <div className="container mx-auto py-4">
        <div className='flex justify-between items-center mb-4'>
      <h1 className="text-2xl font-bold ">Iron Man Giphy</h1>
      <div className="flex ">
        <button
          onClick={handlePreviousPage}
          disabled={offset === 0}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={ironManGifs.length < limit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
        </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Display up to 9 Gifs */}
        {ironManGifs.map((gif) => (
          <div className="flex justify-center items-center" key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} className="h-[25vh]" />
          </div>
        ))}
      </div>
      
    </div>
  );
}
