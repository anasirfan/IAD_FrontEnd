import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import axios from "axios";
import { RiDeleteBinFill } from 'react-icons/ri';
import { VscDiffAdded } from 'react-icons/vsc';
import AddCandidate from '../components/addCandidate';
import { FaPenToSquare } from "react-icons/fa6";
import AddSchedule from '../components/AddSchedule';
const Dashboard = () => {

 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = async() => {
    window.localStorage.removeItem('user')
    try {
       await axios.post("http://localhost:8000/api/v1/users/logout");  
    } catch (error) {
      console.log("Error :", error);
    }
  }

  const toggleSchedule = (candidateId,candidateName,position) => {
    window.localStorage.setItem("candidateId",candidateId)
    window.localStorage.setItem("candidateName",candidateName)
    window.localStorage.setItem("position",position)
    setIsScheduleOpen(!isScheduleOpen)
  }
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [interviews, setInterviews] = useState([]);
  const [interviewSchedule, setInterviewSchedule] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  
  const [activeTab, setActiveTab] = useState('allCandidates');


  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
    
  }, []);

  // console.log("dashboard",user);
  // if(!user || user.roleId !== '1' || user.roleId !== '2'){
  //   window.location.href = '/'
  // }
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  useEffect(() => {
    // Fetch the interviews data from the API
    const fetchInterviews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/application");

        const data  = response.data.data;
        console.log("applications : ",data)
        setInterviews(data);
      } catch (error) {
        console.log("Error fetching interviews data:", error);
      }
    };

    fetchInterviews();
  }, []);

  useEffect(() => {
    // Fetch the interviews data from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users");
        const data  = response.data.data;
        console.log("users",data)
        setUsers(data);
      } catch (error) {
        console.log("Error fetching Users data:", error);
      }
    };

    fetchUsers();
  }, []);
  
  useEffect(() => {
    // Fetch the interviews data from the API
    const fetchSchedule = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/interview");
        const data  = response.data.data;

        console.log("interviews : ", data)
        setInterviewSchedule(data);
        
      
      } catch (error) {
        console.log("Error fetching InterviewSchedule data:", error);
       
      }
    };

    fetchSchedule();
  }, []);
  console.log(interviewSchedule)

  
 

  const handleDelete = async (candidateId) => {
    try {
      // Send a DELETE request to the API endpoint with the candidateId
      await axios.delete(`http://localhost:8000/api/v1/application/${candidateId}`);
      // Update the interviews state by filtering out the deleted candidate
      setInterviews(interviews.filter(interview => interview._id !== candidateId));
      // Display a success message or perform any additional actions
      console.log(`Candidate with ID ${candidateId} deleted successfully`);
    } catch (error) {
      console.log("Error deleting candidate:", error);
      // Display an error message or perform any error handling
    }
  };

  const handleUserDelete = async (userId) => {
    
    try {
      console.log(userId)
      // Send a DELETE request to the API endpoint with the candidateId
      await axios.delete(`http://localhost:8000/api/v1/users/${userId}`);
      // Update the interviews state by filtering out the deleted candidate
      setUsers(users.filter(user => user._id !== userId));
      // Display a success message or perform any additional actions
      console.log(`Candidate with ID ${userId} deleted successfully`);
    } catch (error) {
      console.log("Error deleting candidate:", error);
      // Display an error message or perform any error handling
    }
  };
  
  useEffect(() => {
    // Fetch the role names from the API
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/roles");
        const  data  = response.data;
        setRoles(data);
       
      } catch (error) {
        console.log("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);
  const getRoleName = (r_id) => {
    const role = roles.find((role) => role.roleId === r_id);
    
    return role ? role.role_name : "";
  };
  const getCandidateName = (u_id) => {
    const candidate = users.find((user) => user.user_id === u_id);
    
    return candidate ? candidate.username : "";
  };
  const renderContent = () => {
    
    
    switch (activeTab) {
      case 'allCandidates':
        return (
          <div>
            <div className='flex flex-row justify-center space-x-4 mb-6'>
              <div>
            <h3 className="text-3xl font-semibold mb-2">All Candidates</h3>
            </div>
            

            </div>
            
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                <th className="py-2 px-4 border-b"> S.No</th>
                  <th className="py-2 px-4 border-b"> Name</th>
                  <th className="py-2 px-4 border-b"> Email</th>
                  <th className="py-2 px-4 border-b"> Position</th>
                  <th className="py-2 px-4 border-b"> Education</th>
                  <th className="py-2 px-4 border-b"> Experience</th>
                  <th className="py-2 px-4 border-b"> Type</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
          {interviews.map((interview, index) => (
            <tr key={index}>
              <td className="py-2 px-4 text-center border-b">{index + 1}</td>
              <td className="py-2 px-4 text-center border-b">{interview.candidateEmail}</td>
              <td className="py-2 px-4 text-center border-b">{interview.candidateName}</td>
              <td className="py-2 px-4 text-center border-b">{interview.position}</td>
              <td className="py-2 px-4 text-center border-b">{interview.education}</td>
              <td className="py-2 px-4 text-center border-b">{interview.experience}</td>
              <td className="py-2 px-4 text-center border-b">{interview.type}</td>
              <td className="py-2  text-center border-b">
          <button onClick={() =>toggleSchedule(interview._id,interview.candidateName,interview.position)}>
            <FaPenToSquare  className='h-6 w-6 mx-2'/>
            </button>

          <button onClick={() => handleDelete(interview._id)}>
            <RiDeleteBinFill className='h-6 w-6 mx-2'/>
          </button>
          
        </td>
            </tr>
          ))}
        </tbody>
            </table>
          </div>
        );
      
        case 'allUsers':
          return (
            <div>
              <div className='flex flex-row justify-center space-x-4 mb-6'>
                <div>
              <h3 className="text-3xl font-semibold mb-2">All Users</h3>
              </div>
              
                <VscDiffAdded  onClick={toggleModal} className='h-8 w-8 mt-2'/>
              
  
              </div>
              
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                  <th className="py-2 px-4 border-b"> S.No</th>
                    <th className="py-2 px-4 border-b"> Name</th>
                    <th className="py-2 px-4 border-b"> Email</th>
                    <th className="py-2 px-4 border-b"> Role</th>
                    <th className="py-2 px-4 border-b">Action</th>
                    
                  </tr>
                </thead>
                <tbody className='text-center'>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.userName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.roleId === "1" ? "Admin" : user.roleId === "2" ? "Interviewer" : "Candidate"}</td>
                {/* <td className="py-2 px-4 border-b">{getRoleName(user.roleId)}</td> */}
                
                
                <td className="py-2 px-4 border-b">
            <button onClick={() => handleUserDelete(user._id)}>
              <RiDeleteBinFill className='text-center h-6 w-6'/>
            </button>
          </td>
              </tr>
            ))}
          </tbody>
              </table>
            </div>
          );
      case 'scheduling':
        return (
          <div>
          <div className='flex flex-row justify-center space-x-4 mb-6'>
            <div>
          <h3 className="text-3xl font-semibold mb-2">Interview Schedule</h3>
          </div>
          

          </div>
          
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
              <th className="py-2 px-4 border-b"> S.No</th>
                <th className="py-2 px-4 border-b"> Candidate Name</th>
                <th className="py-2 px-4 border-b"> Position</th>
                <th className="py-2 px-4 border-b"> Date</th>
                <th className="py-2 px-4 border-b"> Time</th>
               
                
              </tr>
            </thead>
            <tbody className='text-center'>
        {interviewSchedule.map((interview, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{interview.candidateName}</td>
            <td className="py-2 px-4 border-b">{interview.position}</td>
            <td className="py-2 px-4 border-b">{interview.interviewDate}</td>
            <td className="py-2 px-4 border-b">{interview.interviewTime}</td>
           
           
           
          </tr>
        ))}
      </tbody>
          </table>
        </div>
        );

      case 'sqa':
        const softwareEngineeringCandidates = interviewSchedule.filter(
          (interview) => interview.position === 'SQA'
        );
        
        return (
          <div>
          <div className='flex flex-row justify-center space-x-4 mb-6'>
            <div>
          <h3 className="text-3xl font-semibold mb-2">SQA Candidate</h3>
          </div>
          

          </div>
          
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
              <th className="py-2 px-4 border-b"> S.No</th>
                <th className="py-2 px-4 border-b"> Candidate Name</th>
                <th className="py-2 px-4 border-b"> Position</th>
                <th className="py-2 px-4 border-b"> Date</th>
                <th className="py-2 px-4 border-b"> Time</th>
               
                
              </tr>
            </thead>
            <tbody className='text-center'>
        {softwareEngineeringCandidates && softwareEngineeringCandidates.map((interview, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{interview.candidateName}</td>
            <td className="py-2 px-4 border-b">{interview.position}</td>
            <td className="py-2 px-4 border-b">{interview.interviewDate}</td>
            <td className="py-2 px-4 border-b">{interview.interviewTime}</td>
     
          </tr>
        ))}
      </tbody>
          </table>
        </div>
        );

      

      case 'backendEngineering':
        const BackendCandidates = interviewSchedule.filter(
          (interview) => interview.position === 'BackEnd'
        );
        
        return (
          <div>
          <div className='flex flex-row justify-center space-x-4 mb-6'>
            <div>
          <h3 className="text-3xl font-semibold mb-2">BackEnd Candidate</h3>
          </div>
          

          </div>
          
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
              <th className="py-2 px-4 border-b"> S.No</th>
                <th className="py-2 px-4 border-b"> Candidate Name</th>
                <th className="py-2 px-4 border-b"> Position</th>
                <th className="py-2 px-4 border-b"> Date</th>
                <th className="py-2 px-4 border-b"> Time</th>
               
                
              </tr>
            </thead>
            <tbody className='text-center'>
        {BackendCandidates && BackendCandidates.map((interview, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{interview.candidateName}</td>
            <td className="py-2 px-4 border-b">{interview.position}</td>
            <td className="py-2 px-4 border-b">{interview.interviewDate}</td>
            <td className="py-2 px-4 border-b">{interview.interviewTime}</td>
     
          </tr>
        ))}
      </tbody>
          </table>
        </div>
        );
      case 'frontendEngineering':
        const FrontendCandidates = interviewSchedule.filter(
          (interview) => interview.position === 'FrontEnd'
        );
        
        return (
          <div>
          <div className='flex flex-row justify-center space-x-4 mb-6'>
            <div>
          <h3 className="text-3xl font-semibold mb-2">FrontEnd Candidate</h3>
          </div>
          

          </div>
          
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
              <th className="py-2 px-4 border-b"> S.No</th>
                <th className="py-2 px-4 border-b"> Candidate Name</th>
                <th className="py-2 px-4 border-b"> Position</th>
                <th className="py-2 px-4 border-b"> Date</th>
                <th className="py-2 px-4 border-b"> Time</th>
               
                
              </tr>
            </thead>
            <tbody className='text-center'>
        {FrontendCandidates && FrontendCandidates.map((interview, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{interview.candidateName}</td>
            <td className="py-2 px-4 border-b">{interview.position}</td>
            <td className="py-2 px-4 border-b">{interview.interviewDate}</td>
            <td className="py-2 px-4 border-b">{interview.interviewTime}</td>
     
          </tr>
        ))}
      </tbody>
          </table>
        </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
     
    <div className="mx-auto bg-grey-400">
      <div className="min-h-screen flex flex-col">
        <header className="bg-nav">
          <div className="flex justify-between">
            <div className="p-1 mx-3 inline-flex items-center">
              <i className="fas fa-bars pr-2 text-white" onClick={toggleSidebar}></i>
              <h1 className="text-white p-2">Logo</h1>
            </div>
            <div className="p-1 mt-5 mr-5 flex flex-row items-center">
              <img
                onClick={toggleProfileDropdown}
                className="inline-block h-12 w-12 rounded-full"
                src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                alt=""
              />
              {profileDropdownVisible && (
                <div
                  id="ProfileDropDown"
                  className="rounded shadow-md bg-white absolute text-center mt-28 right-3"
                >
                  <ul className="list-reset">
                   
                    <Link to="/">
                      <li>
                        <button onClick={handleLogout} className="no-underline w-full px-4 py-2 block text-black hover:bg-gray-200">
                          Logout
                        </button>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <aside
            id="sidebar"
            className={`bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav ${
              sidebarVisible ? '' : 'hidden'
            } md:block lg:block`}
          >
            <h1 className='text-3xl text-center font-bold mb-4'>Dashboard</h1>
            <div className='text-center text-2xl font-bold mb-2'>{user && user.username}</div>
            <div className='text-center text-xl  mb-10'>{user && user.email}</div>

            <ul className="list-reset flex flex-col">
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'allCandidates' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('allCandidates')}
                >
                  All Candidates
                </button>
              </li>
           
              {user && user.roleId ==="1" &&(<li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'allUsers' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('allUsers')}
                >
                  All Users
                </button>
              </li> )}

              
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'scheduling' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('scheduling')}
                >
                  Scheduling
                </button>
              </li>
              
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'sqa' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('sqa')}
                >
                  SQA Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'backendEngineering' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('backendEngineering')}
                >
                  Backend Engineering Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'frontendEngineering' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('frontendEngineering')}
                >
                  Front End Engineering Candidates
                </button>
              </li>
            </ul>
          </aside>

          <div className="flex-1 p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
    {isModalOpen && (
        <AddCandidate isOpen={isModalOpen} onClose={toggleModal} />
      )}
      {isScheduleOpen && (
        <AddSchedule isOpen={isScheduleOpen} onClose={toggleSchedule} />
      )}
    </>
  );
};

export default Dashboard;
