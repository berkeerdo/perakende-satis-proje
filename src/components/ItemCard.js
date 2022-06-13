import React, { useState } from "react";
import { useCart } from "react-use-cart";

function ItemCard(props) {
  const { addItem } = useCart();

  const [buttonText, setButtonText] = useState("Sepete Ekle");

  const changeText = () => {
    setButtonText("Eklendi");
    setTimeout(() => {
      setButtonText("Sepete Ekle");
    }, 1000);
  };

  return (
    <div className="col-sm-3 col-md-5 col-lg-3 mx-3 mb-4">
      <div
        className="card text-center p-0 overflow-hidden h-100 shadow"
        style={{ width: "220px", maxHeight: "340px" }}
      >
        <img
          src={props.img}
          className="card-img-top img-fluid"
          alt="card-img"
          style={{ height: "200px", maxHeight: "200" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <h6 className="card-title mb-2">{props.price} ₺</h6>
          <button
            type="button"
            onClick={(event) => props.handleEditClick(event, props.item)}
            handleEditShow={props.handleEditShow}
            className="btn btn-sm text-white mx-2"
            style={{ backgroundColor: "#477DCA" }}
          >
            Düzenle
          </button>
          <button
            onClick={() => {
              addItem(props.item);
              changeText();
            }}
            type="button"
            className="btn btn-sm text-white"
            style={{ backgroundColor: "#477DCA" }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
