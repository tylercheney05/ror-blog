import { NavLink } from "react-router-dom";
const Navbar = () => {
  return(
    <>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/about'>
        About
      </NavLink>
      <NavLink to='/blogs'>
        Blogs
      </NavLink>
    </>
  )
}
export default Navbar;