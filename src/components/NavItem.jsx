

export const NavItem = ({id, children}) => {
    return (
        <li className="relative group hover:cursor-pointer">
            <a href={id}>{children}</a>
            <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
    )
}