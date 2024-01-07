import React, { useState } from 'react'
import axios from 'axios'
import Details from './Details'

const Attendance = () => {
    const [id, setId] = useState(0)
    const [employeeDetails, setEmployeeDetails] = useState({})

    const API_URL = 'http://localhost:8000/attendance/markAttendance'

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.post(API_URL, {
            employeeID: id,
        })

        const data = response.data

        setEmployeeDetails(data)
    }

    return (
        <div className=" bg-gray-100 flex flex-col items-center space-y-10 pt-10">
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Employee Attendance</h5>
                    <div>
                        <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee ID:</label>
                        <input
                            type="text"
                            name="id"
                            id="id"
                            onChange={(e) => setId(e.target.value)}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="123456"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleOnSubmit}
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Mark Attendance
                    </button>
                </form>
            </div>

            <div className='w-full max-w-sm sm:p-6 md:p-8'>
                <div className=''>
                    {employeeDetails ? <Details {...employeeDetails} /> : <div className='text-white bg-black p-3 text-lg'> No Data Found </div>}
                </div>
            </div>
        </div>

    )
}

export default Attendance