
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';




const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-1 pt-15">
      <section className="flex flex-col md:flex-row items-center justify-center mb-3 relative"  data-aos="fade-up">
        <div className="md:pt-6 md:mr-6 mb-6 md:mb-0">
          <img
            src="/img_rectangle_19367.png"
            alt="Desert"
            className="h-auto md:h-[500px] max-w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl mb-4 text-primary">Information</h2>
          <h3 className="text-4xl mt-8 font-Volkhov font-bold text-secondaire">
            What is “Journey Tour & Travel“?
          </h3>
          <br></br>
          <p className="text-sm mb-4 text-justify">
            We believe interaction with the local people is what makes a trip memorable. No matter what cultural background, religion, race, or belief, there will always be overlapping interests. By interacting with locals, our perspectives on the world will broaden, a better understanding emerges, and friends will be made.
          </p>
          <button  className="bg-primary rounded-full shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary relative z-10">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
