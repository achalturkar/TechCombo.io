
import { Link } from "react-router-dom"

const Button = () => {


    return (
        <div className="touch ">
            <Link className="px-4 py-2 inline-block text-white bg-red-500 rounded-3xl font-normal font-lg overflow-hidden transition-all duration-500 font-poppins relative group"
                to="/contact"> <span className="relative z-10">Get In Touch <i className="fa-solid fa-circle-arrow-right ml-2"></i></span>
                <span className="absolute inset-0 w-0 bg-emerald-500 rounded-full transition-all duration-500 group-hover:w-full z-0"></span>

            </Link>

        </div>


    );
}

export default Button;
