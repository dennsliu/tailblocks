import React from 'react';

export default function LandingpageA({ theme = 'indigo' }) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Landing Page Hero
            <br className="hidden lg:inline-block" />Made with Tailwind</h1>
          <p className="mb-8 leading-relaxed">A simple, responsive landing page hero with call to action and feature list — easy to copy into your own project.</p>
          <div className="flex justify-center">
            <button className={`inline-flex text-white bg-${theme}-500 border-0 py-2 px-6 focus:outline-none rounded text-lg`}>Get Started</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg">Learn More</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>

      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${theme}-100 text-${theme}-500 flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-3-3.87"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Feature One</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Short description of this feature and why it helps your users.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${theme}-100 text-${theme}-500 flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 20v-2a4 4 0 00-3-3.87"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Feature Two</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Short description of this second feature.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${theme}-100 text-${theme}-500 flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M3 12h18"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Feature Three</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Short description of the third feature to round out the landing page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-gray-900 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 Tailblocks — All rights reserved</p>
        </div>
      </footer>
    </section>
  );
}
