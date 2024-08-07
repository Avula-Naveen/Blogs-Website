import React, { useState } from 'react'

const Contact = () => {


  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Data:", { firstName, lastName, email, country });

      // Reset the form
      setFirstName('');
      setLastName('');
      setEmail('');
      setCountry('');
  };
  return (
    <div>
       <div className='py-20 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>Contact Us</h2>
      </div>

      <div className='grid grid-flow-col gap-4  mt-5'>
        <div className='h-900'>
          <img src='src\assets\contact.png' alt="" />
        </div>
         {/* form creation */}

         <form onSubmit={handleSubmit} className='px-20'>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Select a country</option>
                                <option value="United States">United States</option>
                                <option value="India">India</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>

         




      </div>

    </div>
  )
}

export default Contact