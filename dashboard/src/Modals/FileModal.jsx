// import React from 'react';
import PropTypes from 'prop-types';

const FileModal = ({ closeModal, selectedFile }) => {
  return (
    <div className="bg-opacity-50 backdrop-filter backdrop-blur-sm fixed z-10 -left-5 top-0 w-screen h-screen flex items-center justify-center" onClick={closeModal}>
      <div className="bg-white p-8 rounded-md shadow-md ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">File Preview</h2>
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
            Close
          </button>
        </div>
        {selectedFile && (
          <div>
            <img src={`http://localhost:4000/${selectedFile}`} alt="File Preview" className="w-auto h-[400px]" />
          </div>
        )}
      </div>
    </div>
  );
};

FileModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    selectedFile: PropTypes.string.isRequired,
  };

export default FileModal;
