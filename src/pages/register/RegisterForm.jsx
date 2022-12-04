import React from 'react'
import axios from 'axios'
function RegisterForm (){
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "",
            phoneNumber1:'',
            phoneNumber2:'',
            aadhaarnumber:'',
            gender:true,
            bloodGroup: "",
            dob: "",
            age:'',
            maritalStatus:'',
            address:'',
            city:'',
            state:'',
            country:'',
            pincode:'',
            agree:true,
        }
    )
    
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
          'https://sheet.best/api/sheets/19391356-ac44-4812-b332-60cc644aa452',
          formData
        )
        .then((response) => {
          if(response.status==200){
            window.alert("Register Successfully");
            window.location = '/';
          }
          console.log(response);
        });
    };
    console.log(JSON.stringify(formData))
  
    return (
      
    <div>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
              <div className="md:col-span-3">
                <label htmlFor="address">First Name</label>
                <input
                type="text"
                placeholder="First Name"
                required
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="city">Last Name</label>
                <input
                type="text"
                required
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="full_name">Email Address </label>
                <input
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="address">Phone Number1</label>
                <input
                type="text"
                placeholder=" "
                required
                onChange={handleChange}
                name="phoneNumber1"
                value={formData.phoneNumber1}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="city">Phone Number2</label>
                <input
                type="text"
                required
                placeholder="Last Name"
                onChange={handleChange}
                name="phoneNumber2"
                value={formData.phoneNumber2}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              
              <div className="md:col-span-5">
                <label htmlFor="full_name">Aadhaar number </label>
                <input
                type="text"
                required
                placeholder="Aadhaar"
                onChange={handleChange}
                name="aadhaarnumber"              
                value={formData.aadhaarnumber}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
            <div className="md:col-span-3">
              <label htmlFor="gender">Gender </label>
              <div>
                <input 
                    type="radio"
                    id="gender"
                    name="gender"
                    value="male"
                    
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="gender-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> MALE </label>
                <input 
                    type="radio"
                    id="gender"
                    name="gender"
                    value="female"
                    onChange={handleChange}className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="gender-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> FEMALE </label>
                <input 
                    type="radio"
                    id="gender"
                    name="gender"
                    value="others"
                    onChange={handleChange}className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="gender-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> OTHERS </label>
              </div>
            </div>
            <div className="md:col-span-2">
                <label htmlFor="full_name">Blood Group </label>
                
                <select 
                name="bloodGroup" 
                id="bloodGroup"                
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                >
                  <option value='O'>O</option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB-'>AB-</option>
                  <option value='AB+'>AB+</option>
                  <option value='A1+'>A1+</option>
                  <option value='O-'>O-</option>
                </select>
              </div> 

            <div className="md:col-span-3">
                <label htmlFor="address">DOB</label>
                <input
                value={formData.dob}
                type='date'
                required
                name='dob'
                id='dob'
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="city">Age</label>
                <input
                value={formData.age}
                placeholder='age'
                type='number'
                required
                name='age'
                id='age'
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div className="md:col-span-5">
                <label htmlFor="maritalStatus">marital Status </label>
                
                <select 
                name="maritalStatus" 
                id="maritalStatus"                
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                >
                  <option value='Single'>Single</option>
                  <option value='Married'>Married</option>
                  <option value='widowed'>widowed</option>
                </select>
              </div> 
              <div className="md:col-span-5">
                <label htmlFor="full_name">Address </label>
                <textarea 
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                required
                name="address"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 

                />
              </div>

              

              

              <div className="md:col-span-1">
                <label htmlFor="city">City</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input 
                    name="city" 
                    id="city" 
                    placeholder="city" 
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                    value={formData.city}
                    onChange={handleChange}
                  
                  />
                </div>
                
              </div>
              <div className="md:col-span-1">
                <label htmlFor="state">State / province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input 
                    name="state" 
                    id="state" 
                    placeholder="State" 
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                    value={formData.state}
                    onChange={handleChange}
                  
                  />
                </div>
                
              </div>
              <div className="md:col-span-2">
                <label htmlFor="country">Country / region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                  type='' 
                    name="country" 
                    id="country" 
                    placeholder="Country" 
                    value={formData.country}
                    onChange={handleChange}
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  
                  />
                  <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2" strokelinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2" strokelinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="pincode">Pincode</label>
                <input 
                  type="text" 
                  name="pincode" 
                  id="pincode" 
                  className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  value={formData.pincode}
                  placeholder="zipcode"
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                  <label htmlFor="billing_same" className="ml-2">I hereby declare that i am willing to donate my organs for social benefit as a life saving measure for a
patients suffering from permanaent organ(s) failure,in the event of an unanticipated Brain Stem Death
Occurring to me.</label>
                </div>
              </div>

            
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    </div>

    )
}
export default RegisterForm