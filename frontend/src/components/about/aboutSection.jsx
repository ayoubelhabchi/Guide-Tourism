
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import about from '../../assets/souk5.jpg'



const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container pt-6">
      <section className="flex items-center justify-center mb-3 relative gap-6 px-1.5"  >
        <div className="px1" data-aos="fade-right">
          <img
            src={about}
            alt="Desert"
            className=" w-[500px] h-[340px] lg:h-[460px] lg:w-full rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-2/4 flex flex-col lg: lg:mb12" data-aos="fade-up">
          {/* <h2 className="text-2xl lg:text-3xl font-bold text-primary lg:pb-4 ">Information</h2> */}
          <h3 className="lg:text-4xl text-xl font-semibold pb-1.5">
            What is “Journey Tour & Travel“?
          </h3>
          {/* <br></br> */}
          <p className="text-sm lg:text-xl mb-4 textjustify">
            We believe interaction with the local people is what makes a trip memorable. No matter what cultural background, religion, race, or belief, there will always be overlapping interests. By interacting with locals, our perspectives on the world will broaden, a better understanding emerges, and friends will be made.
          </p>
          <Link to="/about">
          <button  className="bg-primary rounded-full shadow lg:h-12 h-8 lg:px-6 px-2 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary relative z-10">
            Read More
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
