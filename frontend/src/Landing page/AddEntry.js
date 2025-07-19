import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEntryForm = () => {
  const [project, setProject] = useState('');
  const [typeOfWork, setTypeOfWork] = useState('Bug fixes');
  const [taskDescription, setTaskDescription] = useState('');
  const [hours, setHours] = useState(12);
  const navigate = useNavigate();

  const handleIncrement = () => setHours(prev => prev + 1);
  const handleDecrement = () => setHours(prev => (prev > 0 ? prev - 1 : 0));

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ project, typeOfWork, taskDescription, hours });
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Add New Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Select Project */}
        <div className="w-[364px] max-[425px]:w-full">
          <label className="block text-sm font-medium mb-1">
            Select Project <span className="text-red-500">*</span>
          </label>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            required
          >
            <option value="">Project Name</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
          </select>
        </div>

        {/* Type of Work */}
        <div className="w-[364px] max-[425px]:w-full">
          <label className="block text-sm font-medium mb-1">
            Type of Work <span className="text-red-500">*</span>
          </label>
          <select
            value={typeOfWork}
            onChange={(e) => setTypeOfWork(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            required
          >
            <option value="Bug fixes">Bug fixes</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
          </select>
        </div>

        {/* Task Description */}
        <div className="w-[494px] max-[768px]:w-full">
          <label className="block text-sm font-medium mb-1">
            Task Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            rows="4"
            placeholder="Write text here ..."
            required
          />
          <p className="text-xs text-gray-500 mt-1">A note for extra info</p>
        </div>

        {/* Hours */}
        <div className="w-full sm:w-1/2">
          <label className="block text-sm font-medium mb-1">
            Hours <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleDecrement}
              className="px-3 py-1 bg-gray-200 rounded border"
            >
              −
            </button>
            <span className="w-10 text-center">{hours}</span>
            <button
              type="button"
              onClick={handleIncrement}
              className="px-3 py-1 bg-gray-200 rounded border"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-1/2"
          >
            Add Entry
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="border px-6 py-2 rounded w-full sm:w-1/2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntryForm;


