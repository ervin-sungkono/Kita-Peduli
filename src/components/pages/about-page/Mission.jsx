import React from "react";

import MissionImage from "../../../assets/images/mission-image.png";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="container">
        <h2 className="mission-title">Misi Kami</h2>
        <p className="content">
          Misi kami adalah untuk meningkatkan kualitas hidup masyarakat Indonesia, terutama merekab yang terdampak dari pandemi COVID-19. Sebagai generasi muda bangsa, kami ingin terlibat dalam memajukan negara, mendidik dan melayani bangsa.<br /><br />Selain itu pula, kami juga memberikan pendidikan dan juga berbagi kepada masyarakat yang kurang beruntung sebagai bentuk layanan kami terhadap bangsa.
        </p>
        <img
          className="mission-image"
          src={MissionImage}
          alt="Gambar Misi"
        />
      </div>
    </div>
  );
};

export default Mission;
