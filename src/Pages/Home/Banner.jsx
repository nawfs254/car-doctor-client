import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Home.css'

const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl my-10">

            <div id="slide1" className="carousel-item flex-col lg:flex-row items-center w-full lg:items-end justify-between h-[600px] md:h-[500px] lg:h-[600px]">
                <div className="text-white text-center lg:text-left space-y-5 h-full flex flex-col justify-center mx-4 p-5 lg:p-10">
                    <h1 className="text-4xl lg:text-6xl font-bold w-full lg:w-3/5">Affordable Price For Car Servicing</h1>
                    <p className="text-base lg:text-lg w-full lg:w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex flex-col md:flex-row gap-5 mx-auto lg:mx-0 text-base md:text-lg">
                        <button className="bg-orange border-orange border-2 text-white rounded-[5px] px-5 py-4 hover:bg-transparent transition-all">Disocver More</button>
                        <button className="border-white border-2 text-white rounded-[5px] px-5 py-4 hover:bg-white hover:text-black transition-all">Disocver More</button>

                    </div>
                </div>

                <div className="flex gap-5 m-5">
                    <a href="#slide4" className="btn border-2 border-[#FFFFFF80] btn-circle bg-[#FFFFFF33] hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]"><FaArrowLeft color='#FFF' /></a>
                    <a href="#slide2" className="btn border-3 border-orange btn-circle bg-[#FF381180] hover:bg-orange hover:border-orange"><FaArrowRight color='#FFF'/></a>
                </div>
            </div>

            <div id="slide2" className="carousel-item flex-col lg:flex-row items-center w-full lg:items-end justify-between h-[600px] md:h-[500px] lg:h-[600px]">
                <div className="text-white text-center lg:text-left space-y-5 h-full flex flex-col justify-center mx-4 p-5 lg:p-10">
                    <h1 className="text-4xl lg:text-6xl font-bold w-full lg:w-3/5">Affordable Price For Car Servicing</h1>
                    <p className="text-base lg:text-lg w-full lg:w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex flex-col md:flex-row gap-5 mx-auto lg:mx-0 text-base md:text-lg">
                        <button className="bg-orange border-orange border-2 text-white rounded-[5px] px-5 py-4 hover:bg-transparent transition-all">Disocver More</button>
                        <button className="border-white border-2 text-white rounded-[5px] px-5 py-4 hover:bg-white hover:text-black transition-all">Disocver More</button>

                    </div>
                </div>

                <div className="flex gap-5 m-5">
                    <a href="#slide1" className="btn border-2 border-[#FFFFFF80] btn-circle bg-[#FFFFFF33] hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]"><FaArrowLeft color='#FFF' /></a>
                    <a href="#slide3" className="btn border-3 border-orange btn-circle bg-[#FF381180] hover:bg-orange hover:border-orange"><FaArrowRight color='#FFF'/></a>
                </div>
            </div>

            <div id="slide3" className="carousel-item flex-col lg:flex-row items-center w-full lg:items-end justify-between h-[600px] md:h-[500px] lg:h-[600px]">
                <div className="text-white text-center lg:text-left space-y-5 h-full flex flex-col justify-center mx-4 p-5 lg:p-10">
                    <h1 className="text-4xl lg:text-6xl font-bold w-full lg:w-3/5">Affordable Price For Car Servicing</h1>
                    <p className="text-base lg:text-lg w-full lg:w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex flex-col md:flex-row gap-5 mx-auto lg:mx-0 text-base md:text-lg">
                        <button className="bg-orange border-orange border-2 text-white rounded-[5px] px-5 py-4 hover:bg-transparent transition-all">Disocver More</button>
                        <button className="border-white border-2 text-white rounded-[5px] px-5 py-4 hover:bg-white hover:text-black transition-all">Disocver More</button>

                    </div>
                </div>

                <div className="flex gap-5 m-5">
                    <a href="#slide2" className="btn border-2 border-[#FFFFFF80] btn-circle bg-[#FFFFFF33] hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]"><FaArrowLeft color='#FFF' /></a>
                    <a href="#slide4" className="btn border-3 border-orange btn-circle bg-[#FF381180] hover:bg-orange hover:border-orange"><FaArrowRight color='#FFF'/></a>
                </div>
            </div>

            <div id="slide4" className="carousel-item flex-col lg:flex-row items-center w-full lg:items-end justify-between h-[600px] md:h-[500px] lg:h-[600px]">
                <div className="text-white text-center lg:text-left space-y-5 h-full flex flex-col justify-center mx-4 p-5 lg:p-10">
                    <h1 className="text-4xl lg:text-6xl font-bold w-full lg:w-3/5">Affordable Price For Car Servicing</h1>
                    <p className="text-base lg:text-lg w-full lg:w-4/5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex flex-col md:flex-row gap-5 mx-auto lg:mx-0 text-base md:text-lg">
                        <button className="bg-orange border-orange border-2 text-white rounded-[5px] px-5 py-4 hover:bg-transparent transition-all">Disocver More</button>
                        <button className="border-white border-2 text-white rounded-[5px] px-5 py-4 hover:bg-white hover:text-black transition-all">Disocver More</button>

                    </div>
                </div>

                <div className="flex gap-5 m-5">
                    <a href="#slide3" className="btn border-2 border-[#FFFFFF80] btn-circle bg-[#FFFFFF33] hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]"><FaArrowLeft color='#FFF' /></a>
                    <a href="#slide1" className="btn border-3 border-orange btn-circle bg-[#FF381180] hover:bg-orange hover:border-orange"><FaArrowRight color='#FFF'/></a>
                </div>
            </div>

            


            {/* <div className="text-white space-y-5  bg-[#000] h-full">
                        <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex gap-5">
                            <button className="btn bg-orange border-none text-white">Disocver More</button>
                            <button className="btn bg-orange border-none text-white">Disocver More</button>

                        </div>
                    </div> */}
        </div>
    );
};

export default Banner;