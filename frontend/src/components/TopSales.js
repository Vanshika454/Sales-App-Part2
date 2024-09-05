import React, { useEffect ,useState} from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const backendHost = "http://localhost:3001/api/sales/top";
function TopSales() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    getSales();
  }, []);
  const getSales = async () => {
    const { data } = await axios.get(backendHost);
    setSales(data);
    console.log(data);
  };
  return (
    <div>
      {" "}
      <h1 style={{ margin: "1rem", textAlign: "center" }}>TOP 5 SALES</h1>
      <Table
        hover
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Sales Id:</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale,index) =><tr>
            <td>{index+1}</td>
            <td>S{sale._id.slice(-3)}</td>
            <td>{sale.productName}</td>
            <td>{sale.quantity}</td>
            <td>{sale.amount}</td>
          </tr>)}
          
        </tbody>
      </Table>
    </div>
  );
}

export default TopSales;
