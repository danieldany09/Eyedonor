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
      <th scope="col">{item.id}</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">firstName:</th>
      <td>{item.firstName}</td>
     
    </tr>
    <tr>
      <th scope="row">lastName</th>
      <td>{item.lastName}</td>
      
    </tr>
    <tr>
      <th scope="row">email</th>
      <td colspan="2">{item.email}</td>
      
    </tr>
    <tr>
      <th scope="row">phoneNumber1</th>
      <td colspan="2">{item.phoneNumber1}</td>
      
    </tr>

    <tr>
      <th scope="row">phoneNumber2</th>
      <td colspan="2">{item.phoneNumber2}</td>
      
    </tr>

    <tr>
      <th scope="row">aadhaarnumber</th>
      <td colspan="2">{item.aadhaarnumber}</td>
      
    </tr>

    <tr>
      <th scope="row">gender</th>
      <td colspan="2">{item.gender}</td>
      
    </tr>

    <tr>
      <th scope="row">bloodGroup</th>
      <td colspan="2">{item.bloodGroup}</td>
      
    </tr>

    <tr>
      <th scope="row">dob</th>
      <td colspan="2">{item.dob}</td>
      
    </tr>
    <tr>
      <th scope="row">age</th>
      <td colspan="2">{item.age}</td>
      
    </tr>

    <tr>
      <th scope="row">maritalStatus</th>
      <td colspan="2">{item.maritalStatus}</td>
      
    </tr>

    <tr>
      <th scope="row">address</th>
      <td colspan="2">{item.address}</td>
      
    </tr>

    <tr>
      <th scope="row">city</th>
      <td colspan="2">{item.city}</td>
      
    </tr>
    <tr>
      <th scope="row">state</th>
      <td colspan="2">{item.state}</td>
      
    </tr>

    <tr>
      <th scope="row">country</th>
      <td colspan="2">{item.country}</td>
      
    </tr>

    <tr>
      <th scope="row">pincode</th>
      <td colspan="2">{item.pincode}</td>
      
    </tr>

   

    



  </tbody>
</table>
</div>
       
     
      

    
  );
};

export default Table;