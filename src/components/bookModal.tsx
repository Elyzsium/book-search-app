import { BookModalProps } from "../types";
import Image from "next/image";
import { Button } from "./element /Button";


const BookModal = ({ book, onClose }: BookModalProps) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4 p-6 md:p-8 max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full h-64 md:h-80 md:w-1/2">
            <Image
              src={book.imageLinks?.thumbnail || "/placeholder-image.jpg"}
              alt={book.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {book.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {book.authors ? book.authors.join(", ") : "Unknown Author"}
            </p>
            <div className="mb-4 flex gap-2">
              <h3 className="text-sm font-medium text-gray-800">Published:</h3>
              <p className="text-sm text-gray-600">
                {book.publishedDate || "Unknown"}
              </p>
            </div>
            <div className="mb-4 flex gap-2 ">
              <h3 className="text-sm font-medium text-gray-800">Categories:</h3>
              <p className="text-sm text-gray-600">
                {book.categories || "No categories available."}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Description: {book.description || "No description available."}
              </p>
            </div>
            <Button
              className="mt-auto px-4 py-2 bg-[#01427a] hover:bg-[#016799] text-white font-medium rounded-lg shadow transition"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;



