import React from "react";
import { Link } from "react-router-dom";
import Social from "/src/components/Social/Social";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";


const Footer = () => {

  // grid grid-cols-1 md:grid-cols-4 gap-4 md:px-48

  return (
    <footer className="bg-slate-100 text-black pt-8 ">
      <div className="container mx-auto  flex flex-col md:flex-row md:justify-around lg:px-40 ">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.webp"
            alt="TechCombo Logo"
            className="w-32 h-auto mb-2"
          />
          <Social />
        </div>

        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-red-600 hover:no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="text-black hover:text-red-600 hover:no-underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-red-600 hover:no-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/staffing" className="list-none text-black hover:text-red-600 hover:no-underline">
                Staffing Solution
              </Link>
            </li>
            <li>
              <Link to="/payroll" className="list-none text-black hover:text-red-600 hover:no-underline">
                Payroll Outsourcing
              </Link>
            </li>
            <li>
              <Link to="/manpower" className="list-none text-black hover:text-red-600 hover:no-underline">
                Manpower Outsourcing
              </Link>
            </li>
            <li>
              <Link to="/executive" className="list-none text-black hover:text-red-600 hover:no-underline">
                Executive Search
              </Link>
            </li>
            <li>
              <Link to="/itDevelopment" className="list-none text-black hover:text-red-600 hover:no-underline">
                IT Project Development
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">
                Work
              </Link>
            </li>
            <li>
              <Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-current mt-2">
        <p className="text-white text-center">
          &copy; 2024 TechCombo. All rights reserved.
        </p>
      </div>
    </footer>



  );
}

export default Footer;