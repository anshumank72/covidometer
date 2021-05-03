import React from "react";

const pagination = ({ detaPerPage, totaldeta, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totaldeta / detaPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        {pageNumber.map((num) => (
          <li class="page-item" key={num}>
            <a
              class="page-link bg-dark text-light"
              href="#"
              onClick={() => paginate(num)}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default pagination;
