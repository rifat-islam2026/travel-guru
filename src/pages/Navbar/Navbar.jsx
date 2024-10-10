import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const handelSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

  return (
      <div className="navbar bg-transparent pt-5">
          <div className="navbar-start">
              <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                  </div>
                  <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                    {navLinks}
                  </ul>
              </div>
              <div><img src={logo} className="w-28" /></div>
          </div>
          <div className="form-control pr-7">
              <input type="text" placeholder="Search" className="input input-bordered bg-opacity-75 w-24 md:w-auto" />
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">
                 {navLinks}
              </ul>
          </div>
          <div className="navbar-end">
              {user ? 
                  <button
                      onClick={handelSignOut}
                      className="btn rounded-md border-none bg-[#F9A51A]">
                      Sign Out
                  </button> :
                  <button className="btn rounded-md border-none bg-[#F9A51A]">
                      <Link to="/login">Login</Link>
                  </button>
              }
          </div>
      </div>
  )
}

export default Navbar
