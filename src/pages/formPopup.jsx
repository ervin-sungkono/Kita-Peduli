import React, { useState } from "react";

import Page1 from "../components/pages/form/page1";
import Page2 from "../components/pages/form/page2";
import Page3 from "../components/pages/form/page3";
import Icon from "../components/common/Icon";

const FormPopup = ({hideForm}) => {
  const [page, setPage] = useState(1);

  const PageDisplay = () => {
    if (page === 1) {
      return <Page1/>
    } else if (page === 2) {
      return <Page2 />
    } else if (page === 3) {
      return <Page3 />
    }
  };

  return (
    <div className="popup-form-wrapper hidden">
      <div className="form">
        <div className="close-btn" onClick={hideForm}>
          <Icon icon={'close'}/>
        </div>
        <div className="form-body">
          {PageDisplay()}
        </div>
        <div className="form-footer">
          <button
            onClick = {() => {
              if (page === 3) {
                alert("FORM SUBMITTED");
              } else {
                setPage((currPage) => currPage + 1);
              }
              
            }}>
            {page === 3 ? "Kirimkan Donasi" : "Selanjutnya"}
            <Icon icon={'arrow-next'}/>
          </button>
          <div className="form-page">
            {page} dari 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
