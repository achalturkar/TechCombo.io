import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const Purpose = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const planData = [
        {
            title: "Our Mission",
            img: "/src/assets/images/mountain.webp",
            head: "Empowering Growth and Innovation",
            desc: "At TechCombo, we empower businesses with tailored talent solutions and innovative services while creating meaningful opportunities for professionals to grow and succeed.",
        },
        {
            title: "Our Vision",
            img: "/src/assets/images/bulb.webp",
            head: "A Vision for Excellence",
            desc: "To be a trusted leader in workforce solutions and IT project development, driving innovation, efficiency, and sustainable growth for businesses and professionals.",
        },
        {
            title: "Our Value",
            img: "/src/assets/images/dia.webp",
            head: "Core Values That Inspire Trust",
            desc: "At TechCombo, we uphold excellence, integrity, innovation, collaboration, and opportunity delivering quality services, fostering trust, embracing technology, building partnerships, and empowering growth for all.",
        },
        {
            title: "Our Goal",
            img: "/src/assets/images/archery.webp",
            head: "Goals That Drive Success",
            desc: "To lead in staffing, outsourcing, and IT project development by connecting businesses with top talent, offering diverse career opportunities, and fostering growth through impactful solutions.",
        },
    ];

    return (
        <section className="sec-margin ">
            <div className="text-center mb-8" data-aos="fade-up">
                <h2 className=" section-head text-4xl font-extrabold font-poppins mb-4">What Drives Us?</h2>
                <p className="text-xl font-medium text-gray-600 font-noto">
                "Learn About the Principles Driving Our Commitment to Excellence"
                </p>
            </div>

            <div className=" flex flex-col-reverse  gap-8 " data-aos="fade-up">
                <div className="mt-4">
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {planData.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <div className=" bg-gray-100 rounded-xl flex flex-row items-center gap-4">
                                    <div className="w-1/3 flex justify-center  items-center text-center">
                                    <img
                                        className={`w-40 h-40 object-contain  ${activeIndex === index ? "scale-110" : ""
                                            }`}
                                        src={plan.img}
                                        alt={plan.title}
                                    />                                    </div>

                                    <div className="flex flex-col w-2/3">
                                        <h2 className="text-2xl font-semibold antialiased font-serif text-cyan-900	">{plan.head}</h2>
                                        <p className="text-gray-600">{plan.desc}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {planData.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={() => setActiveIndex(index)}
                                    className={`p-4 rounded-xl shadow-md flex flex-col items-center cursor-pointer max-h-48 min-h-40 md:min-h-36 ${activeIndex === index
                                        ? "bg-green-200 scale-105 border-2 "
                                        : "bg-gray-100 hover:scale-105 hover:bg-white"
                                        }`}
                                >
                                    <img
                                        className={`w-16 h-16 object-contain  ${activeIndex === index ? "scale-110" : ""
                                            }`}
                                        src={plan.img}
                                        alt={plan.title}
                                    />
                                    <h4 className="text-center font-semibold text-base font-medium md:text-xl">{plan.title}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Purpose;
