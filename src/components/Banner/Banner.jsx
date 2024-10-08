
import LibraryImg from "../../assets/website/library.jpg";

const Banner = () => {
  return (
    <div className="py-10">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                {/*Image Section*/}
                <div>
                    <img 
                        src={LibraryImg} 
                        alt=""  
                        className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                    />
                </div>
                {/*Text content section*/}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl font-bold">Library at your fingertips</h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5">
                        Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Aliquid molestiae cupiditate 
                        quod voluptates! Ea fugit dignissimos 
                        facere nobis dolor. Nulla.
                    </p>
                    div
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
