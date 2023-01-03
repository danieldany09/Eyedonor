import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import News from "../../components/news/News";
import {Banks} from "../../dummyData";
import Eyebanks from "./Eyebanks";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Eyebanksmap = () => {
  return (
    <>

    <Container>
        <div className="card-group">
      {Banks.map((item) => (
        <Eyebanks item={item} key={item.id} />
      ))}
      </div>
    </Container>
    <News/>
    <Footer/>
    </>
  );
};

export default Eyebanksmap;