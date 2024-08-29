// export type Book = {
//     imageLinks: any;
//     id: string;
//     title: string;
//     authors: string;
//     publishedDate: string;
//     description: string;
//   };

export type Book = {
    id: string;
    title: string;
    authors?: string[]; 
    publishedDate?: string;
    description?: string;
    categories?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    language: string;
    infoLink?: string;
    previewLink?: string;

  };

export interface SearchBarProps {
    onSearch: (query: string) => void;
  }

export interface BookCardProps {
    book: Book;
    onClick: () => void;
  }

export interface BookListProps {
    books: Book[];
    onBookClick: (book: Book) => void;
  }
  
export interface BookModalProps {
    book: Book | null;
    onClose: () => void;
  }
  
export interface ErrorProps {
    message: string;
  }

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}