import React, { useState, useEffect } from 'react';

const SearchImage = () => {
  const [searchImage, setSearchImage] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      handleSearchImage();
    }
  }, [query]);

  function handleSearchImage() {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU`,
      {
        cache: 'force-cache',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }

  return (
    <section>
      <div className="searchInput">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          required
          value={searchImage}
          onChange={(e) => setSearchImage(e.target.value)}
        />
        <button onClick={() => setQuery(searchImage)}>Search</button>
      </div>

      <div className="query-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='search-container'>
            {results.map((result) => (
              <div key={result.id} className='search-card'>
                <img src={result.urls.small} alt={result.alt_description} />
              </div>
            ))}
         </div>
        )}
      </div>
    </section>
  );
};

export default SearchImage;
