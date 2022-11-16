import React,{Component} from 'react';
import styled from "styled-components";
// import { popularProducts} from "../../dummyData";
import Table from './Table'
import axios from 'axios';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
var data=axios.get('https://script.google.com/macros/s/AKfycbymBfQd_kXc1hkwnl3lQJoxLHIdyUcFATAT0yECLgLmRZhaJJ2VZxAfmDcEvwcrAeiR/exec')
var popularProducts=data.data
console.log(JSON.stringify(popularProducts))
  // const rows =[{"id":"1","firstName":"mani","lastName":"bharathi","email":"mani@gmail.com","phoneNumber1":"123456789","phoneNumber2":"12345678912","aadhaarnumber":"126172616268","gender":"male","bloodGroup":"","dob":"2022-11-08","age":"9","maritalStatus":"","address":"ajdgsyuasdguuas","city":"","state":"23","country":"121231","pincode":null}]
  // const rows1 = axios.get('https://script.google.com/macros/s/AKfycby3KeoW0kIDwA9Y5_SLGpbv1PafR9PBQKkj03f9mdn6JT9bPfLyTWWjkeG_x0l-bfFN/exec')

  // console.log(""+typeof rows +'   '+typeof rows1 +' \n',rows1)
// export default function RegisterTable() {
  //   axios.get('https://script.google.com/macros/s/AKfycbymBfQd_kXc1hkwnl3lQJoxLHIdyUcFATAT0yECLgLmRZhaJJ2VZxAfmDcEvwcrAeiR/exec')
  //     .then((data)=>{
    //         getApi(data.data)
    //         console.log("datass"+JSON.stringify(data.data))
    //     })
    //   const [popularProducts, getApi] = React.useState([]);
    //   console.log("popul"+popularProducts)
export default class RegisterTable extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get(`https://script.google.com/macros/s/AKfycbzpIXaaINuKDnfsWW6i71w8r_E_jpmjd51ttwxOxkVtUkA0GWdjUl5uWL7YoEtgF5ar/exec`)
    .then(response => {
      const posts = response.data;
      this.setState ({posts:posts.data});
    })
  }
  render() {
    
//     return (<div>{console.log('mydata'+typeof JSON.parse(JSON.stringify(this.state.posts)))}</div> )
//   }
//  }

return (
    <Container>
        <Table datas={JSON.parse(JSON.stringify(this.state.posts))} />
    </Container>
  );
}
}