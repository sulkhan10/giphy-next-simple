'use client'

import { useState, useEffect } from 'react';

export default function IronManGiphyPage() {
  const [ironManGifs, setIronManGifs] = useState([]);
const [offset, setOffset] = useState(0);


useEffect(() => {
    // Fetch Iron Man themed GIFs from GIPHY API
    fetchIronManGifs();
  }, []);

  const fetchIronManGifs = async () => {
    const apiKey = '51Ya5aYw5SPa4sgDtyZfCaqKByFuTwyr';
    const searchTerm = 'Iron Man';
    const limit = 9;
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      searchTerm
    )}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setIronManGifs(data.data);
    } catch (error) {
      console.error('Error fetching Iron Man Giphy data:', error);
      setIronManGifs([]);
    }
  };
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Iron Man Giphy</h1>
     
      <div className="grid grid-cols-3 gap-4">
        {/* Display up to 9 Gifs */}
        {ironManGifs.map((gif) => (
            <div className='flex justify-center items-center '>
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} className="h-[25vh]" />
            </div>
        ))}
      </div>
    </div>
  );
}
