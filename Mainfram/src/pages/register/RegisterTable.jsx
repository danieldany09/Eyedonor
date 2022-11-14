import * as React from 'react';
import styled from "styled-components";
import { popularProducts} from "../../dummyData";
import Table from './Table'
import axios from 'axios';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
 
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
    <Container>
      {popularProducts.map((item) => (
        <Table item={item} key={item.id} />
      ))}
    </Container>
  );
}
