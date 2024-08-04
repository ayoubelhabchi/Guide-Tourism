import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbArrowGuide } from "react-icons/tb";
import PropTypes from 'prop-types';
import { fetchTours } from '../../features/Slices/guideSlice';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows the chart to use the full width and height of its container
  plugins: {
    legend: {
      display: true,
      position: 'top', // Legend positioning
      align: 'center',
      fullSize: true, // Ensures the legend takes up the full available space
    
    },
    title: {
      display: true,
      text: 'Your Tours Statistiques',
      font: {
        size: 20, // Adjust font size
        weight: 'bold', // Make the font bold
      },
      align: 'center',
    },
  },
};



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function DashboardGuides() {
  const dispatch = useDispatch();
  const Count = useSelector((state) => state.guides.tourCount);
  const tours = useSelector((state) => state.guides.guideTours);
 console.log("fff",Count);
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  
  const data = {
    labels,
    datasets: [
      {
        label: 'Tours',
        data: [3,10,6,10,4,15,23,7,11,20,13,6], 
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Booking',
        data: [0,4,3,7,4,10,21,5,9,17,10,2], 
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className=' '>
      <div className=' flex gap-2 w-full'>
        <div className="bg-white text-center shadow-lg rounded-3xl w-full flex flex-col justify-center items-center text-nowrap lg:p-4 p-2 overflow-hidden">
          <div className="flexjustifycenter">
            <div className=" flex justify-center j">
            <TbArrowGuide className="text-rose-400 lg:text-[40px] text-[0px]" />
              <span className="text-rose-400 lg:text-2xl font-bold lg:pl-4">Total Tours</span>
            </div>
          </div>
              <div className="lg:text-2xl">
                <strong className="text-primary">{Count}</strong>
              </div>
        </div>
        <div className="bg-white text-center shadow-lg rounded-3xl w-full flex flex-col justify-center items-center text-nowrap lg:p-4 p-2 overflow-hidden">
          <div className="flexjustifycenter">
            <div className=" flex justify-center j">
            <TbArrowGuide className="text-green-400 lg:text-[40px] text-[0px]" />
              <span className="text-green-400 lg:text-2xl font-bold lg:pl-4">Total Bookings</span>
            </div>
          </div>
              <div className="lg:text-2xl">
                <strong className="text-primary">{Count}</strong>
              </div>
        </div>
        <div className="bg-white text-center shadow-lg rounded-3xl w-full flex flex-col justify-center items-center text-nowrap lg:p-4 p-2 overflow-hidden">
          <div className="flexjustifycenter">
            <div className=" flex justify-center j">
            <TbArrowGuide className="text-yellow-400 lg:text-[40px] text-[0px]" />
              <span className="text-yellow-400 lg:text-2xl font-bold lg:pl-4">Total Reviews</span>
            </div>
          </div>
              <div className="lg:text-2xl">
                <strong className="text-primary">{Count}</strong>
              </div>
        </div>

        

      </div>

      <div className=' mt-4 hmax h-[340px] bg-white shadow-2xl rounded-xl'>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className='bg-white shadow-md p4 lg:flex text-nowrap rounded-lg itemscenter mb-4 lg:mb0 w-min w[700px]'>{children}</div>;
}

BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};