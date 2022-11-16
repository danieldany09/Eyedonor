import styled from "styled-components";



const Container = styled.div`

 
`;







const Table = ({ item }) => {
  return (
    <div className="container">
   
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="row">FirstName</th>
      <th scope="row">LastName</th>
      <th scope="row">Email</th>
      <th scope="row">PhoneNumber</th>
      {/* <th scope="row">PhoneNumber2</th> */}
      <th scope="row">Aadhaarnumber</th>
      <th scope="row">Gender</th>
      <th scope="row">BloodGroup</th>
      <th scope="row" >Dob</th>
      <th scope="row">Age</th>
      <th scope="row">MaritalStatus</th>
      <th scope="row">Address</th>
      <th scope="row">City</th>
      <th scope="row">State</th>
      {/* <th scope="row">Country</th>    */}
      <th scope="row">pincode</th>    
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="col">{item.id}</th>
    <td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td>{item.email}</td>
    <td>{item.phoneNumber1}</td>
    {/* <td>{item.phoneNumber2}</td> */}
    <td>{item.aadhaarnumber}</td>
    <td >{item.gender}</td>
    <td >{item.bloodGroup}</td>
    <td >{item.dob}</td>
    <td >{item.age}</td>
    <td >{item.maritalStatus}</td>
    <td >{item.address}</td>
    <td >{item.city}</td>
    <td >{item.state}</td>
     {/* <td >{item.country}</td> */}
     <td >{item.pincode}</td>
    </tr>
  </tbody>
</table>
</div>
       
     
      

    
  );
};

export default Table;