import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";
import _, { isString } from "lodash";
import CategoriesProvider from "../Utils/Contexts/CategoriesProvider";
import Sidebar from "../Components/Pages/Categories/Sidebar";
import Product from "../Components/Reusable/Cards/Product/Product";
import Sort from "../Components/Pages/Categories/Sort";

export default function Category() {
  const [isLoading, setIsLoading] = useState(true);
  const { courses, categories } = useSelector((state) => state.server);
  const [targetCategory, setTargetCategory] = useState({});
  const [products, setProducts] = useState(null);
  const { category } = useParams();
  const { Provider } = CategoriesProvider;

  const setBaseProducts = () => {
    if (targetCategory && targetCategory.title) {
      // Placeholder logic for setting products, adjust as needed
      const filteredProducts = courses.filter(
        (course) => course.categoryID === targetCategory.title
      );
      setProducts(filteredProducts);
    }
  };

  // Filters
  const freeOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
    if (isActive && targetID === "FREE_ONLY") {
       setProducts(_.filter(courses, course => course.price == 0 && course.categoryID == targetCategory.title))
      } else {
        setBaseProducts()
      }
  };

  const boughtOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
    console.log(isActive, targetID);
  };

  const presellOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
    console.log(isActive, targetID);
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
      <Provider
        value={{
          filters,
        }}
      >
        <Header />
        <div className="flex container mt-12 items-center justify-between">
          <div className="flex items-center gap-1.5">
        <span className="w-4 h-4 rounded-sm bg-yellow-500"></span>
          <h3 className="text-2xl font-Dana-Bold">
            {targetCategory && targetCategory.title}
          </h3>
          </div>
          <span className="text-lg text-slate-500">
            {products && products.length}
            {" "}
            دوره 
          </span>
        </div>
        <main className="container mt-14 flex gap-5">
          <Sidebar />
            <section className="w-full">
              <Sort />
              <div className="grid xl:grid-cols-3 gap-4">
                {
                  products.length ? 
                  _.map(products, product => (
                    <Product {...product}/>
                  ))
                  :
                  <span className="text-lg">
                    هیچ دوره ای یافت نشد :))
                  </span>
                }
              </div>
            </section>
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
