import "../assets/styles/Chaircard.css";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import image1 from "../assets/imgs/Star.png";
import chair from "../assets/imgs/sakarias-armchair-black-sporda-dark-gray__0729767_pe737131_s5_adobespark.png";
import chair2 from "../assets/imgs/Group 3742.png";
import chair3 from "../assets/imgs/Group 3742 (1).png";
import chair4 from "../assets/imgs/Group 3742 (2).png";
import plus_sign from "../assets/imgs/plus-sign.png";
import long_arrow from "../assets/imgs/long-arrow.svg";

function Proslider() {
  return (
    <>
      <div className="product-slider" id="product-slider">
        <div className="product-slider-title" id="product-slider-title">
          Best Selling Product
        </div>

        <div className="tabs" id="tabs">
          <div className="chair">
            <p className="chairtext">Chair</p>
          </div>
          <p>Beds</p>
          <p>Sofa</p>
          <p>Lamp</p>
        </div>

        <div className="flex">
          <div className="glider-contain">
            <div className="flex justify-center items-center">
              <GrFormPrevious style={{ height: "50px", width: "50px" }} />
            </div>
            <div className="glider" style={{ gap: "2%" }}>
              <div className="product-card" id="product-card">
                <div className="product-img" id="product-img">
                  <img src={chair} alt="armchair" />
                </div>

                <div className="product-card-bottom" id="product-card-bottom">
                  <div className="category-title" id="category-title">
                    Chair
                  </div>
                  <div className="product-title" id="product-title">
                    Sakarias Armchair
                  </div>
                  <div className="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div className="product-price" id="product-price">
                    <span className="price-text">$392</span>
                    <span className="plus-button">
                      <img
                        src={plus_sign}
                        alt="plus sign"
                        className="plus-sign"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-card" id="product-card">
                <div className="product-img" id="product-img">
                  <img src={chair2} alt="armchair" />
                </div>

                <div className="product-card-bottom" id="product-card-bottom">
                  <div className="category-title" id="category-title">
                    Chair
                  </div>
                  <div className="product-title" id="product-title">
                    Sakarias Armchair
                  </div>
                  <div className="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div className="product-price" id="product-price">
                    <span className="price-text">$392</span>
                    <span className="plus-button">
                      <img
                        src={plus_sign}
                        alt="plus sign"
                        className="plus-sign"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-card" id="product-card">
                <div className="product-img" id="product-img">
                  <img src={chair3} alt="armchair" />
                </div>

                <div className="product-card-bottom" id="product-card-bottom">
                  <div className="category-title" id="category-title">
                    Chair
                  </div>
                  <div className="product-title" id="product-title">
                    Sakarias Armchair
                  </div>
                  <div className="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div className="product-price" id="product-price">
                    <span className="price-text">$392</span>
                    <span className="plus-button">
                      <img
                        src={plus_sign}
                        alt="plus sign"
                        className="plus-sign"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-card" id="product-card">
                <div className="product-img" id="product-img">
                  <img src={chair4} alt="armchair" />
                </div>

                <div className="product-card-bottom" id="product-card-bottom">
                  <div className="category-title" id="category-title">
                    Chair
                  </div>
                  <div className="product-title" id="product-title">
                    Sakarias Armchair
                  </div>
                  <div className="star-rating" id="star-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img
                        src={image1}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                      />
                      <img src={image1} style={{ height: 20, width: 20 }} />
                    </div>
                  </div>
                  <div className="product-price" id="product-price">
                    <span className="price-text">$392</span>
                    <span className="plus-button">
                      <img
                        src={plus_sign}
                        alt="plus sign"
                        className="plus-sign"
                      />
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="flex justify-center items-center">
              <MdNavigateNext style={{ height: "50px", width: "50px" }} />
            </div>
            <div role="tablist" className="dots"></div>
          </div>
        </div>
        <div className="view-all">
          <span className="view">View all &nbsp;</span>{" "}
          <span>
            <img src={long_arrow} alt="long arrow" />
          </span>
        </div>
      </div>
    </>
  );
}
export default Proslider;
