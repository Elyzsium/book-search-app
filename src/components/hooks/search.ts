import { useState } from 'react';
import { Book } from '@/types';
import { searchBooks } from '@/api/api';

export const useBookSearch = (initialQuery: string = '', initialStartIndex: number = 0) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentQuery, setCurrentQuery] = useState(initialQuery);

  const handleSearch = async (query: string, startIndex: number = initialStartIndex) => {
    setLoading(true);
    setError(null);
    setCurrentQuery(query);
    try {
      const { books, totalItems } = await searchBooks(query, startIndex);
      setBooks(books);
      setTotalItems(totalItems);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    books,
    loading,
    error,
    totalItems,
    currentQuery,
    handleSearch,
  };
};
