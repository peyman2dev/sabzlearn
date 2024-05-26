import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FilterButton(props) {
    const [isActive, setIsActive] = useState(false);
    const path = useParams();

    const clicked = () => {
        setIsActive(prev => !prev);
    }

    useEffect(() => {
        if (isActive) {
            props.handler({
                targetID: props.id,
                isActive,
                setIsActive
            });
        } else {
            props.handler({
                targetID: props.id,
                isActive: false,
                setIsActive
            });
        }
    }, [isActive]);

    useEffect(() => {
        setIsActive(false);
    }, [path]);

    return (
        <div onClick={clicked} className='select-none cursor-pointer w-full h-[68px] lg:dark:bg-[#242a38] dark:rounded-xl dark:border-white/5 dark:border-t-white/15 dark:border-r-white/10 lg:bg-white lg:dark:border flex items-center justify-between px-5'>
            <span>
                {props.title}
            </span>
            <button className={`w-12 p-px h-6 flex items-center rounded-3xl duration-150 bg-gray-200 ${isActive ? "bg-sky-600" : "dark:bg-[#333c4c]"}`}>
                <span className={`min-w-4 h-4 rounded-full duration-150 ${isActive ? "bg-white -translate-x-7" : "dark:bg-[#111827] bg-white -translate-x-1"}`}></span>
            </button>
        </div>
    );
}
