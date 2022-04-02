import logo from "assets/image/logo.svg"
import { Icon } from "Icons"
import DownloadApp from "./sidebar/DownloadApp"
import Menu from "./sidebar/Menu"
import Playlist from "./sidebar/Playlist"

function Sidebar() {
    return (
        <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
            <a href="" className="mb-7 px-6">
                <img src={logo} className="h-10"/>
            </a>
            <Menu/>

            <nav className="mt-6">
                <ul>
                    <li>
                        <a href="#!" className="py-2 px-6 transition-all delay-2 flex items-center text-sm text-link font-semibold hover:text-white group">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-70 group-hover:bg-opacity-100 transition-all delay-2 rounded-sm text-black">
                                <Icon name={"plus"} size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="py-2 px-6 transition-all delay-2 flex items-center text-sm text-link font-semibold hover:text-white group">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-gradientPurple to-gradientGreen transition-all delay-2 text-white rounded-sm opacity-70 group-hover:opacity-100">
                                <Icon name={"heart"} size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlist />
            <DownloadApp />
        </aside>
    )
}

export default Sidebar