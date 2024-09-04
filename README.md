# Book Search Application

This is a modern web application built with Next.js that allows users to search for books using the Google Books API. The application features a responsive design, pagination, and detailed book information.

## Features

- Search for books using keywords
- Display search results in a grid layout
- View detailed information about each book
- Pagination for browsing through search results
- Responsive design for various screen sizes

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Books API

## Project Structure

The project is organized into several key components:

- `api/api.ts`: Contains the function to fetch books from the Google Books API
- `components/`:
  - `BookCard.tsx`: Displays individual book information
  - `BookList.tsx`: Renders a grid of BookCard components
  - `BookModal.tsx`: Shows detailed information about a selected book
  - `withPagination.tsx`: Handles pagination for search results using HOC
  - `SearchBar.tsx`: Allows users to input search queries
- `hooks/`:
  - `useBookSearch.ts`: Custom hook for managing book search state and API calls
- `types.ts`: Contains TypeScript interfaces for the application

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/book-search-app.git
   ```

2. Navigate to the project directory:
   ```
   cd book-search-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your Google Books API key:
   ```
   NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Enter a search query in the search bar and press Enter or click the Search button.
2. Browse through the search results displayed in a grid layout.
3. Click on a book card to view more detailed information about the book.
4. Use the pagination controls at the bottom of the page to navigate through the search results.

# withPagination Higher-Order Component

`withPagination` is a React Higher-Order Component (HOC) that adds pagination functionality to any list component. It provides a flexible and reusable way to implement pagination in your React applications.

## Features

- Adds pagination controls to any list component
- Customizable page range
- Handles page changes and data fetching
- Responsive design with mobile-friendly controls

## Usage

To use the `withPagination` HOC, follow these steps:

1. Import the HOC in your component file:

```typescript
import withPagination from '@/components/withPagination';
```

2. Wrap your list component with `withPagination`:

```typescript
const PaginatedList = withPagination(
  YourListComponent,
  totalItems,
  itemsPerPage,
  handlePageChange,
  pageRange
);
```

## Further Reading

I used the following resource to gain a better understanding of Higher-Order Components in React, which helped in the development of this `withPagination` HOC:

- [Higher-Order Components in React](https://www.freecodecamp.org/news/higher-order-components-in-react/)

This comprehensive article explains the concept of HOCs, their use cases, and best practices in React development. 


