import React from 'react'

export default function Nav() {
  return (
    <div>
 <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="text-purple-600 font-bold text-xl">
          School MS
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            Home
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-600">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
