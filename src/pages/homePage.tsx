"use client"
import React, { useState, useEffect } from 'react';
import { Book } from '@/types';
import withPagination from '@/components/withPagination';
import SearchBar from '@/components/searchBar';
import WidthWrapper from '@/components/element /WidthWrapper';
import BookModal from '@/components/bookModal';
import BookList from '@/components/bookList';
import { useBookSearch } from '@/components/hooks/search';

const ITEMS_PER_PAGE = 10;
const DEFAULT_SEARCH_QUERY = 'popular books';
const PAGE_RANGE = 3;

const HomePage: React.FC = () => {
  const { books, loading, error, totalItems, currentQuery, handleSearch } = useBookSearch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    handleSearch(DEFAULT_SEARCH_QUERY);
  }, []);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  const PaginatedBookList = withPagination(
    BookList,
    totalItems,
    ITEMS_PER_PAGE,
    async (page: number) => {
      await handleSearch(currentQuery, (page - 1) * ITEMS_PER_PAGE);
    },
    PAGE_RANGE
  );

  return (
    <WidthWrapper>
      <SearchBar onSearch={(query) => handleSearch(query)} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {books.length > 0 && (
        <>
          <PaginatedBookList books={books} onBookClick={handleBookSelect} onBookSelect={function (book: Book): void {
            throw new Error('Function not implemented.');
          } } />
          {selectedBook && (
            <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
          )}
        </>
      )}
    </WidthWrapper>
  );
};

export default HomePage;