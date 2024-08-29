"use client"
import { useState, useEffect } from 'react';

import { Book } from '../types';
import SearchBar from '@/components/searchBar';
import BookList from '@/components/bookList';
import BookModal from '@/components/bookModal';
import { useBookSearch } from '@/components/hooks/search';
import { usePagination } from '@/components/hooks/usePagination';
import Pagination from '@/components/pagination';
import WidthWrapper from '@/components/element /WidthWrapper';

const ITEMS_PER_PAGE = 10;
const DEFAULT_SEARCH_QUERY = 'popular books'; 
const HomePage = () => {
  const { books, loading, error, totalItems, currentQuery, handleSearch } = useBookSearch();
  const { currentPage, totalPages, handleNextPage, handlePreviousPage } = usePagination(ITEMS_PER_PAGE, totalItems);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    // Fetch books when the component mounts
    handleSearch(DEFAULT_SEARCH_QUERY);
  }, []);

  const handlePageChange = async (newPage: number) => {
    if (newPage !== currentPage) {
      await handleSearch(currentQuery, (newPage - 1) * ITEMS_PER_PAGE);
      if (newPage > currentPage) {
        handleNextPage();
      } else {
        handlePreviousPage();
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
     <WidthWrapper>
      <main className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Book Search</h1>
        <SearchBar onSearch={(query) => handleSearch(query)} />
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <BookList books={books} onBookClick={setSelectedBook} />
        {books.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      </main>
      </WidthWrapper>
    </div>
  );
};

export default HomePage;







// "use client";

// import { useEffect, useState } from 'react';
// import Head from 'next/head';
// import { Book } from '../types';
// import SearchBar from '@/components/searchBar';
// import BookList from '@/components/bookList';
// import BookModal from '@/components/bookModal';
// import Pagination from '@/components/pagination';
// import { useBookSearch } from '@/components/hooks/search';
// import { usePagination } from '@/components/hooks/usePagination';

// const ITEMS_PER_PAGE = 10;

// const HomePage = () => {
//   const { books, loading, error, totalItems, currentQuery, handleSearch } = useBookSearch();
//   const { currentPage, totalPages, handleNextPage, handlePreviousPage } = usePagination(ITEMS_PER_PAGE, totalItems);
//   const [selectedBook, setSelectedBook] = useState<Book | null>(null);

//   // Fetch books on initial load
//   useEffect(() => {
//     // You can replace the empty string with a default query if needed
//     handleSearch('');
//   }, [handleSearch]);

//   const handlePageChange = async (newPage: number) => {
//     if (newPage !== currentPage) {
//       await handleSearch(currentQuery, (newPage - 1) * ITEMS_PER_PAGE);
//       if (newPage > currentPage) {
//         handleNextPage();
//       } else {
//         handlePreviousPage();
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <Head>
//         <title>Book Search App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="py-8">
//         <h1 className="text-4xl font-bold text-center mb-8">Book Search</h1>
//         <SearchBar onSearch={(query) => handleSearch(query)} />
//         {loading && <p className="text-center">Loading...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
//         <BookList books={books} onBookClick={setSelectedBook} />
//         {books.length > 0 && (
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />
//         )}
//         <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
//       </main>
//     </div>
//   );
// };

// export default HomePage;




// // "use client"

// // import { useState } from 'react';
// // import Head from 'next/head';
// // import { Book } from '../types';
// // import SearchBar from '@/components/searchBar';
// // import BookList from '@/components/bookList';
// // import BookModal from '@/components/bookModal';
// // import Pagination from '@/components/pagination';
// // import { useBookSearch } from '@/components/hooks/search';
// // import { usePagination } from '@/components/hooks/usePagination';

// // const ITEMS_PER_PAGE = 10;

// // const HomePage = () => {
// //   const { books, loading, error, totalItems, currentQuery, handleSearch } = useBookSearch();
// //   const { currentPage, totalPages, handleNextPage, handlePreviousPage } = usePagination(ITEMS_PER_PAGE, totalItems);
// //   const [selectedBook, setSelectedBook] = useState<Book | null>(null);

// //   const handlePageChange = async (newPage: number) => {
// //     if (newPage !== currentPage) {
// //       await handleSearch(currentQuery, (newPage - 1) * ITEMS_PER_PAGE);
// //       if (newPage > currentPage) {
// //         handleNextPage();
// //       } else {
// //         handlePreviousPage();
// //       }
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto px-4">
// //       <Head>
// //         <title>Book Search App</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="py-8">
// //         <h1 className="text-4xl font-bold text-center mb-8">Book Search</h1>
// //         <SearchBar onSearch={(query) => handleSearch(query)} />
// //         {loading && <p className="text-center">Loading...</p>}
// //         {error && <p className="text-center text-red-500">{error}</p>}
// //         <BookList books={books} onBookClick={setSelectedBook} />
// //         {books.length > 0 && (
// //           <Pagination
// //             currentPage={currentPage}
// //             totalPages={totalPages}
// //             onPageChange={handlePageChange}
// //           />
// //         )}
// //         <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
// //       </main>
// //     </div>
// //   );
// // };

// // export default HomePage;