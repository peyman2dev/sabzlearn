import { Eye, Profile2User } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function LastArticle() {
  return (
    <article className="dark:bg-dark-sm p-5 flex flex-col justify-between bg-white shadow-sm rounded-2xl lg:w-[382px]">
      <div>
        <header className="relative rounded-2xl overflow-hidden">
          <img src="/images/articles/cleancode.png" alt="" />

          <div className="absolute w-full h-full bg-gradient-to-t dark:from-dark-sm/90 from-white/90 top-0 right-0 z-10"></div>
        </header>
        <main className="mt-3">
          <Link>
            <h5 className="text-lg font-Dana-Bold">کتاب کدنویسی مرتب</h5>
          </Link>
          <p className="my-2 text-light line-clamp-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          </p>
        </main>
      </div>
      <footer className="flex items-center justify-between">
    <div className="text-xs flex items-center gap-1 text-light">
        <span>
            <Profile2User variant="Bold" className="w-5"/>
        </span>
        <span>
            توسط: 
        </span>
        <span>
            پیمان احمدی
        </span>
    </div>

    <div className="flex items-center gap-1 text-sm text-light">
        <span>
        <Eye className="w-5" variant="Bold"/>
        </span>
        <span>
            24,424
        </span>
    </div>
      </footer>
    </article>
  );
}
