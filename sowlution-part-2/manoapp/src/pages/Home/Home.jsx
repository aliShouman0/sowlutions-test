import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import logo from "../../assets/logo.jpeg";
import Footer from "../../components/Footer/Footer";
import { getWhatsNews } from "../../config/axios";
import { NB_PRODUCTS_IN_PAGE } from "../../constants/constants";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [products, setProducts] = useState();
  let dataSize = 0;
  const [page, setPage] = useState(0);

  //useEffect to call api to get data and save in state in status is ok
  useEffect(() => {
    const getProducts = async () => {
      const result = await getWhatsNews();
      if (result.status === 200) setProducts(result.data.data);
    };
    getProducts();
  }, []);

  //map item will loop on array of product
  //then return array of jSX elements contain data of each product
  const mapItem = () => {
    return products.items.map((product, idx) => {
      let img = product["images"][0]["thumbnail"];
      let largeImg = product["images"][0]["large"];
      let categories = "";
      categories += product["categories"].map((category) => category["title"]);
      return (
        <Card
          img={img ? img : logo}
          largeImg={largeImg}
          title={product.title}
          price={product.price}
          key={product.id}
          categories={categories}
          quantity={product.quantity}
        />
      );
    });
  };

  //push to loadItems array cards to show them based on page number
  //them map over it to print then
  const pagination = () => {
    const data = mapItem();
    const loadItems = [];
    let i = page * NB_PRODUCTS_IN_PAGE;
    for (i; i < (page + 1) * NB_PRODUCTS_IN_PAGE; i++) {
      if (i === data.length) break;
      loadItems.push(data[i]);
    }
    dataSize = data.length - 1;
    return loadItems.map((val) => val);
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center  flex-wrap ">
        {products ? pagination() : <Loading />}
        <div className="m-5 flex justify-around items-center w-screen ">
          <p
            onClick={() => setPage(page !== 0 ? page - 1 : 0)}
            className={`font-bold text-2xl cursor-pointer p-3 rounded-md hover:bg-orange-300 ${
              page === 0 ? "hover:bg-red-600 cursor-not-allowed " : ""
            }`}
          >
            prev--
          </p>
          <p
            className={`font-bold text-2xl cursor-pointer p-3 rounded-md hover:animate-bounce hover:bg-orange-300 `}
          >
            Page:{page}
          </p>
          <p
            onClick={() =>
              setPage(
                (page + 1) * NB_PRODUCTS_IN_PAGE > dataSize ? page : page + 1
              )
            }
            className={`font-bold text-2xl cursor-pointer p-3 rounded-md hover:bg-orange-300 ${
              (page + 1) * NB_PRODUCTS_IN_PAGE > dataSize
                ? "hover:bg-red-600 cursor-not-allowed "
                : ""
            }`}
          >
            next++
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
