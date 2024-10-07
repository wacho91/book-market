
const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*Text Content Section*/}
                <div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        Hero
                        <p className="bg-clip-text text-transparent bg-gradient-to-b 
                        from-primary text-right text-sm to-secondary">
                            by anonymous
                        </p>
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum, dolor sit amet 
                        consectetur adipisicing elit. 
                        Sapiente, itaque temporibus esse sequi
                    </p>
                    <div>
                        <button
                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 
                            duration-200 text-white py-2 px-4 rounded-full"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
                {/*Image Section*/}
                <div></div>
            </div>
        </div>
    </div>
  )
}


export default Hero
