import { Icon } from "Icons"
import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <NavLink activeClassName="bg-active text-activeWhite" exact to={"/"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded transition-all delay-2">
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-activeWhite" to={"/search"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded transition-all delay-2">
                    <span>
                        <Icon name="search"/>
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-activeWhite" to={"/collection"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded transition-all delay-2">
                    <span>
                        <Icon name="collect"/>
                    </span>
                    Kitaplığım
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu