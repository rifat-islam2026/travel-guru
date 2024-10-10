import { useContext } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/logo2.png"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

function Login() {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
        signInUser(email, password)
            .then(result => {
                e.target.reset()
                navigate("/")
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

  return (
      <>
          <header>
              <div className="navbar">
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
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              {navLinks}
                          </ul>
                      </div>
                      <div><img src={logo} className="w-28" /></div>
                  </div>
                  <div className="form-control pr-7">
                      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                  </div>
                  <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                          {navLinks}
                      </ul>
                  </div>
                  <div className="navbar-end">
                      <button className="btn rounded-md border-none bg-[#F9A51A]">
                          <Link to="/login">Login</Link>
                      </button>
                  </div>
              </div>
          </header>
          <div>
              <div>
                  <div className="flex-col">
                      <div className="text-center">
                          <h1 className="text-5xl font-bold py-5">Please Login</h1>
                      </div>
                      <div className="max-w-lg shrink-0 border p-5 m-5 mx-auto">
                          <form onSubmit={handelLogin}>
                              <div className="form-control">
                                  <label className="label">
                                      <span className="label-text">Email</span>
                                  </label>
                                  <input
                                      name="email"
                                      type="email"
                                      placeholder="Email"
                                      className="input input-bordered"
                                      required />
                              </div>
                              <div className="form-control">
                                  <label className="label">
                                      <span className="label-text">Password</span>
                                  </label>
                                  <input
                                      name="password"
                                      type="password"
                                      placeholder="Password"
                                      className="input input-bordered"
                                      required />
                                  <div className="label flex items-center justify-between pt-2">
                                      <div className="flex gap-2">
                                          <input type="checkbox" name="terms" />
                                          <p className="font-semibold">Remember Me</p>
                                      </div>
                                      <label className="label">
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                      </label>
                                  </div>
                              </div>
                              <div className="form-control mt-6">
                                  <button className="btn btn-primary">Login</button>
                              </div>
                              <p className="font-semibold text-center py-2">Don’t have an account? <Link className="text-orange-500" to="/register">Create an account</Link></p>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="text-center mb-10">
                  <span className="font-semibold">OR</span>
                  <br />
                  <div className="flex justify-center mx-auto my-4">
                      <button className="rounded-full border flex items-center gap-5 py-2 w-1/3 ps-5 font-semibold">
                          <i className=""><FaFacebook className="text-2xl mr-10" /></i>
                          <span>Login in with Facebook</span>
                      </button>
                  </div>
                  <div className="flex justify-center mx-auto my-4">
                      <button className="rounded-full border flex items-center gap-5 py-2 w-1/3 ps-5 font-semibold">
                          <i className=""><FaGoogle className="text-2xl mr-10" /></i>
                          <span>Login in with Google</span>
                      </button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Login
