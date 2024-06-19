export default function isLinkActive() {
    return (({ isActive }) => isActive ? 'relative flex h-10 gap-2 before:absolute before:w-1  before:h-full before:left-0 pr-5 before:dark:bg-[#7551FF] before:top-0 before:content-[""] before:rounded-md' : "flex items-center gap-2 pr-5")
}