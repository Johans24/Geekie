import React from "react";

const Pagination = ({ pagesAmount, currentPage, changeHandler }) => {
  return (
    <div className="flex justify-center my-12">
      <div className="inline-flex gap-4">
        {[...Array(pagesAmount)].map((_, index) => (
          <button
            onClick={changeHandler(index + 1)}
            disabled={currentPage && currentPage === index + 1}
            className="px-2.5 py-1 bg-primary text-white rounded-sm font-bold"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
