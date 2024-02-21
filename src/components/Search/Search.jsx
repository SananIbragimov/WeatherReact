import React, { useState } from 'react';
import './Search.css'

export function Search({ onSearch }) {
    const [search, setSearch] = useState('');
  
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      onSearch(search);
    };

    return (
        <div className="search">
          <i className="bi bi-geo-alt-fill"></i>
          <form onSubmit={handleSearchSubmit}>
            <input type="search" value={search} onChange={handleSearchChange} />
            <i className="bi bi-search search-btn" onClick={handleSearchSubmit}></i>
          </form>
        </div>
      );
}
