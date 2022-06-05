import React from "react";
import ItemCard from "./components/ItemCard";
import data from "./utils/data";

function Home() {
  return (
    <div style={{maxWidth:"500px" , float:"left"}}>
      <h1 className="mt-3 mx-5">Ürünler</h1>
      <section className="py-4 container">
        <div className="row">
          {data.productData.map((item, index) => {
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

export default Home;
