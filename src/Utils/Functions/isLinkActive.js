export default function isLinkActive() {
    return (({ isActive }) => isActive ? "bg-[#4880FF] text-white duration-150 hover:bg-opacity-80 active:scale-[0.95] " : "")
}