import { PaginationProps } from "@/types";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { Button } from "./element /Button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-[#01427a] hover:bg-[#070159] text-white font-bold py-2 px-4 rounded mr-2 disabled:opacity-50"
      >
        <FaArrowLeft  />
      </Button>
      <span className="py-2 px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#01427a] hover:bg-[#016799] text-white font-bold py-2 px-4 rounded ml-2 disabled:opacity-50"
      >
       <FaArrowRight  />
      </Button>
    </div>
  );
};

export default Pagination;
