import React from 'react'
import { MdOutlineFingerprint } from "react-icons/md";

export default function SecurityCard() {
  return (
    <article  className="dark:bg-dark-sm p-6  flex flex-col justify-between bg-white shadow-sm rounded-2xl w-full">
        <header>
    <span>
        <MdOutlineFingerprint className='text-[78px] text-primary dark:text-white'/>
    </span>
        </header>
        <main>
            <p className="text-3xl font-Dana-Bold">
                بررسی مقادیر امنیتی وبسایت
            </p>
            <p className="text-light my-4">
                مدیریت و بررسی امنیت وبسایت
            </p>
        </main>
        <footer>
            <button className='w-full text-center h-12 text-sm duration-150 active-animation flex items-center justify-center text-white bg-primary dark:bg-[#7551FF] rounded-2xl'>
                بررسی کنید
            </button>
        </footer>
    </article>
  )
}
