import React, { useState } from "react";

const AddBlogs = ({ setOpen }) => {
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Submit Your Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 mb-2">
                Upload File:
              </label>
              <input
                onChange={handleChange}
                name="Image"
                type="file"
                id="file"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name:
              </label>
              <input
                onChange={handleChange}
                name="title"
                type="text"
                id="name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message:
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                id="message"
                className="border border-gray-300 rounded-md p-2 w-full h-24"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="extra" className="block text-gray-700 mb-2">
                Extra Info:
              </label>
              <input
                onChange={handleChange}
                name="author"
                type="text"
                id="extra"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                type="button"
                className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlogs;
