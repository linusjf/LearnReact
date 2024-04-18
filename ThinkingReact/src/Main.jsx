import React from "react";
import "./styles.css";
import PRODUCTS from "./products";
import FilterableProductTable from "./FilterableProductTable";

let Main = function Main() {
  return <FilterableProductTable products={PRODUCTS} />;
};

export default Main;
