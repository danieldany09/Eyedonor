import styled from "styled-components";
import { popularProducts} from "../../dummyData";
import Table from "../Table/Table"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const TableMap = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Table item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default TableMap;