import React, { useState } from "react";

import BackgroundImage from "../../../assets/images/backgroundCard.png";

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
              <h2
                className={selected === i ? "cardNumber active-card" : "cardNumber"}
              >
                {items.number}
              </h2>
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
    number: "01",
    title: "Education",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer praesent id amet sed et platea sed. Scelerisque vestibulum, arcu eget ac.",
    image: BackgroundImage,
  },
  {
    number: "02",
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
  {
    number: "03",
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
  {
    number: "04",
    title: "Lifestyle",
    caption:
      "Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a. Lorem ipsum ipsum ipsum dolar siansdgau asdf awefawef awsef awe faw ef aw feaw efa wfe a",
    image: BackgroundImage,
  },
];

export default Vision;
