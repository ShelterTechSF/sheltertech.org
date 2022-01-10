import { Link } from "gatsby";
import React from "react";

import * as s from "./Pagination.module.css";

type PageLinkProps = {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
};
const PageLink = ({ to, children, isActive, isDisabled }: PageLinkProps) => {
  if (isDisabled) {
    return <span className={s.disabledLink}>{children}</span>;
  }
  if (isActive) {
    return <span className={s.activeLink}>{children}</span>;
  }
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};

type PaginationProps = {
  baseURL: string;
  currentPage: number;
  totalPages: number;
};
const Pagination = ({ baseURL, currentPage, totalPages }: PaginationProps) => {
  const urlForPage = (pageNumber: number) =>
    pageNumber === 0 ? baseURL : `${baseURL}/${pageNumber + 1}`;
  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
        <nav className={s.paginationContainer}>
          <PageLink to={urlForPage(0)} isDisabled={currentPage === 0}>
            &lsaquo; Previous
          </PageLink>
          {Array.from({ length: totalPages }).map((_, pageNumber) => (
            <PageLink
              /* The array index _is_ the identity of the element in this case,
               * so it's fine to use it as the key. */
              /* eslint-disable-next-line react/no-array-index-key */
              key={pageNumber}
              to={urlForPage(pageNumber)}
              isActive={pageNumber === currentPage}
            >
              {pageNumber + 1}
            </PageLink>
          ))}
          <PageLink
            to={urlForPage(totalPages - 1)}
            isDisabled={currentPage === totalPages - 1}
          >
            Next &rsaquo;
          </PageLink>
        </nav>
      </div>
    </div>
  );
};
export default Pagination;
