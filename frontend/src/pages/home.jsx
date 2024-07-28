  import  { useEffect } from 'react';
  import Hero from "../components/Hero/hero";
  import About from "../components/about/aboutSection";
  import Component from "../components/review/testmonial"
  import SwipperHome from '../components/swipper/swipper'; 
  import Aos from 'aos';
  import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import HomeSearch from '../components/HomeSearch/HomeSearch';
  const data1 = [
    {
      circleimage: "/img_ellipse_625.png",
      title: "Private guided tours",
      description:
        "No strangers on your tour.<br />It’s just you and your local host.",
    },
    {
      circleimage: "/img_ellipse_626.png",
      title: "Responsible",
      description:
        "Our tours are designed with<br />people, places & the planet in mind",
    },
    {
      circleimage: "/img_ellipse_627.png",
      title: "100% Customizable",
      description:
        "Let your local host tailor the tour<br />completely to your wishes.",
    },
  ];

  const data = [
    { 
      explorenature: "/img_line_3.svg", 
      explorenature1: "Explore Nature" ,
      backgroundImg: "/camping.jpg" 
    },
    { 
      explorenature: "/img_line_8.svg", 
      explorenature1: "Explore Cities" ,
      backgroundImg: "/cities.jpg"
    },
  ];

  const Home = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
    return (
      <>
        <Hero />
        <About />
        
        <div className="flex flex-col items-center lg:gap-10 gap-4 bg-primary/20 px-12 p-3 lg:p-10 mt-20">
            <p className="lg:text-4xl text-xl text-center font-bold text-primary w-">
                Why you should book at Journey for Tours and Travels ?
            </p>
          <div className="lg:flex-row flex flex-col justify-center lg:gap-10 gap-4">
            {data1.map((d, index) => (
              <div key={"listdescription" + index} className="flex flex-col items-center gap3"  data-aos="zoom-out">
                  <img src={d.circleimage} className="lg:w-20 lg:h-20 w-12 h-12 rounded-full" alt="Icon"/>
                    <p className="lg:text-lg text-sm font-bold text-center text-black-900">
                      {d.title}
                    </p>
                  <p className="lg:text-lg text-sm text-center font-justify text-black-900" dangerouslySetInnerHTML={{ __html: d.description }} ></p>
              </div>
            ))}
          </div>
        </div>


        {/* Packages */}
        {/* <div className="flex w-full lg:p-2 gap-2 ">         
          {data.map((d, index) => (
            <div key={"desktopOne" + index} className="flex flex-col justify-center items-center w-full bg-contain bg-n-repeat lg:h-[220px] h24 md:p-5 lg:rounded-[40px] border-primary lg:border2 pb2" style={{ backgroundImage: `url(${d.backgroundImg})` }} >
              <div className="relative h-[60px] self-stretch mb-4 " data-aos="zoom-in">
                <img src={d.explorenature} alt="explore_nature" className="absolute bottom-[9.44px] right-[0.00px] m-auto h-[15px] w-[46%] md:w-auto " />
                <div className="absolute bottom-0 left-0 right-0 top-4 flex justify-center items-center">
                  <div className="myauto flex flex-col items-center">
                    <h1 className="text-lg lg:text-4xl  tracking-[1.80px] font-volk font-bold text-white">
                      Promotion
                    </h1>
                    <h2 className="text-lg md:text-5xl mt[-3px] text-white font-year fontbold">
                      {d.explorenature1}
                    </h2>
                  </div>
                </div>
              </div>
              <Link to="/tour">

              <button
                // shape="round"
                className="bg-primary rounded-full shadow lg:h-10 lg:px-6 px-2 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-lg font-semibold transition-bg hover:border hover:border-primary mb-2 lg:mt-5" data-aos="zoom-in">
                Explore
              </button>
              </Link>
            </div>
          ))}
        </div> */}
        {/* end Packages */}
        <SwipperHome />
        <HomeSearch/>
      <Component />
      </>
    );
  };

  export default Home;
