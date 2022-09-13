import React, { useState } from "react";

import Page1 from "../components/pages/form/page1";
import Page2 from "../components/pages/form/page2";
import Page3 from "../components/pages/form/page3";
import Icon from "../components/common/Icon";

const FormPopup = ({hideForm}) => {
  const [page, setPage] = useState(1);

  const getDonatedAmount = () => {
    const donatedAmount = document.querySelector('input[name="donation-amount"]:checked')
    if(donatedAmount) return parseInt(donatedAmount.value).toLocaleString('id');
    return (40000).toLocaleString('id');
  }

  return (
    <div className="popup-form-wrapper hidden">
      <div className="form">
        <div className="close-btn" onClick={hideForm}>
          <Icon icon={'close'}/>
        </div>
        <div className="form-body">
          <Page1 active={(page === 1)}/>
          <Page2 active={(page === 2)}/>
          <Page3 active={(page === 3)}/>
        </div>
        <div className="form-footer">
          <button
            onClick = {() => {
              if (page === 3) {
                alert("FORM SUBMITTED");
                setPage(1);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}>
            {page === 3 ? `Kirimkan Donasi Rp ${getDonatedAmount()}` : "Selanjutnya"}
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
