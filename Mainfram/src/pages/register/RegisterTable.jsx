import * as React from 'react';
  // import { DataGrid } from '@mui/x-data-grid';
  import axios from 'axios';
  const columns = [
    { field: 'firstName', headerName: 'First name', width: 120 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber1', headerName: 'PhoneNumber1', width: 120 },
    { field: 'phoneNumber2', headerName: 'PhoneNumber2', width: 120 },
    { field: 'aadhaarnumber', headerName: 'Aadhaar Number', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'bloodGroup', headerName: 'bloodGroup', width: 130 },
    { field: 'age', headerName: 'Age', width: 70 },
    { field: 'city', headerName: 'City', width: 70 },
    { field: 'state', headerName: 'State', width: 70 },
    { field: 'pincode', headerName: 'picode', width: 70 },
  ];

  // const rows =[{"id":"1","firstName":"mani","lastName":"bharathi","email":"mani@gmail.com","phoneNumber1":"123456789","phoneNumber2":"12345678912","aadhaarnumber":"126172616268","gender":"male","bloodGroup":"","dob":"2022-11-08","age":"9","maritalStatus":"","address":"ajdgsyuasdguuas","city":"","state":"23","country":"121231","pincode":null}]
  // const rows1 = axios.get('https://script.google.com/macros/s/AKfycby3KeoW0kIDwA9Y5_SLGpbv1PafR9PBQKkj03f9mdn6JT9bPfLyTWWjkeG_x0l-bfFN/exec')

  // console.log(""+typeof rows +'   '+typeof rows1 +' \n',rows1)
export default function RegisterTable() {
  
  const [rows, getApi] = React.useState([]);
  React.useEffect(()=>{
    axios.get('https://script.google.com/macros/s/AKfycby3KeoW0kIDwA9Y5_SLGpbv1PafR9PBQKkj03f9mdn6JT9bPfLyTWWjkeG_x0l-bfFN/exec')
    .then((data)=>{
        getApi(data.data)
    })
  },[])
  console.log('datas'+JSON.stringify(rows))
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>
  );
}
