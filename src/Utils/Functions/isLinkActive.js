export default function isLinkActive() {
    return (({ isActive }) => isActive ? "font-Dana-Bold text-[#2B3674] dark:text-[white] duration-150 relative before:absolute before:h-full before:w-1 before:rounded-s-2xl before:bg-[#2B3674] before:left-0" : " active:scale-[0.98] first:mt-0 text-[#A3AED0]")
}