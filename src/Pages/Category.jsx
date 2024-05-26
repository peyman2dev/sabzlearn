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
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSort, setActiveSort] = useState("ALL_COURSES");
  const [isLoading, setIsLoading] = useState(true);
  const { courses, categories } = useSelector((state) => state.server);
  const [targetCategory, setTargetCategory] = useState({});
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { Provider } = CategoriesProvider;

  // Default Products Set (Setting for exact CATEGORY !)
  const setBaseProducts = () => {
    if (targetCategory && targetCategory.title) {
      const filteredProducts = courses.filter(
        (course) => course.categoryID === targetCategory.title
      );
      setProducts(filteredProducts);
    }
  };

  // Sort Handler
  const sortHandler = () => {
    let defaultProducts = [...products];
    if (activeSort === "ALL_COURSES") {
      setProducts(defaultProducts);
    } else if (activeSort === "CHEAPEST") {
      const sortedProducts = defaultProducts.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (activeSort === "EXPENSIVES") {
      const sortedProducts = defaultProducts.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  };

  const searchHandler = (val) => {
    let defaultProducts = products;
  
    if (val.length) { 
      const filteredProducts = _.filter(defaultProducts, (product) => 
        product.name.toLowerCase().includes(val.toLowerCase()) || product.shortName.toLowerCase().includes(val.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setBaseProducts(); 
    }
    
  };
  
  // Filters
  const freeOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
    if (isActive && targetID === "FREE_ONLY") {
      setProducts(
        _.filter(
          courses,
          (course) =>
            course.price == 0 && course.categoryID == targetCategory.title
        )
      );
    } else {
      setBaseProducts();
    }
  };

  const boughtOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
  };

  const presellOnly = (inputs) => {
    const { isActive, setIsActive, targetID } = inputs;
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

  const sorts = [
    {
      id: "ALL_COURSES",
      title: "همه دوره ها",
    },
    {
      id: "CHEAPEST",
      title: "ارزان ترین ها",
    },
    {
      id: "EXPENSIVES",
      title: "گران ترین ها",
    },
    {
      id: "POPULARS",
      title: "پرمخاطب ها",
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

  useEffect(() => sortHandler(), [activeSort]);

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
          sorts,
          sort: {
            activeSort,
            setActiveSort,
          },
          searchHandler
        }}
      >
        <Header />
        <div className="flex container flex-col  mt-12 justify-center lg:flex-row items-center lg:justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-sm bg-yellow-500"></span>
            <h3 className="text-2xl font-Dana-Bold">
              {targetCategory && targetCategory.title}
            </h3>
          </div>
          <span className="text-lg text-slate-500">
            {products && products.length} دوره
          </span>
        </div>
        <main className="container w-[90%] md:w-full mt-14 space-y-4 lg:space-y-0 lg:flex gap-5">
          <Sidebar />
          <section className="w-full">
            <Sort />
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-4">
              {products.length ? (
                _.map(products, (product, index) => <Product key={index} {...product} />)
              ) : (
                <span className="text-lg">هیچ دوره ای یافت نشد :))</span>
              )}
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
