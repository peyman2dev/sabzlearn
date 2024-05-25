import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";
import _, { isString } from "lodash";
import CategoriesProvider from "../Utils/Contexts/CategoriesProvider";
import Sidebar from "../Components/Pages/Categories/Sidebar";

export default function Category() {
  const [isLoading, setIsLoading] = useState(true);
  const { courses, categories } = useSelector((state) => state.server);
  const [targetCategory, setTargetCategory] = useState({});
  const [products, setProducts] = useState(null);
  const [reset, setReset] = useState(null)
  const { category } = useParams();
  const { Provider } = CategoriesProvider;


  // Filters
  const freeOnly = (inputs) => {
    const {isActive, setIsActive, targetID} = inputs
    if(isActive && targetID === "FREE_ONLY") {

    }
  };

  const boughtOnly = (inputs) => {
    const {isActive, setIsActive, targetID} = inputs
    console.log(isActive, targetID)
  };

  const presellOnly = (inputs) => {
    const {isActive, setIsActive, targetID} = inputs
    console.log(isActive, targetID)
  };

  const setBaseProducts = () => {
    if (targetCategory && targetCategory.title) {
      // Placeholder logic for setting products, adjust as needed
      const filteredProducts = courses.filter(
        (course) => course.categoryID === targetCategory.title
      );
      setProducts(filteredProducts);
    }
  };

  const filters = [
    {
      id: "FREE_ONLY",
      title: "فقط دوره های رایگان",
      handler: freeOnly,
    },
    {
      id: "BOUGHT_ONLY",
      title: "فقط دوره های خریداری شده",
      handler: boughtOnly,
    },
    {
      id: "PRESELL_ONLY",
      title: "فقط دوره های پیشفروش",
      handler: presellOnly,
    },
  ];

  useEffect(() => {

    let _CAT = _.filter(categories, (cat) => cat.name === category);
    if (_CAT.length > 0) {
      setTargetCategory(_CAT[0]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [category, categories]);

  useEffect(() => {
    if (!isLoading) {
      setBaseProducts();
    }
  }, [targetCategory, isLoading]);

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="container mt-20">Loading ...</main>
      </>
    );
  }

  if (isString(targetCategory.title)) {
    return (
      <Provider value={{
        filters,
       resetHandler
      }}>
        <Header />
        <main className="container mt-14 flex gap-5">
          <Sidebar />
        </main>
      </Provider>
    );
  }

  return (
    <>
      <Header />
      <main>No Category Found</main>
    </>
  );
}
