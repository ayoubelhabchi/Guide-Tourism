import { useEffect, useState , useContext} from 'react';
import { MdPersonSearch, MdDeleteForever } from "react-icons/md";
import DeleteUser from '../Modals/DeleteUser';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/userSlices';
import { AuthContext } from '../Auth/AuthContext';

export default function Users() {
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lastClicked, setLastClicked] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      dispatch(fetchUsers(token));
    }
  }, [dispatch, token, modalDelete]);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleDeleteModalOpen = (userId) => {
    setSelectedUserId(userId);
    setModalDelete(true);
  };

  const handleItemsPerPageChange = (e) => {
    setCurrentPage(1);
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = users ? Math.min(indexOfFirstItem + itemsPerPage, users.length) : 0;
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
        <h1 className="text-2xl font-bold text-[#6499E9]">Users</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <MdPersonSearch size={20} className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
            <input
              className='rounded-lg pl-8 w-[200px] lg:w-[300px]'
              type="text"
              placeholder='Search by First Name..'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No users found.</p>
      ) : (
        <div className=" rounded-[16px] overflow-hidden m-2">
          <table className="w-full table-auto">
            <thead>
              <tr className='bg-[#FFFFFF] text-left'>
                <td>
                  <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                </td>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Full Name</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Email</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Address</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Phone</th>
                <th className="py-1 pr-3 font-bold text-[16px] text-[#2E5D9F]">Age</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Country</th>
                <th className="py-1 font-bold text-[16px] text-[#2E5D9F]">Action</th>
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
                  <td className="py-1.5">{user.firstName} {user.lastName}</td>
                  <td className="py-1.5">{user.email}</td>
                  <td className="py-1.5">{user.address}</td>
                  <td className="py-1.5">{user.phone}</td>
                  <td className="py-1.5">{user.age}</td>
                  <td className="py-1.5">{user.country}</td>
                  <td className='relative pl-2'>
                    <button onClick={() => handleDeleteModalOpen(user._id)} className='text-xl text-red-600 flex pl-2'><MdDeleteForever /></button>
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
