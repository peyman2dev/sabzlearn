import { Profile2User } from "iconsax-react";
import React, { useContext } from "react";
import CourseContext from "../../../../Utils/Contexts/CourseContext";
import { Star } from "@mui/icons-material";

const Sidebar = () => {
  const { course } = useContext(CourseContext);
  console.log(course);
  return (
    <aside className="col-span-12 relative z-10 w-full lg:col-span-4 space-y-8 child:bg-gray-100 child:rounded-lg child:p-4 child:dark:bg-dark-800">
      <article>
        <div className="child:flex child:gap-2 child:items-center child:h-[72px] child:px-3 child:rounded-lg child:dark:bg-dark-900 child:w-1/2 child:bg-white flex items-center gap-2">
          <div>
            <span className="text-green-500">
              <Profile2User className="h-10 w-full" variant="Bold" />
            </span>
            <div className="text-sm">
              <span>348</span>
              <p>دانشجو</p>
            </div>
          </div>
          <div>
            <span className="text-yellow-500">
              <Star fontSize="42" className="h-10 text-5xl w-full" variant="Bold" />
            </span>
            <div className="text-sm">
              <span>5.0</span>
              <p>رضایت</p>
            </div>
          </div>
        </div>
      </article>
    </aside>
  );
};

export default Sidebar;
