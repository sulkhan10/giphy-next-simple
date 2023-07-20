'use client'

import { useState } from 'react';

export default function SearchGiphyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  async function fetchGiphyData(searchQuery) {
    const apiKey = '51Ya5aYw5SPa4sgDtyZfCaqKByFuTwyr';
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      searchQuery
    )}&api_key=${apiKey}&limit=9`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data.data; // Return the array of Gifs from the API response
    } catch (error) {
      console.error('Error fetching Giphy data:', error);
      return []; // Return an empty array in case of an error
    }
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    // Call a function to fetch Giphy data based on the search query
    // (you can do this using axios, fetch, or any other HTTP client library)
    const giphyData = await fetchGiphyData(searchQuery);
    setGifs(giphyData);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-2">Search Your Giphy</h1>
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-1 border text-gray-900 font-semibold border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-1 text-gray-50 font-semibold bg-blue-500  rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {/* Display up to 9 Gifs */}
        {gifs.map((gif) => (
            <div className='flex justify-center items-center '>
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} className="h-[25vh]" />
            </div>
        ))}
      </div>
    </div>
  );
}
