import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex  items-center justify-center">
        <div className='text-center'>
            <h1 className="text-4xl font-bold mb-3">404</h1>
            <p className="text-2xl text-gray-700 mb-3">!Oops page not found</p>
            <Link to={"/"} className="text-2xl text-blue-400 underline hover:text-blue-800">Return to home Page</Link>
        </div>
    </div>
  )
}

export default PageNotFound