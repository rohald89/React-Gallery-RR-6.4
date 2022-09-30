import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Search from "./Search"

const Layout = () => {
  return (
    <div className="container">
        <Search />
        <Nav />
        <Outlet />
    </div>
  )
}
export default Layout
