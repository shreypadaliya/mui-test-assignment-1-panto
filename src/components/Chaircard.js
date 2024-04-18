import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import plus_sign from "../assets/imgs/plus-sign.png";
import long_arrow from "../assets/imgs/long-arrow.svg";
import image1 from "../assets/imgs/Star.png";
import productsData from "../data/utils/chairData"; 

function Proslider() {
  const [products] = useState(productsData);

  return (
    <div className="product-slider" style={{ marginTop: "90px", height: "906px", width: "100%", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "#f7f7f7" }}>
      <div className="product-slider-title" style={{ paddingTop: "45px", paddingBottom: "45px", fontSize: "42px", textAlign: "center", color: "#1e1e1e", fontFamily: "gilroy-bold" }}>Best Selling Product</div>

      <div className="tabs" style={{ alignItems: "center", margin: "0 auto 5% auto", display: "flex", justifyContent: "space-around", width: "360px", height: "57px", backgroundColor: "#eeeeee", borderRadius: "44px", textAlign: "center" }}>
        <div className="chair" style={{ backgroundColor: "white", borderRadius: "30px", marginTop: "5px", width: "90px", marginBottom: "5px" }}>
          <p className="chairtext">Chair</p>
        </div>
        <p>Beds</p>
        <p>Sofa</p>
        <p>Lamp</p>
      </div>

      <div className="flex" style={{ position: "relative" }}>
        <GrFormPrevious style={{ height: "50px", width: "50px", position: "absolute", top: "50%", left: "-10px", transform: "translateY(-50%)" }} />

        <div className="glider-contain" style={{ width: "100%", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none", position: "relative" }}>
          <div className="glider" style={{ display: "flex", flexWrap: "nowrap", gap: "2%" }}>
            {products.map((product) => (
              <div className="product-card" style={{ width: "400px", display: "flex", flexDirection: "column", margin: "auto 1%", position: "relative" }} key={product.id}>
                <div className="product-img" style={{ paddingTop: "20px", backgroundColor: "rgba(255, 255, 255, 0.5)", borderTopLeftRadius: "30px", borderTopRightRadius: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={product.imgSrc} alt="armchair" style={{ maxWidth: "100%" }} />
                </div>

                <div className="product-card-bottom" style={{ backgroundColor: "#fff", padding: "25px 25px 25px 5px", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
                  <div className="category-title" style={{ paddingLeft: "20px", color: "#8d8d8d", fontSize: "16px", fontFamily: "gilroy-regular", alignItems: "left", marginBottom: "8px" }}>{product.category}</div>
                  <div className="product-title" style={{ fontSize: "20px", fontFamily: "gilroy-bold", alignItems: "left", paddingLeft: "20px", color: "#0d1b39", marginBottom: "8px" }}>{product.title}</div>
                  <div className="star-rating" style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
                      {[...Array(5)].map((_, index) => (
                        <img key={index} src={image1} style={{ height: "20px", width: "20px", marginRight: "5px" }} alt="star" />
                      ))}
                    </div>
                  </div>
                  <div className="product-price" style={{ height: "50px", paddingLeft: "20px", fontSize: "21px", fontFamily: "gilroy-bold", color: "#0d1b39" }}>
                    <span className="price-text">{product.price}</span>
                    <span className="plus-button">
                      <img src={plus_sign} alt="plus sign" className="plus-sign" style={{ position: "absolute", left: "283px", bottom: "35px" }} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MdNavigateNext style={{ height: "50px", width: "50px", position: "absolute", top: "50%", right: "-10px", transform: "translateY(-50%)" }} />
      </div>
      <div className="view-all" style={{ margin: "5% auto", color: "#e58411", display: "table", fontSize: "18px", fontFamily: "gilroy-regular" }}>
        <span className="view">View all &nbsp;</span>{" "}
        <span>
          <img src={long_arrow} alt="long arrow" />
        </span>
      </div>
    </div>
  );
}

export default Proslider;
