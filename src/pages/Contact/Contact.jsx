import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import ContactForm from "/src/components/ContactForm/ContactForm.jsx";
import ContactDetail from "/src/components/ContactDetail/ContactDetail.jsx";

const Contact = () => {
  return (
    <div className="">
      <Navbar />
      <section className="relative w-full h-96 bg-cover bg-center object-fit  bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/images/earth.webp)' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins">Get In Touch</h1>
          <p className="text-center text-md text-white font-poppins"> TechCombo is ready to provide the right solution according to your needs</p>
        </div>
      </section>

      <section className="relative  md:-mt-32 flex justify-center">
        <div className=" p-8 w-11/12 md:w-8/12 lg:w-12/12">
          <ContactDetail />
        </div>
      </section>

      <section className="mt-4 px-4 md:px-20 lg:px-40 ">
        <ContactForm />
      </section>

      <section >
      <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29775.250398551252!2d79.00207039770665!3d21.11630149633991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff5674e69c9%3A0x12a9cff078a1d491!2sDronacharya%20Nagar%2C%20Parsodi%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1729175369310!5m2!1sen!2sin"
                    width="100%" height="380" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" >
                </iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
