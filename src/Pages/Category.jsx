import React, { useEffect, useState } from "react";
import Header from "../Components/Reusable/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoriesProvider from "../Utils/Contexts/CategoriesProvider";
import Sidebar from "../Components/Pages/Categories/Components/Sidebar/Sidebar";
import { freeCoursesOnly } from "../Utils/Redux/reducers/serverReducer";

export default function Category() {
  const dispatch = useDispatch()
  const [_courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [target, setTarget] = useState({});
  const { categories, courses } = useSelector((state) => state.server);
  const { category } = useParams();
  const { Provider } = CategoriesProvider;

  // Finding the target category
  const findTarget = () => {
    let filteredCategory = categories.filter((cat) => cat.name == category);
    let courseFiltering = courses.filter(
      (course) => course.categoryID === filteredCategory[0].title
    );

    if (courseFiltering.length) {
      setCourses(courseFiltering);
      setTarget(filteredCategory[0]);
      setIsLoading(false);
    }
  };

  
  const freeOnly = (isActived) => {
    if (isActived) {
      dispatch(freeCoursesOnly())
    }  }
    
    const presellOnly = (isActived) => {
      console.log(isActived)
    }
    const boughtOnly = (isActived) => {
    
    }

  const filters = [
    {
      id: crypto.randomUUID(),
      title: "فقط دوره های رایگان",
      action: freeOnly,
 
    },
    {
      id: crypto.randomUUID(),
      title: "درحال پیش فروش",
      action: presellOnly,
    },
    {
      id: crypto.randomUUID(),
      title: "دوره های خریداری شده",
      action: boughtOnly,
    },
  ];

  useEffect(() => {
    findTarget();
  }, [categories, courses, category]);

  //   IsLoading
  if (isLoading) {
    return (
      <>
        <Header />
        <main>Loading ..</main>
      </>
    );
  }

  if (target.title) {
    return (
      <Provider
        value={{
          filters,
        }}
      >
        <Header />
        <div className="w-full container mt-14 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-sm bg-yellow-500"></span>
            <h3 className="text-3xl font-Dana-Demi">
              {target.title && target.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>{_courses.length}</span>
            <span>دوره</span>
          </div>
        </div>
        <main className="container mt-8">
          <section className="flex  mt-10 items-center gap-5">
            <Sidebar />
          </section>
        </main>
      </Provider>
    );
  } else {
    return (
      <>
        <Header />
        <main>Category not found ..</main>
      </>
    );
  }
}
