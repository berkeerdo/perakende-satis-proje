import React from "react";
import ItemCard from "./components/ItemCard";
import data from "./utils/data";

function Home() {
  return (
    <>
      <h1 className="text-center mt-3">Ürünler</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
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
    </>
  );
}

export default Home;
