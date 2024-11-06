import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { FaF } from 'react-icons/fa6';


//me
const studentsData = [
  { id: 1, name: "Wade Warren", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 2, name: "Jane Cooper", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 3, name: "Cameron Williamson", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 4, name: "Rohan Verma", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 5, name: "Robert Fox", phone: "9876543210", status: "Completed", activeLessons: 3 },
  { id: 6, name: "Leslie Alexander", phone: "9876543210", status: "Completed", activeLessons: 3 },
  { id: 7, name: "Cody Fisher", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 8, name: "Kristin Watson", phone: "9876543210", status: "Completed", activeLessons: 3 },
  { id: 9, name: "Robert Fox", phone: "9876543210", status: "Completed", activeLessons: 3 },
  { id: 10, name: "Leslie Alexander", phone: "9876543210", status: "Completed", activeLessons: 3 },
  { id: 11, name: "Cody Fisher", phone: "9876543210", status: "Ongoing", activeLessons: 3 },
  { id: 12, name: "Kristin Watson", phone: "9876543210", status: "Completed", activeLessons: 3 },
];

const StudentCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState("grid");


  const filteredStudents = studentsData.filter(student => {
    return (
      (student.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || student.status === statusFilter)
    );
  });

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between">
        <div className="font-bold text-desk-h-6 font-sans">Students</div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaTh className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="lg:flex items-center justify-between mt-5">
        <div className="flex bg-gray-100 items-center rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by name"
            className="ml-2 bg-transparent focus:outline-none text-neutral-600 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='lg:flex items-center justify-between mt-5'>
          <select
            className="border rounded-lg p-2 shadow-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            
          >
            
            <option value="">All Statuses</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={clearFilters}
            className="text-error-300 px-4 py-2 flex gap-1 items-center font-poppins text-desk-b-2"
          >
            <BiReset/>
            Clear Filters
          </button>
        </div>
      </div>
      
      {viewMode === "grid" ? (      
      <div className="mt-10 flex flex-wrap gap-2 min-h-fit max-h-fit gap-y-6">
        {filteredStudents.map(student => (
          <div key={student.id} className="w-[240px] p-4 rounded-lg shadow-md border border-solid border-slate-200 flex flex-col">
            <div className="text-left">
              <img
                src={`https://i.pravatar.cc/150?u=${student.id}`}
                alt={student.name}
                className="w-14 h-14 mx-auto rounded-full"
              />
              <div>
                <h2 className="mt-3 font-semibold text-center font-poppins text-desk-b-2">{student.name}</h2>
              </div>
              <div className='flex items-center justify-between mt-4 font-poppins text-desk-b-3 text-neutral-600'>
                <p className= "font-semibold">Phone: </p> 
                <p> {student.phone}</p>
              </div>
              <div className=" flex items-center justify-between mt-4 text-desk-b-3 text-neutral-600 font-poppins">
               <p className= "font-semibold">Lesson Status: </p> 
               <p> {student.status}</p>
              </div>
              <div className=" flex items-center justify-between mt-4 font-poppins text-desk-b-3 text-neutral-600">
               <p className= "font-semibold">Active Lessons: </p> 
               <p> {student.activeLessons}</p>
              </div>
              <button
                onClick={() => openModal(student)}
                className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 font-poppins">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      ) : (
        <div className="p-4 mt-8">
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-center py-5 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Phone Number
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Lesson Status
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Active Lessons
                  </th>
                  <th className="text-left py-5 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                    <img
                        src={`https://i.pravatar.cc/150?u=${student.id}`}
                        alt={student.name}
                        className="w-10 h-10 mr-8 rounded-full"
                      />
                      <span className="font-medium text-blue-600">
                        {student.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.phone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-md text-sm  ${
                          student.status === "Ongoing"
                            ? "bg-green-100 text-green-800"
                            : student.status === "Completed"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.activeLessons}</td>
                    <td className="py-3 px-4">
                    <button
                      onClick={() => openModal(student)}
                      className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 font-poppins">
                      View Details
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-24 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedStudent && (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedStudent.name}</h2>
            <p className="text-gray-700">Phone: {selectedStudent.phone}</p>
            <p className="text-gray-700">Lesson Status: {selectedStudent.status}</p>
            <p className="text-gray-700">Active Lessons: {selectedStudent.activeLessons}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StudentCards;