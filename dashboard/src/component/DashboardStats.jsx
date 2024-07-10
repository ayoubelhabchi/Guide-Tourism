import { GiForestCamp } from "react-icons/gi";
import { TbArrowGuide } from "react-icons/tb";
import { MdOutlineModeOfTravel } from "react-icons/md";
import PropTypes from 'prop-types';




export default function DashboardStats() {
  return (
    <div className='flex flex-col p-2 lg:pt-2 lg:flex-row lg:gap-4 w-full'>
      <BoxWrapper>
        <div className='flex items-center justify-center lg:justify-start'>
          <TbArrowGuide size={40} className='text-red-500'/>
          <div className='pl-4'>
            <span className='text-red-500 text-2xl pl-8 lg:pl-6 font-bold relative bottom-3'>Total Guides</span>
            <div className='flex items-center text-xl pl-20 lg:pl-20'>
              <strong>25</strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='flex items-center justify-center lg:justify-start'>
          <GiForestCamp size={40} className='text-green-700'/>
          <div className='pl-4'>
            <span className='text-green-700 text-2xl pl-8 lg:pl font-bold relative bottom-3'>Total Campings</span>
            <div className='flex items-center text-xl pl-24 lg:pl-20'>
              <strong>5</strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='flex items-center justify-center lg:justify-start'>
          <MdOutlineModeOfTravel size={40} className='text-purple-500'/>
          <div className='pl-4'>
            <span className='text-purple-500 text-2xl pr-8 lg:pl-6 font-bold relative bottom-3'>Total Tours</span>
            <div className='flex items-center text-xl pl-24 lg:pl-20'>
              <strong>50</strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className='bg-white shadow-md p-4 lg:flex-1 rounded-lg items-center mb-4 lg:mb-0'>{children}</div>;
  // flex
}


BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


