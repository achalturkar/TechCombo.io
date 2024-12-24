import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const Journey = () => {

    const journeyData = [
        { year: "2020 - The Beginning", text: "Established with a focus on IT staffing and solutions, aiming to deliver efficient and reliable services.", image: "/src/assets/images/man1.webp" },
        { year: "2021 - Building Momentum", text: "Introduced contract-based hiring models and strengthened partnerships with freelancers.", image: "/src/assets/images/man2.webp" },
        { year: "2022 - Expanding Horizons", text: "Broadened operations to cover non-IT sectors and introduced payroll outsourcing solutions.", image: "/src/assets/images/man3.webp" },
        { year: "2023 - Achieving Milestones", text: "Reached 100+ clients across IT and non-IT industries, building lasting partnerships.", image: "/src/assets/images/man4.webp" },

    ];

    return (

        <div>
            <div className="items-center mb-12" data-aos="fade-up">
                <h2 className=" text-center text-4xl font-extrabold font-poppins mb-4">Our Journey</h2>
                <p className="text-xl font-medium text-gray-600 font-noto text-center">
                    "Challenges shaped us, milestones inspired us, and our vision continues to drive us forward."
                </p>
            </div>


            <Swiper
                modules={[Pagination, Navigation]}
                // slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    470: {
                        slidesPerView: 2,
                    },
                    894: {
                        slidesPerView: 3,
                    }
                }}
                spaceBetween={20}
                pagination={{ clickable: true }}
                navigation={true}
                loop={false}
                className="mySwiper"
            >
                {journeyData.map((journey, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center overflow-hidden bg-white rounded-2xl min-h-max hover:-translate-y-2" data-aos="fade-up">
                            <div className="w-full min-h-75 items-center justify-center object-cover">
                                <img className="w-full h-auto m-2 object-cover " src={journey.image} alt={`Journey ${journey.year}`} />

                            </div>
                            <hr />
                            <div className="p-4 h-1/2">
                                <h3 className="font-bold text-lg font-poppins text-blue-700 text-center">{journey.year}</h3>
                                <p className="text-black text-md font-noto">{journey.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    );

}

export default Journey;