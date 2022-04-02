import { useRouteMatch } from "react-router-dom"
import Auth from "./Navbar/Auth"
import Navigation from "./Navbar/Navigation"

function Navbar() {

    const searchRoute = useRouteMatch('/search')
    return (
        <nav className="h-[3.75rem] flex items-center justify-between pl-5">
            <Navigation />
            {searchRoute && (
                <div>
                    Search Kısmındasın
                </div>
            )}
                {/* <Switch>
                    <Route exact path="/">
                        Home
                    </Route>
                    <Route path="/search">
                        Search
                    </Route>
                    <Route path="/collection">
                        Collection
                    </Route>
                </Switch> */}
            <Auth />
        </nav>
    )
}

export default Navbar