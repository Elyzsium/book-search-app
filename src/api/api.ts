
import { Book } from '../types';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function searchBooks(query: string, startIndex: number = 0): Promise<{ books: Book[], totalItems: number }> {
  const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=10&key=${API_KEY}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const data = await response.json();
  const books: Book[] = data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    publishedDate: item.volumeInfo.publishedDate,
    description: item.volumeInfo.description,
    categories: item.volumeInfo.categories,
    imageLinks: item.volumeInfo.imageLinks,
  }));

  return { books, totalItems: data.totalItems };
}