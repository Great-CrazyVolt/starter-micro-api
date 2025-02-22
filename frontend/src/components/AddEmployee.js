import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SaveEmployeesURL = 'http://localhost:8000/employee/saveEmployee'
const GetEmployeesURL = 'http://localhost:8000/employee/getEmployees'

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    employeeID: '',
    skills: '',
    dayOff: '',
    hours: '',
    employeeStatus: '',
    cardNumber: '',
    department: '',
    isHere: '',
}
const AddEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState(INITIAL_VALUES)
    const [allEmployees, setAllEmployees] = useState([])

    useEffect(() => {
        axios.get(GetEmployeesURL)
            .then((response) => setAllEmployees(response.data))
            .catch(e => console.log(e))
    }, [])


    const handleOnChange = (e) => {
        setEmployeeDetails((prev) => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        })
    }

    const addEmployee = async () => {
        await axios.post(SaveEmployeesURL, employeeDetails)
        // console.log(response.data)
        setEmployeeDetails(INITIAL_VALUES)
        const updatedEmployeeDetails = [
            ...allEmployees,
            employeeDetails,
        ]
        setAllEmployees(updatedEmployeeDetails)
    }

    return (
        <div className='bg-gray-100'>
            <div class="flex ">
                <div class="m-auto">
                    <div>
                        <div class="mt-5 bg-white rounded-lg shadow">
                            <div class="flex">
                                <div class="flex-1 py-5 pl-5 overflow-hidden">
                                    <h1 class="inline text-2xl font-semibold leading-none">Register Employee</h1>
                                </div>
                            </div>
                            <div class="px-5 pb-5">
                                <div class="flex">
                                    <input name="employeeID" placeholder="Employee ID" value={employeeDetails.employeeID} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                </div>
                                <div class="flex">
                                    <div class="flex-grow w-1/2 pr-2">
                                        <input name="firstName" placeholder="First Name" value={employeeDetails.firstName} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                    <div class="flex-grow">
                                        <input name="lastName" placeholder="Last Name" value={employeeDetails.lastName} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                </div>
                                <div class="flex my-2">
                                    <input name="skills" placeholder="Skills" value={employeeDetails.skills} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                </div>
                                <div class="flex">
                                    <div class="flex-grow w-1/2 pr-2">
                                        <input type='number' name="dayOff" placeholder="Day Off" value={employeeDetails.dayOff} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                    <div class="flex-grow">
                                        <input type='number' name="hours" placeholder="Hours" value={employeeDetails.hours} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-grow w-1/2 pr-2">
                                        <input name="employeeStatus" placeholder="Employee Status" value={employeeDetails.employeeStatus} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                    <div class="flex-grow">
                                        <input name="cardNumber" placeholder="Card Number" value={employeeDetails.cardNumber} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-grow w-1/2 pr-2">
                                        <input name="department" placeholder="Department" value={employeeDetails.department} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                    <div class="flex-grow ">
                                        <input name="isHere" placeholder="Is Here?" value={employeeDetails.isHere} onChange={handleOnChange} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    </div>
                                </div>
                                {/* <div class="py-4">
                                    <div class="flex items-center">
                                        <input type="checkbox" id='isHere' name="isHere" value={employeeDetails.isHere} onChange={handleOnChange} class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent" />
                                        <label for="isHere" class="block ml-2 text-sm text-gray-900">Is Here?</label>
                                    </div>
                                </div> */}
                            </div>

                            <hr class="mt-4" />
                            <div class="flex flex-row-reverse p-3">
                                <div class="flex-initial pl-3">
                                    <button type="button" onClick={addEmployee} class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                                            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                        </svg>
                                        <span class="pl-2 mx-1">Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <form class="w-full max-w-2xl m-auto mt-10 bg-gray-700 p-10 rounded-xl">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input name='firstName' value={employeeDetails.firstName} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Last Name
                        </label>
                        <input name="lastName" value={employeeDetails.lastName} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Employee ID
                        </label>
                        <input name="employeeID" value={employeeDetails.employeeID} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Skills
                        </label>
                        <input name="skills" value={employeeDetails.skills} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Day Off
                        </label>
                        <input name="dayOff" value={employeeDetails.dayOff} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Hours
                        </label>
                        <input name="hours" value={employeeDetails.hours} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Employee Status
                        </label>
                        <input name="employeeStatus" value={employeeDetails.employeeStatus} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Card Number
                        </label>
                        <input name="cardNumber" value={employeeDetails.cardNumber} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Department
                        </label>
                        <input name="department" value={employeeDetails.department} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="text-white block tracking-wide text-ml font-bold mb-2" for="grid-first-name">
                            Is Here?
                        </label>
                        <input name="isHere" value={employeeDetails.isHere} onChange={handleOnChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 my-6">
                    <div class="w-full px-3">

                        <button className='px-5 py-2 w-full bg-blue-500 text-white border-0 rounded-lg' onClick={addEmployee} type="button">Add Employee</button>

                    </div>
                </div>
            </form> */}

            {/* <div className="flex flex-col items-center space-y-10 mt-10">
                <div className='grid grid-cols-4 gap-4'>
                    <input className='p-2 border-2' value={employeeDetails.employeeID} onChange={handleOnChange} name='employeeID' placeholder='Employee ID' />
                    <input className='p-2 border-2' value={employeeDetails.firstName} onChange={handleOnChange} name='firstName' placeholder='First Name' />
                    <input className='p-2 border-2' value={employeeDetails.lastName} onChange={handleOnChange} name='lastName' placeholder='Last Name' />
                    <input className='p-2 border-2' value={employeeDetails.skills} onChange={handleOnChange} name='skills' placeholder='Skills' />
                    <input className='p-2 border-2' value={employeeDetails.dayOff} onChange={handleOnChange} name='dayOff' placeholder='Day Off' />
                    <input className='p-2 border-2' value={employeeDetails.hours} onChange={handleOnChange} name='hours' placeholder='Hours' />
                    <input className='p-2 border-2' value={employeeDetails.employeeStatus} onChange={handleOnChange} name='employeeStatus' placeholder='Employee Status' />
                    <input className='p-2 border-2' value={employeeDetails.cardNumber} onChange={handleOnChange} name='cardNumber' placeholder='Card Number' />
                    <input className='p-2 border-2' value={employeeDetails.department} onChange={handleOnChange} name='department' placeholder='Department' />
                    <input className='p-2 border-2' value={employeeDetails.isHere} onChange={handleOnChange} name='isHere' placeholder='Is Here?' />

                </div>
                <button className='px-5 py-2 border-2 bg-blue-500 text-white border-0 rounded-lg' onClick={addEmployee} type="button">Add Employee</button>
            </div> */}


            <div class="flex ">
                <div class="m-auto">
                    <div class="bg-red-100 mx-32 my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                        {/* <div className='my-4 font-bold text-2xl'> Employees List </div> */}
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        employee ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        first Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        last Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        skills
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        dayOff
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        hours
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        employee Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        card Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        department
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        is Here
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allEmployees.map(employee => {
                                    const { employeeID, skills, dayOff, hours, employeeStatus, firstName, lastName, cardNumber, department, isHere, } = employee
                                    return (
                                        <tr key={employeeID} class="odd:bg-gray-700 odd:text-white even:bg-gray-300 even:text-black border-b">
                                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                                {employeeID}
                                            </th>
                                            <td class="px-6 py-4">
                                                {firstName}
                                            </td>
                                            <td class="px-6 py-4">
                                                {lastName}
                                            </td>
                                            <td class="px-6 py-4">
                                                {skills}
                                            </td>
                                            <td class="px-6 py-4">
                                                {dayOff}
                                            </td>
                                            <td class="px-6 py-4">
                                                {hours}
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                                {employeeStatus}
                                            </th>
                                            <td class="px-6 py-4">
                                                {cardNumber}
                                            </td>
                                            <td class="px-6 py-4">
                                                {department}
                                            </td>
                                            <td class="px-6 py-4">
                                                {isHere}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee