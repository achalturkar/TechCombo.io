// import "./HeroHome.css"
import { Link } from "react-router-dom";
import Social from "/src/components/Social/Social";
import Button from "/src/components/Button/Button";

const HeroHome = () => {

    return (

        <>
            <div className="p-2  flex flex-col justify-start md:items-center w-full md:flex-row md:gap-16">
                <div className="w-full md:w-1/2 pd-2" data-aos="fade-up">
                    <div className=" " >
                        <div className="my-4">
                            <h1 className="text-4xl md:text-5xl font-bold  text-cyan-950	leading-tight">Empowering Talent, Enabling Growth</h1>
                        </div>
                        <div className="">
                            <h6 className="text-lg leading-6 font-normal	 font-inter">Since 2020, we’ve been bridging the gap between businesses and
                                exceptional talent across industries. From providing staffing solutions, executive
                                search, and payroll outsourcing to delivering real-time IT project development, we
                                specialize in serving both IT and non-IT sectors. Whether you need manpower for
                                short-term or long-term needs, or you’re seeking full-time, freelance, or contract
                                roles, we create opportunities for companies to thrive and professionals to grow. Let us
                                unlock new possibilities and drive your success forward.
                            </h6>
                        </div>
                    </div>
                    <br />
                    <div className="w-full gap-8 flex flex-row items-center ">
                        <div><Button /></div>
                        <div> <Social /></div>

                    </div>
                </div>

                <div className=" w-full md:w-1/2 pd-2">

                    {/* <video autoplay="" muted loop playsinline width="100%" height="100%">
                        <source src="/video/dot.mp4" type="video/mp4" />
                    </video> */}

                    <img src="/src/assets/images/recruiter.webp" alt="" />

                </div>
            </div>


        </>

    )


}

export default HeroHome;