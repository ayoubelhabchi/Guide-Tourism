
import { useState } from 'react';

import imgheader from'../assets/landscapes.jpeg'


import ProgressSteps from '.././components/steps/BookingSteps';
import Step1 from '.././components/steps/informationTours';
import Step2 from '.././components/steps/guides';
import Step3 from '.././components/steps/planTours';
// import Step4 from '.././components/steps/locationTours';

const steps = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
  // {
  //   step: 4,
  // }
];
const Landscapes = () => {
  const [currentStep, setCurrentStep] = useState(1);


  const bgheadertour = {
    backgroundImage: `url(${imgheader})`,
    backgroundSize: 'cover',


  };
  const renderStep = (step, nextStep, prevStep, prev2Step,prev3Step) => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep}  />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} prev2Step={prev2Step} />;
      // case 4:
      //   return <Step4 nextStep={nextStep} prevStep={prevStep} prev2Step={prev2Step}  prev3Step={prev3Step}  />;
      // default:
        return null;
    }
  };

  return (
   

      <div className="App">
        <div className="relative">

          <div className="text-white h-screen flex items-center justify-center" style={bgheadertour}>

            <div className=" max-w-xl">
              <h1 className="lg:text-9xl text-7xl text-nowrap font-year text-center capitalize">Landscapes</h1>
            </div>
          </div>
          <div className="  flex justify-center  ">


            <div className=" shadow-2xl w-[900px]  max-h-[950px]  bg-white relative mt-6  -top-[50px] ">

              <ProgressSteps steps={steps} renderStep={renderStep} />




              
              
              
            </div></div>
        </div>

      </div>

    


  );
}

export default Landscapes;