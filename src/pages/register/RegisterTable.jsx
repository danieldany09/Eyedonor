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
export default class RegisterTable extends Component {
  constructor(props){
    super(props)
    
  }
  state = {
    posts: []
  }
  
  componentDidMount() {
    if(this.props.userdata){
      axios.get(`https://script.google.com/macros/s/AKfycbzOsTI2xkIXoMDTnGvKCh9IIM506PFhBwxxBXj7kfb-4kZnFzRkH19LI2zrOBEobv12/exec?action=read&${this.props.userdata.role!='admin' ? "city="+this.props.userdata.plase: null }`)
      .then(response => {
        const posts = response.data;
        this.setState ({posts:posts.data});
      })
      
    }
    axios.get(`https://script.google.com/macros/s/AKfycbzOsTI2xkIXoMDTnGvKCh9IIM506PFhBwxxBXj7kfb-4kZnFzRkH19LI2zrOBEobv12/exec?action=read`)
    .then(response => {
      const posts = response.data;
      this.setState ({posts:posts.data});
    })
    

  }
  render() {
    return (
        <Container>
            <Table datas={JSON.parse(JSON.stringify(this.state.posts))} />
        </Container>
      );
}
}