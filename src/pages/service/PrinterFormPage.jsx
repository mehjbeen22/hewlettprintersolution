import React from 'react';

const PrinterFormPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-2 text-2xl font-semibold text-[#1e3a8a] shadow-lg">
        <h3>Printer Setup or Support</h3>
      </div>

      <section className="flex flex-col justify-center items-center mt-10 ">
        <p class=" bg-gray-200 py-3 px-8 shadow-inner mb-3">
          <span className="text-red-500 font-semibold">NOTE :</span> This
          service does not include the repair of physically damaged equipment.
        </p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What's the issue with your printer?
            </label>
            <p>
              <input type="checkbox" className="mr-3 " />
              Poor print quality
            </p>
            <p>
              <input type="checkbox" className="mr-3 " />
              Cannot connect to one or more devices
              <p>
                <input type="checkbox" className="mr-3 " />
                Will not connect to the network
              </p>
              <p>
                <input type="checkbox" className="mr-3 " />
                Other
              </p>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What's the make/model of your printer?
            </label>
            <input type="text" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              How does the printer connect?
            </label>
            <select
              name="company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {helpArr.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Please describe what types of issues you're experiencing.
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-xs text-gray-600 mt-1">
              Any additional services mentioned here will NOT be performed if
              the services are not selected above.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Proceed
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PrinterFormPage;

const helpArr = ['select', 'WiFI', 'Hardwired', 'Not sure'];
