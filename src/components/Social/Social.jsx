import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Social = () =>{

    return(
        <div className="flex space-x-4 ">
        <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600"
            aria-label="Facebook"
        >
            <FaFacebookF className="w-6 h-6" />
        </Link>
        <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600"
            aria-label="Twitter"
        >
            <FaXTwitter className="w-6 h-6" />
        </Link>
        <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600"
            aria-label="Instagram"
        >
            <FaInstagram className="w-6 h-6" />
        </Link>
        <Link
            to="https://www.linkedin.com/groups/10462070/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A10462070-7247050478386089984&q=highlightedFeedForGroups"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600"
            aria-label="LinkedIn"
        >
            <FaLinkedinIn className="w-6 h-6" />
        </Link>
    </div>


    );
}

export default Social;