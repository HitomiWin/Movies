import React from "react";
import { Button } from "react-bootstrap";

const PaginationButtons = ({ totalPages, isPreviousData, page, setPage }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <Button
        onClick={() => setPage((current) => Math.max(current - 1, 1))}
        disabled={page === 1}
        variant="dark"
      >
        Previous Page
      </Button>

      <p>Current page: {page}</p>

      <Button
        onClick={() => {
          if (!isPreviousData && page !== totalPages)
            setPage((current) => current + 1);
        }}
        disabled={isPreviousData || page === totalPages}
        variant="dark"
      >
        Next Page
      </Button>
    </div>
  );
};

export default PaginationButtons;
