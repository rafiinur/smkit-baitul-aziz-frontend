import { logo } from "../assets"

const Hero = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="w-36 h-36 object-contain"
          />
          <h1 className="text-center text-5xl font-mont font-black text-teal-300 mt-6">
            Selamat Datang Di Website Kami
          </h1>
          <p className="text-center text-sm font-lora text-white mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            reiciendis incidunt ex quod temporibus asperiores delectus autem
            dolore sed quibusdam fugiat minima necessitatibus, praesentium
            voluptatem vero officia, modi reprehenderit illum.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src="gambar-1.jpg"
                alt="Gambar 1"
                className="max-h-full max-w-full"
              />
            </div>
            <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src="gambar-2.jpg"
                alt="Gambar 2"
                className="max-h-full w-full"
              />
            </div>
            <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg shadow-2xl">
              <img
                src="gambar-3.jpg"
                alt="Gambar 3"
                className="max-h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
