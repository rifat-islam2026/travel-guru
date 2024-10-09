import backgroundImg from "../../assets/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";

function Booking() {
    return (
        <div>
            <div className="relative min-h-screen">
                <div className="z-10 relative">
                    <Navbar />
                </div>
                {/* Main Content Section */}
                <div className="relative z-10 flex items-center justify-around h-full text-white">
                    {/* Left Content */}
                    <div className="w-1/2 p-8">
                        <h1 className="text-5xl font-bold mb-4">Cox's bazar</h1>
                        <p className="mb-4 text-lg">
                            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                    </div>
                    {/* Right form */}
                    <div className="bg-white text-black w-[400px] p-5 mt-10">
                        <form>
                            <label for="origin" className="block mb-3">Origin</label>
                            <select
                                className="bg-stone-200 input input-bordered w-full max-w-xs"
                                id="origin"
                                name="origin">
                                <option value="cox's_bazar">Cox's Bazar</option>
                                <option value="sreemongol">Sreemongol</option>
                            </select>
                            <br /> <br />
                            <label
                                className="block mb-3"
                                for="destination">Destination</label>
                            <select
                                className="bg-stone-200 input input-bordered w-full max-w-xs"
                                id="destination"
                                name="destination">
                                <option value="cox's_bazar">Cox's Bazar</option>
                                <option value="sreemongol">Sreemongol</option>
                            </select>
                            <br /> <br />
                            <div className="flex gap-2">
                                <div className="flex flex-col">
                                    <label for="from_date">From</label>
                                    <input
                                        className="input bg-stone-200"
                                        type="date"
                                        id="from_date"
                                        name="from_date" />
                                </div>
                            
                                <div className="flex flex-col">
                                    <label for="to_date">To</label>
                                    <input
                                        className="input bg-stone-200"
                                        type="date"
                                        id="to_date"
                                        name="to_date" />
                                </div>
                            </div>
                            <br /><br />
                            <button
                                className="bg-[#F9A51A] btn text-white font-bold py-2 px-4 rounded border-none w-full"
                            >Booking </button>
                        </form>
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
        </div>
    )
}

export default Booking
