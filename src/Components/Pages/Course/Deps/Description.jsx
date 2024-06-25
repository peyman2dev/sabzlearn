import { Document } from "iconsax-react";
import React from "react";

const Description = ({ desc }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const ReadMoreButton = (
    <button className={`px-3 py-1.5 rounded-md bg-green-500 text-white text-xs active-animation`} onClick={() => setIsVisible(!isVisible)}>
      {!isVisible ? "کوتاه کردن متن" : "بیشتر بخوانید"}
    </button>
  );


  return (
    <section className="relative w-full dark:bg-dark-800 rounded-lg bg-white child:p-4 pb-10">
        <div className="gap-1.5 px-[12px!important] flex relative before:absolute before:h-3/4  before:w-2 before:-right-2 before:rounded-r-md  before:bg-yellow-400  items-center">
            <span className="text-yellow-400">
                <Document variant="Bold" className="w-8 h-8"/>
            </span>
            <h4 className="font-Dana-Bold text-lg">
                توضیحات
            </h4>
        </div>
      <article
        className={`overflow-hidden space-y-4 relative duration-150 ${isVisible ? "h-[260px]" : ''}`}
            
        dangerouslySetInnerHTML={{ __html: desc }}
      ></article>
      <div className={` ${isVisible ? 'absolute w-full bottom-0 h-2/3 bg-gradient-to-t from-white via-white/70 to-white/50 dark:from-dark-800 dark:to-dark-800/30 flex items-center justify-center dark:via-dark-800' : "p-[0!important] px-5 mx-5"}`}>
        {ReadMoreButton}
      </div>
    </section>
  );
};

export default Description;
