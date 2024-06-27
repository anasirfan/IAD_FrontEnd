import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

const Apply = ({ user }) => {

  if(!JSON.parse(window.localStorage.getItem("user"))){
  
    window.location.href = '/login'
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("part-time");
  const [error, setError] = useState("");


  const handleApply = async (e) => {

    e.preventDefault();
    console.log(fullname, email, position, education, type, experience);

    if (
      !fullname ||
      !email ||
      !position ||
      !education ||
      !type ||
      !experience
    ) {
      setError("All fields are required");
      return;
    }

   

    try {
      
      const response = await axios.post(
        "http://localhost:8000/api/v1/application/submit",
        {
          userId : JSON.parse(window.localStorage.getItem("user"))._id,
          candidateName: fullname,
          candidateEmail: email,
          position: position,
          education: education,
          type: type,
          experience: experience,
        }
      );

    
      const { message } = response.data;

      console.log(message);
      alert('application submitted successfully!')
      // Display a success message, show a notification, etc.

      // Redirect to the apply page
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/login";
    }
  };

  return (
    <div >
      <Navbar />
      <div >

        <form className="container mx-auto px-5 max-w-5xl  shadow-lg rounded-lg p-6 bg-blue-200  ">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-800 ">Apply for Job</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-lg font-medium mb-2 ms-2">
                Candidate Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Candidate's Name"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 ms-2">
                Candidate Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Candidate's Email"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="mb-4">
              <label htmlFor="education" className="block text-lg font-medium mb-2 ms-2">
                Education
              </label>
              <select
                id="education"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option value="" disabled selected>Select Education</option>
                <option value="Matriculation">Matriculation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Masters">Masters</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="block text-lg font-medium mb-2 ms-2">
                Position
              </label>
              <select
                id="position"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="" disabled selected>Select Position</option>
                <option value="Front End">Front End</option>
                <option value="Backend">Backend</option>
                <option value="SQA">SQA</option>
                <option value="Software Engineer">Software Engineer</option>
              </select>
            </div>
          </div>




          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="mb-4">
              <label htmlFor="experience" className="block text-lg font-medium mb-2 ms-2">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                placeholder="Candidate's Experience"
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-lg font-medium mb-4 ms-2">
                Type
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="partTime"
                  name="type"
                  className="mr-2"
                  checked={type === 'part-time'}
                  onChange={() => setType('part-time')}
                />
                <label htmlFor="partTime" className="mr-4 text-lg">
                  Part-time
                </label>
                <input
                  type="radio"
                  id="fullTime"
                  name="type"
                  className="mr-2"
                  checked={type === 'full-time'}
                  onChange={() => setType('full-time')}
                />
                <label htmlFor="fullTime" className="text-lg">
                  Full-time
                </label>
              </div>
            </div>

          </div>



          <div className="flex justify-center mb-4">
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div class="flex justify-center mt-4">
            <button
              class=" w-48 text-lg bg-blue-500 text-red px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl hover:text-white focus:outline-none  focus:ring-2 focus:ring-blue-300 transition duration-300"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Apply;


{/* <form className="container mx-auto px-4 mt-8 max-w-md ">
        <div className="mb-4 bg-yellow-400">
          <label htmlFor="fullName" className="block text-lg font-medium mb-2 ms-2">
            Candidate Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Candidate's Name"
            className="w-full px-4 py-2 border rounded border-black"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Candidate Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Candidate's Email"
            className="w-full px-4 py-2 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-lg font-medium mb-2 a">
            Position
          </label>
          <select
            id="position"
            className="w-full px-4 py-2 border rounded"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >

            <option value="">Select Position</option>
            <option value="Front End">Front End</option>
            <option value="Backend">Backend</option>
            <option value="SQA">SQA</option>
            <option value="Software Engineer">Software Engineer</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="education" className="block text-lg font-medium mb-2">
            Education
          </label>
          <select
            id="education"
            className="w-full px-4 py-2 border rounded border-blue-800"
            required
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="">Select Education</option>
            <option value="Matriculation">Matriculation</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="experience" className="block text-lg font-medium mb-2">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            className="w-full px-4 py-2 border rounded"
            required
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-lg font-medium mb-2">
            Type
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="partTime"
              name="type"
              className="mr-2"
              checked={type === "part-time"}
              onChange={() => setType("part-time")}
            />
            <label htmlFor="partTime" className="mr-4">
              Part-time
            </label>
            <input
              type="radio"
              id="fullTime"
              name="type"
              className="mr-2"
              checked={type === "full-time"}
              onChange={() => setType("full-time")}
            />
            <label htmlFor="fullTime">Full-time</label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="cvFile" className="block text-lg font-medium mb-2">
            Upload CV
          </label>
          <input
            type="file"
            id="cvFile"
            className="w-full px-4 py-2 border rounded"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files[0])}
          />
        </div>
        <div className="flex justify-center mb-4">
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </form> */}