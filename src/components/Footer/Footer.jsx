import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter } from "react-icons/fa"

import ImageLogo from "../../assets/website/logo.png"

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div>
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/*company details*/}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                        Books Store
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet 
                        consectetur adipisicing elit. Amet, aut 
                        temporibus. Optio repellat dolor minima!{" "}
                    </p>
                    <br />
                    {/*Social Links*/}
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Nodia, Uttar Pradesh</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p>+91 123456789</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaTwitter className="text-3xl" />
                        </a>
                    </div>
                </div>
                {/*links section*/}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                            <ul>
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.link} className="cursor-pointer hover:translate-x-1 duration-300">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
