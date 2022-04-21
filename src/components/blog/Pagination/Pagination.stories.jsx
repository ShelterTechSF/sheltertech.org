import React from "react";

import Pagination from "./Pagination";

export default {
  title: "Blog/Pagination",
  component: Pagination,
};

const Template = ({ baseURL, currentPage, totalPages }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <Pagination
      baseURL={baseURL}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  </div>
);

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  baseURL: "/blog",
  currentPage: 0,
  totalPages: 3,
};
