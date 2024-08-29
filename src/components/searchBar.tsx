"use client"

import { SearchBarProps } from '@/types';
import { useState } from 'react';
import { Button } from './element /Button';

const SearchBar = ({ onSearch }:SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-8">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
         className="mt-auto py-2 px-6 bg-[#01427a] hover:bg-[#016799] text-white  font-medium rounded-lg shadow"
          type="submit"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;