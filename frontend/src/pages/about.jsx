import React from 'react';
import saharaImage from '../assets/4.jpg';
import elipse from '../assets/Ellipse 626.png';
import bgstyle from '../assets/bg style.png';
import video_sahara from '../assets/sahara.mp4';
import image from '../assets/logoAbout.png';
import im1 from '../assets/im1.jpg';
import Oudlaw_Tetouan from '../assets/Oudlaw_Tetouan.jpg';
import Ozoud_waterfalls from '../assets/Ozoud_waterfalls.jpg';
import Ca_sahara from '../assets/Ca_sahara.png';
import agadir from '../assets/agadir.png';
import ifran from '../assets/ifran.jpg';
import Hercule_Crave from '../assets/Hercule_Crave.jpg';
import ait_Benhaddou from '../assets/ait_Benhaddou.jpg';
import Toubkal from '../assets/Toubkal.jpg';
import atlas_mountain from '../assets/atlas_mountain.jpg';
import Dakhla_Beach from '../assets/Dakhla_Beach.jpg';
import Group from '../assets/Group.png';

const About = () => {
  const imageStyles = {
    backgroundImage: `url(${saharaImage})`,
  };

  const backgroundStyles = {
    elipse: {
      backgroundImage: `url(${elipse})`,
      backgroundSize: 'cover',
    },
    azrou: {
      backgroundImage: `url(${im1})`,
      backgroundSize: 'cover',
    },
    oudlawTetouan: {
      backgroundImage: `url(${Oudlaw_Tetouan})`,
      backgroundSize: 'cover',
    },
    ozoudWaterfalls: {
      backgroundImage: `url(${Ozoud_waterfalls})`,
      backgroundSize: 'cover',
    },
    caSahara: {
      backgroundImage: `url(${Ca_sahara})`,
      backgroundSize: 'cover',
    },
    agadir: {
      backgroundImage: `url(${agadir})`,
      backgroundSize: 'cover',
    },
    ifran: {
      backgroundImage: `url(${ifran})`,
      backgroundSize: 'cover',
    },
    herculeCrave: {
      backgroundImage: `url(${Hercule_Crave})`,
      backgroundSize: 'cover',
    },
    aitBenhaddou: {
      backgroundImage: `url(${ait_Benhaddou})`,
      backgroundSize: 'cover',
    },
    toubkal: {
      backgroundImage: `url(${Toubkal})`,
      backgroundSize: 'cover',
    },
    atlasMountain: {
      backgroundImage: `url(${atlas_mountain})`,
      backgroundSize: 'cover',
    },
    dakhlaBeach: {
      backgroundImage: `url(${Dakhla_Beach})`,
      backgroundSize: 'cover',
    },
  };

  return (
    <>
      <div className="App pb-10">
        <div className="relative flex justify-center items-center w-full h-60 lg:h-screen">
          <img
            src={saharaImage}
            className="absolute top-0 left-0 h-full w-full object-cover"
            alt="Sahara Desert"
          />
          <h1 className="text-white z-50 lg:text-9xl text-5xl font-year">
            About us
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 p-4 lg:p-8">
          <div className="flex justify-center items-center">
            <div className="flex flex-col pb-4 gap-2 lg:gap-3">
              <h1 className="text-3xl lg:text-5xl font-['Volkhov'] font-bold text-blue_fance">
                We Provide You{" "}
                <a className=" text-primary">The Best Moroccan</a> Sightseeing
                Tours
              </h1>
              <p className='lg:text-xl text-sm'>
                Welcome to your gateway to the enchanting world of Moroccan
                sightseeing! Our expertly curated tours offer you the chance to
                explore the vibrant culture, stunning landscapes, and rich
                history of Morocco. From the bustling markets of Marrakech to
                the serene beauty of the Sahara Desert, we provide unparalleled
                experiences that capture the essence of this captivating
                country.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center itemscenter py-3 lg:py-10 lg:h-screen rounded-full border-[3.5px] border-primary">
            <div
                className="relative w-full lg:w-[500px] h-[410px] lg:h-full rounded-full border-2 border-primary overflow-hidden"
                style={{ backgroundImage: `url(${elipse})`, backgroundSize: 'cover' }}
            >
                <img
                className="absolute top-0 left-0 lg:w-[700px] h-[500px] lg:h-[700px] -mt-20 rounded-full object-cover"
                src={bgstyle}
                alt="Background Style"
                />
            </div>
         </div>

        </div>

        <div className="w-full flex justify-center items-center">
          <video
            className="lg:h-[400px] w-full object-cover"
            src={video_sahara}
            autoPlay
            loop
            muted
          ></video>
          <h3 className="font-year absolute text-white text-9xl">
            Sahara
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 p-4 justify-center items-center">
          <div className="flex justify-center pr-6 lg:w-full -mt-16 lg:-mt-20">
            <img
              className="lg:w-full h-full lg:rounded-l-[100px] pb-2"
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col -mt-10 lg:-mt-0 lg:gap-3">
            <h1 className="lg:text-4xl text-primary text-3xl font-bold font-['Volkhov'] capitalize">
              Our Popular Tour Plans
            </h1>
            <p>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium. Et labore harum non nobis ipsum eum
              molestias mollitia et corporis praesentium a laudantiumh.
            </p>

            <div className="py-4 lg:py-8">
              <div className="flex justify-center">
                <img
                  className="w-[400px] lg:w-[600px] h-full"
                  src={Group}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:-mt-14">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-['Volkhov'] capitalize pb-4 lg:pb-8">
              Our Camping Packages
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6 px-2 lg:px-8">
          <div className="grid gap-2 lg:gap-4">
            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.oudlawTetouan}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between text-Poppins text-white p-4">
                    <div className="flex gap-2">
                      <p>Oudlaw</p>
                      <p>Tetouan</p>
                    <p>440 MAD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.aitBenhaddou}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Ait</p>
                      <p>Benhaddou</p>
                    </div>
                    <p>750 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.ozoudWaterfalls}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Ozoud</p>
                      <p>Waterfalls</p>
                    </div>
                    <p>750 MAD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.caSahara}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Ca</p>
                      <p>Sahara</p>
                    </div>
                    <p>550 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.toubkal}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Toubkal</p>
                      <p>National</p>
                    </div>
                    <p>520 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.agadir}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Agadir</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.ifran}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Ifran</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.atlasMountain}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Atlas</p>
                      <p>Mountain</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.herculeCrave}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Hercule</p>
                      <p>Crave</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.dakhlaBeach}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Dakhla</p>
                      <p>Beach</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div
                className="bg-center h-full w-full rounded-xl"
                style={backgroundStyles.azrou}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Azrou</p>
                      <p>Forest</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] flex">
              <div className="bg-center h-full w-full rounded-xl">
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-between p-4 text-Poppins text-white">
                    <div className="flex gap-2">
                      <p>Azrou</p>
                      <p>Forest</p>
                    </div>
                    <p>440 MAD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
