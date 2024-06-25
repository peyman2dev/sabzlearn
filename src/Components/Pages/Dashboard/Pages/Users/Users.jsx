import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { Block, Search } from "@mui/icons-material";
import { FiEdit, FiEye, FiMoreVertical } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import _ from "lodash";
import useSelectbox from "../../../../../Utils/Hooks/useSelectbox";
import idGen from "../../../../../Utils/Functions/idGen";
import Selectbox from "../../../../Reusable/Dropdowns/Selectbox";
import usePagination from "../../../../../Utils/Hooks/usePagination";
import useUsers from "../../../../../Utils/Hooks/ApiHooks/useUsers";
import ModalProvider from "../../../../Reusable/Modal/ModalProvider";
import Modal from "../../../../Reusable/Modal/Modal";
import useModal from "../../../../../Utils/Hooks/useModal";
import ModalHeader from "../../../../Reusable/Modal/Deps/ModalHeader";
import ModalBody from "../../../../Reusable/Modal/Deps/ModalBody";
import Button from "../../../../Reusable/Buttons/Button";
import ModalFooter from "../../../../Reusable/Modal/Deps/ModalFooter";
import { userBanFn, premHandler } from "./funcs";
import { ToastContainer } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TableRow from "../../../../Reusable/Table/TableRow";
import TableHead from "../../../../Reusable/Table/TableHead";
import Table from "../../../../Reusable/Table/Table";
import TableHeadRow from "../../../../Reusable/Table/TableHeadRow";
import StringIncludeChecker from "../../../../../Utils/Functions/StringIncludeChecker.js";

const Users = () => {
  const {
    data: usersArr,
    isLoading,
    isFetched,
    isFetching,
    refetch,
  } = useUsers();
  const client = useQueryClient();
  const { mutate: premHandle } = useMutation({
    mutationKey: ["users"],
    mutationFn: premHandler,
    onSuccess: () => {
      return client.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
  const [method, setMethod] = useState("");
  const [target, setTarget] = useState({});
  const { isOpen, toggleOpen } = useModal();
  const [selected, setSelected] = useState(null);

  const { onOpen, quickSelect } = useSelectbox();

  const [users, setUsers] = useState([]);

  const inputRef = useRef();
  const { buttons, setInitItems, switchPage } = usePagination({
    pageSize: 5,
    setItemsTo: setUsers,
  });

  const searchHandler = () => {
    const val = inputRef.current.value;
    _search(val);
    if (String(val).length < 1) {
      setInitItems(usersArr);
      opts[0].fn(opts[0]);
    }
  };

  const setDefaultItems = () => {
    opts[0].fn(opts[0]);
    inputRef.current.value = "";
    setInitItems(usersArr);
  };


  useEffect(() => {
    setInitItems(usersArr);
  }, [!isFetching, usersArr]);

  const _search = (value) => {
    switchPage(1);
    setInitItems(
      _.filter(
        usersArr,
        (user) =>
          StringIncludeChecker(user.name, value) ||
          StringIncludeChecker(user.username, value) ||
          StringIncludeChecker(user.email, value) ||
          StringIncludeChecker(user.phone, value)
      )
    );
  };

  const premessionHandler = () => {
    const { role, name } = target;
    let userPrem =
      role == "ADMIN" ? (
        <span className="pl-1  rounded-sm  text-red-500 font-Dana-Bold">
          کاربر
        </span>
      ) : (
        <span className="pl-1 rounded-sm  text-teal-600 font-Dana-Bold">
          مدیر
        </span>
      );
    let msg =
      role == "ADMIN" ? (
        <span className="text-sm">
          آیا از عزل کردن
          {" " + name} به مقام {userPrem}
          مطمئند هستید؟
        </span>
      ) : (
        <span className="text-sm">
          آیا از ترفیع
          {" " + name} به مقام {userPrem}
          مطمئند هستید؟
        </span>
      );
    return msg;
  };

  const opts = [
    {
      id: idGen(),
      title: "پیش فرض",
      fn: (value) => {
        switchPage(1);
        setSelected(value);
        setInitItems(usersArr);
      },
    },
    {
      id: idGen(),
      title: "مدیران",
      fn: (value) => {
        switchPage(1);
        setSelected(value);
        setInitItems(_.filter(usersArr, (user) => user.role == "ADMIN"));
      },
    },
    {
      id: idGen(),
      title: "کاربران",
      fn: (value) => {
        switchPage(1);
        setSelected(value);
        setInitItems(_.filter(usersArr, (user) => user.role !== "ADMIN"));
      },
    },
    {
      id: idGen(),
      title: "بن شده ها",
      fn: (value) => {
        switchPage(1);
        setSelected(value);
      },
    },
  ];

  if (isLoading) {
    return <div>Loading data :)</div>;
  }

  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-Dana-Demi ">داشبورد | مدیریت کاربران</h1>
      </div>
      <Table >
        <TableHead items={usersArr} title={"کاربران"}>
          <Selectbox selector={quickSelect} selected={selected} items={opts} />
          <div className=" h-8 dark:bg-dark-700 relative w-[200px] items-center flex">
            <Search
              className="absolute text-lg opacity-45 w-3 right-2"
              fontSize="18px"
            />
            <input
              onChange={searchHandler}
              ref={inputRef}
              type="text"
              className="bg-transparent outline-none w-full text-sm h-full px-8 absolute right-0 top-0 placeholder:text-xs"
              placeholder="جستجو کنید .."
            />
            {/* <Link
        className="text-sm dark:bg-[rgb(2,132,199)!important] px-3  rounded-sm flex items-center gap-1 active-animation"
        to={"create"}
      >
        <span>ایجاد دوره</span>
        {/* <Add size={18} /> */}
            {/* </Link> */}
          </div>
        </TableHead>
        <main className="border-y child:px-14  dark:border-white/5">
          <TableHeadRow>
            <span>نام کاربری</span>
            <span>نام کامل</span>
            <span>ایمیل</span>
            <span>مقام</span>
            <span>مدیریت</span>
          </TableHeadRow>
          <div>
            {users && users.length ? (
              users.map((user) => (
                <TableRow key={user._id}>
                  <p className="">{user.username}</p>
                  <p className="">{user.name}</p>
                  <p className="">{user.email}</p>
                  <p className="child:text-xs child:px-2 child:py-1 child:rounded-sm child:bg-opacity-5">
                    {user.role === "ADMIN" ? (
                      <span className="bg-teal-500 text-teal-500">مدیر</span>
                    ) : (
                      <span className="bg-yellow-500 text-yellow-500">
                        کاربر
                      </span>
                    )}
                  </p>
                  <div className="flex text-white items-center justify-center gap-2">
                    <div className="flex text-sm items-center justify-center  gap-1 child:px-2 child:rounded-md child:min-h-[30px] child:duration-150 child-hover:bg-opacity-80">
                      <Tippy content="ویرایش">
                        <button
                          onClick={() => {
                            setTarget(user);
                            setMethod("UPDATE");
                            toggleOpen();
                          }}
                          className="bg-sky-600 "
                        >
                          <FiEdit />
                        </button>
                      </Tippy>
                      <Tippy content="مشاهده دوره ها">
                        <button className="bg-green-600 ">
                          <FiEye />
                        </button>
                      </Tippy>
                      <Tippy content="حذف">
                        <button
                          onClick={() => {
                            setMethod("BAN");
                            toggleOpen();
                            setTarget(user);
                          }}
                          className="bg-red-700 "
                        >
                          <Block fontSize="14" className="p-0 m-0" />
                        </button>
                      </Tippy>
                    </div>
                    <Tippy content="مدیریت">
                      <button className="text-lg text-dark-800">
                        <FiMoreVertical />
                      </button>
                    </Tippy>
                  </div>
                </TableRow>
              ))
            ) : (
              <div className="w-full flex items-center gap-4 py-6 min-h-20 text-lg flex-col justify-center">
                <p>کاربری پیدا نشد</p>
                <button
                  className="text-xs px-3 py-1 rounded-md bg-teal-500"
                  onClick={() => {
                    setDefaultItems();
                    quickSelect({
                      title: "پیش فرض",
                    });
                  }}
                >
                  تلاش مجدد
                </button>
              </div>
            )}
          </div>
        </main>
        <footer className=" w-full flex items-center justify-center py-4 dark:bg-dark-900/50">
          <ul className="flex items-center gap-1">
            {buttons({
              className: "select-none",
            })}
          </ul>
        </footer>
      </Table>
      <ModalProvider toggleModal={toggleOpen} isOpen={isOpen}>
        <Modal>
          {method == "BAN" ? (
            <>
              <ModalHeader>
                <span className="text-sm">بن کردن کاربر</span>
              </ModalHeader>
              <ModalBody className={" text-center text-sm"}>
                آیا از بن کردن این کاربر مطمئن هستید؟
              </ModalBody>
              <ModalFooter>
                <Button
                  fn={() => {
                    userBanFn(target);
                    toggleOpen();
                  }}
                  variant="danger"
                  size="extra-small"
                >
                  تائید
                </Button>
              </ModalFooter>
            </>
          ) : (
            <>
              <ModalHeader>
                <span className="text-sm">مدیریت مقام کاربر</span>
              </ModalHeader>
              <ModalBody className={"text-center"}>
                <span>{premessionHandler()}</span>
              </ModalBody>
              <ModalFooter>
                <Button size="extra-small" variant="danger" fn={toggleOpen}>
                  انصراف{" "}
                </Button>
                <Button
                  size="extra-small"
                  variant="success"
                  fn={() => {
                    premHandle(target, {
                      onSuccess: () => {
                        refetch();
                      },
                    });
                    toggleOpen();
                  }}
                >
                  تائید{" "}
                </Button>
              </ModalFooter>
            </>
          )}
        </Modal>
      </ModalProvider>
    </>
  );
};

export default Users;
