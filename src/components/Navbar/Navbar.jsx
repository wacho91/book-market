import Logo from "../../assets/website/logo.png"

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "/#services",
    },
];

const Navbar = () => {
  return (
    <div>
        <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center">
                <div>
                    <a href="#" className="font-extrabold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="" className="w-10" />
                        Books
                    </a>
                </div>
                <div>
                    <ul>
                        {
                            Menu.map((menu) =>  (
                                <li key={menu.id}>
                                    <a href={menu.link} className="text-lg sm:text-xl font-bold hover:text-blue">{menu.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
