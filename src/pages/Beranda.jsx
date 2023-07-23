import CardBerita from "../components/CardBerita"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"

const Beranda = () => (
  <div>
    <div className="bg-gradient-to-br from-blue-600 to-teal-300 h-screen">
      <Navbar />
      <Hero />
    </div>

    <div className="bg-neutral-50">
      <div className="parallax bg-fixed bg-center bg-cover py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold mb-4">
            Selamat Datang di Website Kami
          </h1>
          <p className="text-lg text-white mb-8">
            Temukan produk terbaik kami di sini.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
            CTA Button
          </button>
        </div>
      </div>

      <div className="py-16">
        <h1 className="font-mont text-3xl font-bold text-center">Berita</h1>
        <div className="container h-fit flex my-8">
          <div className="w-3/4">
            <CardBerita />
            <CardBerita />
            <CardBerita />
          </div>
          <div className="divider lg:divider-horizontal" />
          <aside className="w-1/4">
            <div className="card bg-base-100 shadow-lg">
              <div className="join join-vertical w-full">
                <div className="bg-primary text-white font-mont p-3">
                  <h1>Rekomendasi</h1>
                </div>
                <div className="px-4 py-4 hover:bg-base-200">
                  <NavLink className="font-mont text-base font-bold">
                    Lorem, ipsum dolor.
                  </NavLink>
                  <p className="font-lora text-xs">10 Januari 2022</p>
                </div>
                <hr />
                <div className="px-4 py-4 hover:bg-base-200">
                  <NavLink className="font-mont text-base font-bold">
                    Lorem ipsum dolor sit amet.
                  </NavLink>
                  <p className="font-lora text-xs">10 Januari 2022</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Beranda
