import React, { useEffect, useState } from "react";
import Mycard from "./Mycard";
import "../assets/styles/Imagecarousel.css";
import tr1 from "../assets/imgs/tr1.png";
import tr2 from "../assets/imgs/tr2.png";
import tr3 from "../assets/imgs/tr3.png";

const Imagecarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalImages = [tr1, tr2, tr3];

  useEffect(() => {
    const container = document.querySelector(".product-container");
    const handleScroll = () => {
      const cardWidth = container.clientWidth / 3; // Width of each card
      const newIndex = Math.floor(container.scrollLeft / cardWidth);
      setStartIndex(newIndex);
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const btnpressprev = () => {
    const container = document.querySelector(".product-container");
    const cardWidth = container.clientWidth / 3;
    container.scrollLeft -= cardWidth;
    const newIndex =
      (startIndex === 0 ? totalImages.length - 1 : startIndex - 1) %
      totalImages.length;
    setStartIndex(newIndex);
  };

  const btnpressnext = () => {
    const container = document.querySelector(".product-container");
    const cardWidth = container.clientWidth / 3;
    container.scrollLeft += cardWidth;
    const newIndex = (startIndex + 1) % totalImages.length;
    setStartIndex(newIndex);
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        {"<"}
      </button>

      <div className="product-container">
       
        {[0, 1, 2].map((index) => (
          <Mycard
            key={index}
            imageSrc={totalImages[(startIndex + index) % totalImages.length]}
            style={{ marginLeft: index === 0 ? `0%` : "-33.333%" }}
          />
        ))}
      </div>

      <button className="next-btn" onClick={btnpressnext}>
        {">"}
      </button>
    </div>
  );
};

export default Imagecarousel;
