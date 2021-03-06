import React, { Fragment } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "./components/ItemCard";
import EditCard from "./components/EditCard";
import { productData } from "./utils/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { generate } from "shortid";

function Products() {
  // Data

  const [items, setItems] = useState([...productData]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductData, setEditProductData] = useState({
    title: "",
    price: "",
  });

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

  // handleFunctions

  const onSubmit = (da) => {
    const newProduct = {
      id: generate(),
      title: da.title,
      price: da.price,
    };

    const newProducts = [...items, newProduct];
    setItems(newProducts);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditProductId(item.id);

    const productValues = {
      title: item.title,
      price: item.price,
    };

    setEditProductData(productValues);
  };

  const handleEditProductChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newProductData = { ...editProductData };
    newProductData[fieldName] = fieldValue;

    setEditProductData(newProductData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProduct = {
      id: editProductId,
      title: "",
      price: "",
    };

    const newProducts = [...items];

    const index = items.findIndex((item) => item.id === editProductId);

    newProducts[index] = editedProduct;

    setItems(newProducts);
    setEditProductId(null);
  };

  if (show) {
    return (
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>??r??n Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>??r??n Ad??:</label>
              <input
                type="text"
                className="form-control"
                placeholder="??r??n Ad??"
                {...register("title", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <div className="mt-2">
                {errors.price?.type === "required" && <p>??r??n Ad?? giriniz.</p>}
              </div>
            </div>
            <div className="form-group">
              <label>??cret:</label>
              <input
                type="number"
                className="form-control"
                {...register("price", { required: true, min: 0 })}
              />
            </div>
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
        <h1 className="mt-3 mx-5">??r??nler</h1>
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
          {items.map((item) => {
            return (
              <Fragment>
                {editProductId === item.id ? (
                  <EditCard
                    handleEditFormSubmit={handleEditFormSubmit}
                    editProductData={editProductData}
                    handleEditProductChange={handleEditProductChange}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    key={item.id}
                    item={item}
                  />
                ) : (
                  <ItemCard
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    key={item.id}
                    item={item}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Products;
