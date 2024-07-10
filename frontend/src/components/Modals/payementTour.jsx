import { CiCalendarDate } from "react-icons/ci";
// import { FaPeopleGroup } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
// import background2 from '../../assets/camping1.jpg';
// import profile from '../../assets/Toubkal.jpg';
// import riad11 from '../../assets/riad11.jpg'
// import hero2 from '../../assets/hero2.jpg'
// import mousque from '../../assets/mousque.jpg'
import tanger from "../../assets/tanger.jpeg";
// import riad15 from '../../assets/riad15.jpg'
import Photo1 from "../../assets/guide2.jpg";
import { useState, useEffect, useRef } from "react";

function PayementTour({ onCancel }) {
  const modalRef = useRef();
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCancel();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCancel]);

  const handleCardNumberChange = (event) => {
    const input = event.target.value;
    const formattedInput = input.replace(/\D/g, "");
    const spacedInput = formattedInput.replace(/(\d{4})/g, "$1 ").trim();
    const truncatedInput = spacedInput.substring(0, 19);
    setCardNumber(truncatedInput);
  };

  const handleExpirationDateChange = (event) => {
    let input = event.target.value;
    
    input = input.replace(/\D/g, "");
    
    const formattedInput = input.replace(/^(\d{2})(\d{0,2})/, "$1/$2").trim();
    setExpirationDate(formattedInput);
  };

  const handleCvvChange = (event) => {
    let input = event.target.value;
    // Remove non-numeric characters
    input = input.replace(/\D/g, "");
    // Limit to 3 characters
    const truncatedInput = input.substring(0, 3);
    setCvv(truncatedInput);
  };

  return (
    <>
      <div className="flex justify-center items-center  fixed left-0 top-0 w-[100%] h-[100%]   bg-black/40  inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
        <div
          ref={modalRef}
          className="  w-[800px] h-[600px] relative flex flex-rows-2  bg-white shadow-2xl rounded-2xl ">
          <div className=" px-[50px] py-40 grid grid-cols-2  ">
            <div className=" py-[10px] w-[350px] h-[300px]  ">
              <h1 className=" text-2xl text-primary">Checkout</h1>
              <p className=" py-[10px] text-2xl font-bold">Payement method</p>
              <form className="space-y-4">
                <div>
                  <label className="block font-bold mb-2" htmlFor="card-number">
                    Card Number
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 p-3"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-bold mb-2"
                      htmlFor="expiration-date"
                    >
                      Expiration Date
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 p-3"
                      id="expiration-date"
                      placeholder="MM/YY"
                      type="text"
                      value={expirationDate}
                      onChange={handleExpirationDateChange}
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-2" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 p-3"
                      id="cvv"
                      placeholder="123"
                      type="password"
                      value={cvv}
                      onChange={handleCvvChange}
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
                  type="submit"
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>

          <div className=" px-5 py-4 relative pl-1.5 ">
            <div className=" w-[350px] h-full bg-[#e5edfa] rounded-2xl p-2  ">
              <div className="lg:grid lg:grid-cols-1 gap-2 text-center">
                <div className=" px-4 ">
                  <img
                    src={tanger}
                    alt=""
                    className="w-[350px]   lg:h-[150px] rounded-t-2xl"
                  />
                </div>

                <div className="relative flex justify-center -top-12">
                  <img
                    src={Photo1}
                    alt=""
                    className="rounded-full h-24 w-24 shadow-2xl "
                  />
                </div>

                <div className="relative -top-11">
                  <h1 className="lg:text-xl font-semibold">
                    Tour : Telouet Kasbah
                  </h1>
                  <h3 className="lg:text-lg text-primary font-year ">
                    With Maria
                  </h3>
                  <div className=" justify-between p-2 lg:px-10 ">
                    <div className=" flex justify-between  pb-2 text-black">
                      <h2 className="flex items-center ">
                        <CiCalendarDate size={20} className="mr-1" />1 Mai
                      </h2>
                      <h2 className="flex items-center">
                        <IoPricetagsOutline size={20} className="mr-2" />
                        Members
                      </h2>
                    </div>
                    <div className="bg-white/90 rounded-xl h-48 text-left p-2">
                      <h1 className="text-lg font-semibold">Payment details</h1>
                      <hr />
                      <div className="flex justify-between pb-20 pt-6">
                        <h1 className="font-semibold">Booking</h1>
                        <h2>1500Dh</h2>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <h1 className="font-semibold">Total</h1>
                        <h1 className=" font-semibold">1500 Dh</h1>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    {/* <button
                      className="bg-primary h-9 text-white text-center  font-inter font-bold lg:px-24 
                                                 p-2 hover:bg-blue-300 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-100 rounded"
                      onClick={() => onCancel()}
                    >
                      Pay Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default PayementTour;
