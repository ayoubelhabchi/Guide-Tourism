import CampingSlids from '../components/SlidingImags/CampingSlids'

//Process components
import ProgressSteps from '../components/steps/BookingSteps';
import Step1 from '../components/steps/cards';
import Step2 from '../components/steps/information';
import Step3 from '../components/steps/Payment';

const steps = [
    {
      step: 1,
    },
    {
      step: 2,
    },
    {
      step: 3,
    }
  ];



const Camping = () => {

  

    const renderStep = (step, nextStep, prevStep) => {
        switch (step) {
          case 1:
            return <Step1 nextStep={nextStep}  />;
          case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} />;
          case 3:
            return <Step3 nextStep={nextStep} prevStep={prevStep} />;
          default:
            return null;
        }
      };
    



    return (
        <div className=" ">
            <section className="bg-cover bg-center h-[500px] flex items-center justify-center relative">
                {/* <img src={camping} alt="Desert" className="object-cover w-full h-full" /> */}
                <CampingSlids/>
            </section>

            <section className=' pb-24 flex justify-center relative'>
              <div className='bg-white pb-6 top-8 max-h-[750px] shadow-2xl lg:w-4/6 relative transform'>
                <ProgressSteps steps={steps} renderStep={renderStep} />
                
              </div>
            </section>


        </div>
    );
}

export default Camping;
