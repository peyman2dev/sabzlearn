export default function isLinkActive() {
    return (({ isActive }) => isActive ? "flex items-center gap-2 px-3 py-2 text-[#F8F8F9] bg-[#1a1a1a] rounded-lg" : "flex items-center gap-2 px-3 py-1.5")
}