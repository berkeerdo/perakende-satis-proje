import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "./components/ItemCard";
import { productData } from "./utils/data";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Products() {
  // Data

  const [items, setItems] = useState([...productData]);

  // Form Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form Validation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (da) => {
    setItems([
      ...items,
      {
        id: items.length,
        title: da.title,
        price: da.price,
      },
    ]);

    productData.push({
      id: productData.length,
      title: da.title,
      price: da.price,
    });
  };

  if (show) {
    return (
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Ürün Adı:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ürün Adı"
                {...register("title", { required: true, maxLength: 20 })}
              />
              <div className="mt-2">
                {errors.price?.type === "required" && <p>Ürün Adı giriniz.</p>}
              </div>
            </div>
            <div className="form-group">
              <label>Ücret:</label>
              <input
                type="number"
                className="form-control"
                {...register("price", { required: true, min: 0 })}
              />
            </div>
            {/* <div className="form-group">
              <label>Ücret:</label>
              <input
                type="number"
                className="form-control"
                {...register("price", { required: true, min: 0 })}
              />
            </div> */}
            <div className="mt-3 d-flex">
              <button className="btn btn-secondary">Kapat</button>
              <button type="submit" className="btn btn-primary mx-3">
                Ekle
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div style={{ maxWidth: "800px", float: "left" }}>
      <div className="d-flex">
        <h1 className="mt-3 mx-5">Ürünler</h1>
        <Button
          className="mt-4"
          style={{ height: "40px", width: "40px" }}
          size="sm"
          variant="outline-primary"
          onClick={() => handleShow()}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </div>

      <section className="py-3 container-fluid">
        <div className="row">
          {items.map((item, index) => {
            return (
              <ItemCard
                title={item.title}
                price={item.price}
                img={item.img}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Products;
