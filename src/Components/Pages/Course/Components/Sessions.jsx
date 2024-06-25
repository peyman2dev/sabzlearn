import { School } from "@mui/icons-material";
import React from "react";
import Accordion from "../../../Reusable/Accordion/Accordion";

const Sessions = () => {
  return (
    <section className="relative z-10 w-full dark:bg-dark-800 rounded-lg bg-white child:p-4 pb-10">
           <div className="gap-1.5 px-[12px!important] flex relative before:absolute before:h-3/4  before:w-2 before:-right-2 before:rounded-r-md  before:bg-green-400  items-center">
            <span className="text-green-400">
                <School className="w-8 h-8 text-4xl" fontSize="16"/>
            </span>
            <h4 className="font-Dana-Bold text-lg">
                جلسات دوره
            </h4>
        </div>
        <section className="mt-6">
    <Accordion title={"پیش گفتار + "}/>
        </section>
    </section>
  );
};

export default Sessions;
