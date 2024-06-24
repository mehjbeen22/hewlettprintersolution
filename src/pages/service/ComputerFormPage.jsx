import React from 'react';

const ComputerFormPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-2 text-2xl font-semibold text-[#1e3a8a] shadow-lg">
        <h3>Computer Setup or Support</h3>
      </div>

      <section className="flex justify-center items-center mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What kind of computer do you have?
            </label>
            <select
              name="company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {computerCompanies.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What is the model?
            </label>
            <select
              name="company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {computerModel.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              How can we help you with your email?
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
              Anything else not mentioned above?
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

export default ComputerFormPage;

const computerCompanies = [
  'select',
  'Apple',
  'Dell',
  'HP',
  'Lenovo',
  'Asus',
  'Acer',
  'Toshiba',
  'MSI',
  'Alienware',
  'Google',
  'Huawei',
];

const computerModel = ['select', 'Laptop', 'Desktop', 'Others'];

const helpArr = [
  'select',
  'Setup a new account',
  'Troubleshoot an existing account',
];
