import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import logo from "../../assets/logo.jpeg";
import { getWhatsNews } from "../../config/axios";

function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const result = await getWhatsNews();
      if (result.status === 200) setProducts(result.data.data);
    };
    getProducts();
  }, []);

  const mapItem = () => {
    return products.items.map((product, idx) => {
      let img = product["images"][0]["thumbnail"];
      return (
        <Card
          img={img ? img : logo}
          title={product.title}
          price={product.price}
          pId={product.id}
        />
      );
    });
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center  flex-wrap ">
        {products && mapItem()}
      </div>
    </>
  );
}

export default Home;
