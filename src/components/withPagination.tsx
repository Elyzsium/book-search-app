import React, { useState, useEffect } from 'react';
import { BookListProps, PaginationProps } from '@/types';
import { Button } from './element /Button';
import { FaArrowRight } from 'react-icons/fa';


const withPagination = <P extends BookListProps & PaginationProps>(
  WrappedComponent: React.ComponentType<P>,
  initialTotalItems: number,
  itemsPerPage: number,
  onPageChange: (page: number) => Promise<void>,
  pageRange: number = 3
) => {
  const PaginatedComponent: React.FC<Omit<P, keyof PaginationProps>> = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(initialTotalItems);

    useEffect(() => {
      setTotalItems(initialTotalItems);
    }, [initialTotalItems]);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = async (page: number) => {
      setCurrentPage(page);
      await onPageChange(page);
    };

    const renderPageNumbers = () => {
      const pageNumbers: JSX.Element[] = [];
      let startPage = Math.max(currentPage - pageRange, 1);
      let endPage = Math.min(currentPage + pageRange, totalPages);

      if (startPage > 1) {
        pageNumbers.push(
          <Button
            key="prev-ellipsis"
            variant="ghost"
            onClick={() => handlePageChange(startPage - 1)}
          >
            ...
          </Button>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <Button
            key={i}
            variant={i === currentPage ? "default" : "ghost"}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Button>
        );
      }

      if (endPage < totalPages) {
        pageNumbers.push(
          <Button
            key="next-ellipsis"
            variant="ghost"
            onClick={() => handlePageChange(endPage + 1)}
          >
            ...
          </Button>
        );
      }

      return pageNumbers;
    };

    return (
      <>
        <WrappedComponent {...props as P} currentPage={currentPage} totalPages={totalPages} />
        <div className="flex justify-center items-center space-x-2 mt-4">
          {currentPage > 1 && (
            <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </Button>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)}
            >
          <FaArrowRight  />
            </Button>
          )}
        </div>
      </>
    );
  };

  return PaginatedComponent;
};

export default withPagination;




// import React, { useState, useEffect } from 'react';
// import { BookListProps, PaginationProps } from '@/types';
// import { Button } from './element /Button';


// const withPagination = <P extends BookListProps & PaginationProps>(
//   WrappedComponent: React.ComponentType<P>,
//   initialTotalItems: number,
//   itemsPerPage: number,
//   onPageChange: (page: number) => Promise<void>,
//   pageRange: number = 3
// ) => {
//   const PaginatedComponent: React.FC<Omit<P, keyof PaginationProps>> = (props) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalItems, setTotalItems] = useState(initialTotalItems);

//     useEffect(() => {
//       setTotalItems(initialTotalItems);
//     }, [initialTotalItems]);

//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const handlePageChange = async (page: number) => {
//       setCurrentPage(page);
//       await onPageChange(page);
//     };

//     const renderPageNumbers = () => {
//       const pageNumbers: JSX.Element[] = [];
//       let startPage = Math.max(currentPage - pageRange, 1);
//       let endPage = Math.min(currentPage + pageRange, totalPages);

//       if (startPage > 1) {
//         pageNumbers.push(
//           <Button
//             key="prev-ellipsis"
//             variant="ghost"
//             onClick={() => handlePageChange(startPage - 1)}
//           >
//             ...
//           </Button>
//         );
//       }

//       for (let i = startPage; i <= endPage; i++) {
//         pageNumbers.push(
//           <Button
//             key={i}
//             variant={i === currentPage ? "default" : "ghost"}
//             onClick={() => handlePageChange(i)}
//           >
//             {i}
//           </Button>
//         );
//       }

//       if (endPage < totalPages) {
//         pageNumbers.push(
//           <Button
//             key="next-ellipsis"
//             variant="ghost"
//             onClick={() => handlePageChange(endPage + 1)}
//           >
//             ...
//           </Button>
//         );
//       }

//       return pageNumbers;
//     };

//     return (
//       <>
//         <WrappedComponent {...props as P} currentPage={currentPage} totalPages={totalPages} />
//         <div className="flex justify-center items-center space-x-2 mt-4">
//           {currentPage > 1 && (
//             <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)}>
//               Prev
//             </Button>
//           )}
//           {renderPageNumbers()}
//           {currentPage < totalPages && (
//             <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)}>
//               Next
//             </Button>
//           )}
//         </div>
//       </>
//     );
//   };

//   return PaginatedComponent;
// };

// export default withPagination;