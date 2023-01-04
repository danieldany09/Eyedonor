import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Container = styled.div`
width: 100;
height: 100vh;
background-image:url("https://images.unsplash.com/photo-1485288734756-0b31a0a31d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1cnJlZCUyMHZpc2lvbnxlbnwwfHwwfHw%3D&w=1000&q=80");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`

export default function Adduser() {
  const [formData, setFormData] = React.useState(
    {
       'username':'',
       'email':'',
       'password':'',
       'conformpassword':'',
       'city':'',
       'role':''
    }
)
console.log('userdata'+JSON.stringify(formData))
function handleChange(event) {
    console.log(event)
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value

        }
    })
}
const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post(
      'http://localhost:5000/api/register',
      formData
    )
    .then((response) => {
      console.log(response);
    });
};

  return (
    <Container >
            <div >
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="username"
                                    
                                    onChange={handleChange}
                                    value={formData.username}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                City
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleChange}
                                    value={formData.city}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Role
                            </label>
                            <div className="flex flex-col items-start">
                            <select 
                              name="role" 
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              aria-label=".form-select-lg example"
                              onChange={handleChange}
                              value={formData.role}
                              >        
                                <option className="block text-sm font-medium text-gray-700 undefined" value='staff'>User role</option>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                            </select>
                                
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                to="/login"
                            >
                                Already registered?
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>


</Container>
  );
}
