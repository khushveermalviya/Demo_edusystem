import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer className="bg-gray-100 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Developed by Khushveer Malviya. Contact: +91-8058209225
            </p>
            <a
              href="mailto:khushveer@example.com"
              className="flex items-center text-purple-600 hover:text-purple-800 text-sm"
            >
              <Mail className="h-4 w-4 mr-2" />
            khushveermalviya26@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
