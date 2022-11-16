import styled from "styled-components";
import { popularProducts} from "../../dummyData";
import Table from "../Table/Table"


// const Container = styled.div`
//     padding: 12px;
//     margin:10px;
   
// `;

const TableMap = () => {
  return (
    <div>
       {popularProducts.map((item) => (
        <Table item={item} key={item.id} />
      ))} 
    </div>
  );
};

export default TableMap;