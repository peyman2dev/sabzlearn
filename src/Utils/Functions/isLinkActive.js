export default function isLinkActive() {
    return (({ isActive }) => isActive ? "bg-[#4880FF] relative before:absolute before:h-full before:w-1.5 before:bg-[#4880FF] before:-right-6 before:rounded-l-xl text-white duration-150 hover:bg-opacity-80 active:scale-[0.95] " : "")
}