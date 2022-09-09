import React, { useState } from "react";
import Page1 from "../components/pages/form/page1";
import Page2 from "../components/pages/form/page2";
import Page3 from "../components/pages/form/page3";

import Arrow from "../assets/images/other-icons/arrow-right.svg";

const FormPopup = () => {
  const [page, setPage] = useState(0);

  const FormPages = ["1", "2", "3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 />
    } else if (page === 1) {
      return <Page2 />
    } else if (page === 2) {
      return <Page3 />
    }
  };

  return (
    <div className="form">
      <div className="form-body">
        {PageDisplay()}
      </div>
      <div className="form-footer">
        <button
          onClick = {() => {
            if (page == FormPages.length - 1) {
              alert("FORM SUBMITTED");
            } else {
              setPage((currPage) => currPage + 1);
            }
            
          }}>
          {page === FormPages.length - 1 ? "Kirimkan Donasi" : "Selanjutnya"}
          <img src={Arrow} alt="arrow" />
        </button>
        <div className="form-page">
          {FormPages[page]} dari 3
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
