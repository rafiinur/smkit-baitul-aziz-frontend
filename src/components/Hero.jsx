import { logo } from "../assets"

const Hero = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="md:hidden w-[114px] h-[114px]"
          />
          <h1 className="md:text-start text-center text-5xl md:text-6xl font-mont font-black text-neutral-100 mt-6 leading-tight">
            Selamat Datang Di Website Kami
          </h1>
          <p className="md:text-start text-center text-sm md:text-base font-lora text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            reiciendis incidunt ex quod temporibus asperiores delectus autem
            dolore sed quibusdam fugiat minima necessitatibus, praesentium
            voluptatem vero officia, modi reprehenderit illum.
          </p>
        </div>
        <div className="max-md:hidden w-1/2 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src={import.meta.env.VITE_BASE_URL + "/public/hero-1.jpg"}
                alt="hero"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src={import.meta.env.VITE_BASE_URL + "/public/hero-1.jpg"}
                alt="hero"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src={import.meta.env.VITE_BASE_URL + "/public/hero-1.jpg"}
                alt="hero"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
