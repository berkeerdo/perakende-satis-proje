import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartProvider, useCart } from "react-use-cart";
import Invoice from "./Invoice";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isEmpty) {
    return (
      <div className="mt-5">
        <div className="card">
          <div className="card-body cart">
            <div className="text-center">
              <img
                src={require("../assets/emptyCart.png")}
                width="150"
                height="150"
                className="img-fluid mb-1"
                alt="empty cart"
                style={{paddingRight: "15px"}}
              />
              <h3>
                <strong>Sepet Boş</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (show) {
    return (
      <CartProvider>
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fatura</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Invoice />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                emptyCart();
              }}
            >
              Faturayı Gönder
            </Button>
          </Modal.Footer>
        </Modal>
      </CartProvider>
    );
  }

  return (
    <>
      <section
        className="py-5 px-1  d-lg-block d-md-inline-block d-sm-inline-block"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="col-auto ms-auto mb-3 p-4 d-flex flex-column justify-content-end"
              style={{ backgroundColor: "#FB5C3E" }}
            >
              <h5 className="text-white font-weight-light">Genel Toplam</h5>
              <h2 className="mb-2">{cartTotal} ₺</h2>
              <div className="d-flex">
                <h5 style={{ marginRight: "1rem" }}>
                  Ürünler = {totalUniqueItems}
                </h5>
                <h5>Toplam Adet = {totalItems}</h5>
              </div>
            </div>
            <table className="table table-light table-striped table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.img}
                          style={{ height: "6rem" }}
                          alt="table-img"
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price} ₺</td>
                      <td>Adet ({item.quantity})</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn fs-5 btn-outline-danger text-dark ms-2 pt-0 text-center"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-outline-primary text-dark ms-2"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn text-white ms-2"
                          style={{ backgroundColor: "#C70000" }}
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <div className="col-auto" style={{ float: "right" }}>
              <button
                onClick={() => emptyCart()}
                className="btn text-white  m-2"
                style={{ backgroundColor: "#C24448" }}
              >
                Sepeti Temizle
              </button>
              {/* Öde Buttonu */}
              <Button className="mx-2" variant="primary" onClick={handleShow}>
                Kredi Kartı
              </Button>
              <Button className="mx-2" variant="primary" onClick={handleShow}>
                Nakit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
