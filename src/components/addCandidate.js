import React, { useState } from 'react';
import axios from 'axios';
// import Alert from '@mui/material/Alert';


const AddCandidate = ({ isOpen, onClose }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role_id, setRoleId] = useState('');
  

  if (!isOpen) return null; 

  const handleAddCandidate = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API to add a new user
      const response = await axios.post('http://localhost:8000/api/v1/users/register', {
        userName: username,
        password: password,
        email: email,
        roleId: role_id,
        fullName: username,
      });

      // Assuming the API returns a success message or any relevant response
      const message  = response.data;
      
      // Display a success message, show a notification, etc.
      console.log('User added successfully:', message);
      alert("Successfully Added ", username, "!")
//       <Alert severity="success">
//  Successfully Added {username}!
// </Alert>
onClose();

    } catch (error) {
      console.log('Error adding user:', error);
      // Display an error message or perform any error handling
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-8">
    //   <h2 className="text-3xl font-bold mb-4">Add Candidate</h2>
      
    // </div>
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="bg-gray-100 bg-opacity-60 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
             Add Candidate
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className='space-y-4' onSubmit={handleAddCandidate}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role_id" className="block text-lg font-medium mb-2">
            Role ID
          </label>
          <input
            type="text"
            id="role_id"
            className="w-full px-4 py-2 border rounded"
            required
            value={role_id}
            onChange={(e) => setRoleId(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Candidate
          </button>
        </div>
      </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
