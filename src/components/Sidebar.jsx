import logo from "assets/image/logo.svg"
import Menu from "./sidebar/Menu"

function Sidebar() {
    return (
        <aside className="w-60 py-6 flex flex-col">
            <a href="" className="mb-7 px-6">
                <img src={logo} className="h-10"/>
            </a>
            <Menu/>
        </aside>
    )
}

export default Sidebar