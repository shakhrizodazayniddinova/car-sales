import React from 'react';

export default function AddCarModal({closeModal}) {
  return (
    <div className="fixed inset-0 z-40">
        {/* Orqa fon */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>

        {/* Modal */}
        <div className="absolute inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <h3 className="text-lg font-bold mb-4">Kategoriya qo'shish</h3>
                <label className="block mb-2 font-medium">Nomi</label>
                <input
                    type="text"
                    placeholder="Kategoriya nomi"
                    className="w-full p-2 border rounded mb-4"
                />
                <button
                    onClick={closeModal}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Saqlash
                </button>
            </div>
        </div>
    </div>
  )
}
