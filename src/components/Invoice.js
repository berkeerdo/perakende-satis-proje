import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";

function Invoice() {
  const { totalItems, cartTotal, items } = useCart();

  const kdv = 18;

  const min = 1;
  const max = 999;
  const rand = Math.floor(min + Math.random() * (max - min));

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="col-md-12">
      <div className="row">
        <div className="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
          <div className="row">
            <div className="receipt-header">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="receipt-left">
                  <img
                    className="img-responsive"
                    alt="iamgurdeeposahan"
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    style={{ width: "71px", borderRadius: "43px" }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                <div className="receipt-right">
                  <h5>Trakya Üniversitesi</h5>
                  <p>
                    0850 256 55 88 <FontAwesomeIcon icon={faPhone} />
                  </p>
                  <p>
                    berkeerdogan@trakya.edu.tr
                    <FontAwesomeIcon icon={faEnvelope} />
                  </p>
                  <p>
                    TR <FontAwesomeIcon icon={faLocationArrow} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="receipt-header receipt-header-mid">
              <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                <div className="receipt-right">
                  <h5>Müşteri Adı </h5>
                  <p>
                    <b>Telofonu :</b> 99999999999
                  </p>
                  <p>
                    <b>Email :</b> musteri@gmail.com
                  </p>
                  <p>
                    <b>Adresi :</b> İstanbul, TR
                  </p>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="receipt-left">
                  <h3>Fatura No #{rand}</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Açıklama</th>
                  <th>Adet</th>
                  <th>Ücret</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="col-md-9">{item.title}</td>
                      <td className="col-md-3">{item.quantity}</td>
                      <td className="col-md-3">{item.price} ₺</td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="text-right">
                    <p>
                      <strong>Toplam Adet: </strong>
                    </p>
                    <p>
                      <strong>Kdv: </strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> {totalItems}
                      </strong>
                    </p>
                    <p>
                      <strong>%18</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <h2>
                      <strong>Genel Toplam:</strong>
                    </h2>
                  </td>
                  <td className="text-left text-danger">
                    <h2>
                      <strong>{(cartTotal * kdv) / 100 + cartTotal}</strong>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="receipt-header receipt-header-mid receipt-footer">
              <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                <div className="receipt-right">
                  <p>
                    <b>Tarih : {date}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
