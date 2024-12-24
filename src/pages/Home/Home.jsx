import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import HeroHome from "../../components/HeroHome/HeroHome";
import Journey from "../../components/Journey/Journey";
import Purpose from "../../components/Purpose/Purpose";
import Slider from "../../components/Slider/Slider";

const Home = () =>{

    return(

      <>
       <Navbar />

       <main>

           <section className="mt-16 md:mt-44  md:px-44">
              <HeroHome />
           </section>

           <section className="mt-8 pt-4 md:mt-16 md:px-44 ">
              <Journey />
           </section>

           <section className="mt-8 pt-4 md:mt-16 md:px-44 bg-slat-100">
              <Purpose />
           </section>

           <section className="mt-8 pt-4 md:mt-16 md:px-44 mb-8 bg-slat-200">
              <Slider />
           </section>

       </main>

      
      <Footer />
      
      </>


    );
}

export default Home;