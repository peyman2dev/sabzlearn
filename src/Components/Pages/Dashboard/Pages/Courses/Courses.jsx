import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { IoMdOpen } from "react-icons/io";
import { FiEdit, FiEye, FiMoreVertical } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import Tippy from "@tippyjs/react";
import { Add } from "iconsax-react";
import { Search } from "@mui/icons-material";
import Selectbox from "../../../../Reusable/Dropdowns/Selectbox";
import useSelectbox from "../../../../../Utils/Hooks/useSelectbox";
import _ from "lodash";
import Modal from "../../../../Reusable/Modal/Modal";
import useModal from "../../../../../Utils/Hooks/useModal";
import ModalHeader from "../../../../Reusable/Modal/Deps/ModalHeader";
import ModalProvider from "../../../../Reusable/Modal/ModalProvider";
import ModalBody from "../../../../Reusable/Modal/Deps/ModalBody";
import ModalFooter from "../../../../Reusable/Modal/Deps/ModalFooter";
import Button from "../../../../Reusable/Buttons/Button";
import { ToastContainer } from "react-toastify";
import useCourses from "../../../../../Utils/Hooks/ApiHooks/useCourses";
import useCourseRemove from "../../../../../Utils/Hooks/ApiHooks/useCourseRemove";
import usePagination from "../../../../../Utils/Hooks/usePagination";
import TableHead from "../../../../Reusable/Table/TableHead";
import TableHeadRow from "../../../../Reusable/Table/TableHeadRow";
import TableRow from "../../../../Reusable/Table/TableRow";
import Table from "../../../../Reusable/Table/Table";
import SessionsCard from "./Sessions/SessionsCard";

const Courses = () => {
  const [sessionShow, setSessionShow] = useState();
  const { data: courses, refetch } = useCourses();
  const { mutate: courseRemove } = useCourseRemove();
  const { quickSelect, selected } = useSelectbox();
  const [target, setTarget] = useState({});
  const { isOpen, toggleOpen } = useModal();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { buttons, setInitItems, switchPage } = usePagination({
    pageSize: 2,
    setItemsTo: setFilteredProducts,
  });
  useEffect(() => {
    setFilteredProducts(courses);
  }, [courses]);
  const inputRef = React.useRef();

  const setDefaultProducts = () => {
    inputRef.current.value = "";
    setFilteredProducts(courses);
  };

  const opts = [
    {
      id: crypto.randomUUID(),
      title: "پیش فرض",
      type: "DEFAULT",
      fn: setDefaultProducts,
    },
    {
      id: crypto.randomUUID(),
      title: "فقط دوره های رایگان",
      type: "FREE_ONLY",
      fn: () => {
        setFilteredProducts(courses.filter((product) => product.price <= 0));
      },
    },
    {
      id: crypto.randomUUID(),
      title: "ارزان ترین ها",
      type: "CHEAPEST",
      fn: () => {
        setFilteredProducts([...courses].sort((a, b) => a.price - b.price));
      },
    },
    {
      id: crypto.randomUUID(),
      title: "گران ترین ها",
      type: "EXPENSIVEST",
      fn: () => {
        setFilteredProducts([...courses].sort((a, b) => b.price - a.price));
      },
    },
  ];

  const searchHandler = (e) => {
    const _value = e.target.value;
    setFilteredProducts(
      _.filter(
        courses,
        (course) =>
          course.name.toLowerCase().includes(_value.toLowerCase()) ||
          course.shortName.toLowerCase().includes(_value.toLowerCase())
      )
    );
  };

  const courseRemoveHandler = () => {
    toggleOpen();
    courseRemove(target?._id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <ToastContainer bodyClassName={"font-Dana-Regular"} />
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-Dana-Demi ">
                  داشبورد | مدیریت دوره ها
                </h1>
              </div>
              <Table className="mt-10 ">
                <TableHead items={filteredProducts} title={"محصولات"}>
                  <Selectbox
                    selector={quickSelect}
                    selected={selected}
                    items={opts}
                  />
                  <div className=" h-8 bg-gray-100 dark:bg-dark-700 relative w-[200px] items-center flex">
                    <Search
                      className="absolute text-lg opacity-45 w-3 right-2"
                      fontSize="18px"
                    />
                    <input
                      onKeyUp={searchHandler}
                      ref={inputRef}
                      type="text"
                      className="bg-transparent outline-none w-full text-sm h-full px-8 absolute right-0 top-0 placeholder:text-xs"
                      placeholder="جستجو کنید .."
                    />
                  </div>
                  <Link
                    className="text-sm bg-green-500 text-white rounded-md dark:bg-[rgb(2,132,199)!important] px-3  flex items-center gap-1 active-animation"
                    to={"create"}
                  >
                    <span>ایجاد دوره</span>
                    <Add size={18} />
                  </Link>
                </TableHead>
                <main className="border-y child:px-14  dark:border-white/5">
                  <TableHeadRow>
                    <span></span>
                    <span>عنوان محصول</span>
                    <span>نام کوتاه</span>
                    <span>قیمت محصول</span>
                    <span>مدیریت</span>
                  </TableHeadRow>
                  <div>
                    {filteredProducts && filteredProducts.length ? (
                      filteredProducts.map((course) => (
                        <TableRow key={course._id}>
                          <p className="">
                            <Link to={`/course/${course.shortName}`}>
                              <img
                                src={`/backend/public/courses/covers/${course.cover}`}
                                className="h-20 rounded-md"
                                alt={course.title}
                              />
                            </Link>
                          </p>
                          <p className="text-sm">{course.name}</p>
                          <p className="text-sm ">
                            <Link
                              to={`/course/${course.shortName}`}
                              className="flex justify-center duration-150 hover:text-sky-500 hover:underline gap-1"
                            >
                              <span>
                                <IoMdOpen />
                              </span>
                              <span>{course.shortName}</span>
                            </Link>
                          </p>
                          <p>
                            {course.price > 1 ? (
                              <>
                                <span className="text-sm font-Dana-Bold ">
                                  {course.price.toLocaleString()}
                                </span>
                                <span> ت </span>
                              </>
                            ) : (
                              "رایگان"
                            )}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex text-sm items-center justify-center text-white  gap-1 child:px-2 child:rounded-md child:py-2 child:duration-150 child-hover:bg-opacity-80">
                              <Tippy content="مدیریت جلسات">
                                <button
                                  onClick={() => {
                                    setSessionShow(!sessionShow);
                                    setTarget(course)
                                  }}
                                  className="bg-sky-600 "
                                >
                                  <FiEdit />
                                </button>
                              </Tippy>
                              <Tippy content="مشاهده">
                                <button className="bg-green-600 ">
                                  <FiEye />
                                </button>
                              </Tippy>
                              <Tippy content="حذف">
                                <button
                                  onClick={() => {
                                    toggleOpen();
                                    setTarget(course);
                                  }}
                                  className="bg-red-700 "
                                >
                                  <HiOutlineTrash />
                                </button>
                              </Tippy>
                            </div>
                            <Tippy content="مدیریت">
                              <button className="text-lg">
                                <FiMoreVertical />
                              </button>
                            </Tippy>
                          </div>
                        </TableRow>
                      ))
                    ) : (
                      <div className="w-full flex items-center gap-4 py-6 min-h-20 text-lg flex-col justify-center">
                        <p>دوره ای پیدا نشد ..</p>
                        <button
                          className="text-xs px-3 py-1 rounded-md bg-teal-500"
                          onClick={() => {
                            setDefaultProducts();
                            quickSelect({
                              title: "پیش فرض",
                            });
                          }}
                        >
                          حذف فیلتر
                        </button>
                      </div>
                    )}
                  </div>
                </main>
                <footer></footer>
              </Table>
           <SessionsCard
              makeVisible={() => setSessionShow(!sessionShow)}
              visible={sessionShow}
              target={target._id}
               />
              <ModalProvider isOpen={isOpen} toggleModal={toggleOpen}>
                <Modal>
                  <ModalHeader>
                    <p>حذف دوره</p>
                  </ModalHeader>
                  <ModalBody>
                    <p className="text-center">
                      آیا از حذف دوره
                      <span className="px-2 text-sm text-sky-600 dark:bg-dark-900">
                        ({target?.name})
                      </span>
                      مطمئن هستید؟
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button fn={toggleOpen} variant="danger" size="extra-small">
                      انصراف
                    </Button>
                    <Button
                      variant="success"
                      size="extra-small"
                      fn={courseRemoveHandler}
                    >
                      تائید
                    </Button>
                  </ModalFooter>
                </Modal>
              </ModalProvider>
            </>
          }
        />
      </Routes>
      <Outlet />
    </>
  );
};

export default Courses;
