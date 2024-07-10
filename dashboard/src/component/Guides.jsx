import { useState, useEffect, useContext } from 'react';
import { MdPersonSearch, MdEditSquare, MdDeleteForever, MdAccessTime} from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";


import UpdateUser from '../Modals/UpdateUser';
import DeleteUser from '../Modals/DeleteUser';
import FileModal from '../Modals/FileModal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuides } from '../features/userSlices';
import { AuthContext } from '../Auth/AuthContext';




export default function Guides() {
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lastClicked, setLastClicked] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileModalOpen, setFileModalOpen] = useState(false); 

  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guides)
  const { token } = useContext(AuthContext);


  useEffect(() => {
    if (token) {
      dispatch(fetchGuides(token));
    }
  }, [dispatch, token, modalDelete, modalUpdate]);

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
    setItemsPerPage(parseInt(e.target.value));
  };

  const handleOpenImageModal = (fileUrl) => {
    setSelectedFile(fileUrl);
    setFileModalOpen(true);
  };

  const filteredUsers = guides.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log("ggggg", filteredUsers);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = guides ? Math.min(indexOfFirstItem + itemsPerPage, guides.length) : 0;
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
        <h1 className="text-2xl font-bold text-[#6499E9]">Guides</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <MdPersonSearch size={20} className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
            <input
              className='rounded-lg pl-8 w-[200px] lg:w-[300px]'
              type="text"
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No Guide Is found.</p>
      ) : (
        <div className="rounded-[16px]">
          <table className="w-full p-2 ">
            <thead className=''>
              <tr className='bg-[#FFFFFF] text-left'>
                <td>
                  <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                </td>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Full Name</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Bio</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Specialization</th>
                <th className="py-1 pl-2 font-bold text-[16px] text-[#2E5D9F]">Identity</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">certificate</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Profile</th>
                <th className="py-1 text-center font-bold text-[16px] text-[#2E5D9F]">Status</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Action</th>
              </tr>
            </thead>
            <tbody className=' '>
              {currentItems.map((user, index) => (
                <tr key={index} className='bg-white border-b border-t text-left'>
                  <td>
                    <button
                      className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 ${selectedUserId === user.user_id ? 'bg-black border-black' : ''}`}
                      onClick={() => setSelectedUserId(selectedUserId === user.user_id ? null : user.user_id)}
                    ></button>
                  </td>
                  <td className="py-1">{user.firstName} {user.lastName}</td>
                  <td className="py-1">{user.bio}</td>
                  <td className="py-1">{user.specialization}</td>
                  <td className="py-1">
                    <button
                      className="bg-gray-300  w-[80px] h-10 rounded-full"
                      onClick={() => handleOpenImageModal(user.identity)}
                    > CIN
                      <img src={`http://localhost:4000/${user.identity}`} alt="identity" className="hidden"/>
                    </button>
                  </td>
                  <td className="py-1 ">
                    <button
                      className=" bg-gray-300  w-[80px] h-10 rounded-full"
                      onClick={() => handleOpenImageModal(user.certificate)}
                    >Certificate
                      <img src={`http://localhost:4000/${user.certificate}`} alt="certificate" className=" hidden bg-gray-400" />
                    </button>
                  </td>
                  <td className="py-1 pl-1.5">
                    <button
                      
                      onClick={() => handleOpenImageModal(user.profile_picture)}
                    >
                      <img src={`http://localhost:4000/${user.profile_picture}`} alt="profile" className="w-10 h-10 object-cover rounded-full" />
                    </button>
                  </td>
                  <td className="py-1 relative">
                  <div className=" flex justify-center text-center text-2xl">
                      {user.status === 'approved' && <GrStatusGood className="text-green-400" />}
                      {user.status === 'pending' && <MdAccessTime className="text-gray-400" />}
                      {user.status === 'rejected' && <FaRegTimesCircle className="text-red-600" />}
                  </div>
                  </td>
                  <td className='relative pl-2'>
                    <button onClick={() => handleEdit(user._id)} className='text-lg text-blue-600 pr-2'><MdEditSquare /></button>
                    <button onClick={() => handleDeleteModalOpen(user._id)} className='text-xl text-red-600'><MdDeleteForever /></button>
                    {selectedUserId === user._id && modalUpdate && <UpdateUser closeModal={() => setModalUpdate(false)} userId={user._id} />}
                    {modalDelete && <DeleteUser closeModal={() => setModalDelete(false)} userId={selectedUserId} />}
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
          {guides && `${indexOfFirstItem + 1} - ${Math.min(indexOfLastItem, guides.length)} of ${guides.length}`}
        </div>
        <div className="flex text-2xl space-x-4">
          {guides && guides.length > itemsPerPage && (
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
                disabled={indexOfLastItem === guides.length}
              >
                <IoIosArrowForward />
              </button>
            </>
          )}
        </div>
      </div>
      {fileModalOpen && (
        <FileModal closeModal={() => setFileModalOpen(false)} selectedFile={selectedFile} />
      )}
    </div>
  );
}
