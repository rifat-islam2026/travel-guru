
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/Rectangle 1.png";
import sajek from "../../assets/Sajek.png";
import sreemongol from "../../assets/Sreemongol.png";
import sundorbon from "../../assets/sundorbon.png";
import Navbar from "../Navbar/Navbar";

function Home() {

    return (
        <div className="relative min-h-screen">
            <div className="z-10 relative">
                <Navbar />
            </div>
            {/* Main Content Section */}
            <div className="relative z-10 flex items-center justify-between h-full text-white">
                {/* Left Content */}
                <div className="w-1/2 p-8">
                    <h1 className="text-5xl font-bold mb-4">Cox's bazar</h1>
                    <p className="mb-4 text-lg">
                        Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                    </p>
                    <button>
                        <Link
                            to="/booking"
                            className="bg-[#F9A51A] btn text-white font-bold py-2 px-4 rounded border-none flex items-center gap-2"
                        >
                            Booking <FaArrowRight />
                        </Link>
                    </button>
                </div>

                {/* Right Slider */}
                <div className="w-1/2 p-8">
                    <div className="carousel">
                        <div id="slide1" className="carousel-item relative  w-full">
                            <img
                                src={sajek}
                                className="w-[270px]" />
                            <h2 className="text-xl absolute bottom-2 font-bold px-3">SAJEK</h2>
                            <div className="absolute left-8 top-3/4  -translate-y-1/2 transform flex gap-3">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative  w-full">
                            <img
                                src={sreemongol}
                                className="w-[270px]" />
                            <h2 className="text-xl absolute bottom-2 font-bold px-3">SREEMONGOL</h2>
                            <div className="absolute left-8 top-3/4 -translate-y-1/2 transform flex gap-3">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative  w-full">
                            <img
                                src={sundorbon}
                                className="w-[270px]" />
                            <h2 className="text-xl absolute bottom-2 font-bold px-3">SUNDORBON</h2>
                            <div className="absolute left-8 top-3/4   -translate-y-1/2 transform flex gap-3">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
                >
                {/* Overlay for Opacity */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
        </div>
    )
}

export default Home
