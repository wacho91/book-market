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
    <div className="bg-gray-100 dark:bg-gray-950">
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
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                            <span>&#11162;</span>
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Location</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
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
            {/*Footer Section*/}
            <div>
                <div className="border-t-2 border-gray-300/50">
                    <p className="text-center py-10">
                        CopyRight &copy; 2024. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
