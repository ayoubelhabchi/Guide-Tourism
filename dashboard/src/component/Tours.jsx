import { useEffect, useState , useContext} from 'react';
import { MdPersonSearch, MdDeleteForever, MdEditSquare } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../features/userSlices';
import { AuthContext } from '../Auth/AuthContext';
import AddCamping from '../Modals/AddCamping'
import DeleteCamping from '../Modals/DeleteCamping';
import UpdateCamping from '../Modals/UpdateCamping';


export default function Users() {
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lastClicked, setLastClicked] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours);
  const { token } = useContext(AuthContext);

  console.log(tours);
  useEffect(() => {
    if (token) {
      dispatch(fetchTours(token));
    }
  }, [dispatch, token, modalDelete, modalAdd, modalUpdate]);

  const filteredUsers = tours.filter(user =>
    user.title.includes(searchTerm)
  );
  const handleEdit = (userId) => {
    setSelectedUserId(userId);
    setModalUpdate(true);
  };
  
  const handleDeleteModalOpen = (userId) => {
    setSelectedUserId(userId);
    setModalDelete(true);
  };

  const handleItemsPerPageChange = (e) => {
    setCurrentPage(1);
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = tours ? Math.min(indexOfFirstItem + itemsPerPage, tours.length) : 0;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    if (currentItems.length === itemsPerPage) {
      setCurrentPage(currentPage + 1);
      setLastClicked('next');
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setLastClicked('previous');
    }
  };

  return (
    <div className='bg-[#FAF8F8] h-[480px] m-2 mt-1 shadow-md rounded-md relative'>
      <div className='flex justify-between p-2 items-center'>
        <h1 className="text-2xl font-bold text-[#6499E9]">Tours</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <MdPersonSearch size={20} className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
            <input
              className='rounded-lg pl-8 w-[200px] lg:w-[300px]'
              type="text"
              placeholder='Search by title..'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        <button onClick={() => setModalAdd(true)} className='font-bold text-white rounded-full bg-[#6499E9] p-1'>
          Create Tour
        </button>
        {modalAdd && < AddCamping closeModal={() => setModalAdd(false)} />}
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tours found.</p>
      ) : (
        <div className=" overflow-x-auto rounded-[16px] overflow-hidden m-2">
          <table className="w-full table-auto">
            <thead>
              <tr className='bg-[#FFFFFF] text-left '>
                <td>
                  <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                </td>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Title</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Guide Id</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Description</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Picture</th>
                <th className="py-1  font-bold text-[16px] text-[#2E5D9F]">Category</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Duration</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Price</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Ations</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <tr key={index} className='bg-white border-b border-t text-left'>
                  <td>
                    <button
                      className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 ${selectedUserId === user._id ? 'bg-black border-black' : ''}`}
                      onClick={() => setSelectedUserId(selectedUserId === user._id ? null : user._id)}
                    ></button>
                  </td>
                  <td className="py-1.5">{user.title}</td>
                  <td className="py-1.5">{user.guide_id}</td>
                  <td className="py-1.5">{user.image}</td>
                  <td className="py-1.5">{user.description}</td>
                  <td className="py-1.5">{user.duration}</td>
                  <td className="py-1.5">{user.category}</td>
                  <td className="py-1.5">{user.price}</td>
                  <td className=' pt-2 items-center justify-center'>
                    <button onClick={() => handleDeleteModalOpen(user._id)} className='text-xl text-red-600 pr-2'><MdDeleteForever /></button>
                    <button onClick={() => handleEdit(user._id)} className='text-lg text-blue-600'><MdEditSquare /></button>
                    {modalDelete && <DeleteCamping closeModal={() => setModalDelete(false)} userId={selectedUserId} />}
                    {selectedUserId === user._id && modalUpdate && <UpdateCamping closeModal={() => setModalUpdate(false)} userId={user._id} />}
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex items-center absolute bottom-0 right-2">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2 text-gray-500">Items per page:</label>
          <select id="itemsPerPage" className='text-gray-600 bg-transparent cursor-pointer font-normal underline' onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="text-gray-500 ml-3 mr-2">
          {`${indexOfFirstItem + 1} - ${Math.min(indexOfLastItem, filteredUsers.length)} of ${filteredUsers.length}`}
        </div>
        <div className="flex text-2xl space-x-4">
          {filteredUsers.length > itemsPerPage && (
            <>
              <button
                onClick={goToPreviousPage}
                className={` ${lastClicked === 'first' ? 'text-black' : 'text-gray-400'}`}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={goToNextPage}
                className={` ${lastClicked === 'last' ? 'text-black' : 'text-gray-400'}`}
                disabled={indexOfLastItem === filteredUsers.length}
              >
                <IoIosArrowForward />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
