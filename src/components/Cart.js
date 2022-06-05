import React from "react";
import { useCart } from "react-use-cart";

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

  return (
    <>

      <section
        className="py-4 px-5"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Sepet({totalUniqueItems}) Toplam ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
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
                          className="btn btn-info ms-2"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-info ms-2"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger ms-2"
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
          <div className="col-auto ms-auto">
            <h2>Toplam Ücret: {cartTotal} ₺</h2>
          </div>
          <div className="col-auto">
            <button onClick={() => emptyCart()} className="btn btn-danger m-2">
              Sepeti Temizle
            </button>
            <button className="btn btn-primary m-2">Öde</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
