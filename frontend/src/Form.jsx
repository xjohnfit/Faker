import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'
import { getCountry } from "./getCountry.js";

const Form = () => {

  const [name, setName] = useState("Name will be populated here");
  const [lastName, setLastName] = useState("Last name will be populated here");
  const [email, setEmail] = useState("Email will be populated here");
  const [gender, setGender] = useState("Gender will be populate here");
  const [address, setAddress] = useState("Address will be populate here");

  
  const emails = [
    {
      "id": 1,
      "domain": "icloud.com"
    },
    {
      "id": 2,
      "domain": "gmail.com"
    },
    {
      "id": 3,
      "domain": "yahoo.com"
    },
    {
      "id": 4,
      "domain": "hotmail.com"
    }
  ]

  const generate = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://fakerpro.p.rapidapi.com/schema',
      params: {amount: '1'},
      headers: {
        'x-rapidapi-key': '46e4600040msh2fc1496a0ac3011p147823jsn2ca935ec8b45',
        'x-rapidapi-host': 'fakerpro.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        full_name: 'name',
        person_age: 'age',
        person_gender: 'gender',
        person_address: 'address',
        postal_code: 'postal',
      }
    };
    
    await axios.request(options)
    .then((response) => { 
      console.log(response.data); 
      setName(response.data.full_name.split(' ')[0]);
      setLastName(response.data.full_name.split(' ')[1]);
      setEmail(response.data.full_name.replace(' ', '.')+'@' + emails[Math.floor(Math.random() * emails.length)].domain); 
      setGender(response.data.person_gender);
      setAddress(response.data.person_address);

    })
    .catch((error) => { console.error(error); })
  }

  getCountry()


  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              onClick={generate}
              className="rounded-md bg-indigo-600 px-3 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Click Here To Generate A New Human Being
            </button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Social Security Number
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={"SSN"}
                  type="text"
                  name="ssn"
                  id="ssn"
                  className="block w-full rounded-md border-1 border-dashed border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={name}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={lastName}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="sex"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sex
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={gender}
                  id="sex"
                  name="sex"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="col-span-3">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  readOnly
                  disabled
                  value={address}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  disabled
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  disabled
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  disabled
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
              <input
                  readOnly
                  disabled
                  // value={country}
                  id="country"
                  name="country"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form
