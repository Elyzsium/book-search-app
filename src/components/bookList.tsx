import { BookListProps } from "@/types";
import BookCard from "./bookCard";

const BookList = ({ books, onBookClick }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  );
};

export default BookList;
