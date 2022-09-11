import React, { useState } from "react";

import Card1 from "../../../assets/images/vision-images/card-1.png";
import Card2 from "../../../assets/images/vision-images/card-2.png";
import Card3 from "../../../assets/images/vision-images/card-3.png";
import Card4 from "../../../assets/images/vision-images/card-4.png";

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
              <img className={selected === i ? "cardIcon active-card" : "cardIcon"} src={items.icon} alt="" />
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
    title: "Pendidikan",
    caption:
      "Kami mendidik semua masyarakat dengan segala informasi yang mereka butuhkan untuk bertahan di masa pandemi ini.",
    image: Card1,
  },
  {
    icon: Icon2,
    title: "Kesehatan",
    caption:
      "Kami peduli terhadap kesehatan semua masyarakat tanpa terkecuali secara adil demi negara dan masyarakat yang lebih sehat.",
    image: Card2,
  },
  {
    icon: Icon3,
    title: "Layanan Sosial",
    caption:
      "Kami melayani masyarakat dengan tanpa pamrih sebagai bentuk kepedulian dan keterlibatan kami terhadap negara.",
    image: Card3,
  },
  {
    icon: Icon4,
    title: "Kegiatan Amal",
    caption:
      "Kami berbagi tanpa harapan upah, tetapi sebagai wujud kemanusiaan dan kasih terhadap satu sama lain ciptaan Allah.",
    image: Card4,
  },
];

export default Vision;
