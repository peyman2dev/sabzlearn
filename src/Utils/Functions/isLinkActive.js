export default function isLinkActive() {
    return (({ isActive }) => isActive ? " active:scale-[0.95] duration-150" : "text-white/50")
}