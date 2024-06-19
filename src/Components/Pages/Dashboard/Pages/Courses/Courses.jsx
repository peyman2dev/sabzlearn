import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import ModalFooter  from "../../../../Reusable/Modal/Deps/ModalFooter";
import Button from "../../../../Reusable/Buttons/Button";
import { removeCourse } from "../../../../../Utils/Redux/actions/actions";
import { ToastContainer } from "react-toastify";
const Courses = () => {
  const dispatch = useDispatch()
  const { quickSelect, selected } = useSelectbox();
  const [target,setTarget] = useState({})
  const {isOpen, toggleOpen} = useModal()
  const [isLoading, setIsLoading] = useState(true);
  const { courses } = useSelector((state) => state.server);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(courses);
    setIsLoading(false);
  }, [courses]);
  const inputRef = React.useRef()

  const setDefaultProducts = () => {
    inputRef.current.value = ''
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
        (course) => course.name.toLowerCase().includes(_value.toLowerCase()) || course.shortName.toLowerCase().includes(_value.toLowerCase())
      )
    );
  };

  const courseRemoveHandler = () => (dispatch(removeCourse(target?._id)), toggleOpen())

  if (isLoading) {
    return <>درحال لود کردن ...</>;
  } else {
    return (
      <>
      <ToastContainer bodyClassName={"font-Dana-Regular"}/>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-Dana-Demi ">داشبورد | مدیریت دوره ها</h1>
        </div>
        <section className="mt-10 dark:bg-dark-800 rounded-sm shadow-md">
          <header className="p-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p>محصولات</p>
                <span className="text-xs px-2 py-1.5 rounded-md pl-2.5 pb-1 dark:bg-indigo-800">
                  {filteredProducts && filteredProducts.length
                    ? filteredProducts.length + " دوره "
                    : "دوره ای یافت نشد."}
                </span>
              </div>
              <p className="text-sm mt-1.5 opacity-60 font-Dana-Light">
                پنل پیشرفته مدیریت دوره ها
              </p>
            </div>
            <div className="flex items-center gap-4 child:h-9  child:dark:bg-dark-700 child:rounded-sm">
              <Selectbox
                selector={quickSelect}
                selected={selected}
                items={opts}
              />
              <div className=" h-8 dark:bg-dark-700 relative w-[200px] items-center flex">
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
                className="text-sm dark:bg-[rgb(2,132,199)!important] px-3  rounded-sm flex items-center gap-1 active-animation"
                to={"create"}
              >
                <span>ایجاد دوره</span>
                <Add size={18} />
              </Link>
            </div>
          </header>
          <main className="border-y child:px-14  dark:border-white/5">
            <div className="h-10  text-center child:w-full  text-sm  px-8 select-none justify-evenly dark:bg-dark-700 w-full flex items-center">
              <span></span>
              <span>عنوان محصول</span>
              <span>نام کوتاه</span>
              <span>قیمت محصول</span>
              <span>مدیریت</span>
            </div>
            <div>
              {filteredProducts && filteredProducts.length ? (
                filteredProducts.map((course) => (
                  <div className="h-24 child:w-full text-center flex items-center justify-evenly">
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
                      <Link className="flex justify-center duration-150 hover:text-sky-500 hover:underline gap-1">
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
                      <div className="flex text-sm items-center justify-center  gap-1 child:px-2 child:rounded-md child:py-2 child:duration-150 child-hover:bg-opacity-80">
                        <Tippy content="ویرایش">
                          <button className="bg-sky-600 ">
                            <FiEdit />
                          </button>
                        </Tippy>
                        <Tippy content="مشاهده">
                          <button className="bg-green-600 ">
                            <FiEye />
                          </button>
                        </Tippy>
                        <Tippy content="حذف">
                          <button onClick={() => {
                            toggleOpen()
                            setTarget(course)
                          }} className="bg-red-700 ">
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
                  </div>
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
        </section>

<ModalProvider isOpen={isOpen}  toggleModal={toggleOpen} >
        <Modal >
              <ModalHeader >
                <p>
                  حذف دوره
                </p>
              </ModalHeader>
              <ModalBody>
                <p className="text-center">
                  آیا از حذف دوره<span className="px-2 text-sm text-sky-600 dark:bg-dark-900">({target?.name})</span> مطمئن هستید؟
                </p>
              </ModalBody>
              <ModalFooter>
                <Button fn={toggleOpen}  variant="danger"> 
                  انصراف
                </Button>
                <Button variant="success" fn={courseRemoveHandler} >تائید</Button> 
              </ModalFooter>
        </Modal>
</ModalProvider>
      </>
    );
  }
};

export default Courses;
