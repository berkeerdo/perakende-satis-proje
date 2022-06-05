import React from "react";
import { useCart } from "react-use-cart";

function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div
        class="card text-center p-0 overflow-hidden h-100 shadow"
        style={{ width: "200px" }}
      >
        <img src={props.img} class="card-img-top img-fluid" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <h6 className="card-title">{props.price} ₺</h6>
          <button
            onClick={() => addItem(props.item)}
            className="btn btn-primary btn-sm"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
