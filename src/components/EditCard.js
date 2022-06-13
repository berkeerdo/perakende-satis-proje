import React from "react";

function EditCard(props) {
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
          <form>
            <input
              type="text"
              className="mb-2"
              value={props.editProductData.title}
              onChange={props.handleEditProductChange}
            />
            <input
              type="number"
              className="card-title mb-2"
              value={props.editProductData.price}
              onChange={props.handleEditProductChange}
            />
            <button
              type="submit"
              className="btn btn-sm text-white"
              style={{ backgroundColor: "#477DCA" }}
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
