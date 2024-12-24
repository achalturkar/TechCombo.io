
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="navbar-main" id="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src="/logo.webp" width="110px" to="/" />
                </Link>
            </div>

            <ul className="nav-ul-list" >
                <li className="nav-li"><Link to="/">Home</Link>
                </li>

                <li className="nav-li"><Link to="/about">About Us</Link>
                </li>

                <li className="dropdown nav-li"><Link to="#">Services <i className="fa-solid fa-angle-down"></i></Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/staffing">Staffing Solution </Link></li>
                        <li><Link to="/manpower">Manpower Outsourcing</Link></li>
                        <li><Link to="/payroll">Payroll Outsourcing</Link></li>
                        <li><Link to="/executive">Executive Search </Link></li>
                        <li><Link to="/itDevelopment">IT Project Development</Link></li>

                    </ul>

                </li>
                <li className="nav-li"><Link to="/jobs">Jobs</Link></li>

                <li className="nav-li"><Link to="/contact">Contact US</Link> </li>

            </ul>

            <div className="toggle_btn" onClick={toggleMenu}>
                <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}> </i>
            </div>


            <div className={`dropdown-toggle-1  ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About Us</Link></li>

                    <li className="dropdown-li-toggle-1">
                        <Link to="#">Services <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="dropdown-menu-toggle-1">
                            <li><Link to="/staffing">Staffing Solution </Link></li>
                            <li><Link to="/manpower">Manpower Outsourcing</Link></li>
                            <li><Link to="/payroll">Payroll Outsourcing</Link></li>
                            <li><Link to="/executive">Executive Search </Link></li>
                            <li><Link to="/itDevelopment">IT Project Development</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/jobs">Jobs</Link></li>

                    <li><Link to="/contact">Contact US</Link></li>
                </ul>
            </div>

        </nav>

    );


}

export default Navbar;

