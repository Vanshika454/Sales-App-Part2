import React, { useState, useEffect } from "react";
import axios from "axios";
const backendHost = "http://localhost:3001/api/sales/today-revenue";

function Revenue() {
  const [revenue, setRevenue] = useState(175000);
  useEffect(() => {
    getRevenue();
  }, []);
  const getRevenue = async () => {
    const { data } = await axios.get(backendHost);
    // console.log(data)
    setRevenue(data.todayRevenue);
  };
  return (
    <div style={{ textAlign: "center", fontSize: "2em", marginTop: "1rem" }}>
      TODAY'S REVENUE IS {revenue}
    </div>
  );
}

export default Revenue;
