interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filteredProducts: any[];
  indexOfFirstProduct: number;
  indexOfLastProduct: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  filteredProducts,
  indexOfFirstProduct,
  indexOfLastProduct,
  productsPerPage,
  onPageChange
}: PaginationProps) {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-center">
      {/* Pagination buttons */}
      <div className="flex items-center gap-3">
        {/* Previous arrow button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium  ${
            currentPage === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:opacity-90'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        {/* Page numbers - Always show 1, 2, 3 with gap */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((pageNum) => {
            if (pageNum > totalPages) return null;
            
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium  ${
                  currentPage === pageNum
                    ? 'me-bgcolor-y text-white'
                    : 'hover:opacity-90'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Show ellipsis and last page if there are more than 3 pages */}
          {totalPages > 3 && (
            <>
              <span className="px-1 text-gray-500">...</span>
              <button
                onClick={() => goToPage(totalPages)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium  ${
                  currentPage === totalPages
                    ? 'bg-[#197B33] text-white'
                    : 'hover:opacity-90'
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        {/* Next arrow button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:opacity-90'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}