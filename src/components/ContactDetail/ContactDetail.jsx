import Social from "/src/components/Social/Social";
import "./ContactDetail.css"



const ContactDetail = () =>{

   return(

    <div className="contact-info gap-4">
                    <div className="box" data-aos="fade-up">
                        <div className=" circle-container cont-box down-contact-detail bg-gradient-to-b from-green-300 to-white">
                            <div className="cont-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="cont-dif">
                                <div className="contact-ways">
                                    Phone
                                </div>
                                <div className="cont-info-1 font-semibold">
                                    +91 9999999999
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="circle-container cont-box up-contact-detail bg-gradient-to-b from-cyan-500 to-white">
                            <div className="cont-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Email
                                </div>
                                <div className="cont-info-1 font-semibold">
                                    <a to="mailto:hr@techcombo.in" target="_blank"
                                        className="mail-link cursor">hr@techcombo.in</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="box" data-aos="fade-up" >
                        <div className="circle-container cont-box down-contact-detail bg-gradient-to-b from-green-300 to-white" >
                            <div className="cont-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Address
                                </div>
                                <div className="cont-info-1 font-semibold">
                                    Dronacharya Nagar, Nagpur
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="box " data-aos="fade-up">
                        <div className="circle-container cont-box up-contact-detail bg-gradient-to-b from-cyan-500 to-white">
                            <div className="cont-icon">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Follow us
                                </div>
                                <div >
                                   <Social />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

   );

}

export default ContactDetail;