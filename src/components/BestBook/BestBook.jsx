
import Img1 from "../../assets/book/book1.jpg"
import Img2 from "../../assets/book/book2.jpg"
import Img3 from "../../assets/book/book3.jpg"

const BooksData = [
    {
      id: 1,
      img: Img1,
      title: "His Life",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Who's there",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Lost Boy",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const BestBook = () => {
  return (
    <div className="py-10">
        <div className="container">
            {/*Header Section*/}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Trending Books 
                </p>
                <h1 className="text-3xl font-bold">Besto Books</h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Expedita delectus 
                    impedit recusandae{" "}
                </p>
            </div>
            {/*Card Section*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                {
                    BooksData.map((book) => (
                        <div key={book.id} className="">
                            <div className="h-[100px]">
                                <img src={book.img} alt="" />
                            </div>
                            <div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BestBook
