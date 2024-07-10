import React from 'react';

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-red-600">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this tour?</p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="bg-gray-300 rounded w-[90px] h-[40px] text-black">Cancel</button>
          <button onClick={onConfirm} className="bg-red-600 rounded w-[90px] h-[40px] text-white">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
