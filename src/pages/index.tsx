import Image from "next/image"

export default function Home() {
  return (
    <section className="pt-24 bg-white">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Introducing</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-teal-300 lg:inline">
              PolarWind
            </span>{" "}
          </h1>
          <div className="flex justify-around">
            <div className="mb-8 flex items-center space-x-5">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg"
                  alt="Shopify Polaris"
                />
                <span className="text-sm">Shopify Polaris</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind css"
                />
                <span className="text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Build your Shopify app&apos;s UI and landing page hassle-free,
            without the need to set up a Shopify app development environment.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              href="https://github.com/2hari/PolarWind"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-300 rounded-2xl sm:w-auto sm:mb-0"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://polaris.shopify.com/"
              target="_blank"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg font-semibold bg-slate-200 rounded-2xl sm:w-auto sm:mb-0"
            >
              Shopify Polaris
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center flex-none px-4 bg-slate-300 rounded-b-none h-6 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                  <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                  <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <img src="/shopify-mock.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
