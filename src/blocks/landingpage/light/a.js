import React from "react";
import PropTypes from "prop-types";

function LandingpageA(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav id="header" className={`fixed w-full z-30 top-0 transition-colors duration-200 ${scrollPos > 10 ? "bg-white shadow" : "bg-transparent"}`}>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-4">
          <div className="pl-4 flex items-center">
            <a className={`toggleColor text-2xl lg:text-4xl font-bold no-underline ${scrollPos > 10 ? "text-gray-800" : "text-white"}`} href="/">
              <span className="text-3xl">✈️</span> LANDING
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button className="flex items-center p-1 focus:outline-none">
              <svg className={`fill-current h-6 w-6 ${scrollPos > 10 ? "text-gray-800" : "text-white"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:flex`}>
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className={`inline-block py-2 px-4 font-bold no-underline ${scrollPos > 10 ? "text-gray-800" : "text-white"}`} href="/">Active</a>
              </li>
              <li className="mr-3">
                <a className={`inline-block py-2 px-4 no-underline ${scrollPos > 10 ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-200"}`} href="/">Link</a>
              </li>
              <li className="mr-3">
                <a className={`inline-block py-2 px-4 no-underline ${scrollPos > 10 ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-200"}`} href="/">Link</a>
              </li>
            </ul>
            <button className={`mx-0 hover:underline font-bold rounded-full py-2 px-6 shadow focus:outline-none transform transition hover:scale-105 ${scrollPos > 10 ? "bg-white text-gray-800" : "bg-white text-gray-800 opacity-75"}`}>
              Action
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`pt-24 pb-40 bg-gradient-to-r from-red-500 to-yellow-500 text-white relative overflow-hidden`}>
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center relative z-10">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full text-sm font-semibold">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
            <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105">
              Subscribe
            </button>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 mx-auto" alt="hero" src="https://dummyimage.com/400x400/d53369/ffffff?text=Hero" />
          </div>
        </div>

        {/* Wave SVG - Overlaid on hero */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <svg viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <path id="wave-light" fill="#ffffff" d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z" />
            </defs>
            <g>
              {/* Wave layer 1 - slowest */}
              <use xlinkHref="#wave-light" opacity="0.3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="linear"
                  values="0 0; 0 30; 0 0"
                  repeatCount="indefinite"
                />
              </use>
              {/* Wave layer 2 - medium */}
              <use xlinkHref="#wave-light" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="7s"
                  calcMode="linear"
                  values="0 5; 0 0; 0 5"
                  repeatCount="indefinite"
                />
              </use>
              {/* Wave layer 3 - fastest */}
              <use xlinkHref="#wave-light" opacity="0.7">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="5s"
                  calcMode="linear"
                  values="0 -5; 0 0; 0 -5"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white border-b py-12">
        <div className="container max-w-5xl mx-auto">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Title</h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-red-500 to-yellow-500 w-64 opacity-25"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 text-center">
              <img src="https://dummyimage.com/300x300/d53369/ffffff?text=Feature" alt="Feature" className="inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Features</h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-red-500 to-yellow-500 w-64 opacity-25"></div>
          </div>
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow hover:shadow-lg transition">
                <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6 pt-6">FEATURE</p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
                  <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button className="mx-auto hover:underline bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold rounded-full py-2 px-6 shadow focus:outline-none transform transition hover:scale-105">
                    Action
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center">Pricing</h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-red-500 to-yellow-500 w-64 opacity-25"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 gap-4">
            {["Free", "Basic", "Pro"].map((plan, idx) => (
              <div key={plan} className={`flex flex-col w-full sm:w-80 ${idx === 1 ? "sm:-my-4" : ""}`}>
                <div className={`flex-1 bg-white text-gray-600 rounded-t overflow-hidden shadow ${idx === 1 ? "shadow-lg" : ""}`}>
                  <div className={`p-8 text-3xl font-bold text-center ${idx === 1 ? "bg-gradient-to-r from-red-500 to-yellow-500 text-white" : "border-b-4"}`}>
                    {plan}
                  </div>
                  <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className={`flex-none mt-auto bg-white rounded-b overflow-hidden shadow p-6 ${idx === 1 ? "shadow-lg" : ""}`}>
                  <div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">
                    {plan === "Free" ? "£0" : "£x.99"}
                    <span className="text-base block">{plan === "Free" ? "for one user" : "/ per user"}</span>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button className="hover:underline bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold rounded-full py-2 px-6 shadow focus:outline-none transform transition hover:scale-105">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-500 text-white container mx-auto text-center py-12 mb-12 rounded">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight">Call to Action</h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>
        <button className="mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full py-3 px-8 shadow-lg focus:outline-none transform transition hover:scale-105">
          Action!
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a className="text-red-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                <span className="text-3xl">✈️</span> LANDING
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 font-bold">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">FAQ</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Help</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Support</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 font-bold">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 font-bold">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-800 hover:text-red-500">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm py-4 border-t">
            © 2025 Tailblocks — All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

LandingpageA.defaultProps = {
  theme: 'indigo'
};

LandingpageA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LandingpageA;
