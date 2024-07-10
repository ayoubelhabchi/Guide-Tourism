import { GiForestCamp } from "react-icons/gi";
import { TbArrowGuide } from "react-icons/tb";
import { MdOutlineModeOfTravel } from "react-icons/md";
import PropTypes from 'prop-types';




export default function DashboardGuides() {
  return (

      <BoxWrapper>
        <div className='flex items-center justify-center lg:justify-start w-full' >
          <TbArrowGuide size={40} className='text-red-500'/>
          <div className='pl-4'>
            <span className='text-red-500 text-2xl pl-8 lg:pl-6 font-bold relative bottom-3'>Total Tours</span>
            <div className='flex items-center text-xl pl-20 lg:pl-20'>
              <strong>25</strong>
            </div>
          </div>
        </div>
      </BoxWrapper>

     

  );
}

function BoxWrapper({ children }) {
  return <div className='bg-white shadow-md p-4 lg:flex-1 rounded-lg items-center mb-4 lg:mb-0  w-[800px]'>{children}</div>;
  // flex
  // flex
}


BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


