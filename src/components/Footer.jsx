import React from 'react';

const DarkFooter = () => {
  return (
    <footer className="bg-neutral-950 text-gray-300 py-16 px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        {/* Column 1: A Glance of Artist's Pick (Main CTA/Intro) */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
              A Glance of <span className="italic">Artist's Pick</span>
            </h2>
            <p className="text-base text-gray-400 max-w-sm">
              Never miss an Artist's choice! Join our community.
            </p>
          </div>
          {/* Email Subscription - Positioned at the bottom for this column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold text-white mb-3">Subscribe Now</h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email:"
                className="flex-grow p-3 bg-neutral-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-neutral-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 font-serif">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Landing</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Homepage</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Connect */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 font-serif">Contact & Connect</h3>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">@</span> magic@email.com
            </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              {/* Facebook/Instagram/Social Icon 1 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.818.096-1.092.914-1.092h3.086v-3h-4c-4.2 0-4.8 3.3-4.8 4.758v2.242z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              {/* Twitter/Social Icon 2 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.89-.941-2.16-1.52-3.568-1.52-2.712 0-4.92 2.208-4.92 4.92 0 .385.045.75.127 1.096-4.093-.205-7.722-2.16-10.152-5.129-.424.722-.66 1.564-.66 2.47 0 1.706.86 3.213 2.172 4.093-.798-.025-1.547-.245-2.207-.607v.062c0 2.387 1.704 4.378 3.967 4.83-.414.111-.849.17-1.296.17-.317 0-.626-.031-.926-.088.631 1.966 2.46 3.393 4.613 3.431-1.693 1.33-3.837 2.124-6.17 2.124-.401 0-.795-.024-1.185-.069 2.197 1.407 4.792 2.227 7.587 2.227 9.102 0 14.075-7.125 14.075-13.344 0-.204-.004-.407-.013-.61 1.066-.77 1.996-1.735 2.73-2.825z"/>
              </svg>
            </a>
          </div>
        </div>

      
      </div>

      {/* Footer bottom line / Copyright (optional) */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Aetherium Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default DarkFooter;