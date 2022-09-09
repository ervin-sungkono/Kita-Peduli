import React, { useState } from "react";

import BackgroundImage from "../../../assets/images/backgroundCard.png";

import Icon1 from "../../../assets/images/other-icons/icon-1.svg";
import Icon2 from "../../../assets/images/other-icons/icon-2.svg";
import Icon3 from "../../../assets/images/other-icons/icon-3.svg";
import Icon4 from "../../../assets/images/other-icons/icon-4.svg";

const Vision = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section id="vision-section">
      <div className="container">
        <h2 className="vision-title">Visi Kami</h2>
        <div className="vision-cards">
          {data.map((items, i) => (
            <div
              className={selected === i ? "cardVision active-card" : "cardVision"}
              onClick={() => toggle(i)}
            >
              <img className="cardImage" src={items.image} alt="" />
              <img className={selected === i ? "cardNumber active-card" : "cardNumber"} src={items.icon} alt="" />
              <div
                className={
                  selected === i ? "cardContents show-detail" : "cardContents"
                }
              >
                <p className="title">{items.title}</p>
                <p className="cardCaption">{items.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    icon: Icon1,
    title: "Education",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.",
    image: BackgroundImage,
  },
  {
    icon: Icon2,
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
  {
    icon: Icon3,
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
  {
    icon: Icon4,
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
];

export default Vision;
