import React, { memo } from "react";
import { Button } from "react-bootstrap";

const PaginationButtons = memo(
  // stop to rerender unnecessary
  ({ totalPages, isPreviousData, page, setPage, paramsPage }) => {

    return (
      <div className="d-flex justify-content-between align-items-center my-3">
        <Button
          onClick={() => setPage((current) => Math.max(current - 1, 1))}
          disabled={page === 1}
          variant="dark"
        >
          Prev
        </Button>

        <h5>Current Page: {paramsPage}</h5>

        <Button
          onClick={() => {
            if (!isPreviousData && page !== totalPages)
              setPage((current) => current + 1);
          }}
          disabled={isPreviousData || page === totalPages}
          variant="dark"
        >
          Next
        </Button>
      </div>
    );
  }
);

export default PaginationButtons;
