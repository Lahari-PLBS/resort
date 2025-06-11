"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
// import Footer from "../Footer";

const ProductCollection = () => {
  const [collections, setCollections] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const collectionHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://resort-rho.vercel.app/api/admin/add-product`)
      const newData = await response.json();
      console.log("productData:", newData);
      setCollections(newData.data);
    } catch (error) {
      setError(error.message || "Failed to fetch Products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collectionHandler();
  }, []);

  return (
    <div className="w-fit mx-auto mt-4 mb-32 px-4">
      <h1 align="center" className="font-semibold text-2xl mt-3 mb-3">Select your Stay</h1>
      {collections ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          {collections.map((item) => {
            return (
              <div key={item._id} className="bg-slate-200 text-slate-900 p-2 flex flex-col sm:flex-row rounded-md shadow-lg">
                <div className="m-2">
                  <img src={item.image} alt={item.title} className="h-sm w-xs rounded-sm w-full sm:w-xs" />
                  <br />
                  <div className="">{item.title}</div>
                  <h2 className="">Rs. {item.price}</h2>
                </div>
                <div className="ml-2 mt-4">
                  <div className="text-[16px]">
                    {/* <h2 className="">Rs. {item.price}</h2> */}
                    <h3>Amenities</h3>
                    {/* {item.amen.map((serve, i) => {
                      return (
                        <div className="font-normal" key={i}>
                          <div className="flex"><span className="text-orange-300 mb-2">*</span><span className="ml-1">{serve}</span></div>
                        </div>
                      );
                    })} */}
                    {item.amen
                      .filter((serve) => serve && serve.trim() !== "")
                      .map((serve, i) => (
                        <div className="font-normal" key={i}>
                          <div className="flex">
                            <span className="text-orange-400 mt-1">*</span>
                            <span className="ml-1">{serve}</span>
                          </div>
                        </div>
                      ))}

                  </div>
                  <div className="right">
                    <Link href={`/detail/${item._id}`}>
                      <button className="cursor-pointer text-black bg-transparent border border-black p-2 rounded-md text-sm hover:text-white hover:bg-slate-800">Details </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", }}>
          <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductCollection;