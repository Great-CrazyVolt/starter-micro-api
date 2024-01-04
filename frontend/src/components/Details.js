/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Details = ({ employeeID, skills, dayOff, hours, employeeStatus, firstName, lastName, cardNumber, department, isHere }) => {
    return (

        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Employee Details
            </h5>
            <ul class="my-4 space-y-3">
                <li>
                    <div class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">First Name:</span>
                        <span class="flex-1 whitespace-nowrap">{firstName}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Last Name:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{lastName}</span>
                    </div>
                </li>


                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Card Number:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{cardNumber}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Department:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{department}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Here?</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{isHere}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Skills:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{skills}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Day Off:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{dayOff}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Hours:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{hours}</span>
                    </div>
                </li>
                <li>
                    <div href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">Employee Status:</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">{employeeStatus}</span>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Details