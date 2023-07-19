import React from "react";
import Jumbotron from "./Jumbotron/index";
import Why from "./Why/index";
import CategoriesSolo from "./CategoriesSolo/index";
import CategoriesGroup from "./CategoriesGroup";

function homePage() {
  return (
    <div id="homePage">
      <div className="container">
        <div className="homePage">
          <Jumbotron />
          <Why />
          <CategoriesSolo />
          <CategoriesGroup />
        </div>
      </div>
    </div>
  );
}

export default homePage;
