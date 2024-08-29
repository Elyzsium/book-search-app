import Image from "next/image";
import { BookCardProps } from "../types";
import Card from "./element /card";
import { Button } from "./element /Button";

const BookCard = ({ book, onClick }: BookCardProps) => {
  return (
    <Card
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
   
    >
      <div className="relative w-full h-64">
        <Image
          src={book.imageLinks?.thumbnail || "/placeholder-image.jpg"}
          alt={book.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-900 text-base">
          Authors:{" "}
          {book.authors && Array.isArray(book.authors)
            ? book.authors.join(", ")
            : "Unknown Author"}
        </p>
        <span className="text-gray-900 text-md">
          Published: {book.publishedDate || "Unknown"}
        </span>
      </div>
    <div className=" flex justify-center items-center">
    <Button 
      className="mt-auto py-2 px-6 bg-[#01427a] hover:bg-[#016799] text-white  font-medium rounded-lg shadow"
      onClick={onClick}
      >
        View Details
      </Button>
    </div>
    </Card>
  );
};
export default BookCard;
